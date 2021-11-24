// Write JavaScript code that implements the following:
//1. Event (1)
//2. Function
//3. If statements
//4. If else
//5. Switch
//6. Break
//7. While loop
//8. For loop
//9. Do while loop
//10. Continue statements

//1. A function that runs when the page loads to greet the user based on the time of day
function greetUser() {
  let date = new Date();
  let msg = "";

  if (date.getHours() >= 3 && date.getHours() <= 12) {
    msg = "Good morning";
    alert(msg);
  } else if (date.getHours() >= 12 && date.getHours() <= 17) {
    msg = "Good afternoon";
    alert(msg);
  } else {
    msg = "Good evening";
    alert(msg);
  }
}

//2. Display projects using a for loop
const recentProjects = [
  "Technology",
  "Healthcare",
  "FinTech",
  "AgTech",
  "Rocket Engineering",
  "Research & Development",
  "Energy Generation",
  "Poverty Alleviation",
];
let projects = "";

for (var i = 0; i < recentProjects.length; i++) {
  projects += "<li>" + recentProjects[i];
}
document.getElementById("list2").innerHTML = projects;

//3. implement a do while loop
var title1 = "Most grateful for!";
do {
  document.getElementById("title1").innerHTML = title1;
} while (document.getElementById("title1").innerHTML < "120000");

//4. Implement a While Loop
var title2 = "Hobbies & Interests";
while (document.getElementById("title2").innerHTML < "120000") {
  document.getElementById("title2").innerHTML = title2;
}

//5. for loop and continue statement
var listOfRoleModels = [
  "My mother",
  "Elon Musk",
  "Eric Khumalo",
  "Vuyisile Ndlovu",
  "Edward Snowden",
];

var i = 0;
var txt = "I am a software developer";
for (var i = 0; i < listOfRoleModels.length; i++) {
  if (listOfRoleModels[i] == "Elon Musk") {
    continue;
  }
  document.getElementById("list4").innerHTML += "<li>" + listOfRoleModels[i];
}

// 6. for loop and break statement that works as an event
function promptUser() {
  let msg = prompt("Who wrote this code?");

  switch (msg) {
    case "Elon Musk":
      document.write("Are you kidding me???");
      break;
    case "Andile":
      document.write("Yes, that genius!");
      break;
    case "Makhosie":
      document.write("Oh, no he didn't");
      break;
    default:
      document.write("Sorry");
  }
}
