let box = []

let length = 0
let tile = 8
let gridwidth = tile * length

let border = document.createElement('div')
border.classList.add('border')

let container = document.createElement('div')
container.classList.add('grid-container')

let button = document.createElement('button')
button.innerText = 'Click Me'
button.addEventListener('click', (event) => {
    length = prompt('Enter grid length')
    console.log(length)
    if (length == 0) {
        length = 80
    }
    createGrid(length)
})



document.body.appendChild(button)
document.body.appendChild(border)
border.appendChild(container)

createGrid(length)

function createGrid(gridlength) {

    if (gridlength > 80) {
        alert("Enter a number less than or equal to 80!")
    } else {
        if (gridlength === 0) {
            gridlength = 80;
        }

        container.style.width = `${gridlength * tile}px`;

        while (container.firstChild) {
            container.firstChild.remove()
        }

        
    
        for (let i = 0; i < gridlength * gridlength; i++) {
           
                box[i] = document.createElement('div')
                box[i].className = 'tile'
                box[i].addEventListener('mouseenter', (event) => {
                    if (event.ctrlKey) {
                        let red = Math.floor(Math.random() * 255)
                        let green = Math.floor(Math.random() * 255)
                        let blue = Math.floor(Math.random() * 255)

                        box[i].setAttribute('style', `background : rgb(${red}, ${green}, ${blue});`)
                    }
                })
                container.appendChild(box[i])
            
        }
    }
    
    
}

