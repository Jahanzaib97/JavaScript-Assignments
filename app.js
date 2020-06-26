// //Chapter 1//

// //Task 1//
// alert("Hello World!");

// //Task 2//
// alert("Error! Please enter a valid password.");

// //Task 3//
// alert("Welcome to JS Land...\nHappy Coding!");

// //Task 4//
// alert("Welcome to JS Land...");

// alert("Happy Coding!");

// //Task 5//
// alert("Hello... I can run JS through my web browser's console");

// //Chapter 2//

// //Task 1//
// var username;

// //Task 2//
// var myName = "Jahanzaib_Arif";
// alert(myName);

// //Task 3//
// var message;
// message = "Hello World";
// alert(message);

// //Task 4//
// var name, age, designation;

// name = "Jhone Doe";
// alert(name);

// age = "15 years old"
// alert(age);

// designation = "Certified Mobile Application Development"
// alert(designation);

// //Task 5//
// var pizza;
// pizza = "Pizza\nPizz\nPiz\nPi\nP";
// alert(pizza);

// //Task 6//
// var email;
// email = "jahanzi.arif@gmail.com"
// alert("My email address is" + " " + email);

// //Task 7//
// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book" + " " + book);

// //Task 8//
// var x = "Yah! I can write HTML content through JavaScript";
// document.write(x);

// //Task 9//
// var y = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// document.write(y);
// alert(y);

// //Chapter 3//

// //Task 1//
// var age;
// age = 23;
// alert("I am" + " " + age + " " + "years old");

// //Task 2//
// var visited;
// visited = 15;
// alert("You have visited this site" + " " + visited + " " + "times");

// //Task 3//
// var birthYear;
// birthYear = 1997;
// document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is number");

// //Task 4//
// var visitor_name = "John Doe";
// var product_title = "T-shirt";
// var quantity = "5";
// document.write(visitor_name.bold() + " " + "ordered" + " " + quantity.bold() + " " + product_title.bold() + "(s)" + " " + "on XYZ Clothing store");

// //Chapter 4//

// //Task 1//
// var a, b, c;

// //Task 2//
// //illegal variables//
// var user name;
// var 2hello;
// var var ;
// var "string";
// var ~abc;

// //legal variables//
// var a;
// var userName;
// var $name;
// var product1;
// var myFirstName;

// //Task 3//
// var heading;
// heading = "Rules for naming JS variables";
// document.write(heading.bold());
// document.write("<br><br> Variable names can only contain letters,numbers,$ and _ . For example : $my_1stVariable");
// document.write("<br> Variable must begin with a letter,$ or _ . For example : $name,_name or name");
// document.write("<br> Variable names are case sensitive");
// document.write("<br> Variable names should not be JS keywords");

// //Chapter 5//

// //Task 1//
// var a, b;
// a = 3 + 5;
// c = a;
// document.write("Sum of 3 and 5 is" + " " + c);

// //Task 2//
// var a, b;
// a = 5 - 3;
// c = a;
// document.write("Subtraction of 5 and 3 is" + " " + c);

// var a, b;
// a = 3 * 5;
// c = a;
// document.write("Multiplication of 3 and 5 is" + " " + c);

// var a, b;
// a = 5 / 3;
// c = a;
// document.write("Division of 5 and 3 is" + " " + c);

// var a, b;
// a = 5 % 3;
// c = a;
// document.write("Modulus of 5 and 3 is" + " " + c);


// //Task 3//

// // a //
// var a;

// // b //
// document.write("Value after variable declaration is" + " " + a);

// // c //
// var num1 = 9;

// // d //
// document.write("<br>Initial value:" + " " + num1);

// // e //
// var num2 = ++num1;

// // f //
// document.write("<br>Value after increment is:" + " " + num2);

// // g //
// var num3 = num2 + 7;

// // h //
// document.write("<br>Value after adding 7 is:" + " " + num3);

// // i //
// var num4 = --num3;

// // j //
// document.write("<br>Value after decrement is:" + " " + num4);

