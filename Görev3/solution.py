import argparse
import pandas as pd

def calculate_features(data, min_date, max_date, productData):
    # Convert the 'quantity' column to int data type (it gives an error otherwise)
    data['quantity'] = data['quantity'].astype(int)
    
    # MA7_P
    data['MA7_P'] = data.groupby('product')['quantity'].transform(lambda x: x.rolling(window=7, min_periods=1).mean())

    # LAG7_P
    data['LAG7_P'] = data.groupby('product')['quantity'].transform(lambda x: x.shift(7))

    # Brand data
    data = data.merge(productData[['id', 'brand']], left_on='product', right_on='id', how='left')

    # MA7_B
    data['MA7_B'] = data.groupby(['brand', 'store'])['quantity'].transform(lambda x: x.rolling(window=7, min_periods=1).mean())

    # LAG7_B
    data['LAG7_B'] = data.groupby(['brand', 'store'])['quantity'].transform(lambda x: x.shift(7))

    # MA7_S
    data['MA7_S'] = data.groupby('store')['quantity'].transform(lambda x: x.rolling(window=7, min_periods=1).mean())

    # LAG7_S
    data['LAG7_S'] = data.groupby('store')['quantity'].transform(lambda x: x.shift(7))

    print("Shape of calculatedFeatures:", data.shape)
    return data


def merge_data_with_features(calculatedFeatures, productData, brandData, storeData):
    mergedData = calculatedFeatures.merge(productData[['id', 'brand']], left_on='product', right_on='id', how='left')
    mergedData = mergedData.merge(brandData, left_on='brand', right_on='id', how='left')
    mergedData = mergedData.merge(storeData, left_on='store', right_on='id', how='left')
    
    columnsFeatures = [
        'product', 'store', 'brand_y', 'date', 'quantity', 
        'MA7_P', 'LAG7_P', 'MA7_B', 'LAG7_B', 'MA7_S', 'LAG7_S'
    ]

    mergedData = mergedData[columnsFeatures].rename(columns={
        'product': 'product_id', 'store': 'store_id', 'brand_y': 'brand_id'
    })

    return mergedData



def main():
    parser = argparse.ArgumentParser(description="Calculate features for the given date range")
    parser.add_argument("--min-date", type=str, default="2021-01-08", help="Start of the date range (YYYY-MM-DD)")
    parser.add_argument("--max-date", type=str, default="2021-05-30", help="End of the date range (YYYY-MM-DD)")
    args = parser.parse_args()

    salesData = pd.read_csv("Internship-SmartSchool/Görev3/data/sales.csv")
    brandData = pd.read_csv("Internship-SmartSchool/Görev3/data/brand.csv")
    productData = pd.read_csv("Internship-SmartSchool/Görev3/data/product.csv")
    storeData = pd.read_csv("Internship-SmartSchool/Görev3/data/store.csv") 
    

    filteredSales = salesData[(salesData["date"] >= args.min_date) & (salesData["date"] <= args.max_date)]
    calculatedFeatures = calculate_features(filteredSales, args.min_date, args.max_date, productData)

    mergedData = merge_data_with_features(calculatedFeatures, productData, brandData, storeData)
    mergedData.to_csv("features.csv", index=False)

    print("Merged data written to features.csv")

if __name__ == "__main__":
    main()

