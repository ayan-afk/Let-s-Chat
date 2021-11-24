const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const firebaseConfig = {
  apiKey: "AIzaSyAj8G8Urq-0ZN85bqcuSXhbQDa5Z9wNdd0",
  authDomain: "lets-chat-cea7c.firebaseapp.com",
  projectId: "lets-chat-cea7c",
  storageBucket: "lets-chat-cea7c.appspot.com",
  messagingSenderId: "906665755086",
  appId: "1:906665755086:web:6cae51292005b8a2956b9f",
  measurementId: "G-5GEHCD22D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  