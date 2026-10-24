for (let i = 1; i < 5; i++) {
    console.log("Hello, Benmark!");
}

function greet(name) {
    alert("Hello, " + name + "!");
}

greet("BOSS");
greet("SANA MASARAP ULAM MO HEHEHEHE");


const themeButton = document.getElementById("theme-toggle");

// Palitan ang dark mode at light mode
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Palitan din ang text ng button
    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
});
