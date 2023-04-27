// It is a mind game. You have to enter a positive number. This function takes your number and multiply with 3, then add 10 with it. Then it devides by 2. And next substraction 5. And return your number.
function mindGame(number){
    const yourNumber = (((number * 3) + 10) / 2) - 5;
    if(number < 0){
        return "Please enter a positive number";
    }
    if(typeof number != 'number'){
        return "Please enter a valid number";
    }
    return yourNumber;
}



// This is a function, which helps you to calculating any string, either it even or odd.
function evenOdd(str){
    if(typeof str != 'string'){
        return "Please enter a string"
    }
    if(str.length % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}



// Here you have to input a number by function's parameter, which is substraction by 7. If this answer is below 7, it will be return. But if this answer is over 7, then the arguement multiply by 2 and return the answer.
function isLGSeven(number){
    if(typeof number != 'number'){
        return "Please enter a valid number"
    }
    const lessThanSeven = number -7;
    const doubleOfInput = number * 2;
    if(lessThanSeven < 7){
        return lessThanSeven;
    }
    else{
        return doubleOfInput;
    }
}


// This function is used for calculating -numbers of an array, which is called bad data.
function findingBadData(arr){
    let badData = 0;
    if(Array.isArray(arr) == false){
        return 'Please enter an array'
    }
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element < 0){
            badData = badData + 1;
        }
    }
    return badData;
}


// This function calculates 3 friend's gems, convert gems to diamond and return by the total diamond.
function gemsToDiamond(x,y,z){
    const firstFriendGemsPwr = 21;
    const secondFriendGemsPwr = 32;
    const thirdFriendGemsPwr = 43;

    if(typeof x != 'number' || typeof y != 'number' || typeof z != 'number'){
        return "All input should be a number"
    }

    const firstFriendDiamond = x * firstFriendGemsPwr;
    const secondFriendDiamond = y * secondFriendGemsPwr;
    const thirdFriendDiamond = z * thirdFriendGemsPwr;

    let totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if(totalDiamond > 1000 * 2){
        totalDiamond = totalDiamond - 2000;
        return totalDiamond;
    }
    return totalDiamond;
}


