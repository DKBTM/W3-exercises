// 0. Generic website settings


// const taskBuilder = () => {
//     let nowyTask = document.createElement("div");
//     nowyTask.innerHTML=document.createElement("p");
// }

// document.getElementById("t0").addEventListener("click", taskBuilder)

// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.getElementById("t1").innerHTML="Today is: " + days[d.getDay()];
document.getElementById("t1a").innerHTML="Current time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

// 2. Write a JavaScript program to print the contents of the current window. - solution in HTML

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var d3 = new Date();
dd=d3.getDate();
mm=d3.getMonth()+1;
yyyy=d3.getFullYear();

if (dd<10) {
    dd="0"+dd;
}

if (mm<10) {
    mm="0"+mm;
}

document.getElementById("t3").innerHTML=mm+"-"+dd+"-"+yyyy;

// 4. Write a JavaScript program to find the area of a 
// triangle where lengths of the three of its sides are 5, 6, 7. 

var b1 = 5;
var b2 = 6;
var b3 = 7;
var obw = (b1+b2+b3)/2;
var pole= Math.sqrt(obw*(obw-b1)*(obw-b2)*(obw-b3));

document.getElementById("t4").innerHTML="Area of a triangle equals: " + pole;

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by 
// periodically removing one letter from the end of the string and attaching it to the front.

var slowo="w3resource";

// 6. Write a JavaScript program to determine 
// whether a given year is a leap year in the Gregorian calendar.

var leapbutton=document.getElementById("leapcheck")

function checkLeap() {
    var zzzz = document.getElementById("t6").value;
    if (
    zzzz % 4 === 0 && 
    zzzz % 100 !== 0 ||
    zzzz % 400 === 0 ) {
        document.getElementById("t6a").innerHTML= "It is a leap year."
    } else {
        document.getElementById("t6a").innerHTML= "It is not a leap year."
    }
}

leapbutton.addEventListener("click", checkLeap)

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

var rok = 2014
var lista = []
var lista2 = []

for (rok = 2014; rok <2051; rok++) {
    lista.push(new Date(rok, 00, 01))
}

for (i=0; i<lista.length; i++) {
    if (lista[i].getDay()===0) {
        lista2.push(lista[i].getFullYear())
    }
}

document.getElementById("t7").innerHTML = "On 1st Jan it will be a Sunday on years: "+lista2

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display
// a message "Good Work" otherwise display a message "Not matched".

var los = Math.floor(Math.random() * 10)+1;
var losguzik = document.getElementById("t8");
losguzik.addEventListener("click", function() {
    var proba = prompt("Guess a number from 1 to 10 and try your luck");
    if (proba===los) {
        alert("You made it!")
    } else {
        alert("Unfortunately you were wrong, it's "+los)
    }
})

