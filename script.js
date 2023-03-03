const createDelBtn = () => {
    const delBtn = document.createElement('button')
    delBtn.classList.add('boton-delete')
    delBtn.setAttribute('type', 'button')
    delBtn.innerHTML = "-"

    delBtn.addEventListener('click', e => {
        const newItem = delBtn.parentElement
        list.removeChild(newItem)

        if (list.children.length === 0) {
            noMoreTask.style.display = 'block'
        }
    })

    return delBtn
}

const todosName = document.querySelector('input')
const addBtn = document.getElementById('add-btn')
const list = document.querySelector('ul')
const noMoreTask = document.querySelector('.sin-tareas')

addBtn.addEventListener('click', e => {

    if(todosName.value.trim() !== ""){
        let text = todosName.value

        const newItem = document.createElement('li')
        const itemText = document.createElement('p')

        itemText.innerText = text

        const delBtn = createDelBtn()

        newItem.appendChild(delBtn)
        newItem.appendChild(itemText)
        list.appendChild(newItem)

        todosName.value = ""

        console.log(list.children.length)

        noMoreTask.style.display = 'none'
    }
})

todosName.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        addBtn.click()
    }
})