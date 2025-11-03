const btn=document.querySelector("button")
btn.addEventListener("click", () => {
    const rndcol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor=rndcol;
});
function random(number) {
    return Math.floor(Math.random() * (number+1));
}
