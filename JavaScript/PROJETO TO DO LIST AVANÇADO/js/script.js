const inputAddTask=document.querySelector("#addTask")
const btnAdd=document.querySelector("#btn-submit")
const containerTarefas=document.querySelector(".container-tarefas")
const selectFilter = document.getElementById("select-filter");
const divs = document.querySelectorAll(".item");
const inputSrcTask=document.querySelector("#src")
const apagarSrc=document.querySelector("#apagarSrc")
const inputEditTask=document.querySelector("#editTask")
const addTaskContainer=document.querySelector(".addTask")
const editTaskContainer=document.querySelector(".editTask")
const btnCancelarEdit=document.querySelector("#btn-cancelar")
const btnEdit=document.querySelector("#btn-edit")
let taskTitle;
// funcoes 

// local storage


function showTodos() {
    const todos = getTodosLocalStorage();
    containerTarefas.innerHTML = "";

    todos.forEach((todo) => {
        addTask(todo.text, todo.done, 0);
    });
}
function getTodosLocalStorage(){
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    return todos
}
function addTodoLS(text,done=0,save=1){
    if(!save){
        save="ta salvo campeao"
    }
    const todos= getTodosLocalStorage()
    todos.push({text, done,save})
    localStorage.setItem("todos",JSON.stringify(todos))
}
function updateTodoLS(oldText,newText){
    const todos=getTodosLocalStorage()
    todos.forEach((todo)=>{
        if(todo.text==oldText){
            if(newText !== undefined){
                todo.text=newText
            } 
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos)); 
}
function excluirTodoLS(text){
    const todos=getTodosLocalStorage()
    const newTodos=todos.filter((todo)=>{
        todo.text !== text
    })
    localStorage.setItem("todos", JSON.stringify(newTodos));
}

function addTask(text,done=0,save=1) {
    
    if (text === "") {
        console.log("Faz algo aí, paizão!");
        return;
    }
    const div = document.createElement("div");
    div.classList.add("item");

    taskTitle = document.createElement("h3");
    taskTitle.innerText = text;
    div.appendChild(taskTitle);

    const div2 = document.createElement("div");
    div2.classList.add("buttons");

    const btnConcluido = document.createElement("button");
    btnConcluido.innerHTML = "<i class='bx bx-check done'></i>";
    btnConcluido.classList.add("done")
    div2.appendChild(btnConcluido);

    const btnAlterar = document.createElement("button");
    btnAlterar.innerHTML = "<i class='bx bx-pencil edit' ></i>";
    btnAlterar.classList.add("edit")
    div2.appendChild(btnAlterar);

    const btnExcluir = document.createElement("button");
    btnExcluir.innerHTML = "<i class='bx bx-x delete' ></i>";
    btnExcluir.classList.add("delete")
    div2.appendChild(btnExcluir);

    div.appendChild(div2);
    containerTarefas.appendChild(div);
    // text = "";

    if(done){
        div.classList.add("doneTask")
    }
    if(save){
        addTodoLS(text,done, save)
    }

}
function toggleContainers(){
    addTaskContainer.classList.toggle("hide");
    editTaskContainer.classList.toggle("hide");
    containerTarefas.classList.toggle("hide");
}


function filtrarTodos() {
    const divs = document.querySelectorAll(".item");

    divs.forEach((div) => {
        div.style.display = "flex";
    });
}

function filtrarFeitos() {
    const divs = document.querySelectorAll(".item");

    divs.forEach((div) => {
        div.style.display = div.classList.contains("doneTask") ? "flex" : "none";
    });
}

function filtrarNaoFeitos() {
    const divs = document.querySelectorAll(".item");

    divs.forEach((div) => {
        div.style.display = div.classList.contains("doneTask") ? "none" : "flex";
    });
}


function srcTask() {
    const inputSrcTask = document.querySelector("#src");
    const divs = document.querySelectorAll(".item");
    const searchTerm = inputSrcTask.value.toLowerCase();

    divs.forEach((div) => {
        const text = div.querySelector("h3");
        const textInput = text.innerText.toLowerCase();
        div.style.display = textInput.includes(searchTerm) ? "flex" : "none";
    });
}

function apagarBusca() {
    const inputSrcTask = document.querySelector("#src");
    const inputSrcTaskValue = inputSrcTask.value;

    if (inputSrcTaskValue.length > 0) {
        const novoValor = inputSrcTaskValue.slice(0, -1);
        inputSrcTask.value = novoValor;
        srcTask();
    }
}

function UpdateNewmTask(text){
    taskTitle.innerText=text

}



// eventos

document.addEventListener("click",(e)=>{
    const elementoClicado=e.target
    const parentElem = elementoClicado.closest(".item");
    let todoText

        if (elementoClicado.classList.contains("done")) {
            parentElem.classList.toggle("doneTask");
        }
        if(elementoClicado.classList.contains("edit")){
            todoText=parentElem.querySelector("h3").innerText
            toggleContainers()

            inputEditTask.value=todoText

        }
        if(elementoClicado.classList.contains("delete")){
            parentElem.remove()
            excluirTodoLS()
        }
})
btnCancelarEdit.addEventListener("click", () => {
    toggleContainers();
});

btnEdit.addEventListener("click",()=>{
    const inputEditTaskValue=inputEditTask.value
    updateTodoLS(taskTitle.innerText,inputEditTaskValue)
    if(inputEditTaskValue){
        UpdateNewmTask(inputEditTaskValue)
    }
    
    toggleContainers()

})



btnAdd.addEventListener("click", ()=>{
    const text=inputAddTask.value
    addTask(text,0,1);
})
selectFilter.addEventListener("change", function () {
    const valorSelecionado = selectFilter.value;

    if (valorSelecionado === "todos") {
        filtrarTodos();
    } else if (valorSelecionado === "feitos") {
        filtrarFeitos();
    } else if (valorSelecionado === "nao-feitos") {
        filtrarNaoFeitos();
    }
});

inputSrcTask.addEventListener("input", srcTask);

apagarSrc.addEventListener("click", apagarBusca);

showTodos()

































