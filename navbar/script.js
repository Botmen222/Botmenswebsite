
var login = false;

function loggin() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    document.getElementById('msg').innerHTML = ' ';
    if (name in localStorage) {
        console.log('the name is right'); 
        var name = document.getElementById('name').value;
        if (localStorage.getItem(name) == password) {  
            console.log('The password is correct');
            document.getElementById('msg').innerHTML = 'Succesfully logged in';
            open('file:///C:/Users/zombo/source/repos/navbar/Home.html');
            setTimeout(function () {
                close(self);
                consle.log(name);
                var name = document.getElementById('name').value;
                document.getElementById('username').innerHTML = name;
            }, 5000)

        }
        else {
            document.getElementById('msg').innerHTML = 'password is not correct';
            console.log(localStorage.name);
            console.log(password);
            console.log('Password is not correct');
        }
    }
    else {
        document.getElementById('msg').innerHTML = 'the username is not exist';
        console.log('Errorr');
    }
}


   
function profilefunc() {
    if (login == true) {
        open('file:///C:/Users/zombo/source/repos/navbar/profile.html');
    }
}

function regist() {
    var name = document.getElementById('name').value;
    /*localStorage.setItem("name", name);*/
    var password = document.getElementById('password').value;
    localStorage.setItem(name, password)
    document.getElementById('result').innerHTML = localStorage.getItem('name');
}