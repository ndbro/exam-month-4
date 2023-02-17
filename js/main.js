const BASE_URL = 'https://63e929e5b120461c6bec33f4.mockapi.io/';

const elCards = findElement('.cards');
const elTemplate = findElement ('#template');

let books = [];

// RENDER 
function renderBooks(array, parent = elCards) {
    parent.textContent = '';

    const fragment = document.createDocumentFragment();

    array.forEach((book)=>{
        const template = elTemplate.content.cloneNode(true);
        // console.log(book);
        const cardImg = findElement('.card-img-top' , template);
        const cardTitle = findElement('.card-title', template);
        const cardName = findElement('.card-text', template);
        const cardDate = findElement('.date', template);
        
        
        cardImg.src = book.image;
        cardTitle.textContent = book.name;
        cardName.textContent = book.title;
        cardDate.textContent = book.year;
        
        fragment.appendChild(template);
    });
    parent.appendChild(fragment);
};

// FETCH
(async function () {
    const res = await fetch(BASE_URL + '/products');

    let data = await res.json();
    books = data;
    renderBooks(books)
})();



// SEARCH

const searchInput = findElement('#search-input');

searchInput.addEventListener('change',()=>{
    const value = searchInput.value;

    const resultArr = [];

    books.forEach((element)=>{
        const title = element.name;
        const length = value.length;
        const searched = title.slice(0, length)
        console.log(value.toLowerCase() ,searched.toLowerCase());

        if (value.toLowerCase() === searched.toLowerCase()) {
            resultArr.push(element)
        }
    });

    renderBooks(resultArr);
    searchInput.value = "";
})

// MODAL START
const modalWrapper = findElement('.modal-wrapper');
const closeModal = findElement('#close-modal');

elCards.addEventListener('click',(evt)=>{
    const target = evt.target;

    if (target.className.includes('btn-info')) {
        modalWrapper.classList.remove('hidden');
    }
})

closeModal.addEventListener('click',()=>{
    modalWrapper.classList.add('hidden')
});





var splide = new Splide( '.splide', {
    perPage: 3,
    rewind : true,
  } );
  
splide.mount();