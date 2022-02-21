import { logger, sleep, checkStorage, updateTask } from "./functions.js"


export function addNotes(){
    const addBox = document.querySelector(".add-task")
    const form = document.querySelector("form")
    const button = document.querySelector("button")
    const addTaskBtn = document.querySelector(".add-task-btn")

    checkStorage(addBox)
    addTaskBtn.addEventListener("click", () => {
        addBox.style.display = "block"
        document.querySelector('.add-task-container').style.display = "none"
    })

    form.addEventListener("submit", async(e) => {
        e.preventDefault()
        const note = {}
        note.subject = e.target.querySelector('input').value
        note.message = e.target.querySelector('textarea').value
        
        if(note.subject != "" && note.message != ""){
            localStorage.setItem(note.subject, note.message)
            logger("Mensagem enviada com sucesso!", button)
            await sleep(1000)
            checkStorage(addBox)
            updateTask()

        } else{
            logger("Campos vazios! por favor insira o assunto e mensagem!", button)
        }
    })
}