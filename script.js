const phrases = ["Naughty America", "Nobody", "Does It better", "Than Jadoo"];

let currentIndex = 0;
const textElement = document.getElementById("transitionText");

document.addEventListener("DOMContentLoaded", function () {
  let options = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.5, // triggers the callback when 50% of the section is visible
  };

  let observer = new IntersectionObserver(onIntersection, options);
  let sections = document.querySelectorAll("#glowingBoxes");

  sections.forEach((section) => {
    observer.observe(section);
  });

  function onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) {
        entry.target.style.opacity = "1";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const progressBarSection = document.getElementById("circularProgressBars");
  let hasStarted = false;

  const observer = new IntersectionObserver(
      (entries) => {
          if (!hasStarted && entries[0].intersectionRatio >= 0.5) {
              hasStarted = true;
              progressBarSection.classList.add("startAnimation");
          }
      },
      {
          threshold: 0.5
      }
  );

  observer.observe(progressBarSection);
});


function updateText() {
  // If we're already on the last phrase, display arrow and return
  if (currentIndex === phrases.length - 1) {
    const arrowContainer = document.getElementById("arrowContainer");
    arrowContainer.style.display = "block";
    setTimeout(() => {
      arrowContainer.style.opacity = "1";
    }, 100); // A slight delay to ensure the element is displayed before fading in
    return;
  }

  // Fade out the current text
  textElement.style.opacity = "0";

  // Wait for the transition to complete before changing the text and fading back in
  setTimeout(() => {
    currentIndex++;
    textElement.innerText = phrases[currentIndex];
    textElement.style.opacity = "1";
  }, 500);
}
function scrollDown() {
  // Define the amount to scroll, for example 200 pixels
  const scrollAmount = 200;

  // Use smooth scrolling to achieve the desired effect
  window.scrollBy({
    top: scrollAmount,
    left: 0,
    behavior: "smooth",
  });
}

// Update the text every 3 seconds
setInterval(updateText, 2000);
