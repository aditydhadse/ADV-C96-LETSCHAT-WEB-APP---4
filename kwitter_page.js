const firebaseConfig = {
    apiKey: "AIzaSyCaQvKLrId2WpPdRGclvlNeNI1LkAbUFaE",
    authDomain: "kwitter-63c3c.firebaseapp.com",
    databaseURL: "https://kwitter-63c3c-default-rtdb.firebaseio.com",
    projectId: "kwitter-63c3c",
    storageBucket: "kwitter-63c3c.appspot.com",
    messagingSenderId: "122916872610",
    appId: "1:122916872610:web:960d514210662b208b12fb",
    measurementId: "G-PQSRDZVD3D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout(){
    window.location = "index.html";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();