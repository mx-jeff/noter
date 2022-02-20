import { addNotes } from "./addNotes.js"
import { listNotes } from "./listNotes.js"

function main(){
    addNotes()
    // list todos
    const items = {...localStorage}

    if(items.length != 0){
        listNotes(items)
    }
}

main()