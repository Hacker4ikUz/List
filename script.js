let cont = document.querySelector('.container')
let form = document.forms.list
let inputs = form.querySelectorAll('input')
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

        div.classList.add('item')
        div.setAttribute('id', item.id)
        h3.innerHTML = item.task
        i.innerHTML = item.time
        img.setAttribute('src', './img/remove.png')
        check.classList.add('check')
        check.setAttribute('type', 'checkbox')
        

        div.append(left,right)
        left.append(h3, i)
        right.append(img,check)
        cont.append(div)

        img.onclick = (e) => {
            let id = e.target.parentNode.id

            let idx = tasks.findIndex(item => item.id == id)

            tasks.splice(idx, 1)

            reload(tasks)
        }
        check.onclick = () => {
            div.style.opacity = '50%';
            h3.style.textDecoration = 'line-through red 3px';
        }
        check.ondblclick = () =>{
            div.style.opacity = '100%';
            h3.style.textDecoration = 'none';
        }
    }
}