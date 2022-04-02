import signUp from './form.js'
import skyjpg from './images/sky.jpg'
import balloonsvg from './images/balloons.svg'


function grid() {
    let grid = document.createElement('div')
    grid.id = 'grid'
    let skyBox = document.createElement('div')
    skyBox.id = 'sky-box'
    let topBox = document.createElement('div')
    topBox.id = 'top-box'
    let signUpBox = document.createElement('div')
    signUpBox.id = 'signup-box'
    let middleBox = document.createElement('div')
    middleBox.id = 'middle-box'
    let quoteBox = document.createElement('div')
    quoteBox.id = 'quote-box'
    topBox.append(title())
    signUpBox.appendChild(signUp())
    skyBox.appendChild(sky())
    middleBox.append(balloon())
    quoteBox.append(quote())
    grid.append(skyBox, topBox, middleBox, signUpBox, quoteBox)
    return grid
}

function title() {
    let textDiv = document.createElement('div')
    textDiv.id = 'title-box'
    let h1 = document.createElement('h1')
    h1.id = 'title'
    h1.innerHTML = 'A Landing Page'
    let h3 = document.createElement('h3')
    h3.id = 'title'
    h3.innerHTML = 'We make your wishes come true!'
    textDiv.append(h1, h3)
    return textDiv
}

function quote() {
    let quoteText = document.createElement('span')
    quoteText.id = 'quote-text'
    quoteText.innerHTML = 'I recommend this website to everyone.  They fulfilled all my wishes and I couldn\'t be happier! - Janelle, current client.'
    return quoteText
}

function sky() {
    let skyDiv = document.createElement('div')
    skyDiv.id = 'sky-div'
    let image = document.createElement('img')
    image.id = 'sky-image'
    image.src = skyjpg
    image.alt = '[Sky image]'
    let credit = document.createElement('div')
    credit.innerHTML = 'Sky image by <a href="https://pixabay.com/users/mint_foto-25073177/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7050884">Mint_Foto</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7050884">Pixabay</a><br>Balloon image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=25737">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=25737">Pixabay</a><br>Person image by <a href="https://pixabay.com/users/nastya_gepp-3773230/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4376597">Anastasia Gepp</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4376597">Pixabay</a>'
    credit.id = 'credit'
    skyDiv.append(image, credit)
    return skyDiv
}

export default grid

function balloon() {
    let image = document.createElement('img')
    image.id = 'balloon-image'
    image.src = balloonsvg
    return image
}

