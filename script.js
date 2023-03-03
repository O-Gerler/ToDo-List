const createDelBtn = () => {
    const delBtn = document.createElement('button')
    delBtn.classList.add('boton-delete')
    delBtn.setAttribute('type', 'button')
    delBtn.innerHTML = "-"

    delBtn.addEventListener('click', e => {
        const newItem = delBtn.parentElement
        list.removeChild(newItem)
    })

    return delBtn
}

const todosName = document.querySelector('input')
const addBtn = document.getElementById('add-btn')
const list = document.querySelector('ul')

addBtn.addEventListener('click', e => {

    if(todosName.value.trim() !== ""){
        let text = todosName.value

        const newItem = document.createElement('li')

        newItem.innerText = text

        const delBtn = createDelBtn()

        newItem.appendChild(delBtn)
        list.appendChild(newItem)

        todosName.value = ""
    }
})

todosName.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        addBtn.click()
    }
})