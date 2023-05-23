import { emoji } from "./emoji.js";

let wrap = document.querySelector(".main");
const input = document.querySelector(".header__input");

const uniqKeywordsArr = deleteRepeatsKeywords(emoji);
// console.log(uniqKeywordsArr);

//создаем карточку
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

// выводит массив со всеми карточками
function renderCart(arr) {
  arr.forEach((item) => makeCard(item));
}

renderCart(uniqKeywordsArr);

//удаляет дубли
function deleteRepeatsKeywords(arr) {
  return arr.map((obj) => {
    const arrKeys = obj.keywords.split(" ");
    const keysUniq = [...new Set(arrKeys)].join(" ");
    obj.keywords = keysUniq;
    return obj;
  });
}

input.addEventListener("input", () => {
  wrap.innerHTML = "";
  renderCart(findEmoji(emoji, input.value.toLowerCase()));
  console.log(input.value);
});

//функция поиска по строке
function findEmoji(arr, value) {
  const newArr = arr.filter(
    (obj) =>
      obj.title.toLowerCase().includes(value) ||
      obj.keywords.toLowerCase().includes(value)
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
