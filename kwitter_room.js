
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDj03DOy4Ri0YZCe-oygpHffuhTgxWJ6-c",
      authDomain: "kwitter-d9f70.firebaseapp.com",
      databaseURL: "https://kwitter-d9f70-default-rtdb.firebaseio.com",
      projectId: "kwitter-d9f70",
      storageBucket: "kwitter-d9f70.appspot.com",
      messagingSenderId: "736034797153",
      appId: "1:736034797153:web:55c64061d981659ef8dc20"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! "; 

    function addroom(){
      room_name=document.getElementById("room_name").value; 
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