// // k //
// var num5 = num4 % 3;

// // l //
// document.write("<br>The remainder is:" + " " + num5);

// //Task 4//

// var each_Movie_Ticket = 600;
// document.write("Total cost to buy 5 tickets to a movie is:" + " " + each_Movie_Ticket * 5 + "PKR");

// //Task 5//

// var num = 7;
// document.write("Table of 7");
// document.write("<br> 7 * 1 =" + num * 1);
// document.write("<br> 7 * 2 =" + num * 2);
// document.write("<br> 7 * 3 =" + num * 3);
// document.write("<br> 7 * 4 =" + num * 4);
// document.write("<br> 7 * 5 =" + num * 5);
// document.write("<br> 7 * 6 =" + num * 6);
// document.write("<br> 7 * 7 =" + num * 7);
// document.write("<br> 7 * 8 =" + num * 8);
// document.write("<br> 7 * 9 =" + num * 9);
// document.write("<br> 7 * 10 =" + num * 10);

// //Task 6//

// // a //
// temp_c = 25;

// // b //
// convertInFahrenheit = (temp_c * 9 / 5) + 32;

// document.write(temp_c + "ºC" + " " + "is" + " " + convertInFahrenheit + "ºF");

// // c //
// temp_f = 70;

// // d //
// convertInCentigrade = (temp_f - 32) * 5 / 9;

// document.write("<br>" + temp_f + "ºF" + " " + "is" + " " + convertInCentigrade + "ºC");


// // //Task 7//

// var Price1 = 250;
// var Quantity1 = 2;
// var Price2 = 450;
// var Quantity2 = 4;
// var Shipping = 150;
// var total_Cost;
// total_Cost = (Price1 * Quantity1) + (Price2 * Quantity2) + Shipping;

// document.write("<br> Price of item 1 is" + " " + Price1);
// document.write("<br> Quantity of item 1 is" + " " + Quantity1);
// document.write("<br> Price of item 2 is" + " " + Price2);
// document.write("<br> Quantity of item 2 is" + " " + Quantity2);
// document.write("<br> Shipping Charges" + " " + Shipping); s
// document.write("<br><br> Total cost of your order is" + " " + total_Cost);

// //Task 8//

// var totalMarks = 550;
// var marksObtained = 470;
// var percentage;
// percentage = (marksObtained * 100) / totalMarks;

// document.write("<br> Total marks:" + " " + totalMarks);
// document.write("<br> Marks obtained:" + " " + marksObtained);
// document.write("<br> Percentage:" + " " + percentage);

// //Task 9//

// var each_US_Dollar = 104.80;
// var each_Saudi_Riyal = 28;
// var total_Pakistani_Rupees;

// total_Pakistani_Rupees = (10 * each_US_Dollar) + (25 * each_Saudi_Riyal);
// document.write("<br><br> Total Currency in PKR:" + " " + total_Pakistani_Rupees);


// //Task 10//

// var num = 6;
// var total = ((num + 5) * 10) / 2;
// document.write("Answer is:" + " " + total);


// //Task 11//

// //a//
// var current_Year = 2020;

// //b//
// var birth_Year = 1997;

// //c//
// var age;
// age = current_Year - birth_Year;

// document.write("<br><br> Current Year:" + " " + current_Year);
// document.write("<br> Birth Year:" + " " + birth_Year);
// document.write("<br> Your Age:" + " " + age);

// // Task 12//

// //a//
// var radius = 20;
// var pi = 3.142;
// var circum_ference;
// var area;

// //b//
// circum_ference = 2 * pi * radius;
// area = pi * (radius * radius);

// document.write("<br><br> Radius of a circle:" + " " + radius);
// document.write("<br> The circumference is:" + " " + circum_ference);
// document.write("<br> The area is:" + " " + area);


// //Task 13//

// //a//
// var favorite_snack = "chips";

// //b//
// var current_age = 23;

// //c//
// var maximum_age = 63;

// //d//
// var estimated_amount = 2;

