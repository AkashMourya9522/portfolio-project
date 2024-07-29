document.getElementById('myForm').addEventListener('submit', function(event) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || !emailPattern.test(email) ) {
        errorMessage.textContent = 'Please Provide Valid Details';
        event.preventDefault();
    }
});
let dark = false;
function themeFunction(){
    
    let bodyEle = document.querySelectorAll('.js-body-ele')[0]
    let buttonEle = document.querySelectorAll('.theme-button')[0]
    let allButtons = document.querySelectorAll('button')
    let allAnchor = document.querySelectorAll('a')
    console.log(buttonEle)
    console.log(allButtons);
    if(!dark){
        bodyEle.classList.add("darkMode")
        dark = true;
        buttonEle.innerHTML = "Light"
        allButtons.forEach((button)=>{button.classList.add("darkMode-button")})
        allAnchor.forEach((a)=>{a.classList.add("darkMode-a")})
    }
    else{
        bodyEle.classList.remove("darkMode");
        dark = false;
        buttonEle.innerHTML = "Dark"
        allButtons.forEach((button)=>{button.classList.remove("darkMode-button")})
        allAnchor.forEach((a)=>{a.classList.remove("darkMode-a")})
    }
    console.log("hello ")
}