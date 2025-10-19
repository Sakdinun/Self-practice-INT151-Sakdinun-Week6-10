// Lesson 3 - Events Starter
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';

let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list');
const form = document.getElementById('quoteForm');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const idInput = document.getElementById('quoteId');
const randomBtn = document.getElementById('randomBtn');
const randomDisplay = document.getElementById('randomQuoteDisplay');


function createQuoteElement(quote) {
  const wrap = document.createElement('div');
  wrap.dataset.id = String(quote.id);

  const contentP = document.createElement('p');
  contentP.textContent = quote.content;

  const authorP = document.createElement('p');
  authorP.textContent = quote.author;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.dataset.id = String(quote.id);

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.dataset.id = String(quote.id);

  // Button events (edit/delete)
  editBtn.addEventListener('click', () => {
    // fill form for editing
    contentInput.value = quote.content;
    authorInput.value = quote.author;
    idInput.value = String(quote.id);
    contentInput.focus();
  });

  delBtn.addEventListener('click', () => {
    const id = quote.id;
    const removedIndex = deleteQuote(id);
    if (removedIndex !== -1) {
      deleteQuoteFromDOM(id);
    }
  });

  wrap.appendChild(contentP);
  wrap.appendChild(authorP);
  wrap.appendChild(editBtn);
  wrap.appendChild(delBtn);

  return wrap;
}

function addQuoteToDOM(quote) {
  quoteList.appendChild(createQuoteElement(quote));
}

function updateQuoteInDOM(quote) {
  const node = quoteList.querySelector(`div[data-id="${quote.id}"]`);
  if (!node) return;
  // structure: [0]=content <p>, [1]=author <p>
  const ps = node.getElementsByTagName('p');
  if (ps[0]) ps[0].textContent = quote.content;
  if (ps[1]) ps[1].textContent = quote.author;
}

function deleteQuoteFromDOM(id) {
  const node = quoteList.querySelector(`div[data-id="${id}"]`);
  if (node && node.parentNode) node.parentNode.removeChild(node);
}

function renderQuotes() {
  quoteList.innerHTML = '';
  const all = getAllQuotes();
  all.forEach(addQuoteToDOM);
}

function showRandomQuote() {
  const all = getAllQuotes();
  if (all.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --';
    return;
  }
  const r = all[Math.floor(Math.random() * all.length)];
  randomDisplay.textContent = `"${r.content}" — ${r.author}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const idVal = idInput.value.trim();

  if (!content || !author) return; // basic guard

  if (idVal) {
    const id = Number(idVal);
    const updated = updateQuote(id, content, author);
    if (updated) updateQuoteInDOM(updated);
  } else {
    const created = addQuote(content, author);
    if (created) addQuoteToDOM(created);
  }

  // reset form
  form.reset();
  idInput.value = '';
  contentInput.focus();
});

randomBtn.addEventListener('click', showRandomQuote);

// 6) Initial render
renderQuotes();
