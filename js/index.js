import { emoji } from "./emoji.js";

let wrap = document.querySelector(".main");
const input = document.querySelector(".header__input");

const uniqKeywordsArr = deleteRepeatsKeywords(emoji);

renderCarts(uniqKeywordsArr);

const cards = document.querySelectorAll(".emoji-card");

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

//удаляет дубли
function deleteRepeatsKeywords(arr) {
  return arr.map((obj) => {
    const arrKeys = obj.keywords.split(" ");
    const keysUniq = [...new Set(arrKeys)].join(" ");
    obj.keywords = keysUniq;
    return obj;
  });
}

// выводит массив со всеми карточками
function renderCarts(arr) {
  arr.forEach((item) => makeCard(item));
}


input.addEventListener("input", () => {
  wrap.innerHTML = "";
  let inputValue = input.value.toLowerCase().trim();
  
  const start = new Date().getTime();

  // filterEmoji(inputValue, cards);
  renderCarts(filterEmoji(uniqKeywordsArr, inputValue));

  const end = new Date().getTime();
  console.log(`SecondWay: ${end - start}ms`);
});

//функция поиска по строке
//работа с NodeList

// function filterEmoji(value, cards) {

//   cards.forEach((card) => {
//     let titleText = card
//       .querySelector(".emoji-card__title")
//       .innerHTML.toLowerCase();
//     let keysText = card
//       .querySelector(".emoji-card__keywords")
//       .innerHTML.toLowerCase();
    
//     if (!titleText.includes(value) && !keysText.includes(value)) {
//       card.classList.add("emoji-card_hidden");
      
//     }else {
//       card.classList.remove("emoji-card_hidden");
//     }
//   });
// }




//функция поиска по строке
//работа с массивом

function filterEmoji(arr, value) {
  let newArr =  arr.filter(
    (obj) =>
      obj.title.toLowerCase().includes(value) ||
      obj.keywords.toLowerCase().includes(value)
  );

  return newArr
}




