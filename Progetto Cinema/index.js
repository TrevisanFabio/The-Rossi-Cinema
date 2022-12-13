var data = localStorage.getItem("data");

const baseURL = "http://localhost/Progetto%20Cinema/";
function gofilm(ele) {
    var btnValue = ele.id;
    var btnValue= btnValue[3]
    localStorage.setItem('Filmnum', btnValue);
    console.log(btnValue);
    window.location.href = 'film.html';
    
}

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


function getUser(){
    fetch(baseURL + "getUser.php",{
        method: 'post',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data == false){
            window.location.href = "../Progetto%20Cinema/login.html";
        }
        else{
            alert("Hai gia effettuato il login!")
        }
    })
}

function loaduser(){
    fetch(baseURL + "getnomi.php",{
        method: 'post',
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.Email);
    })
}

function areaper(){
    fetch(baseURL + "getUser.php",{
        method: 'post',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data == false){
            window.location.href = "../Progetto%20Cinema/login.html";
        }
        else{
            window.location.href="../Progetto%20Cinema/AreaPersonale.html";
        }
    })
}
