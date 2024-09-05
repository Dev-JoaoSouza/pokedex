const showCard = document.querySelector(".container-details");
const close = document.querySelector(".close");

const cardName = document.querySelector(".image-card-title h3");
const cardNumber = document.querySelector(".image-card-title span");
const cardImage = document.querySelector(".image-card img");
const card = document.querySelector(".image-card");
const cardTypes = document.querySelector(".image-card-types");
const cardAbilities = document.querySelector(".about li:nth-child(1) span:nth-child(2)");
const cardHeight = document.querySelector(".about li:nth-child(2) span:nth-child(2)");
const cardWeight = document.querySelector(".about li:nth-child(3) span:nth-child(2)");
const cardHp = document.querySelector(".ability li:nth-child(1) span:nth-child(2)");
const cardAttack = document.querySelector(".ability li:nth-child(2) span:nth-child(2)");
const cardDefense = document.querySelector(".ability li:nth-child(3) span:nth-child(2)");
const cardSAttack = document.querySelector(".ability li:nth-child(4) span:nth-child(2)");
const cardSDefense = document.querySelector(".ability li:nth-child(5) span:nth-child(2)");
const cardSpeed = document.querySelector(".ability li:nth-child(6) span:nth-child(2)");

let cardClass;

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('pokemon')) {
        showCard.classList.add("no-display");
        escreverCard(el);
    }

    if (el.parentElement.classList.contains('pokemon')) {
        showCard.classList.add("no-display");
        escreverCard(el.parentElement);
    }

    if (el.parentElement.classList.contains('detail')) {
        showCard.classList.add("no-display");
        escreverCard(el.parentElement.parentElement);
    }

    if (el.classList.contains('close')) {
        showCard.classList.remove("no-display");
        card.classList.remove(cardClass[1]);
        cardImage.src = "";
    }

})

function escreverCard(element) {
    cardName.innerText = element.querySelector('.name').innerText;
    cardNumber.innerText = element.querySelector('.number').innerText;
    cardImage.src = element.querySelector('.pokemon .detail img').src;
    cardImage.alt = element.querySelector('.pokemon .detail img').alt;
    cardClass = element.className.split(" ");
    card.classList.add(cardClass[1]);
    let types = element.querySelectorAll('.type');
    cardTypes.innerHTML = "";
    types.forEach(criarTypes);
    cardAbilities.innerText = element.querySelector('.abilities').innerText;
    cardHeight.innerText = element.querySelector('.height').innerText;
    cardWeight.innerText = element.querySelector('.weight').innerText;
    cardHp.innerText = element.querySelector('.hp').innerText;
    cardAttack.innerText = element.querySelector('.attack').innerText;
    cardDefense.innerText = element.querySelector('.defense').innerText;
    cardSAttack.innerText = element.querySelector('.special-attack').innerText;
    cardSDefense.innerText = element.querySelector('.special-defense').innerText;
    cardSpeed.innerText = element.querySelector('.speed').innerText;
}

function criarTypes(tipo) {
    const pokemonType = tipo.innerText.toLowerCase();
    const pokemonTypeLi = `<li class="type ${pokemonType}">${pokemonType}</li>`;
    cardTypes.innerHTML += pokemonTypeLi;
}