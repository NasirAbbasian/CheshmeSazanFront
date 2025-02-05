// const axios = require('axios');
var msg = document.getElementById("message")

function loginCheck(){
    axios.get("http://localhost/api/auth/check.php")
     .then( res =>{
        console.log("OK")
        console.log(res)
        msg.classList.add("bg-green-200","border-green-600","text-green-900")
        msg.innerHTML = res.data.message
     })
     .catch(err=>{
        console.log("Error")
        console.log(err.response.data.message)
        msg.classList.add("bg-red-200","border-red-600","text-red-900")
        msg.innerHTML=err.response.data.message
     })
     .finally(()=>{
        msg.classList.remove("hidden")
     })
}

function login (){
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    const req = axios.create({
      withCredentials:true,
    })
    req.get(`http://localhost/api/auth/login.php?username=${user}&password=${pass}`)
    .finally(()=>{

       loginCheck()
    })
}