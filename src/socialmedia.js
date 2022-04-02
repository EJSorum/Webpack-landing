import fblogo from './images/facebook.png'
import twlogo from './images/twitter.png'
import inlogo from './images/instagram.png'
import lilogo from './images/linkedin.png'

function social() {
    let socialDiv = document.createElement('div')
    socialDiv.id = 'social-div'
    let socialText = document.createElement('h3')
    socialText.innerHTML = 'Find us on social media!'
    let logoDiv = document.createElement('div')
    logoDiv.id = 'logo-div'
    let fb = document.createElement('img')
    fb.src = fblogo
    fb.className += 'social-logo'
    let twitter = document.createElement('img')
    twitter.src = twlogo
    twitter.className += 'social-logo'
    let instagram = document.createElement('img')
    instagram.src = inlogo
    instagram.className += 'social-logo'
    let linkedin = document.createElement('img')
    linkedin.src = lilogo
    linkedin.className += 'social-logo'
    logoDiv.append(fb, twitter, instagram, linkedin)
    socialDiv.append(socialText, logoDiv)
    return socialDiv
}

export default social