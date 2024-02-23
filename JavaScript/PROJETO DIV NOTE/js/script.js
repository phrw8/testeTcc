const inpAddNote=document.querySelector("#inp-add-note")
const btnSubmitNote=document.querySelector("#submitNote")
const containerNotes=document.querySelector(".container-notes")
const inpSrch=document.querySelector("#inp-search")
const btnSrch=document.querySelector("#btn-search")

function getNotes(){
    const notes=JSON.parse(localStorage.getItem("notes"))|| []
    return notes
}
function addNoteLS(text,pin=0,save=0,id){
    if(!save){
        save="ta salvo campeao"
    }
    const notes= getNotes()
    notes.push({ text, pin,save,id})
    localStorage.setItem("notes",JSON.stringify(notes))
}
function showNote(){
    clearNotes()
    const notes=getNotes()
    notes.forEach((note)=>{
        addNote(note.text,note.pin,save=0,note.id)
    })
}
function clearNotes(){
    containerNotes.replaceChildren([])
}

function updateNoteLS(newText=0,pin=0,id){
    const notes=getNotes()
    notes.forEach((n)=>{
        if(n.id==id){
            if(newText !== undefined){
                n.text=newText
            }
            n.pin=pin
            
        }
    })
    localStorage.setItem("notes", JSON.stringify(notes)); 
}

function addNote(text,pin=0,save=1,id){
    const note=document.createElement("div")
    note.classList.add("note")
    note.dataset.id = id;

    const textarea=document.createElement("textarea")
    textarea.placeholder="Escreva ai patrao"
    textarea.value=text

    const iPin=document.createElement("i")
    iPin.classList.add("bx")
    iPin.classList.add("bxs-pin")

    const hoverIcons=document.createElement("div")
    hoverIcons.classList.add("hover-icons")

    const iX=document.createElement("i")
    iX.classList.add("bx")
    iX.classList.add("bx-x")

    const iPlus=document.createElement("i")
    iPlus.classList.add("bx")
    iPlus.classList.add("bxs-file-plus")

    hoverIcons.appendChild(iX)
    hoverIcons.appendChild(iPlus)

    note.appendChild(textarea)
    note.appendChild(iPin)
    note.appendChild(hoverIcons)
    containerNotes.appendChild(note)


    textarea.addEventListener("keydown", ()=> {
        updateNoteLS(textarea.value,pin,id)
    })
    iPlus.addEventListener("click",()=>{
        const notes=getNotes()
        let cloneNote
        notes.forEach((n)=>{
            if(n.id==id){
                cloneNote=n
            }
        })
        copyNote(cloneNote,generateId())
    })
    iPin.addEventListener("click",(e)=>{
        
        if(note.classList.contains("fixed")){
            pinNote(iPin)
            pin=0
            updateNoteLS(textarea.value,pin,id)
        }else {
            pinNote(iPin)
            pin=1
            updateNoteLS(textarea.value,pin,id)
        }
        
    })
     iX.addEventListener("click",(e)=>{
        excluirNotes(note)
     })
     if(save){
        addNoteLS(text,pin,save,id)
     } else{
        console.log("nao precisa salvar")
     }
     if(pin){
        pinNote(iPin)
     }
     
} 

function pinNote(e){
    pin=e.closest(".note")
    pin.classList.toggle("fixed")
    orderNotes()
}

function orderNotes(){
    const notesArray=Array.from(document.querySelectorAll(".note"))


    const orderedNotes=notesArray.sort((a,b)=>(a.classList.contains("fixed") && !b.classList.contains("fixed") ? -1 : 1));
    containerNotes.innerHTML = '';

    orderedNotes.forEach(note => containerNotes.appendChild(note));
}

function excluirNotes(note){
    const notes = getNotes();
    const filteredNotes = notes.filter(n => n.id != note.dataset.id);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
    note.remove();
}

function copyNote(note,id) {
    addNote(note.text, note.pin, note.save, id);
}

function generateId(){
    return Math.floor(Math.random()*5000)
}

function filterNotes(){
    const notesArray=Array.from(document.querySelectorAll(".note"))
    const inpSrchValue=inpSrch.value.toLowerCase()

    notesArray.forEach((note)=>{
        const textNote=note.querySelector("textarea")
        const textNoteLC=textNote.value.toLowerCase()
        note.style.display = textNoteLC.includes(inpSrchValue) ? "block" : "none";
    })
}

btnSubmitNote.addEventListener("click",(e)=>{
    e.defaultPrevented
    addNote(inpAddNote.value,0,1,generateId())
    inpAddNote.value=""
    
})

inpSrch.addEventListener("keydown",()=>{
    filterNotes()
})



showNote()














