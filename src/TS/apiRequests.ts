import './interfaces';
import { descriptionProcessing, authorsProcessing, ratingProcessing, cleanPastCategory, clearActiveCategory } from './utils';

const loadMoreBtn: HTMLElement = document.querySelector('.load-more__btn')!;
const bookCard: HTMLElement = document.querySelector('.book-cards')!;
const categoryList: NodeListOf<Element> = document.querySelectorAll('.list__item')!;
const buyBtn: NodeListOf<Element> = document.querySelectorAll('.book-card-info__button')!;

let subject: string = '';
let startIndex: number = 0;

let books: { 
    dataIndex: number,
    authors: string, 
    title: string, 
    averageRating: NodeListOf<Element>, 
    ratingsCount: Element, 
    description: string, 
    imageLinks: Element
}[] = [];

loadMoreBtn.addEventListener('click', drawBookCard);

categoryList.forEach((category) => {
    category.addEventListener('click', (event) => {
        const categoryObj: HTMLElement = event.target as HTMLElement;
        clearActiveCategory();

        categoryObj.classList.add('list__item-active');

        const activePoint = document.createElement('div');
        activePoint.classList.add('active-point');

        categoryObj.appendChild(activePoint);

        subject = `subject:${categoryObj.textContent}`;
        startIndex = 0;
        cleanPastCategory();
    });
});

async function apiRequests() {
    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q="${subject ? subject :'subject:Architecture'}"&key=AIzaSyCkmsYtqK_Z-5kvEdmYoDq372osdOunrLA&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

async function drawBookCard() {
    const data: BookVolume = await apiRequests();
    const dataItems = data.items;
    let out: string = '';
    console.log(dataItems);

    dataItems.forEach(function (item: BookItem, commentIndex: number) {
        out += `<div class="book-card__universal" data-index="${commentIndex + 6}">
        <img class="book-card__main-photo" 
        src="${
            item.volumeInfo?.imageLinks?.thumbnail
                ? item.volumeInfo.imageLinks.thumbnail
                : '/src/images/universal-cover.png'
        }" alt="book-cover">
        <div class="book-card-info">
        <p class="book-card-info__author">
        ${item.volumeInfo?.authors ? authorsProcessing(item.volumeInfo?.authors) : 'No authors available'}
        </p>
        <h3 class="book-card-info__book-name">${item.volumeInfo.title}</h3>
        <div class="book-card-info__rating"> 
        ${
            item.volumeInfo?.averageRating
                ? ratingProcessing(item.volumeInfo.averageRating)
                : '<span class="no-rating">No rating</span>'
        }
        <span class="reviews">${item.volumeInfo?.ratingsCount ? item.volumeInfo.ratingsCount : 14} review</span></div>
        <p class="book-card-info__description">${
            item.volumeInfo?.description
                ? descriptionProcessing(item.volumeInfo.description)
                : 'No description available'
        }</p>
        <span class="book-card-info__price">${
            typeof item.saleInfo?.retailPrice === 'number' ? item.saleInfo.retailPrice : '12.35$'
        }</span>
        <button class="book-card-info__button" data-index="${commentIndex + 6}">buy now</button>
        </div>
    </div>`;
    });

    bookCard.insertAdjacentHTML('beforeend', out);
    startIndex += 6;
}

buyBtn.forEach((btn) => {

    btn.addEventListener('click', (event) => {
        const btnObj: HTMLElement = event.target as HTMLElement;

        if (btnObj.textContent === 'In the Cart') {
            btnObj.innerText = 'buy now'
            deleteBookFromBasket(btnObj);
        }else {
            btnObj.innerText = 'In the Cart';
            addBookInBasket(btnObj);
        }
    })
})

function addBookInBasket(btnObj: HTMLElement) {
    const bookCard = btnObj.parentNode.parentNode;

    const dataIndex = parseInt(btnObj.getAttribute('data-index'), 10);

    const bookAuthors = bookCard.querySelector('.book-card-info__author');
    const bookTitle = bookCard.querySelector('.book-card-info__book-name');
    const bookAverRating = bookCard.querySelectorAll('.star');
    const bookRatingCount = bookCard.querySelector('.reviews');
    const bookDescription = bookCard.querySelector('.book-card-info__description');
    const bookImageLinks = bookCard.querySelector('.book-card__main-photo');
    console.log(dataIndex);

    let book = {
        dataIndex: dataIndex,
        authors: bookAuthors.textContent,
        title: bookTitle.textContent,
        averageRating: bookAverRating,
        ratingsCount: bookRatingCount,
        description: bookDescription.textContent,
        imageLinks: bookImageLinks
    } 
    books.push(book);
    console.log(books)
    totalCountBooks();
}

function deleteBookFromBasket(btnObj: HTMLElement) {
    const bookCard = btnObj.parentNode.parentNode;

    const dataIndex = btnObj.getAttribute('data-index');



}

function totalCountBooks() {
    const containerCount:HTMLElement = document.querySelector('.container-basket')!;
    const totalCount = document.createElement('span');

    if (books.length > 0) {
        totalCount.classList.add('active-basket');
        containerCount.appendChild(totalCount);
    }
    else if (books.length === 0) {
        totalCount.remove()
    }
}