// //e//
// var days_In_A_Year = 365;
// var total;
// total = (estimated_amount * days_In_A_Year) * (maximum_age - current_age);

// document.write("<br><br> Favourite Snack:" + " " + favorite_snack);
// document.write("<br> Current Age:" + " " + current_age);
// document.write("<br> Estimated Maximum Age:" + " " + maximum_age);
// document.write("<br> Amount of snacks per day:" + " " + estimated_amount);
// document.write("<br> You will need" + " " + total + " " + "to last you until the ripe old age of:" + " " + maximum_age);

// //Chapter 6-9//

// //Task 1//

// var a = 2;
// document.write("<br> Result:" + "<br> The value of a is:" + " " + a);

// var a = ++a;
// document.write("<br><br> The value of ++a is:" + " " + a + "<br> Now the value of a is:" + " " + a);

// var a = a++;
// document.write("<br><br> The value of a++ is:" + " " + a++ + "<br> Now the value of a is:" + " " + a);

// var a = --a;
// document.write("<br><br> The value of --a is:" + " " + a + "<br> Now the value of a is:" + " " + a);

// var a = a--;
// document.write("<br><br> The value of a-- is:" + " " + a-- + "<br> Now the value of a is:" + " " + a);

// //Task 2//

// var a = 2;
// document.write("a is:" + " " + a);

// var b = 1;
// document.write("<br> b is:" + " " + b);

// var result = ((((--a) - --b) + ++b) + b--);
// document.write("<br> Result is:" + " " + result);

// alert(--a);  //1
// alert(--a - --b);  //1
// alert(--a - --b + ++b);  //2
// alert(--a - --b + ++b + b--);  //3

// //Task 3//

// var a = prompt("Enter your Name")
// alert("Hello and Welcome" + " " + a);

// //Task 4//

// var a = prompt("Enter Any Number");

// document.write("Table of Given Number");
// document.write("<br><br>" + a + " " + "* 1 =" + a * 1);
// document.write("<br>" + a + " " + "* 2 =" + a * 2);
// document.write("<br>" + a + " " + "* 3 =" + a * 3);
// document.write("<br>" + a + " " + "* 4 =" + a * 4);
// document.write("<br>" + a + " " + "* 5 =" + a * 5);
// document.write("<br>" + a + " " + "* 6 =" + a * 6);
// document.write("<br>" + a + " " + "* 7 =" + a * 7);
// document.write("<br>" + a + " " + "* 8 =" + a * 8);
// document.write("<br>" + a + " " + "* 9 =" + a * 9);
// document.write("<br>" + a + " " + "* 10 =" + a * 10);

// var num = 5;
// document.write("<br><br> Table of 5");
// document.write("<br><br> 5 * 1 =" + num * 1);
// document.write("<br> 5 * 2 =" + num * 2);
// document.write("<br> 5 * 3 =" + num * 3);
// document.write("<br> 5 * 4 =" + num * 4);
// document.write("<br> 5 * 5 =" + num * 5);
// document.write("<br> 5 * 6 =" + num * 6);
// document.write("<br> 5 * 7 =" + num * 7);
// document.write("<br> 5 * 8 =" + num * 8);
// document.write("<br> 5 * 9 =" + num * 9);
// document.write("<br> 5 * 10 =" + num * 10);

// //Task 5//

// //a//
// var sub1 = prompt("Enter Subject 1");
// var sub2 = prompt("Enter Subject 2");
// var sub3 = prompt("Enter Subject 3");

// //b//
// var totalMarks = 100;

// //c//
// var marks_sub1 = prompt("Enter Marks of Subject 1");

// //d//
// var marks_sub2 = prompt("Enter Marks of Subject 2");
// var marks_sub3 = prompt("Enter Marks of Subject 3");

// //e//
// var percent1;
// percent1 = (marks_sub1 * 100) / totalMarks;

// var percent2;
// percent2 = (marks_sub2 * 100) / totalMarks;

// var percent3;
// percent3 = (marks_sub3 * 100) / totalMarks;

