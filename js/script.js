import { Github } from "./helper.js";
import { UI } from "./ui.js";
const API = new Github('https://api.github.com/users');

// Init UI
const ui = new UI;

// Search Input 
const form = document.querySelector('.search')
const input = document.querySelector('.search-bar__input')



// Fetch Api Github Users

function getUser(user) {
    const cleanedupUser = user.trim().toLowerCase();
    if (cleanedupUser !== '') {
        const response = API.get(`/${cleanedupUser}`)
        response.then(data => {
            if (data.profile.message === "Not Found") {
                // show the error message
                ui.showMessage('block')
            }
            else {
                // show profile
                ui.showProfile(data.profile)
                console.log(data.repos)
            }
        })
    }
}

// Search Input EventsListener
form.addEventListener('submit', function (e) {
    e.preventDefault()
    // Make Http Call
    getUser(input.value)
})

input.addEventListener('keyup', (e) => {
    const value = e.target.value
    if (value === '') {
        ui.clearProfile()
    }
})