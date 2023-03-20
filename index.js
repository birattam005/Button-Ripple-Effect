const btnEl = document.querySelector(".btn");  //.querySelector first btn class ko return karega.

btnEl.addEventListener("mouseover", (event) =>{
    // console.log(event.pageX);    console.log(event.pageY);       read more
    const x = (event.pageX -btnEl.offsetLeft);
    const y = (event.pageY -btnEl.offsetTop);

    btnEl.style.setProperty("--xPos",x+"px");       // this setProperty method set the property of css using js
    btnEl.style.setProperty("--yPos",y+"px");
});