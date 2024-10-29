// Simple form submission handling (without backend)
 document.getElementById("contactForm").addEventListener("submit", function(event){
     event.preventDefault();
     alert("Thank you for reaching out! I will get back to you soon.");
 });

// code for restarting Auto type tex
 function autoTypeText(elementId, text, speed, delay) {
    let index = 0;
    const element = document.getElementById(elementId);
    
    function typeCharacter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeCharacter, speed);
        } else {
            setTimeout(() => {
                element.textContent = ''; // Clear text
                index = 0; // Reset index
                setTimeout(typeCharacter, delay); // Restart after delay
            }, delay);
        }
    }

    typeCharacter();
}

// Usage: Continuously auto-typing text
const textToType = "Welcome to ManexGraphixHUB. Let's create something amazing!";
const typingSpeed = 100;  // Speed in milliseconds
const restartDelay = 1000; // Delay before restarting the typing (in milliseconds)

autoTypeText("autoTyping", textToType, typingSpeed, restartDelay);






 // function for Auto-typing
//    function autoTypeText(elementId, text, speed) {
//       let index = 0;
//       const element = document.getElementById(elementId);

//       function typeCharacter() {
//           if (index < text.length) {
//               element.textContent += text.charAt(index);
//               index++;
//               setTimeout(typeCharacter, speed);
//           }
//       }

//       typeCharacter();
//   }

  // Usage
//   const textToType = "";
//   const typingSpeed = 40; // Speed in milliseconds
//   autoTypeText("autoTyping", textToType, typingSpeed);



// CODE FOR TIME
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000)

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hrs').textContent = hours;
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;
}

setInterval(updateClock, 1000);
