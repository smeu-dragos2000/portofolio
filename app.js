// --- Hamburger Menu ---

const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('nav ul');
let menuItem = document.querySelectorAll('nav ul li');

const showMenu = () => {
    Menu.classList.toggle('open');
}



hamburger.addEventListener('click', showMenu);
menuItem.forEach(box => box.addEventListener('click', showMenu));


// --- Mug-shot transition ---

const animationTime = 300;

$(document).ready(() => {

    $('#left-pose').css('opacity', '0');
    $('#right-pose').css('opacity', '0');

    //    Left Side Animation
    $('#artist').on('mouseover', () => {
        $('#left-pose').animate({opacity: '1'}, animationTime);
        $('#front-pose').animate({opacity: '0'}, animationTime);
    });

    $('#artist').on('mouseleave', () => {
        $('#left-pose').animate({opacity: '0'}, animationTime);
        $('#front-pose').animate({opacity: '1'}, animationTime);
    });

    //    Right Side Animation
    $('#coder').on('mouseover', () => {
        $('#right-pose').animate({opacity: '1'}, animationTime);
        $('#front-pose').animate({opacity: '0'}, animationTime);
    });

    $('#coder').on('mouseleave', () => {
        $('#right-pose').animate({opacity: '0'}, animationTime);
        $('#front-pose').animate({opacity: '1'}, animationTime);
    });
});

// --- Skills populate ---

let skillsContainer = document.querySelector("#skills");

const skillsRequest = fetch('skills.json')
    .then (response => response.json())
    .then (data => {
        data.forEach(element => {
            let skillFill = `<div class="skill-fill" style="width: ${element.value}%;"><span>${element.skill}</span></div>`;
            let skillEmpty = `<div class="skill-empty"></div>`;
            let skillBar = `<div class="skill-bar">${skillEmpty}${skillFill}</div>`
            skillsContainer.innerHTML += skillBar;

            // console.log(skillBar);
        })
    });

// --- Work Gallery populate ---

let gridContainer = document.querySelector("#grid-container");

const workRequest = fetch('work.json')
    .then (response => response.json())
    .then (data => {
        data.forEach(element => {
            let itemTitle = `<h3 class="item-title">${element.title}</h3>`;
            let itemImage = `<img src="${element.img}">`;
            let itemDescription = `<p>${element.description}</p>`
            let itemLink = element.link;
            let item = `<div class="grid-item"><a href="${itemLink}" target="blank">${itemTitle} ${itemImage} ${itemDescription}</a>`

            gridContainer.innerHTML += item;
        })
        
    });





