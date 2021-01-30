
function openNavbar(){
    document.getElementById("slide").classList.add("slide")
}
function closeNavbar(){
    document.getElementById("slide").classList.remove("slide")
}

function handleClick(){
      var x=  document.getElementById("navbar");
      x.classList.toggle("toggle-active");
}


// Contact Box

function checkForBlank(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        document.getElementById("nameRequired").style.display = "block"
        // return false;
    }else{
        document.getElementById("nameRequired").style.display = "none"
    }

  if(email == ""){
        document.getElementById("emailRequired").style.display = "block"
        // return false;
    }else{
        document.getElementById("emailRequired").style.display = "none"
    }

    if(name == "" || email == ""){
        document.getElementById("blankInput").style.display = "block"
    }else{
        document.getElementById("blankInput").style.display = "none"
    }
}