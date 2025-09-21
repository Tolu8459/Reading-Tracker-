const form = document.getElementById("book-form");
const books_reading = document.getElementById("books-et-progress");
const template = document.getElementById("container-div")

let books =[];

form.addEventListener('submit',function(e)  {
  e.preventDefault();

const title = form.title.value;
const author = form.author.value;
const pages = form.pages.value;

const newbook = {
title : title,
author : author,
pages : pages,
};

 const newBookCard= template.cloneNode(true);
 newBookCard.querySelector(".book-title").textContent = title + "by" + author;
 newBookCard.querySelector(".book-date").textContent = "start date:" + new Date().toLocaleDateString();

 

 books_reading.appendChild(newBookCard)

});

// book  reading suggestions
const Input = document.getElementById("input-title");
const suggestionBox = document.getElementById("suggestion");
let bookTitles = []

const API = "https://www.googleapis.com/books/v1/volumes?q=self+development&maxResults=20";
fetch(API)

.then(result => result.json()
  
)
.then(data =>{
  bookTitles = data.items.map(item =>item.volumeInfo.title)
  
})
.catch((err) => {
  console.error("error:",err)
});


Input.addEventListener("input",()=>{
  const text = Input.value.toLowerCase();
  const query = bookTitles.filter(
    name => name.toLowerCase().includes(text))
const div = document.createElement("div");
div.textContent = query;



});


