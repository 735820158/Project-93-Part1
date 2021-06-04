var firebaseConfig = {
      apiKey: "AIzaSyAdvOttCPJOUV8POCW9Z-yUUohK45vQXFQ",
      authDomain: "kwitter-ec491.firebaseapp.com",
      databaseURL: "https://kwitter-ec491-default-rtdb.firebaseio.com/",
      projectId: "kwitter-ec491",
      storageBucket: "kwitter-ec491.appspot.com",
      messagingSenderId: "808001432609",
      appId: "1:808001432609:web:e5ced386c01d06b1c54760"
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

//End code
      } });  }); }
getData();
