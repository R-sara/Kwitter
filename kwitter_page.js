//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    } 
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_tag="<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyohicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_tag+message_tag+like_tag+spantag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function updatelike(message_id){
      buttonid=message_id;
      likes=document.getElementById(buttonid).value;
      updatedlikes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
      });

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

