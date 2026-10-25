for (let i = 1; i < 5; i++) {
    console.log("Hello, Benmark!");
}

function greet(name) {
    alert("Hello, " + name + "!");
}

greet("BOSS");
greet("SANA MASARAP ULAM MO HEHEHEHE");


const themeButton = document.getElementById("theme-toggle");

// Dito nag cchange ng theme kapag na click ang button
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Palitan ng text and button
    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
});
