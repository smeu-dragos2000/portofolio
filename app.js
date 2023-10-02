// ----- Mug-shot transition -----

const frontPose = document.querySelector("#front-pose");
const leftPose = document.querySelector("#left-pose");
const rightPose = document.querySelector("#right-pose");
const artist = document.querySelector("#artist");
const coder = document.querySelector("#coder");

const resetPose = () => {
    frontPose.setAttribute("style", "opacity: 1;")
    leftPose.setAttribute("style", "opacity: 0;")
    rightPose.setAttribute("style", "opacity: 0;")
}

const showLeftSide = () => {
    frontPose.setAttribute("style", "opacity: 0;")
    leftPose.setAttribute("style", "opacity: 1;")
    rightPose.setAttribute("style", "opacity: 0;")

}
const showRightSide = () => {
    frontPose.setAttribute("style", "opacity: 0;")
    leftPose.setAttribute("style", "opacity: 0;")
    rightPose.setAttribute("style", "opacity: 1;")
}

resetPose();
artist.addEventListener("mouseover", showLeftSide);
artist.addEventListener("mouseout", resetPose);

coder.addEventListener("mouseover", showRightSide);
coder.addEventListener("mouseout", resetPose);


// ----- Active Class on NavBar -----

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 190;
        let height = section.offsetHeight;
        let sectionHeight = section.clientHeight;
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + sectionHeight) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active')
            });
        };
    }); 
}


// --- Work Gallery populate and Modal ---

let gridContainer = document.querySelector("#grid-container");

const workRequest = fetch('data/work.json')
    .then (response => response.json())
    .then (data => {
        data.forEach(element => {
            let itemTitle = `<h5 class="item-title">${element.title}</h5>`;
            let itemImage = `<img src="${element.img}">`;
            let itemThumb = `<img src="${element.thumb}">`;
            let itemDescription = `<p>${element.description}</p>`
            let itemLink = element.link;
            let itemId = element.index
            let item = `<div id ="${itemId}" class="grid-item">${itemTitle} ${itemThumb}</div>`

            gridContainer.innerHTML += item;
            })

            // -- Modal --

            let lightBoxItem = document.querySelectorAll(".grid-item");
            let closeButton = document.querySelector("#closeModal");
            let modalContainer = document.querySelector(".modal-container");
            let modal = document.querySelector(".myModal");

            const showLightBox = (event) => {
                let index = event.target.parentElement.id
                modal.innerHTML = ` <h3 class="modal-title">${data[index].title}</h3> <img class="modal-img" src="${data[index].img}"> <p>${data[index].description}</p> <a href="${data[index].link}" target="blank">Visit website</a>`
                modalContainer.style.display = "flex";


                let nextButton = document.querySelector("#arrow-right");
                let previousButton = document.querySelector("#arrow-left");
                const nextSlide = () => {
                    
                    if (index >= lightBoxItem.length-1) {
                        index = 0
                    }
                    else {
                        index++
                    }
                    console.log(index)
                    console.log(lightBoxItem.length-1)

                    modal.innerHTML = ` <h3 class="modal-title">${data[index].title}</h3> <img class="modal-img" src="${data[index].img}"> <p>${data[index].description}</p> <a href="${data[index].link}" target="blank">Visit website</a>`
                    modalContainer.style.display = "flex";
                }

                const previousSlide = () => {
                    
                    if (index <= 0) {
                        index = lightBoxItem.length-1
                    }
                    else {
                        index--;
                    }
                    console.log(index)

                    modal.innerHTML = ` <h3 class="modal-title">${data[index].title}</h3> <img class="modal-img" src="${data[index].img}"> <p>${data[index].description}</p> <a href="${data[index].link}" target="blank">Visit website</a>`
                    modalContainer.style.display = "flex";
                }
                nextButton.addEventListener("click", nextSlide);
                previousButton.addEventListener("click", previousSlide);
            }
            const closeLightBox = () => {
                modal.innerHTML = ``
                modalContainer.style.display = "none";
            }

            lightBoxItem.forEach(() => addEventListener("click", showLightBox));
            closeButton.addEventListener("click", closeLightBox);
    });



