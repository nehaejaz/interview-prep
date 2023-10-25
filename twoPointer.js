/*
Two Sum:
Given an array of numbers and a target sum, find the indices of two numbers that add up
to the target sum.
*/
const twoSum = function(array,target){
    let p1=0, p2= array.length -1

    while(p1<p2){
        let sum = array[p1] + array[p2]
        if(sum === target){
            return [p1, p2]
        } else if(sum<target){
            p1++
        }else{
            p2--
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]

/*
Remove Duplicates from Sorted Array:
Given a sorted array, remove the duplicates in-place. Return the length of the modified
array and modify the original array.
*/

const removeDuplicates = function(array){
    let p1=0, p2= array.length - 1
    while(p1<p2){
        if(array[p1] === array[p2]){
            array.splice(p1,1)
        }else if(array[p1]<array[p2]){
            p1++
        }else{
            p2--
        }
    }
    return array

    // const uniques = array.filter((item,index) => array.indexOf(item) === index)
    // return uniques;
}

duplicates = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(duplicates)
// Output: 5

/*
Valid Palindrome:
Given a string, determine if it is a palindrome, considering only alphanumeric characters
and ignoring cases.
*/
const isPalindrome = function(string){
    string = string.toLowerCase().split(" ").join("")
    console.log(string)
    let p1=0, p2=string.length - 1, flag = false
    console.log(string.length/2)
    while(p1<= p2/2){
        console.log(string[p1], string[p2], p1)
        if(string[p1] === string[p2]){
            p1++
            p2--
            flag = true
        }else{
            flag = false
        }
    }
    return flag
}
console.log(isPalindrome("A man a plan a canal Panama"));
// Output: true

/*
Container With Most Water:
Given an array of non-negative integers representing vertical lines, where the index is
the x-coordinate and the value is the y-coordinate, find two lines which, together with
the x-axis, forms a container that holds the most water.
*/
const maxArea = function(array){
    let p1=0, p2= array.length-1, maxA = 0
    while(p1<p2){
        let height = Math.min(array[p1],array[p2])
        let width = p2 - p1
        let area = width*height
        maxA = Math.max(area,maxA)
        if(array[p1]<=array[p2]){
            p1++
        }else{
            p2--
        }
    }
    return maxA
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// Output: 49

/*Reverse String:
Write a function that reverses a string in-place using two pointers.
*/

const reverseString = function(string){
    let p1=0, p2=string.length-1, temp=""
    string = string.split("")
    while(p1<=p2/2){
       temp = string[p1]
       console.log(string[p1],string[p2])
       string[p1] = string[p2]
       console.log(string[p1],string[p2])

       string[p2] = temp
       console.log(string[p1],string[p2])
       p1++
       p2--
    }
    return string.join(" ")
}

const inputString = "hello";
console.log(reverseString(inputString))

/*Move Zeroes:
Given an array of numbers, move all the zeroes to the end without changing the order of 
non-zero elements.
*/
const shiftZeros = function(nums){
    // Big0: 0(n x m)
    let countZeros = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i,1)
            countZeros +=1
        }
    }
    for(let i=0; i<countZeros;i++){
        nums.push(0)
    }
    return nums

}
const nums = [0,1,0,3,12];
console.log(shiftZeros(nums))
// Output [1, 3, 12, 0, 0]
