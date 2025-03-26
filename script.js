// Directs to another html when press 1-6 in input
function changeIt() {
  let input;

  do {
    input = document.getElementById("NumberInput").value;

    if (input < "0" || input > "9" || isNaN(input)) {
      window.alert("Invalid choice. Please try again.");
    }
  } while (input < "0" || input > "9" || isNaN(input));

  const paths = [
    "SLICE/act1.html",
    "TO-UPPERCASE/act2.html",
    "TO-LOWER-CASE/act3.html",
    "STR-CONCAT/act4.html",
    "STR-TRIM/act5.html",
    "STR-REPEAT/act6.html",
    "STR-REPLACE/act7.html",
    "STR-REPLACE-ALL/act8.html",
    "STR-SPLIT-ALL/act9.html",
    "EXIT/exit.html"
  ];

  window.location.href = `Assets/Web/${paths[input]}`;
}


// Change to Light-theme/Dark-theme
const logo = document.getElementById("sandbox");

logo.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

// Press enter on keyboard instead of pressing on submit button
var input = document.getElementById("NumberInput");
var Cbutton = document.getElementById("ButtonBB");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    Cbutton.click();
  }
});
