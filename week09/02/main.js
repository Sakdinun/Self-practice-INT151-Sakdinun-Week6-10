const keyinput = document.getElementById('keyInput');
const keylog = document.getElementById('keyLog');

keyinput.addEventListener('keypress', (k)=>{
    const pElement = document.createElement('p')
    console.log(k);
    
    if (k.key === 'Enter') {
        pElement.style.color = 'Blue'
        pElement.textContent = `You Pressed : ${k.key}`
        keylog.appendChild(pElement)
    }

    pElement.textContent = `You Pressed : ${k.key}`
    keylog.appendChild(pElement)
})