// var all_Total_Marks = totalMarks + totalMarks + totalMarks;
// document.write(all_Total_Marks);

// var total_Obtained_Marks = marks_sub1 + marks_sub2 + marks_sub3;
// document.write(total_Obtained_Marks);

// var total_Percentage = percent1 + percent2 + percent3;
// document.write(total_Percentage);

// //Chapter 9-11 //

// //Task 1//

// var city_name = prompt("Enter City Name");
// if (city_name === "Karachi") {
//     alert("Welcome to the city of lights")
// }

// //Task 2//

// var gender_name = prompt("Enter your gender");
// if (gender_name === "male") {
//     alert("Good Morning Sir")
// }
// else {
//     alert("Good Morning Ma'am");

// }

// //Task 3//

// var color = prompt("Enter color of traffic light");
// if (color === "Red") {
//     alert("Must Stop");
// }
// else if (color === "Yellow") {
//     alert("Ready to move");
// }
// else {
//     alert("Move now");
// }

// //Task 4//

// var fuel = + prompt("Enter remaining fuel of your car in litres");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car")

// }

// //Task 5//

// //a//
// var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }      //true//

// //b//
// var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }    //false//

// //c//
// var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }   //condition 2 and condition 4 is true//

// //d//
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }  //true//

// //e//
// if (true) { alert("True"); } if (false) { alert("False"); }  //true//

// //f//
// if ("car" < "cat") { alert("car is smaller than cat"); }  //true//

// //Task 6//

// var totalMarks = + prompt("Enter total marks");
// document.write("<br><br> Total marks" + " " + ":" + " " + totalMarks);

// var marksObtained = + prompt("Enter marks obtained");
// document.write("<br> Marks obtained" + " " + ":" + " " + marksObtained);

// var percentage = + prompt("Enter your percentage");
// document.write("<br> Percentage" + " " + ":" + " " + percentage);

// if (percentage >= 80) {
//     document.write("<br> Grade" + " " + ":" + " " + "A-one");
//     document.write("<br> Remarks" + " " + ":" + " " + "Excellent");
// }

// else if (percentage >= 70) {
//     document.write("<br> Grade" + " " + ":" + " " + "A");
//     document.write("<br> Remarks" + " " + ":" + " " + "Good");
// }

// else if (percentage >= 60) {
//     document.write("<br> Grade" + " " + ":" + " " + "B");
//     document.write("<br> Remarks" + " " + ":" + " " + "You need to improve");
// }

// else if (percentage > 60) {
//     document.write("<br> Grade" + " " + ":" + " " + "Fail");
//     document.write("<br> Remarks" + " " + ":" + " " + "Sorry");
// }


// //Task 7//

// var num = 6;
// var user_guess = + prompt("Guess any number ranging from 1 to 10");

// if (user_guess === num) {
//     alert("Bingo! Correct answer.");
// }
// if (user_guess + 1 === num) {
//     alert("Close enough to the correct answer.");
// }

// //Task 8//

// var num = + prompt("Enter any number");

// if (num % 3 === 0) {
//     alert("Given number is divisible by 3.");
// }
// else {
//     alert("Given number is not divisible by 3.");
// }

// //Task 9//

// var num = + prompt("Enter any number");

// if (num % 2 === 0) {
//     alert("Given number is Even");
// }
// else {
//     alert("Given number is odd");
// }

// //Task 10//

// var temp = + prompt("Enter Temperature");

// if (temp > 40) {
//     alert("It is too hot outside.");
// }
// else if (temp > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temp > 20) {
//     alert("Today's Weather is cool");
// }
// else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool");
// }
// else {

// }

// //Task 11//

// var num1 = + prompt("Enter First Number");
// var num2 = + prompt("Enter Second Number");
// var operation = prompt("Select any 1 operation (+,-,*,/,%)");

