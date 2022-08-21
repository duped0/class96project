const firebaseConfig = {
    apiKey: "AIzaSyDopO2p_OLxg3Pxyo8E9k7uoeWDfgrqgiU",
    authDomain: "lets-chat-web-app-f8498.firebaseapp.com",
    projectId: "lets-chat-web-app-f8498",
    storageBucket: "lets-chat-web-app-f8498.appspot.com",
    messagingSenderId: "230590917512",
    appId: "1:230590917512:web:64592afdafd609b5bba83d",
    measurementId: "G-4CPYEX7YS8"
  };

function addRoom(){
    all_rooms_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(all_rooms_name).update({
          purpose:"adding room name"
    });

    loocalStorage.setItem("all_rooms",all_rooms_name);

    window.location="kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
row="<div class='room_name' id="+all_Rooms_name+"onclick='RedirectToRoomName(this.id)'>#"+all_Rooms_name+"</div><hr>";
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("all_rooms",name);
      window.location="kwitter_room.html";
}

function logout()
{
      window.location ="index.html";
}