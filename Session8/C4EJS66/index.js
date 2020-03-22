// console.log(1)
// setTimeout(()=> {
//     console.log(2)
//     console.log(3)
// },1000)
// const count = async () => {
//     console.log(1)
    
//     console.log(3)
// }

// count()

/*   asynchronous
Timer => message queue => event loop =>callstack
*/





context = {
    data: null
}
//where get api
const getData = async () => {
    let api = await fetch('https://reqres.in/api/users?page=2&fbclid=IwAR18BjASmywbbTknVS10WG-TpOeUkfHmT2OajYtwHjNR8wPflKJnrSkDF1g')
    console.log(api)
    let data = await api.json() // get data from sever to web page
    // console.dir(data) 
    context.data = data.data
   
}

//where set api
const viewData = async () => {
    await getData()
    console.log(context.data)
    context.data.forEach((value,i) => {
        var html = `
        <div id ="user-${i}">
        <li>Name: ${value.first_name} ${value.last_name}</li>
        <li>Email: ${value.email}</li>
        <img class="unview"  src = "${value.avatar}" ></img>
        </div>
        ` 
        list.innerHTML += html
    })
    
       
}
//read api
const showDetailInfo = async () => {
   await viewData()
    for(let i = 0 ; i < context.data.length ; i++){
        let userInfo = document.getElementById(`user-${i}`)
        userInfo.addEventListener('click', () => {
            console.log(userInfo.children[2])
            userInfo.children[2].classList.toggle('view')
        })
    }
}

showDetailInfo()
