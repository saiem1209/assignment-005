
function increaseHeart(){
        console.log("clicked");

    const oldFav = document.getElementById('favourites-btn').innerText;
    const oldd = parseInt(oldFav);
    const neWvalue = oldd + 1;
    document.getElementById('favourites-btn').innerText = neWvalue;

}
document.querySelector('.favourites-btn').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn2').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn3').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn4').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn5').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn6').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn7').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn8').addEventListener('click', increaseHeart);
document.querySelector('.favourites-btn9').addEventListener('click', increaseHeart);


