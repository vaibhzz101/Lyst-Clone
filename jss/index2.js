let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  document.querySelector("div>h5>span").textContent =
    loggedUser.name;

 let lgout = document.getElementsByClassName("b1")
 lgout.addEventListener("click", function(){
    window.location.assign("./signup login.html")
 })
