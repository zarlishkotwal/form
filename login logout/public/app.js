function onSignUp() {
    
    let userName = document.getElementById("userName").value
    let userEmail = document.getElementById("userEmail").value
    let userPassword = document.getElementById("userPassword").value
    let userPhone = document.getElementById("userPhone").value
    let userAddress = document.getElementById("userAddress").value

    
    let user = {
        name: userName,
        email: userEmail,
        password: userPassword,
        phone: userPhone,
        address: userAddress
    }

    

    let users = JSON.parse(localStorage.getItem("users")) || []
  

    let userIndex = users.findIndex((value) => {

        return value.email.toLowerCase() == user.email.toLowerCase() || value.phone == user.phone

        
    }
    )
    console.log(userIndex)

    if (userIndex === -1) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html"
    }
    else {
        alert("already!")
    }

}
let alertBox = document.getElementById("alertBox")

function onLogin() {

    let userEmail = document.getElementById("email").value
    let userPassword = document.getElementById("password").value

    let user = {
        email: userEmail,
        password: userPassword

    }


    let users = JSON.parse(localStorage.getItem("users")) || []
  
    let userIndex = users.find(value => value.email.toLowerCase() === user.email.toLowerCase() &&
        value.password === user.password)
    console.log(userIndex)

    if(userIndex != -1){
      
        localStorage.setItem("currentUser" , JSON.stringify(userIndex))
        window.location.href = "index.html"
    }
    else{
        alertBox.innerHTML = "Invalid credentials"
        alertBox.style.display = "block"
    }
    setTimeout(function(){
        alertBox.style.display = "none"
    },3000)
}

function logout(){
    localStorage.removeItem("currentUser")
    alertBox.style.display = "block"
     alertBox.innerHTML = "by by........"
    setTimeout(()=>{
        window.location.href = "login.html"
        alertBox.style.display = "none"
    },2000)
}





