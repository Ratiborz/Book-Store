import './interfaces';
const loadMoreBtn:HTMLElement = document.querySelector('.load-more__btn')!;
const bookCard:HTMLElement = document.querySelector('.book-cards')!;

let subject:string = 'subject:';
let startIndex:number = 0;
let categoryName:string;

async function apiRequests() {
    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyCkmsYtqK_Z-5kvEdmYoDq372osdOunrLA&printType=books&startIndex=0&maxResults=6&langRestrict=en`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}

async function drawBookCard() {
    const data:BookVolume = await apiRequests();
    const dataItems = data.items;
    let out:string = '';
    console.log(dataItems);

    dataItems.forEach(function(item:BookItem) {
        out += `<div class="book-card__universal">
        <img class="book-card__main-photo" 
        src="${item.volumeInfo?.imageLinks?.thumbnail 
            ? item.volumeInfo.imageLinks.smallThumbnail 
            : '/src/images/universal-cover.png'}" alt="book-cover">
        <div class="book-card-info">
        <p class="book-card-info__author">
        ${item.volumeInfo?.authors[0] 
            ? authorsProcessing(item.volumeInfo?.authors) 
            : 'No authors available'}</p>
        <h3 class="book-card-info__book-name">${item.volumeInfo.title}</h3>
        <div class="book-card-info__rating"> 
        <img class="star" src="${item.volumeInfo.averageRating}">
        <span class="reviews">${item.volumeInfo.ratingsCount} review</span></div>
        <p class="book-card-info__description">${item.volumeInfo.description ? descriptionProcessing(item.volumeInfo.description) : 'No description available'}</p>
        <span class="book-card-info__price">$12.35</span>
        <button class="book-card-info__button">buy now</button>
        </div>
    </div>`
    })

    bookCard.insertAdjacentHTML('beforeend', out);
}

loadMoreBtn.addEventListener('click', function() {
    drawBookCard();
})

function descriptionProcessing(description:string) {
    let outDescription:string = '';

    if (description.length > 85) {
        outDescription += description.slice(0, 86)
    }

    return `${outDescription}...`;
}

function authorsProcessing(authors: [string]) {
    let totalAuthors:string = `${authors[0]}`;

    if (authors.length > 1) {
        authors.forEach((author) => {
            totalAuthors += `, ${author}`
        })
        return totalAuthors;
    } else {
        return authors[0];
    }
}
