var data = localStorage.getItem("data");
const baseURL = "http://localhost/Progetto%20Cinema/";

function register(){
  formData = new FormData();
  formData.append("name", document.getElementById("Nome").value);
  formData.append("surname", document.getElementById("Cognome").value);
  formData.append("email", document.getElementById("Mail").value);
  formData.append("password", document.getElementById("Password").value);
 

  fetch(baseURL + "register.php",{
      method: 'post',
      body: formData,
  })
.then(res => res.json())
.then(data =>{
    console.log(data);
    if(data != true){
      console.log("Errore")
    }
    else {
      console.log("Creato")
      window.location.href = "../Progetto%20Cinema/login.html";
    }
  })
}