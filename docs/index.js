let body = document.body;
const textCon = document.querySelector('.text-descript');
const dots = document.querySelectorAll('.dots');
const navBtn = document.querySelector('#toggle-btn');
const navBars = document.querySelectorAll('.bars');
const nav = document.querySelector('#nav-btns');
let navIsShowing = false;
nav.style.left = '-100%';

navBtn.addEventListener('click',()=>{
    if(navIsShowing === false){
        navBars[0].id = 'bar1';
        navBars[1].id = 'bar2';
        navBars[2].id = 'bar3';
        nav.style.left = '0%'
        navIsShowing = true;
    }
    else{
        navBars[0].id = 'bar11';
        navBars[1].id = 'bar22';
        navBars[2].id = 'bar33';
        nav.style.left = '-100%';
        navIsShowing = false;
    }
})




const firstText = `
                    <h1>Welcome to <i style="color: #f00;">Trailer.net</i></h1>
                    <p>
                    The home of trailer clips. Here you can find movie trailers as far back as 2018 to date.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nostrum inventore quas 
                    nihil corporis prae sentium quibusdam dolore deserunt enim quaerat, perspiciatis cum. Rer
                    um quod unde error voluptate, omnis voluptatem perferendis!.
                    consectetur adipisicing elit. Incidunt nostrum inventore quas 
                    nihil corporis prae sentium quibusdam dolore deserunt enim quaerat, perspiciatis cum. Rer
                    um quod unde error voluptate, omnis voluptatem petherferendi. All genre of movies can be found here,
                    some of which includes comedy, action, romance, animations, horror, scifi, thrill etc.
                    <i style="color: red;font-size: 18px;">Trailer.net</i> got you covered.
                    </p>
                `;
const secondText = `
                    <h1>Click on the <i style="color: #f00;">Login Button</i> to start your wonderful experience</h1>
                    <p>
                    The home of trailer clips. Here you can find movie trailers as far back as 2018 to date.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nostrum inventore quas 
                    nihil corporis prae sentium quibusdam dolore deserunt enim quaerat, perspiciatis cum. Rer
                    um quod unde error voluptate, omnis voluptatem perferendis!.
                    consectetur adipisicing elit. Incidunt nostrum inventore quas 
                    nihil corporis prae sentium quibusdam dolore deserunt enim quaerat, perspiciatis cum. Rer
                    um quod unde error voluptate, omnis voluptatem petherferendi. All genre of movies can be found here,
                    some of which includes comedy, action, romance, animations, horror, scifi, thrill etc.
                    <i style="color: red;font-size: 18px;">Trailer.net</i> got you covered.
                    </p>
                `;
const thirdText = `
                    <h1>Don't have an account? <i style="color: #f00;">Sign up</i> to start your wonderful experience</h1>
                    <p>
                    The home of trailer clips. Here you can find movie trailers as far back as 2018 to date.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nostrum inventore quas 
                    nihil corporis prae sentium quibusdam dolore deserunt enim quaerat, perspiciatis cum. Rer
                    um quod unde error voluptate, omnis voluptatem perferendis!.
                    consectetur adipisicing elit. Incidunt nostrum inventore quas 
                    nihil corporis prae sentium quibusdam dolore deserunt enim quaerat, perspiciatis cum. Rer
                    um quod unde error voluptate, omnis voluptatem petherferendi. All genre of movies can be found here,
                    some of which includes comedy, action, romance, animations, horror, scifi, thrill etc.
                    <i style="color: red;font-size: 18px;">Trailer.net</i> got you covered.
                    </p>
                `;
const textArr = [];
const backgroundSlide = [];

let slideIndex = 0;

textArr[0] = firstText;
textArr[1] = secondText;
textArr[2] = thirdText;


backgroundSlide[0] = './asset/sliders/main2.jpg';
backgroundSlide[1] = './asset/sliders/jungle_book.jpg';
backgroundSlide[2] = './asset/sliders/main4.jpg';


function SlideBackground(){

    if(slideIndex < backgroundSlide.length){
        body.style.backgroundImage = `url(${backgroundSlide[slideIndex]})`;
        textCon.innerHTML = textArr[slideIndex];
        textCon.style.animationName = 'slide-text'
        dots[slideIndex].style.background = 'red';

        slideIndex++;
    }
    else{
        slideIndex = 1;
        body.style.backgroundImage = `url(${backgroundSlide[0]})`;
        textCon.innerHTML = textArr[0];
        Array.from(dots).forEach(e => e.style.background = 'gray');
        dots[0].style.background = 'red';
    }

    setTimeout(SlideBackground,5000);
}
window.addEventListener('load',()=> SlideBackground());


console.log(window.innerWidth)