// 9. Write a JavaScript program to calculate days left until next Christmas. 

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
document.getElementById("t9").innerHTML=(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

// 10. Write a JavaScript program to calculate 
// multiplication and division of two numbers (input from user).

var multiply = document.getElementById("mnoz");
var divide = document.getElementById("dziel");

function mnozenie()
{
        num1 = document.getElementById("cz1").value;
        num2 = document.getElementById("cz2").value;
        document.getElementById("t10").innerHTML = num1 * num2;
}

function dzielenie() 
{ 
        num1 = document.getElementById("cz1").value;
        num2 = document.getElementById("cz2").value;
document.getElementById("t10").innerHTML = num1 / num2;
}

multiply.addEventListener("click", mnozenie)
divide.addEventListener("click", dzielenie)

// 11. Write a JavaScript program to convert temperatures
//  to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

var tempbut = document.getElementById("conv")

function calcTemp() {
    if (document.getElementById("cel").checked === true) {
        var tempval = document.getElementById("temp").value
        var r1 = (tempval*9/5)+32;
        document.getElementById("t11").innerHTML = r1 + "F"
    } else if
     (document.getElementById("far").checked === true) {
        var tempval = document.getElementById("temp").value
        var r2 = (tempval - 32)*(5/9);
        document.getElementById("t11").innerHTML = r2 + "C"
    } else {
        document.getElementById("t11").innerHTML= "Please select original unit"
    }
}

tempbut.addEventListener("click", calcTemp)

// 12. Write a JavaScript program to get the website URL (loading page).

const msg = `This website URL is: ${document.URL}` //window.location is the same property
document.getElementById("t12").innerHTML=msg

// 13. Write a JavaScript exercise to create a variable using a user-defined name.

document.getElementById("t13").innerHTML = `Tego zadania nie rozumiem`

// 14. Write a JavaScript exercise to get the extension of a filename.

const plik = "kobek.jpg";

getFileExtension(plik);

function getFileExtension (filename) {
    return filename.split(".").pop();
}

// 15. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference.


const cal15 = document.getElementById("t15cal")

function check15() {
    const given = document.getElementById("giv").value;
    if (given<=13) {
        document.getElementById("t15").innerHTML=13-given
    } else {
        document.getElementById("t15").innerHTML=(given - 13)*2
    }
}

cal15.addEventListener("click", check15)

// 16. Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.

function integerCheck () {
    const jedna = Number(document.getElementById("t16a").value);
    const druga = Number(document.getElementById("t16b").value);
        if (Number.isInteger(jedna)===true && Number.isInteger(druga)===true) {
        if (jedna !== druga) {
            rezultat = jedna + druga;
            document.getElementById("t16").innerHTML= `The result is: ${rezultat}`;
        } else {
            rezultat = 3 * (jedna + druga);
            document.getElementById("t16").innerHTML= `The result is: ${rezultat}`;
        }
    } else {
        document.getElementById("t16a").value="";
        document.getElementById("t16b").value="";
        alert("Some of the given values are not integers!")
    }
}

document.getElementById("t16cal").addEventListener("click", integerCheck);

// 17. Write a JavaScript program to compute the absolute difference
//  between a specified number and 19. Returns triple their absolute difference
//   if the specified number is greater than 19. 

let jazda = () => {
    const given = document.getElementById("t17a").value;
    if (given <= 19) {
        document.getElementById("t17").innerHTML=Math.abs(given - 19);
    } else {
        document.getElementById("t17").innerHTML=Math.abs(3*(given-19));
    }
}

document.getElementById("t17cal").addEventListener("click", jazda);

// 18. Write a JavaScript program to check two given numbers 
// and return true if one of the number is 50 or if their sum is 50.

const check50 = () => {
    const no1=document.getElementById("t18a").value;
    const no2=document.getElementById("t18b").value;
    if (no1 === "50" || no2==="50" || (Number(no1)+Number(no2)) == 50) {
        document.getElementById("t18").innerHTML = `Well, it's correct`;
    } else {
        document.getElementById("t18").innerHTML = `None of above applies to given numbers`;
    }
}

document.getElementById("t18cal").addEventListener("click", check50);

// 19. Write a JavaScript program to check 
// whether a given integer is within 20 of 100 or 400.

const checkIf = () => {
    const no1=document.getElementById("t19a").value;
    if (Number(no1)>=20 && Number(no1)<=100 || Number(no1)==400) {
        document.getElementById("t19").innerHTML=`Yup`;
    } else {
        document.getElementById("t19").innerHTML=`Nope`
    }
}

document.getElementById("t19cal").addEventListener("click", checkIf)

// 20. Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative. 

const posNeg = () => {
    const no1=document.getElementById("t20a").value;
    const no2=document.getElementById("t20b").value;
    if ((Number(no1)>0 && Number(no2)<0) || (Number(no1)<0 && Number(no2)>0)) {
        document.getElementById("t20").innerHTML=`Yup`;
    } else {
        document.getElementById("t20").innerHTML=`Nope`;
    }
}

document.getElementById("t20cal").addEventListener("click", posNeg)

// 21.Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

const addPy = () => {
    const before = document.getElementById("t21a").value;
    const przed = "Py";
    const beg = before.slice(0,2);
    if (beg != "Py") {
        const after = przed.concat(before);
        document.getElementById("t21").innerHTML=after;
    } else if (beg=="Py") {
        document.getElementById("t21").innerHTML=before;
    }

}

document.getElementById("t21cal").addEventListener("click", addPy)

// 22. Write a JavaScript program to remove a character 
// at the specified position of a given string and return the new string.

const removeChar = () => {
    const word = document.getElementById("t22a").value;
    const no = Number(document.getElementById("t22b").value);
        newWord = word.replace(word[no-1], "");
        document.getElementById("t22").innerHTML=newWord;

}

document.getElementById("t22cal").addEventListener("click", removeChar)

// 23. Write a JavaScript program to create a new string from a given string 
// changing the position of first and last characters. The string length must be 
// greater than or equal to 1. 

const swap = () => {
    const word = document.getElementById("t23a").value;
    const firstLetter = word.substring(0,1);
    const lastLetter = word.charAt(word.length-1);
    const cleanWord = word.substring(1,word.length-1);
    if (word.length>=1) {
        const newWord = lastLetter.concat(cleanWord, firstLetter);
        document.getElementById("t23").innerHTML=newWord;
    } else {
        alert(`The word is too short!`);
    }
}

document.getElementById("t23cal").addEventListener("click", swap)

// 24. Write a JavaScript program to create a new string from a given 
// string with the first character of the given string added at the front and back.

const newString = () => {
    const word=document.getElementById("t24a").value;
    const firstLetter = word.charAt(0);
    const newWord = firstLetter.concat(word, firstLetter);
    document.getElementById("t24").innerHTML=newWord;
}

document.getElementById("t24cal").addEventListener("click", newString)

// 25. Write a JavaScript program to check whether a given positive number is 
// a multiple of 3 or a multiple of 7. 

const checkRem = () => {
    const number = document.getElementById("t25a").value;
    if ((number>0 && number % 3 == 0) || (number>0 && number % 7 == 0)) {
        document.getElementById("t25").innerHTML = `This number is a multiple of 3 or 7`
    } else {
        alert(`The number you're checking does not meet the conditions`);
        document.getElementById("t25").innerHTML = `The number you're checking does not meet the conditions`
    }
}

document.getElementById("t25cal").addEventListener("click", checkRem)

// 26. Write a JavaScript program to create a new string from a given string taking 
// the last 3 characters and added at both the front and back. The string length 
// must be 3 or more. 

const f26 = () => {
    const word = document.getElementById("t26a").value;
    const trzy = word.substring (word.length-3, word.length);
    if (word.length>=3) {
       const newWord = trzy.concat(word, trzy);
       document.getElementById("t26").innerHTML=newWord;
    } else {
        alert("The word is too short!");
        document.getElementById("t26").innerHTML=newWord;
    }
}

document.getElementById("t26cal").addEventListener("dblclick", f26)

// 27. Write a JavaScript program to check whether 
// a string starts with 'Java' and false otherwise.

const f27 = () => {
    const word = document.getElementById("t27a").value;
    if (word.startsWith("Java")) {
        alert(`This word starts with Java`)
    } else {
        alert(`This word does not start with Java`)
    }
}

document.getElementById("t27cal").addEventListener("wheel", f27)

// 28. Write a JavaScript program to check whether two given integer values are 
// in the range 50..99 (inclusive). Return true if either of them are in the said range.

const f28 = () => {
    no1 = document.getElementById("t28a").value;
    no2 = document.getElementById("t28b").value;
    if (Number(no1)>=50 && Number(no1)<=99 && Number(no2)>=50 && Number(no2)<=99) {
        alert("Correct!")
    } else {
        alert("Not correct")
    }
}

document.getElementById("t28cal").addEventListener("click", f28)