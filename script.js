const slides = document.querySelectorAll('.slide');


for (const slide of slides){

    slide.addEventListener('click',()=>{
        cleanActive();
        slide.classList.add('active');
    })
}

function cleanActive(){
    
    for (const slide of slides){
        slide.classList.remove('active');
    }
}