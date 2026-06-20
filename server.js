// =======================================================
// 😴 Sleep Debt Calculator
// Author : Hakeem Khan
// Submitted to: Pamir Khan
// =======================================================


// =======================================================
// Task 1, 2
// Get sleep hours for each day from input fields
// =======================================================

const getSleepHours = (day) => {

  if (day === "monday") {
    return Number(document.getElementById("mon").value);
  } 
  else if (day === "tuesday") {
    return Number(document.getElementById("tue").value);
  } 
  else if (day === "wednesday") {
    return Number(document.getElementById("wed").value);
  } 
  else if (day === "thursday") {
    return Number(document.getElementById("thu").value);
  } 
  else if (day === "friday") {
    return Number(document.getElementById("fri").value);
  } 
  else if (day === "saturday") {
    return Number(document.getElementById("sat").value);
  } 
  else if (day === "sunday") {
    return Number(document.getElementById("sun").value);
  } 
  else {
    return 0;
  }

};


// =======================================================
// Task 4, 5
// Actual sleep hours
// =======================================================

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};


// =======================================================
// Task 6
// Ideal sleep hours
// =======================================================

const getIdealSleepHours = () => {

  const idealHours = Number(document.getElementById("ideal").value);
  return idealHours * 7;

};


// =======================================================
// Task 8, 9, 10
// Calculate sleep debt
// =======================================================

const calculateSleepDebt = () => {

  const actualSleep = getActualSleepHours();
  const idealSleep = getIdealSleepHours();

  let message = "";

  if (actualSleep === idealSleep) {
    message = "😊 Perfect sleep! You are well rested.";
  } 
  else if (actualSleep > idealSleep) {
    message = `😄 You slept more than needed by ${actualSleep - idealSleep} hours.`;
  } 
  else {
    message = `😴 You need more rest by ${idealSleep - actualSleep} hours.`;
  }

  document.getElementById("result").innerText = message;

};


// =======================================================
// Task 11
// Start program (button click will run this)
// =======================================================

// This function is called from HTML button