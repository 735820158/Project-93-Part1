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

    user_name=localStorage.getItem("user_name")

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
