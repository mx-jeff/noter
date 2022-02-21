import { copyTextToClipboard, deleteTask, sleep, updateTask } from "./functions.js"


export function listNotes(items){
    const taskContainer = document.querySelector(".tasks")
    const info = document.querySelector('p.info')

    for (const [key, value] of Object.entries(items)) {
        // console.log(`${key}: ${value}`);
        const item = document.createElement("div")
        item.classList.add("task")
        item.innerHTML = `
            ${key}
            <div class="btn-container">
                <a href="#" class="clipboard">
                    <img src="/public/svgs/regular/copy.svg" alt="copy-to-clipboard">
                    <p class="dz0-none">${value}</p> 
                </a>
                <a href="#" class="remove">
                    <img src="./svgs/regular/trash-alt.svg" alt="trash">
                    <p class="dz0-none">${key}</p>
                </a>
            </div>
        `
        taskContainer.appendChild(item)
    }

    // copy to clipboard
    document.querySelectorAll('.clipboard').forEach(linkCopy => {
        
        linkCopy.addEventListener("click", () => {
            info.textContent = "Coping..."
            const value = linkCopy.querySelector('p').textContent
            copyTextToClipboard(value)
            info.textContent = "Copied to clipboard!"
        })
    })

    // delete item
    document.querySelectorAll('.remove').forEach(linkCopy => {
        
        linkCopy.addEventListener("click", async() => {
            info.textContent = "Deleting..."
            const value = linkCopy.querySelector('p').textContent
            deleteTask(value)
            info.textContent = "Deleted!"
            updateTask()
        })
    })
}