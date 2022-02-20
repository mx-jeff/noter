import { copyTextToClipboard } from "./functions.js"


export function listNotes(items){
    const taskContainer = document.querySelector(".tasks")

    for (const [key, value] of Object.entries(items)) {
        // console.log(`${key}: ${value}`);
        const item = document.createElement("div")
        item.classList.add("task")
        item.innerHTML = `
            ${key}
            <a href="#" class="clipboard">
                <img src="/public/svgs/regular/copy.svg" alt="copy-to-clipboard">
                <p class="dz0-none">${value}</p> 
            </a>
        `
        taskContainer.appendChild(item)
    }

    // copy to clipboard
    document.querySelectorAll('.clipboard').forEach(linkCopy => {
        
        linkCopy.addEventListener("click", () => {
            const value = linkCopy.querySelector('p').textContent
            alert("coping to clipboard!")
            copyTextToClipboard(value)
        })
    })
}