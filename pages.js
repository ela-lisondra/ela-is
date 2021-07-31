let pageNumber = 0

const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const outputTag = document.querySelector('h2')

const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > 10){
        pageNumber = 1
    }

    updateSection()
}

const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 1) {
        pageNumber = 10
    }

    updateSection()
}

const updateSection = function () {
    outputTag.innerHTML = pageNumber
}

nextTag.addEventListener("click", function() {
    next()
   
})

previousTag.addEventListener("click", function () {
    previous()
})