const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const closeButton = document.getElementById("close-toast");


// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(function () {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;
    console.log(`Time left: ${remainingTime} seconds`);
    //if (remainingTime >0 && remainingTime < 10) {
      document.getElementById("start-btn").disabled = true;
    //}
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    } 
  }, 1000);

  



}

// ITERATION 3: Show Toast
function showToast(a,b,c) {
  console.log("showToast called!");

  const list = document.getElementById("toast").classList;
  list.add("show");

  document.getElementById("toast").style.visibility = "show";
  setTimeout(function() {
    list.remove("show");
  }, 3000);

  
  closeButton.addEventListener("click", closeToast);

  function closeToast() {
    list.remove("show");
  }
}