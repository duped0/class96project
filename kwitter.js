function adduser(){

    user_name=document.getElementById("user_name_input").value;

    localStorage=setItem("user_name_label",user_name);

    window.location="kwitter_room.html";
}