// if (operation === "+") {
//     alert("Addition result is:" + " " + (num1 + num2));
// }
// if (operation === "-") {
//     alert("Subtraction result is:" + " " + (num1 - num2));
// }
// if (operation === "*") {
//     alert("Multiplication result is:" + " " + (num1 * num2));
// }
// if (operation === "/") {
//     alert("Division result is:" + " " + (num1 / num2));
// }
// if (operation === "%") {
//     alert("Percentage is:" + " " + ((num1 * 100) / num2) + "%");
// }
// else {

// }


// //Chapter 12-13 //

// //Task 1//

// var character = prompt("Enter any character code in ASCII format")

// if (character >= 65 && character <= 90) {
//     alert("Character is a capital letter")
// }
// else if (character >= 97 && character <= 122) {
//     alert("Character is a small letter")
// }
// else if (character >= 48 && character <= 57) {
//     alert("Character is a digit")
// }
// else if ((character > 0 && character <= 47) || (character >= 58 && character <= 64) || (character >= 91 && character <= 96) || (character >= 123 && character <= 127)) {
//     alert("Character is a special symbol")
// }

// //Task 2//
// var num1 = + prompt("Enter First Number");
// var num2 = + prompt("Enter Second Number");

// if (num1 > num2) {
//     alert(num1 + " " + "is the larger number");
// }
// else if (num2 > num1) {
//     alert(num2 + " " + "is the larger number");
// }
// else if (num1 === num2) {
//     alert("Both are equal numbers");
// }
// else {

// }

// //Task 3//
// var num = + prompt("Enter Number");

// if (num === 0) {
//     alert("Entered number is Zero");
// }
// else if (num > 0) {
//     alert(num + " " + "is Positive");
// }
// else if (num < 0) {
//     alert(num + " " + "is Negative");
// }
// else {

// }

// //Task 4//

// var onechar = prompt("Enter any 1 character");
// onechar = onechar.toUpperCase();

// if (onechar === "A" || onechar === "E" || onechar === "I" || onechar === "O" || onechar === "U") {
//     alert("True! It is a vowel");
// }
// else if (onechar.length !== 1) {
//     alert("Please type a character not a number or string")
// }
// else {
//     alert("False! It is not a vowel");
// }

// //Task 5//

// var correct_password = "admin123";
// var password = prompt("Enter your password");


// if (password === "") {
//     alert("Please enter your password");
// }
// else if (password === correct_password) {
//     alert("Correct! The password you entered matches the original password.")
// }
// else {
//     alert("Incorrect password");
// }

// //Task 6//

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }

// //Task 7//

// var time = prompt("Enter time in 24 hours clock format (like: 1900 = 7pm)");


// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }
// else {

// }


// //Chapter 14-16 //

// //Task 1//
// var array1 = [];

// //Task 2//
// var array2 = new Array();

// //Task 3//
// var cities = ["Atlanta", "Baltimore", "Chicago"];

// //Task 4//
// var numbers = [23, 24, 27, 29];

// //Task 5//
// var arrBoolean = [true, false];

// //Task 6//
// var mix = ["Karachi", 9, false];

// //Task 7//
// var h1 = "Qualifications";
// var qualifications = ["SSC<br>", "HSC<br>", "BCS<br>", "BS<br>", "BCOM<br>", "MS<br>", "M. Phil.<br>", "PhD"];

// document.write(h1.bold() + "<br><br>");
// document.write("1)" + " " + qualifications[0]);
// document.write("2)" + " " + qualifications[1]);
// document.write("3)" + " " + qualifications[2]);
// document.write("4)" + " " + qualifications[3]);
// document.write("5)" + " " + qualifications[4]);
// document.write("6)" + " " + qualifications[5]);
// document.write("7)" + " " + qualifications[6]);
// document.write("8)" + " " + qualifications[7]);

// //Task 8//
// var students = ["Ali", "Ahmed", "Khan"];
// var marks = [245, 390, 425];
// var std1 = marks[0]*100/500;
// var std2 = marks[1]*100/500;
// var std3 = marks[2]*100/500;

