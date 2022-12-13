var data = localStorage.getItem("data");
const baseURL = "http://localhost/Progetto%20Cinema/";

function login(){
  var formData = new FormData();
  formData.append("email", document.getElementById("Mail").value);
  formData.append("password",document.getElementById("Password").value);

  fetch(baseURL + "login.php",{
      method: 'post',
      body: formData,
  })
  .then(res => res.json())
  .then(data => {
    if(data == false){
      console.log("sbagliato")
    }
    else{
      console.log("giusto")
      window.location.href = "../Progetto%20Cinema/index.html";
      
      
    }
  })
  
}

/*localStorage.setItem("data", JSON.stringify(data.user));
      window.location.href = "../Mainpage/Mainpage.html";*/