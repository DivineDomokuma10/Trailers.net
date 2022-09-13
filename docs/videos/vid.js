
let profileName = document.querySelectorAll('.profile p');
let firstViewMain = document.querySelector('.first-view-main');
let mainNav = document.querySelector('.main-nav nav')
let slideMovieName = document.querySelector('.text-div h1 i');
let slideMovieDescription = document.querySelector('.text-div > p');
let slideMovisGenre = document.querySelector('.genre span');
let search = document.querySelectorAll('form input')
let slideMovieReleaseDate = document.querySelector('.release-date span');
let activeSlideIds = document.querySelectorAll('.folo-up-img-cons');
let slideIndex = 0;

const navBtn = document.querySelector('#toggle-btn');
const navBars = document.querySelectorAll('.bars');
const nav = document.querySelector('.slide-nav');
const slideNavCancel = document.querySelector('.slide-cancel');
nav.style.top = '-20%';

navBtn.addEventListener('click',()=> nav.style.top = '0%' )
slideNavCancel.addEventListener('click', ()=> nav.style.top = '-20%');


let videoDisplayCon = document.querySelector('#video-display');
let canelPage = document.querySelector('#canel-con p');
let videoPlayer =  document.querySelector('#video-display video');

videoDisplayCon.style.display = 'none';
canelPage.onclick  = () =>{
    videoDisplayCon.style.display = 'none';
    videoPlayer.src = '';
};

Array.from(profileName).forEach(pN=>{
    pN.textContent = `${localStorage.firstName} ${localStorage.surname}`;
})

fetch('../API/homeSlide.json').then(res=> res.json())
.then(data=> {
    function slide(){
        if(slideIndex < data.length){
            firstViewMain.style.background = `url(${data[slideIndex].bg})`;
            slideMovieName.textContent = data[slideIndex].name;
            slideMovieDescription.textContent = data[slideIndex].text;
            slideMovisGenre.textContent = data[slideIndex].genre;
            slideMovieReleaseDate.textContent = data[slideIndex].releaseDate;
            activeSlideIds[slideIndex].style.border = '3px solid rgb(36, 192, 36)';
            slideIndex++;
        }
        else{
            firstViewMain.style.background = `url(${data[0].bg})`;
            slideMovieName.textContent = data[0].name;
            slideMovieDescription.textContent = data[0].text;
            slideMovisGenre.textContent = data[0].genre;
            slideMovieReleaseDate.textContent = data[0].releaseDate;
            Array.from(activeSlideIds).forEach(e => e.style.border = '3px solid white');
            activeSlideIds[0].style.border = '3px solid rgb(36, 192, 36)';
            slideIndex = 1;
        }
        setTimeout(slide,5500);
    }
    window.onload = slide();
});

renderVideo();


async function renderVideo(){
    const res = await fetch('../API/video.json');
    const videos = await res.json();

    videos.forEach(elem => {
        document.querySelector('#video').innerHTML += 
                `<div class="container" id="${elem.video}">
                    <img src="${elem.cover}" alt="">
                    <div class="video-info">
                        <h4>${elem.name}</h4>
                        <p>Genre: <span>${elem.genre}</span></p>
                        <p>Year: <span>${elem.year}</span></p>
                    </div>
                </div>`
    });

    let ClickedTrailer = document.querySelectorAll('.container');
    Array.from(ClickedTrailer).forEach(e =>{
        e.onclick = ()=>{
            videoDisplayCon.style.display = 'block';
            videoPlayer.src = `${e.id}`;
        }
    });

    search[0].addEventListener('input', e =>{
        
            let srchVal = e.target.value.toLowerCase();
            Array.from(ClickedTrailer).forEach(i =>{
                let srchItm = i.lastElementChild.firstElementChild.textContent.toLowerCase();
                if(srchItm.search(srchVal) != -1){
                    i.style.display = 'block';
                }
                else{
                    i.style.display = 'none';
                }
            })
    })

    search[1].addEventListener('input', e =>{
        
        let srchVal = e.target.value.toLowerCase();
        Array.from(ClickedTrailer).forEach(i =>{
            let srchItm = i.lastElementChild.firstElementChild.textContent.toLowerCase();
            if(srchItm.lastIndexOf(srchVal) != -1){
                i.style.display = 'block';
            }
            else{
                i.style.display = 'none';
            }
        })
})

}