// document.write("Score of" + " " + students[0] + " " + "is" + " " + marks[0] + "." + " " + "Percentage:" + " " + std1 + "% <br>");
// document.write("Score of" + " " + students[1] + " " + "is" + " " + marks[1] + "." + " " + "Percentage:" + " " + std2 + "% <br>");
// document.write("Score of" + " " + students[2] + " " + "is" + " " + marks[2] + "." + " " + "Percentage:" + " " + std3 + "% <br>");

// //Task 9//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// var anyColor = prompt("Enter any color you want to add in the beginning of the array");
// colorNames.unshift(anyColor);
// document.write(colorNames);

// //Task 9a//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// var anyColor = prompt("Enter any color you want to add in the beginning of the array");
// colorNames.push(anyColor);
// document.write(colorNames);

// //Task 9b//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// colorNames.unshift("Orange","Brown");
// document.write(colorNames);

// //Task 9c//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// colorNames.shift();
// document.write(colorNames);

// //Task 9d//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// colorNames.pop();
// document.write(colorNames);

// //Task 9e//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// var anyColor = prompt("Enter any color you want to add in the array");
// var position = prompt("Enter any position/index where you want to add in the array");
// colorNames.splice(position,0,anyColor);
// document.write(colorNames);

// //Task 9f//

// var colorNames = ["Red", "Green", "Yellow", "Blue"];
// var anyColor = prompt("Enter colors that you want to delete in the array");
// var position = prompt("Enter any position/index where you want to delete in the array");
// colorNames.splice(1,2);
// document.write(colorNames);

// //Task 10//

// var studentsScores = [323, 453, 123, 341, 567, 298];
// document.write("Score of Students:" + studentsScores);
// var ascend = studentsScores.sort();
// document.write("<br>Ordered Score of Students:" + ascend);

// //Task 11//

// var cities = ["Karachi", "Islamabad", "Quetta", "Lahore","Punjab"]
// document.write("Cities list:<br>" + cities);
// var selectedCities = cities.slice(1,3);
// document.write("<br><br>Selected cities list:<br>" + selectedCities);

// //Task 12//

// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array:<br>" + arr);
// var arrjoin = arr.join([]);
// document.write("<br><br>String:<br>" + arrjoin);

// //Task 13//

// var newarr = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("Devices:<br>" + newarr);
// document.write("<br><br>Out:<br>");
// document.write(newarr.shift(0));
// document.write("<br><br>Out:<br>");
// document.write(newarr.shift(1));
// document.write("<br><br>Out:<br>");
// document.write(newarr.shift(2));
// document.write("<br><br>Out:<br>");
// document.write(newarr.shift(3));

// //Task 14//

// var newarr = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("Devices:<br>" + newarr);
// document.write("<br><br>Out:<br>");
// document.write(newarr.pop(0));
// document.write("<br><br>Out:<br>");
// document.write(newarr.pop(1));
// document.write("<br><br>Out:<br>");
// document.write(newarr.pop(2));
// document.write("<br><br>Out:<br>");
// document.write(newarr.pop(3));

