const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})

let slideIndex=0;
showslides();
function showslides(){
    let i;
    let slides=
    document.getElementsByClassName("slidefade");
    for (i=0; i <slides.length; i++) {
        slides[i].style.display="none"
    }
    slideIndex++;
    if (slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
setTimeout(showslides,2000);
}