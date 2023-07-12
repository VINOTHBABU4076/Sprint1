
document.getElementById("loginForm").addEventListener("submit", function(event) {
   
    event.preventDefault();
    
    
    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;
    
    if (username === "vinothbabu" && password === "vinothbabu@4076") {

      window.alert("Login successful!");

    } else {
      
      window.alert("Invalid username or password. Please try again.");
    }
  });
  