//Task 15//
// var mobBrands = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// for(i = 0; i < mobBrands.length; i++){
//         document.write("<br>"+ mobBrands[i]);
//     }
    // document.write(mobBrands[0] + "<br>");
    // document.write(mobBrands[1] + "<br>");
    // document.write(mobBrands[2] + "<br>");
    // document.write(mobBrands[3] + "<br>");
    // document.write(mobBrands[4] + "<br>");
    // document.write(mobBrands[5] + "<br>");
    
    //Chapter 17-20 //

    // //Task 1//
    // var multarray = [[],[]];

    // //Task 2//
    //  var multarray = [["0 " ,"1 " ,"2 ", "3 <br>"],["1 ","0 ","1 ","2 <br>"],["2 " ,"1 " ,"0 " ,"1 <br>"]];
    // //  document.write(multarray.join(""));
    //  document.write(multarray[0][0]);
    //  document.write(multarray[0][1]);
    //  document.write(multarray[0][2]);
    //  document.write(multarray[0][3]);

    //  document.write(multarray[1][0]);
    //  document.write(multarray[1][1]);
    //  document.write(multarray[1][2]);
    //  document.write(multarray[1][3]);

    //  document.write(multarray[2][0]);
    //  document.write(multarray[2][1]);
    //  document.write(multarray[2][2]);
    //  document.write(multarray[2][3]);
    
    // //Task 3//
    // for(i = 1; i <= 10; i++){
    //     document.write(i + "<br>")
    // }

    // //Task 4//
    // var num = + prompt("Enter a number to show its multiplication table");
    // var length = + prompt("Enter length of multiplication table");
    // var header = ("Multipication table of" + " " + num + " " + "<br>Length is" + " " + length + " " + "<br><br>")
    // document.write(header.bold())
    // for(i = 1; i <= length; i++){
    //     document.write(num + " " + "x" + " " + i + " " + "=" + " " + num * i + "<br>");
    // }

    // //Task 5//
    // var fruits = ["apple","banana", "mango", "orange", "strawberry"];
    // for(i = 0; i < fruits.length; i++){
    //     document.write(fruits[i] + "<br>");
    // }
    // var fruits = ["apple","banana", "mango", "orange", "strawberry"];
    // var a,b,c,d,e;
    // a = fruits.indexOf("apple");
    // b = fruits.indexOf("orange");
    // c = fruits.indexOf("strawberry");
    // d = fruits.indexOf("mango");
    // e = fruits.indexOf("banana");
    //     document.write("<br> Element at index" + " " + a + " " + "is" + " " + fruits[0]);
    //     document.write("<br> Element at index" + " " + e + " " + "is" + " " + fruits[1]);
    //     document.write("<br> Element at index" + " " + d + " " + "is" + " " + fruits[2]);
    //     document.write("<br> Element at index" + " " + b + " " + "is" + " " + fruits[3]);
    //     document.write("<br> Element at index" + " " + c + " " + "is" + " " + fruits[4]);

//     //Task 6//

//         //a//
//      var header = ("Counting: <br><br>")
//      document.write(header.bold())
//     for(i=1; i<=15; i++){
//         document.write(i + ",");
//     }     
//          //b//
//      var header = ("<br><br>Reverse Counting: <br><br>")
//      document.write(header.bold())
//     for(i = 10; i >= 1; i--){
//     document.write(i + ",");
//     }

//      //c//
//      var header = ("<br><br>Even: <br><br>")
//      document.write(header.bold())
//     for(i = 0; i <= 20 ; i++){
//         if(i % 2 === 0){
//             document.write(i + ",");
//         }
//     }

//     //d//
//     var header = ("<br><br>Odd: <br><br>")
//     document.write(header.bold())
//    for(i = 0; i <= 20 ; i++){
//        if(i % 2 !== 0){
//            document.write(i + ",");
//        }
//    }

//    //e//
//    var header = ("<br><br>Series: <br><br>")
//    document.write(header.bold())
//   for(i = 2; i <= 20 ; i++){
//       if(i % 2 === 0){
//           document.write(i + "k,");
//       }
//   }
    
    //Task 7//

    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var a = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
    // a = a.toLowerCase();
    //     if(A.indexOf(a) !== -1){
    //         document.write(a + " " + "is available at index" + " " + A.indexOf(a) + " " + "in our bakery.");
    //     }
    //     else{
    //         document.write("We are sorry"+ " " + a + " " + "is not available in our bakery");
    //     }
  
    // //Task 8//
    // var A = [24, 53, 78, 91, 12];
    // document.write("Array items:" + A);
    // var B = Math.max(24, 53, 78, 91, 12);
    // document.write("<br>The Largest number is:" + B);

    // //Task 9//
    // var A = [24, 53, 78, 91, 12];
    // document.write("Array items:" + A);
    // var B = Math.min(24, 53, 78, 91, 12);
    // document.write("<br>The Smallest number is:" + B);

    // //Task 10//
    // for(i=5; i<=100; i++){
    //     if(i%5 === 0){
    //         document.write(i + ",");
    //     } 
    // }


   




 















































