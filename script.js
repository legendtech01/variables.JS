//variables

/* A variable is a container that holds a value, such as numbers, 
string or object.

variables can hold different data types, i.e 
- Numbers (let age = 30;)
- Strings (let name = "legend";)
- Boolean (let employed = false;) */


let username;

document.getElementById("myBtn").onclick = () => {
    username = document.getElementById("usernameInput").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}