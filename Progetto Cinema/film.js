 let filmnum= localStorage.getItem('Filmnum');
 document.getElementById("immaginefilm").src="../Progetto%20Cinema/images/movie"+filmnum+".jpg";

let film;
let email;
let nomefilm;
let radio;
let radioval;

var data = localStorage.getItem("data");

const baseURL = "http://localhost/Progetto%20Cinema/";
function loadfilm(filmnum){
  fetch(baseURL + "getfilm.php",{
      method: 'post',
      
  })
  .then(res => res.json())
  .then(data => {
    film=data;
      nomefilm=data[filmnum-1].Nome;
      document.getElementById("nomefilm").textContent= data[filmnum-1].Nome;
      
      document.getElementById("radioorario1n").textContent= "Ore: "+data[filmnum-1].orario1;
      document.getElementById("radio1").value= data[filmnum-1].orario1;      
      document.getElementById("radioorario2n").textContent= "Ore: "+data[filmnum-1].orario2;
      document.getElementById("radio2").value= data[filmnum-1].orario1; 
      document.getElementById("radioorario3n").textContent= "Ore: "+data[filmnum-1].orario3;
      document.getElementById("radio3").value= data[filmnum-1].orario3; 
      film=data[filmnum-1];
  })
}


fetch(baseURL + "getnomi.php",{
  method: 'post',
  
})
.then(res => res.json())
.then(data => {
  
  email=data.Email;
  console.log(email);
})
loadfilm(filmnum);

const container = document.querySelector('.containers');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
let Postiselezioni= [];



container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
       Postiselezioni.push(e.target.getAttribute('value'))  
      }     

    console.log(Postiselezioni)
  });






  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row ');
  
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  
    console.log(seatsIndex)
  
    
    }


function ordina(){
  radio=document.getElementsByName('radioora');
  for(var p=0;p<radio.length;p++){
    if(radio[p].checked=true){
      radioval=radio[p].value;
    }
  }
  
  
  formData = new FormData();
  formData.append("Email", email);
  formData.append("Nome", nomefilm);
  formData.append("Orario", radioval);
  formData.append("Posti", Postiselezioni);
 
  
  fetch(baseURL + "addbooking.php",{
      method: 'post',
      body: formData,
  })
.then(res => res.json())
.then(data =>{
    
    if(data != true){
      console.log("Errore")
    }
    else {
      console.log("Creato")
      
    }
  })
}