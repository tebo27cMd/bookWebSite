////////////////////////////

const loginForm=document.getElementById("login-form")
const loginButton=document.getElementById("login-form-submit")
const loginErrorMsg=document.getElementById("login-error-msg")

loginButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const username=loginForm.username.value;
    const password=loginForm.password.value;

    if (username=="user1" && password==="12345"){
    alert("login successful!");
    window.location.href="homepage.html"
   } else {
    loginErrorMsg
 } 

})
///////////////////////////////////////////