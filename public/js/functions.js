import { listNotes } from "./listNotes.js"


export const sleep = ms => new Promise(r => setTimeout(r, ms))


export function checkStorage(addBox){
    if(localStorage.length == 0){
        addBox.style.display = "block"
    } else {
        addBox.style.display = "none"
    }
    // addBox.style.display = "block"
}


export async function logger(msg, button, secs=3000){
    button.textContent = msg
    button.disabled = true
    await sleep(secs)
    button.disabled = false
    button.textContent = "Enviar"
}


// copping to clipboard
export function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}


export function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
  

// delete task
export function deleteTask(value){
    localStorage.removeItem(value)
}

export function updateTask(){
    const taskContainer = document.querySelector(".tasks")
    taskContainer.innerHTML = ""
    const upItems = {...localStorage}
    listNotes(upItems)
}