let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let forgetPwd = document.getElementById("forgetPwd");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  //forgetPass.add("forgetPass");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  //forgetPass.remove("forgetPass");
};

signinBtn.ondblclick = function () {
  let result = document.querySelector(".result");
  let emailText = document.querySelector("#emailText");
  let passwordText = document.querySelector("#passwordText");

  // Creating a XHR object
  let xhr = new XMLHttpRequest();
  let url = "https://employee-interact-api.us-e2.cloudhub.io/api/login";

  // open a connection
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  // Create a state change callback
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      // Print received data from server
      debugger;
      result.innerHTML = this.responseText;
      console.log("Test", typeof this.responseText)
    
      if (this.responseText === "true") {
        window.location.href = "./front.html";
      } else {
        window.location.href = "./error.html";
      }
    } else {
      result.innerHTML = "Invalid cred";
    }
  };

  // Converting JSON data to string
  var data = JSON.stringify({
    email: emailText.value,
    password: passwordText.value,
  });

  // Sending data with the request
  xhr.setRequestHeader("client_id", "bc27aa37d65647dbb0bc8672ce7a80f0");
  xhr.setRequestHeader("client_secret", "262aAd1369e3403CAB871f12542D8ac9");
  xhr.send(data);
};

///Sign Up

signupBtn.ondblclick = function () {
  let result = document.querySelector(".result");
  let emailText = document.querySelector("#emailText");
  let passwordText = document.querySelector("#passwordText");
  let nameText = document.querySelector("#nameText");

  // Creating a XHR object
  let xhr = new XMLHttpRequest();
  let url = "https://employee-interact-api.us-e2.cloudhub.io/api/signup";

  // open a connection
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  // Create a state change callback
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      // Print received data from server
      debugger;
      result.innerHTML = this.responseText;
      var parsedJSON = JSON.parse(this.responseText)
      console.log("Test", typeof this.responseText)
    
      if (parsedJSON.affectedRows === 1) {
        window.location.href = "./front.html";
      } else {
        window.location.href = "./error.html";
      }
    } else {
      result.innerHTML = "Email already Exists";
    }
  };

  // Converting JSON data to string
  var data = JSON.stringify({
    email: emailText.value,
    password: passwordText.value,
    name: nameText.value
  });

  // Sending data with the request
  xhr.setRequestHeader("client_id", "bc27aa37d65647dbb0bc8672ce7a80f0");
  xhr.setRequestHeader("client_secret", "262aAd1369e3403CAB871f12542D8ac9");
  xhr.send(data);
};
