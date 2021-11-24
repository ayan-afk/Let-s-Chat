const firebaseConfig = {
    apiKey: "AIzaSyAj8G8Urq-0ZN85bqcuSXhbQDa5Z9wNdd0",
    authDomain: "lets-chat-cea7c.firebaseapp.com",
    projectId: "lets-chat-cea7c",
    storageBucket: "lets-chat-cea7c.appspot.com",
    messagingSenderId: "906665755086",
    appId: "1:906665755086:web:6cae51292005b8a2956b9f",
    measurementId: "G-5GEHCD22D9"
  };
firebase.initializeApp(firebaseConfig);

document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("user_name") + "!";

function addRoom(){
    var roomname = document.getElementById("room_name").value;

    localStorage.setItem("room_name", roomname);

    firebase.database().ref("/").child(roomname).update({
        purpose : "adding room name"
    });

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    function redirectToRoomName(){
        var room_name = document.getElementById("room_name").value;
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }
//End code
});});}
getData();