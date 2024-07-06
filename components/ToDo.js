export function ToDoItem(item) {
    const box = document.createElement('div')
    const head_item = document.createElement('div')
    const h2 = document.createElement('h2')
    const btn_del = document.createElement('button')
    const time = document.createElement('span')


    box.classList.add('box')
    head_item.classList.add('head_item')
    h2.innerHTML = item.title
    btn_del.innerHTML = "delete"
    time.innerHTML = item.time

    box.append(head_item, time)
    head_item.append(h2, btn_del)
    
    return box
}