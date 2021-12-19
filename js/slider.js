let items = [
    {
        path: "img/danet.jpg",
    },
    {
        path: "img/netda.jpg",
    },
    {
        path: "img/netnet.jpg",
    }

];



let currentSlide = 0;

const slideritem = document.querySelector(".slider__list");
const btnPrev = document.querySelector(".slider__button--prev");
const btnNext = document.querySelector(".slider__button--next");

function checkCards () {
    slideritem.style.backgroundImage = "url(" + items[currentSlide].path + ")";
}


function changeSlide () {
    if (currentSlide < items.length - 1)
      currentSlide++;
    else
      currentSlide = 0;
    checkCards();

    return true;
}

function prevSlide () {
    if (currentSlide > 0)
    currentSlide--;
    else 
    currentSlide = 2
    checkCards();

    return true;
}

btnPrev.addEventListener("click", prevSlide);

btnNext.addEventListener("click", changeSlide);

