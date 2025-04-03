function getValues(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    $.get('credentials.json',function(data){
        if(data.username==username && data.password==password){
            alert("login successfull");
           window.location.href = "index.html";
        }
       else if(data.username!==username || data.password!==password){
        alert("Invalid username and password");
       }
       else{
        alert("Login failed");
     }
    }
)
}


