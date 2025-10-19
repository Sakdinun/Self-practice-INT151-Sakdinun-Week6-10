 // === TODO #1: Select <h1 id="title"> and set its text to "DOM Basics" ===
    // e.g., const title = ...; title.textContent = 'DOM Basics';

    // === TODO #2: Count .item elements and put the number into #count (use textContent) ===
    // e.g., const items = ...; const count = ...; document.getElementById('count').textContent = `Items: ${count}`;

    // === TODO #3: Add click handler on #add to append a new <li class="item">New item N</li> to #todo ===
    // Keep an incrementing number N starting from 1.
    // e.g., addBtn.addEventListener('click', () => { const li = document.createElement('li'); ... });

    // === TODO #4: Add click handler on #toggle to toggle the 'highlight' class on #todo (use classList.toggle) ===

    // === TODO #5: Add click handlers to log #todo.textContent and #todo.innerText so you can compare outputs ===
    // Note: innerText is CSS-aware (skips display:none); textContent includes hidden text.

    // OPTIONAL: Recompute and update the item count each time you add a new item.

const dabody = document.body
const dadiv = document.getElementsByTagName("div")[0]

const big1 = document.getElementById("title")
big1.textContent = "DOM Basics";


const todo = document.getElementById("count")
const nub = document.querySelectorAll('li')
todo.textContent = `Items: ${nub.length}`

const Add = document.getElementById('add')

const thelist = document.getElementById('todo')

let n = 1;
Add.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = `New item ${n}`
    li.classList.add('item')
    n++
    thelist.appendChild(li)
})


const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    thelist.classList.toggle('highlight')
})

const textCon = document.getElementById('show-textcontent')
const innerT = document.getElementById('show-innertext')

textCon.addEventListener('click', () => {
    console.log(thelist.textContent)
})

innerT.addEventListener('click', () => {
    console.log(thelist.innerText)
    console.log(thelist.innerHTML)
})