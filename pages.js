let pageNumber = 0

const pages = [
    { copy: "a massive foodie her ex used to call her 'Kirby' from Pokemon as a pet name", background: "#edc7a9", 
    circle: "#3e78ed" },
    { copy: "in love with life and curious about many things in this world and beyond", background: "#a1fffe",
    circle: "#e34a47" },
    { copy: "a yoga enthusiast especially hot yoga in winter. She's also a certified Children's Yoga Educator", background: "#d3c7f3",
    circle: "#f7fe00" },
    { copy: "letting you <a href='pdf.pdf'>download her CV</a>", background: "#faffb8", circle: "#b472e6" }
]

const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')


const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1){
        pageNumber = 0
    }

    updateSection()
}

const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
}

const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener("click", function() {
    next()
   
})

previousTag.addEventListener("click", function () {
    previous()
})

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowRight") {
        next()
    }

    if (e.key == "ArrowLeft") {
        previous()
    }
})