const addBox = document.querySelector(".add-task")
const form = document.querySelector("form")
const button = document.querySelector("button")

const sleep = ms => new Promise(r => setTimeout(r, ms))

function checkStorage(addBox){
    if(localStorage.length == 0){
        addBox.style.display = "block"
    } else {
        addBox.style.display = "none"
    }
    // addBox.style.display = "block"
}

checkStorage(addBox)

async function logger(msg, secs=3000){
    button.textContent = msg
    button.disabled = true
    await sleep(secs)
    button.disabled = false
    button.textContent = "Enviar"
}


form.addEventListener("submit", async(e) => {
    e.preventDefault()
    const note = {}
    note.subject = e.target.querySelector('input').value
    note.message = e.target.querySelector('textarea').value
    // console.log(note)
    // const JSONote = JSON.stringify(note)
    if(note.subject != "" && note.message != ""){
        localStorage.setItem(note.subject, note.message)
        logger("Mensagem enviada com sucesso!")
        await sleep(1000)
        checkStorage(addBox)
    } else{
        logger("Campos vazios! por favor insira o assunto e mensagem!")
    }
})


// list todos
const items = {...localStorage}

if(items.length != 0){
    const taskContainer = document.querySelector(".tasks")
    
    for (const [key, value] of Object.entries(items)) {
        // console.log(`${key}: ${value}`);
        const item = document.createElement("div")
        item.classList.add("task")
        item.innerHTML = `
            ${key}
            <a href="#">
                <img src="/public/svgs/regular/copy.svg" alt="copy-to-clipboard">
            </a> 
        `
        taskContainer.appendChild(item)
    }
}