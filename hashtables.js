/* Duplicate Detection:
Write a function that takes an array of numbers as input and returns true if there are
any duplicate numbers, otherwise false.*/

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 1, 5];
const numbers3 = [3, 5, 7, 3, 8, 9];

const hasDuplicates = function(array){
    const hashTable = {}
    let count = 1
    for(let i=0; i<array.length; i++){
        const currentVal = hashTable[array[i]]
        if(currentVal>=0){
            count += 1
            hashTable[array[i]] = count
            return true
        }
        else{
            hashTable[array[i]] = count //storing values of arrays as key because keys cant be duplicate
        }

        count = 1

    }
    console.log("hashTable=>",hashTable)
    return false
}

const hasDuplicates1 = hasDuplicates(numbers1);
const hasDuplicates2 = hasDuplicates(numbers2);
const hasDuplicates3 = hasDuplicates(numbers3);

console.log(hasDuplicates1); // Output: false (No duplicates in the array)
console.log(hasDuplicates2); // Output: true (Duplicates: 1)
console.log(hasDuplicates3); // Output: true (Duplicates: 3)

/*Word Frequency Counter:
Write a function that takes a string as input and returns an object containing the 
frequency of each word in the string.*/

const inputString = "the quick brown fox jumps over the lazy dog the";

const getWordFrequency = function(string){
    const hashTable = {}
    const stringArray = string.split(" ")
    let count = 1 
    for(let i=0; i<stringArray.length; i++){
        let currentVal = hashTable[stringArray[i]]
        console.log(currentVal)
        if(currentVal>=1){
            currentVal = currentVal + 1
            hashTable[stringArray[i]] = currentVal
        } else{
            hashTable[stringArray[i]] = count
        }
        console.log(hashTable)
        count = 1
    }
    return hashTable
}

const wordFrequency = getWordFrequency(inputString);
console.log(wordFrequency);

/* Anagram Checker:
Write a function that takes two strings as input and returns true if they are anagrams of 
each other, otherwise false. */
const str1 = "listen";
const str2 = "silent";
const str3 = "hello";
const str4 = "world";

const areAnagrams = function(str1,str2){
    if(str1.length !== str2.length){
        return false
    } else{
        const str1Table = {}
        const str2Table = {}
        for(let c of str1){
            str1Table[c] = (str1Table[c] || 0) + 1
        }
        for(let c of str2){
            str2Table[c] = (str2Table[c] || 0) + 1
        }
        for(let key of str1){
            if(str1Table[key] === str2Table[key]){
                return true
            }
        }
        console.log(str1Table,str2Table)
    }
    
}

const areAnagrams1 = areAnagrams(str1, str2);
const areAnagrams2 = areAnagrams(str1, str3);
const areAnagrams3 = areAnagrams(str2, str4);

console.log(areAnagrams1); // Output: true (listen and silent are anagrams)
console.log(areAnagrams2); // Output: false (listen and hello are not anagrams)
console.log(areAnagrams3); // Output: false (silent and world are not anagrams)

/*
Group Anagrams:
Given an array of strings, group anagrams together and return them as a nested array.
*/
const groupAnagrams = function(arrayOfAnagrams){
    const map = {}

    for(let char of arrayOfAnagrams){
        let str = char.split("").sort().join("")

        if(!map[str]){
            map[str] = []
        }

        map[str].push(char)
    }
    return Object.values(map)
}
const nestedArray = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); 
console.log(nestedArray)

/*
Two Sum:
Given an array of numbers and a target sum, find the indices of two numbers that add up
to the target sum.
*/

const twoSum = function(array,target){
    const hashMap = {}

    for(let i=0; i<array.length; i++){
        const currentVal = hashMap[array[i]]
        if(currentVal>=0){
            return [currentVal,i]
        }else{
            let numToFind = target - array[i]
            hashMap[numToFind] = i
        }
    }
    return 0

}
console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]

/*
Longest Substring Without Repeating Characters:
Given a string, find the length of the longest substring without repeating characters.
*/
const lengthOfLongestSubstring = function(string){
    const hashMap = {}
    for(let c of string){
        if(hashMap[c]){
            // break;
        }else{
            hashMap[c] = c
        }
    }
    return Object.values(hashMap).length
}
console.log(lengthOfLongestSubstring("abcabcbb"));
// Output: 3 (the longest substring without repeating characters is "abc")

/*
First Non-Repeating Character:
Write a function that takes a string as input and returns the first non-repeating character.
*/
const firstNonRepeatingChar = function(string){
    const hashMap = {}
    for(let i =0; i<string.length; i++){
        if(hashMap[string[i]]){
            return Object.keys(hashMap)[0]
        }else{
            hashMap[string[i]] = i //{"l":0,e:1,}
        }
    }
}
console.log(firstNonRepeatingChar("lettcode"));
// Output: 0 (the first non-repeating character is "l")

/*
Phone Number Letter Combinations:
Given a string containing digits from 2-9, return all possible letter combinations
that the number could represent.
*/
const letterCombinations = function(string){
    
}
console.log(letterCombinations("23"));
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

