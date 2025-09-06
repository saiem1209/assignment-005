const favouritesButton = document.querySelectorAll('.favourites-btn');
for(let favourite of favouritesButton){
    favourite.addEventListener('click', increaseHeart)
}

function increaseHeart(){
    const oldFav = document.getElementById('favourites-btn').innerText;
    const oldd = parseInt(oldFav);
    const neWvalue = oldd + 1;
    document.getElementById('favourites-btn').innerText = neWvalue;

}

const CallButton = document.querySelectorAll('.call-btn');
for(let call of CallButton){
    call.addEventListener('click', decreseCoin)
}
function decreseCoin(){
    const oldCoin = document.getElementById('coin-amnt').innerText;
    const OldCoinValue = parseInt(oldCoin);
    const neWvalue = OldCoinValue - 20;
    if(neWvalue < 0){
        alert('not enough coin');
        return;
    }
    document.getElementById('coin-amnt').innerText = neWvalue;

}

const copyButton = document.querySelectorAll('.copy-btnn');
for(let copy of copyButton){
    copy.addEventListener('click', increaseCopy);
}

function increaseCopy(){
    const oldCopy = document.getElementById('copy-amnt').innerText;
    const OldCopyValue = parseInt(oldCopy);
    const neWCopy = OldCopyValue + 1;
    document.getElementById('copy-amnt').innerText = neWCopy;
    alert('text copied!');
}

const now = new Date();
const localTimeString = now.toLocaleTimeString();


function getelement(id){
    const element = document.getElementById(id);
    return element;
}

const CallBtns = document.getElementsByClassName('call-btn');

for(let call of CallBtns){
    call.addEventListener('click', function(){
        
        const title = call.parentNode.parentNode.childNodes[3].innerText;
        const number = call.parentNode.parentNode.childNodes[7].innerText;
        const historyContainer = getelement('history-container');
        
        const newHistory = document.createElement("div");

    newHistory.innerHTML = `
                    <div
              class="bg-[#FAFAFA] w-max-[280px] h-[65px] rounded-lg p-2 flex justify-between items-center mt-2"
            >
              <div>
                <h2 class="text-[10px]">${title}</h2>
                <p>${number}</p>
              </div>
                <p class="">${localTimeString}</p>
            </div>
    `;
    historyContainer.append(newHistory);
        
    });
}


document.getElementById('clear-btn').addEventListener('click', function(){
    const historyContainer = getelement('history-container');
    historyContainer.innerHTML= "";
})


const copyButtons = document.querySelectorAll('.copy-btnn');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSelector = button.dataset.target;
    if (!targetSelector) return;

    const numberElement = document.querySelector(targetSelector);
    if (!numberElement) return;

    const numberText = numberElement.innerText.trim();

    navigator.clipboard.writeText(numberText).then(() => {
      button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
      }, 1500);
    });
  });
});
