const bg_color = document.getElementById('bgColor');
const font_color = document.getElementById('fontColor')
const font_size = document.getElementById('fontSize')
const save = document.getElementById('saveBtn');
const reset = document.getElementById('resetBtn');
const show = document.getElementById('showBtn');
const label = document.getElementsByTagName('label');
const dabody = document.body;

document.addEventListener('DOMContentLoaded', () =>{
    dabody.style.color = localStorage.getItem('font')
    console.log(`Set font-color to ` + localStorage.getItem('font'));
    
    dabody.style.backgroundColor = localStorage.getItem('bg')
    console.log(`Set background to ` + localStorage.getItem('bg'));

    dabody.style.fontSize = localStorage.getItem('size')

})


save.addEventListener('mousedown', () =>{  
    localStorage.setItem('bg',bg_color.value)
    localStorage.setItem('font', font_color.value) 

    
    let font_value = ""
    switch (font_size.value) {
        case "small": font_value = '18px'; break;
        case "medium": font_value = '20px'; break;
        case "large": font_value = '32px'; break;
    }

    localStorage.setItem('size', font_value)
})

reset.addEventListener('mousedown', () => {
    localStorage.setItem('bg', '#ffffff')
    localStorage.setItem('font', '#111111') 
    localStorage.setItem('size', '16px')

    dabody.style.color = localStorage.getItem('font')
    dabody.style.backgroundColor = localStorage.getItem('bg')
    dabody.style.fontSize = localStorage.getItem('size')

})

show.addEventListener('mousedown', () => {
    dabody.style.color = localStorage.getItem('font')
    dabody.style.backgroundColor = localStorage.getItem('bg')
    dabody.style.fontSize = localStorage.getItem('size')

})





// console.log("I cow");