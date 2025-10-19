const add = document.getElementById('add')
const remove = document.getElementById('remove')
const toggle = document.getElementById('toggle')



const box = document.getElementById('box')

add.addEventListener('click', () =>{
    box.classList.add('bordered')
})

remove.addEventListener('click', () =>{
    box.classList.remove('bordered')
})


toggle.addEventListener('click', () =>{
    box.classList.toggle('bordered')
})

