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
    //acceptData()
  }
}
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
