const shareWrapper = document.getElementById('share-wrapper');
const shareBtn = shareWrapper.firstElementChild;

shareBtn.addEventListener('click',(e)=>{
    const svg = shareBtn.firstElementChild;
    svg.classList.toggle("clicked");
    const svgPath= svg.firstElementChild.style;
    if(svgPath.fill == "white"){
        svgPath.fill = "#6e8098"
    }else{ svgPath.fill = "white" }
    shareWrapper.children[1].classList.toggle('clicked');   
})
