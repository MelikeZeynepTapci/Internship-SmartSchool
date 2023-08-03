def nonDupString():

    inputStr = input("Enter a string: ")
    n = len(inputStr)
    #maxStr will keep the unique string that has the maximum length. The value will change comparingly in the loops 
    maxStr = ""
    #currentStr indicates the current string in the loops
    currentStr = ""

    for i in range(n):
        # in operator can be used for understanding if the string contains a specific character in Python 
        # not in shows that the current character is not included in the current string
        if inputStr[i] not in currentStr:
            #if the character doesn't already exist in the string, add it to the current string
            currentStr += inputStr[i]
            #if the current string is longer than the maxStr, assign its value to the new (current) string
            if len(currentStr) > len(maxStr):
                maxStr = currentStr
        else:
            #if the string contains inputStr[i], then cut the part until the index (index(inputStr[i]) + 1) in current string and continue with the remained string 
            currentStr = currentStr[currentStr.index(inputStr[i]) + 1:] + inputStr[i]

    output = "Input: {}\nOutput: {} - Length: {}".format(inputStr, maxStr, len(maxStr))

    #if the user gives an empty string, print a warning
    if n == 0:
        output = "Please enter at least one character"

    return output

#Test: 
#For input AABBCCD, output should be AB and length should be 2 in this case: 
print(nonDupString())

