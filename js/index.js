import { emoji } from "./emoji.js";

let wrap = document.querySelector(".main");
const input = document.querySelector(".header__input");

const uniqKeywordsArr = deleteRepeatsKeywords(emoji);

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
function renderCart(arr) {
  arr.forEach((item) => makeCard(item));
}

renderCart(uniqKeywordsArr);
  const cards = document.querySelectorAll(".emoji-card");

input.addEventListener("input", () => {
  let inputValue = input.value.toLowerCase().trim();
  // wrap.innerHTML = "";
  filterEmoji(inputValue, cards);
});

//функция поиска по строке
function filterEmoji(value, cards) {
  wrap.innerHTML = "";

  // console.log(cards.length);

  cards.forEach((card) => {
    let titleText = card
      .querySelector(".emoji-card__title")
      .innerText.toLowerCase();
    let keysText = card
      .querySelector(".emoji-card__keywords")
      .innerText.toLowerCase();
    
    if (!titleText.includes(value) || !keysText.includes(value)) {
      card.classList.add("emoji-card_hidden");
      
    } else {
      card.classList.remove("emoji-card_hidden");
    }
      // !titleText.includes(value) || !keysText.includes(value)
      //   ? (card.style.display = "none")
      //   : (card.style.display = "block");

    //   console.log(titleText);
    // console.log(cards.length);

    wrap.innerHTML = cards;
  });

  // arr = Array.from(arr);
  // let a = arr.filter((card) => {
  //   let title = card.querySelector(".emoji-card__title");
  //   let keys = card.querySelector(".emoji-card__keywords");
  //   console.dir(title.innerText);
  //   !title.innerText.toLowerCase().includes(value) ||
  //   !keys.innerText.toLowerCase().includes(value)
  //     ? (card.hidden = true)
  //     : (card.hidden = false);
  // });
  // return a;
}

// const cards = document.querySelectorAll(".emoji-card");
//  console.log(cards)

// // cards.((card) => {
// //   // const title = card.querySelector("emoji-card__title");
// //   // const keys = card.querySelector(".emoji-card__keywords");

// //   // // console.log(title.innerText)

// //   // !title.innerText.toLowerCase().includes(value) ||
// //   // !keys.innerText.toLowerCase().includes(value)
// //   //   ? (card.hidden = true)
// //   //   : card;
// //   console.log(card)
// // })
