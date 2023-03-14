const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) =>{
    // console.log(event.pageX);    console.log(event.pageY);       read more
    const x = (event.pageX -btnEl.offsetLeft);
    const y = (event.pageY -btnEl.offsetLeft);

    btnEl.style.setProperty("--xPos",x+"px");
    btnEl.style.setProperty("--yPos",y+"px");
});