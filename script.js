const button = document.querySelector('#button-add-task')
const input = document.querySelector('#input-task')
const completeList = document.querySelector('.list-tasks')

let myListItens = []

reloadTask()

function getTaskInput(){

    if(input.value){

        myListItens.push({
            task: input.value,
            check: false,
            change: false
        })

        
        input.value = ''

        showTasks()

    }else{
        alert("Digite o conteúdo da Task")
    }

    
}

function showTasks(){

    let newList = ''

    myListItens.forEach( (item, index) => {
        
        newList = newList + `
        
            <li class="task ${item.check && "done"}">
                <img src="img/checked.png" alt="check-na-tarefa" onclick="checkTask(${index})">
                <p onclick="changeTask(${index})">${item.task}</p>
                <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick="deleteTask(${index})">
            </li>
            
        `
        
    })

    completeList.innerHTML = newList

    localStorage.setItem('list', JSON.stringify(myListItens))
    
}

function deleteTask(index){

    myListItens.splice(index, 1)

    showTasks()
}

function checkTask(index){

    myListItens[index].check = !myListItens[index].check

    showTasks()
}

function reloadTask(){
    const tasksLocalStorage = localStorage.getItem('list')

    if(tasksLocalStorage){
        myListItens = JSON.parse(tasksLocalStorage)
    }

    showTasks()
}



button.addEventListener('click', getTaskInput)


