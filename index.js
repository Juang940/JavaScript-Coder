const parrafo = document.querySelector("p")
const input = document.querySelector('input')

input.addEventListener ('change', (e) =>{
    parrafo.textContent = e.target.value;
})