/**************** Removing Duplicates from Array **********************/

let list = [1,3,6,4,8,6,4,5,9,7,8,4,3,1,4,6];

let newList = [...new Set (list)];
alert(newList);


/********************** Largest number in Array ***********************/

let manyNumbs = [33,543,65,765,3,45,65,3,77,4];

let bigNum = Math.min.apply(Math, manyNumbs);
alert(bigNum);


/********************* Smallest number in Array ************************/

let manyNumbs = [33,543,65,765,3,45,65,3,77,4];

let smallNum = Math.min.apply(Math, manyNumbs);
alert(smallNum);



/****** Return True/False depending if the item is in the Array ********/

list = [1,2,3,4,5,6,7,8,9].includes(6);
alert(list);


/******************************* FizzBuzz ******************************/

for (var i=1; i < 20; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


/****************************** Palindrome ****************************/

function isPalindrome (word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[(word.length-1)-i])
            return false
    }
    return true
}

alert("This word is a palindrome. (True/False):  " + isPalindrome("racecar"))
