// 1. তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে। এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। 
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
console.log(mindGame(-5));



// 2. তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
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
console.log(evenOdd('Phero'));


// 3. তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে। এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
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
console.log(isLGSeven(-15));



// 4. তোমাকে একটা function দেওয়া হবে called findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
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
console.log(findingBadData([ -4, -9, -5, -33, -55]));





// 5. তোমাকে একটা function দেওয়া হবে called gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছেএখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
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
console.log(gemsToDiamond(20,200,50));