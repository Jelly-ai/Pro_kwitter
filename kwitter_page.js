var firebaseConfig = {
    apiKey: "AIzaSyDo7z-VQXOu2mM4wWeuYppjVZumOGUm1Pc",
    authDomain: "kwitter-project-85d17.firebaseapp.com",
    databaseURL: "https://kwitter-project-85d17-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-85d17",
    storageBucket: "kwitter-project-85d17.appspot.com",
    messagingSenderId: "660105855646",
    appId: "1:660105855646:web:0e00e9357776243840b18f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function send()
    {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
name : user_name,
message : msg,
like : 0
    });
    document.getElementById("msg").value = "";
    }
    function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
window.location= "index.html";
}