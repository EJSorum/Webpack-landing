import style from './main.css';
// import component from './component.js';
import animate from './animate.js'
import grid from './grid.js'

let main = document.querySelector('main')
main.appendChild(grid())

// main.append(signUpForm) //this is a temporary demonstration