const toggleIcon = document.querySelectorAll(".theme-switch__icon");

// Switch Theme dynamically
export function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        switchIcon()
    }
    else {
        document.documentElement.setAttribute("data-theme", "light")
        switchIcon()
    }
}


function switchIcon() {
    const names = document.querySelectorAll('small')
    toggleIcon.forEach(function (icon) {
        icon.classList.toggle('active')

    })
    names.forEach(function (name) {
        name.classList.toggle('active')
    })

}
const toggleSwitch = document.querySelector("input[type=checkbox]");

toggleSwitch.addEventListener("change", switchTheme)

// const btn = document.querySelector(".mode");
// console.log(document.getElementById('coloricon').alt);

// btn.addEventListener('click', () => {

//     if (document.getElementById('coloricon').alt == "Dark mode") {

//         document.body.classList.toggle('data-theme');
//         document.getElementById('coloricon').alt = "Light mode";
//         document.getElementById('color').innerHTML = "Light";
//         console.log(document.getElementById('color').innerHTML);

//         document.getElementById('coloricon').src = "assets/SVG/icon-sun.svg";

//     } else
//         if (document.getElementById('coloricon').alt == "Light mode") {
//             document.body.classList.toggle('dark-theme');
//             document.getElementById('coloricon').alt = "Dark mode";
//             document.getElementById('color').innerHTML = "Dark";
//             console.log(document.getElementById('color').innerHTML);

//             document.getElementById('coloricon').src = "assets/SVG/icon-moon.svg";
//         }
// });