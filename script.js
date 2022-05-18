let cont = document.querySelector('.container')
let form = document.forms.list
let inputs = form.querySelectorAll('input')
let theinp = document.querySelector('.theinp')
let btn = document.querySelector('.btn')
let tasks = [
    {
        id: Math.random(),
        task: 'Сделать ДЗ ....',
        time: "0:30",
        isChecked: false
    },
    {
        id: Math.random(),
        task: 'Играть в кс',
        time: "22:00",
        isChecked: false
    },
    {
        id: Math.random(),
        task: 'Спать',
        time: "02:30",
        isChecked: false
    }
]

form.onsubmit = (event) => {
    event.preventDefault()

    submit()
}

function submit() {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    tasks.push(user);
    reload(tasks)
}

reload(tasks)


function reload(arr) {
    cont.innerHTML = ""
    
    for(let item of arr) {
        let div = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let h3 = document.createElement('h3')
        let i = document.createElement('i')
        let img = document.createElement('img')
        let check = document.createElement('input')
        let edit = document.createElement('button')

        div.classList.add('item')
        div.setAttribute('id', item.id)
        h3.innerHTML = item.task
        i.innerHTML = item.time
        img.setAttribute('src', './img/remove.png')
        check.classList.add('check')
        check.setAttribute('type', 'checkbox')
        edit.innerHTML = 'Edit'

        div.append(left,right)
        left.append(h3, i, edit)
        right.append(img,check)
        cont.append(div)

        img.onclick = (e) => {
            let id = e.target.parentNode.id

            let idx = tasks.findIndex(elem => elem.id == item.id)

            tasks.splice(idx, 1)

            reload(tasks)
        }
        check.onclick = () => {
            h3.classList.toggle('textline')
        }
        edit.onclick = () => {
            let newinp = document.createElement('input')
            newinp.style.width = '180px';
            newinp.style.height = '25px'
            h3.innerHTML = ''
            h3.append(newinp)
            // btn.innerHTML = 'Save'
            // theinp.value = item.task
            h3 = newinp
            newinp.value = item.task
            edit.innerHTML = 'save'
            if(edit.innerHTML == 'save'){
                edit.onclick = () => {
                    h3.innerHTML = newinp.value
                }
            }
        }

    }
}
