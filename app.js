const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // we will get the button i click on (we're looking for all the classes that btn have)
    const classNames = e.currentTarget.classList;

    if (classNames.contains("decrease")) {
      count--;
    } else if (classNames.contains("increase")) {
      count++;
    } else if (classNames.contains("reset")) {
      count = 0;
    }
    colorUpdate();

    value.textContent = count;
  });
});

// Color set depending if the numbers are negative or positive
function colorUpdate() {
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "#222";
  }
}
