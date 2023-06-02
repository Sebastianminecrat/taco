
var firebaseConfig = {
  apiKey: "AIzaSyAmVpE_ttBBPfdcjdz7Mw4hOWdnJLxADqU",
  authDomain: "el-bobobobo-bo-de-hierro.firebaseapp.com",
  databaseURL: "https://el-bobobobo-bo-de-hierro-default-rtdb.firebaseio.com",
  projectId: "el-bobobobo-bo-de-hierro",
  storageBucket: "el-bobobobo-bo-de-hierro.appspot.com",
  messagingSenderId: "618182320532",
  appId: "1:618182320532:web:fcdbe422131d3d133eef81",
  measurementId: "G-2P4H3F18CR"
};

// Initialize Firebase
firebase.getAnalytics(app);
user_name=localStorage.getItem("user_name");
function addroom(){room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose: "Agregar nombre de sala" });
localStorage.setItem("room_name",room_name);
window.location="el gato.html"

}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }
