//Required selectors to be used
let form = document.getElementById('form')
let tasks = document.getElementById('tasks')
let textInput = document.getElementById('textInput')
let dateInput = document.getElementById('dateInput')
let textarea = document.getElementById('textarea')
let addButton = document.getElementById('add')
let msg = document.getElementById('msg')

//Form validation
form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('button clicked')
  formValidation()
})

let formValidation = () => {
  if (textInput.value === '') {
    console.log('failure')
    msg.innerHTML = 'Please enter a task.'
  } else {
    console.log('success')
    msg.innerHTML = ' '

    acceptData()

    //function to close the modal when user clicks on the button labelled 'Add
    add.setAttribute('data-bs-dismiss', 'modal')
    add.click()
    /*
    (() => {
      add.setAttribute('data-bs-dismiss', '')
    })()*/
  }
}

//Empty array tp collect the user data from the acceptData() function below
let data = []

//Function to collect user data
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value
  })

  localStorage.setItem('data', JSON.stringify(data))

  console.log(data)

  createTasls()
}

//Function to creat new tasks
let createTasks = () => {
  tasks.innerHTML = ' '
  data.map((x, y) => {
    return (tasks.innerHTML += `<div id = ${y}>
            <span class = 'fw-bold'>${x.text}</span>
            <span class = 'small text-secondary'>${x.date}</span>
            <p>${x.description}</p>

            <span class = 'options'>
            <i onClick = 'editTask(this)' data-bs-toggle = 'modal' data-bs-target = 'form' class = 'fas fa-edit'></i>
            <i onClick = 'deleteTask(this):createTasks()' class = 'fas fa-trash'></i>
            </span>
            
            </div>`)
  })
  resetForm()
}

let resetForm = () => {
  textInput.value = ''
  dateInput.value = ''
  textarea.value = ''
}

;(() => {
  data = JSON.parse(localStorage.getItem('data')) || []
  console.log(data)
  createTasks()
})()

/*

    add.setAttribute('data-bs-dismiss', 'modal')

    add.click()
    ;(() => {
      add.setAttribute('data-bs-dismiss', ' ')
    })()
  }
}

let data = [{}]

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value
  })
  localStorage.setItem('data', JSON.stringify(data))

  console.log(data)
  createTasks();
}

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return tasks.innerHTML += ``
    })
    */
