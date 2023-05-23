import { emoji } from "./emoji.js";

let wrap = document.querySelector(".emoji-finder__wrap");
const input = document.querySelector(".emoji-finder__find");

const uniqKeywordsArr = deleteRepeatsKeywords(emoji);
console.log(uniqKeywordsArr);

function makeCard(item) {
  let card = document.createElement("div");
  card.classList.add("emoji-card");

  let divImg = document.createElement("div");
  divImg.classList.add("emoji-card__img");
  divImg.innerText = item.symbol;

  let divTitle = document.createElement("div");
  divTitle.classList.add("emoji-card__title");
  divTitle.innerText = item.title;

  let divKeywords = document.createElement("div");
  divKeywords.classList.add("emoji-card__keywords");
  divKeywords.innerText = item.keywords;

  wrap.append(card);

  card.append(divImg);
  card.append(divTitle);
  card.append(divKeywords);
}

//выводит массив со всемми карточками
// function renderCart(arr) {
//   arr.forEach((item) => makeCard(deleteRepeats(item)));
// }

renderCart(emoji);

//удаляет дубли
function deleteRepeatsKeywords(arr) {
  return arr.map((obj) => {
    console.log(obj.keywords);
    obj.keywords
      .split(" ")
      .filter((item, i, array) => array.indexOf(item) === i)
      .join("");
  });
}

input.addEventListener("input", () => {
  wrap.innerHTML = "";
  renderCart(findEmoji(emoji, input.value));
});

//функция поиска по строке
function findEmoji(arr, value) {
  const newArr = arr.filter(
    (obj) => obj.title.includes(value) || obj.keywords.includes(value)
  );

  return newArr;
}

// function cardRender(arr) {
//     let card = "";
//     let cards = ""

//     arr.forEach(({ symbol, title, keywords})=>{
//         card = `
//         <div class="emoji-card">
//             <div class="emoji-card__img">${symbol}</div>
//             <div class="emoji-card__title">${title}</div>
//             <div class="emoji-card__keywords">${keywords}</div>
//         </div>
//     `
//         cards += card
//     })

//     wrap.innerHTML = cards
// }

// cardRender(emoji)
