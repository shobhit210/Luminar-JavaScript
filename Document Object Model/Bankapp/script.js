function createUser(){
    let account_number=ac_no.value;
    let password=pwd.value;
    let balance=bal.value;

    let user = {
        accountNumber:account_number,
        passWord:password,
        accountBalance:balance
    }
    
    localStorage.setItem(user.accountNumber,JSON.stringify(user));
    alert("user created");
    location.reload(true);
}


function populate(users){
    let htmlData =""
    for(let user of users){
        htmlData += `<p>${user.accountNumber},${user.passWord},${user.accountBalance}</p>`
    }
    resultarea.innerHTML = htmlData;
}


function fetchAllUsers(){
    let users = [];
    for(let i = 0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key))  // To convert JSON string into object
        users.push(user);
    }
    console.log(users);
    populate(user);

}


function signIn(){
    let uname = username.value;
    let pass = password.value;
    if(uname in localStorage){
        let user = JSON.parse(localStorage.getItem(uname));
        if(user.password == pass){
            alert("successful login");
            window.location.href="userhome.html"
        } else {
            alert("incorrect password");
        }
    }else{
        alert("User not found")
    }
}


function displayBalance(){
    
}