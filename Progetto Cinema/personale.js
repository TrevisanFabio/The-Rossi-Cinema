var data = localStorage.getItem("data");
let utente;

const baseURL = "http://localhost/Progetto%20Cinema/";

fetch(baseURL + "getnomi.php",{
    method: 'post',
    
  })
  .then(res => res.json())
  .then(data => {
    utente=data;
  })



fetch(baseURL + "getprenotazioni.php",{
    method: 'post',
    
})
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(utente);
    
      nomefilm=data[0].NomeFilm
            document.getElementById("nomefilm").textContent=nomefilm;
            document.getElementById("orario").textContent=data[0].Orario;
            document.getElementById("posti").textContent=data[0].Posti;
        
    
    
    
})


function logout(){
  fetch(baseURL + "logout.php",{
      method: 'post',
  })
  .then(res => res.json())
  .then(data => {
      if(data){
          window.location.href = "../Progetto%20Cinema/index.html";
      }
      else alert("riprova più tardi")        
  })
}