function createUser(){
    let v_account_number = acc_no.value;
    let v_password = pwd.value;
    let v_account_balance = bal.value;

    let user = {
        accountNumber: v_account_number,
        accountPassword: v_password,
        accountBalance: v_account_balance
    }

    localStorage.setItem(user.accountNumber,JSON.stringify(user));
    alert("User created");
    location.reload(true);
}

function populate(a_users){
    let v_htmldata = "";
    for (let user of a_users){
        v_htmldata += `<p>account_number : ${user.accountNumber} password : ${user.accountPassword} balance : ${user.accountBalance}</p>`
    }
    result.innerHTML = v_htmldata;
}

function fetchAllUsers(){
    let a_users = [];
    for(let i=0; i< localStorage.length; i++){
        let v_key = localStorage.key(i);
        let v_user = JSON.parse(localStorage.getItem(v_key));
        a_users.push(v_user);
        
    }
    console.log(a_users);
    populate(a_users)
}

function signIn(){
    let v_uname = username.value;
    let v_password = password.value;
    if(v_uname in localStorage){
        let v_user = JSON.parse(localStorage.getItem(v_uname));
        if (v_user.accountPassword == v_password){
            alert("Login success");
            sessionStorage.setItem("s_user",v_uname)
            window.location.href="userhome.html";   //To redirect into another page on successfully logging in.
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("User not found");
    }
}

function displayBalance(){
    let v_user = sessionStorage.getItem("s_user");    //s_user is session storage key that we used in previous function
    let v_data = JSON.parse(localStorage.getItem(v_user));
    alert(v_data.accountBalance);

}

function getUser(acno){
    let user = JSON.parse(localStorage.getItem(acno));
    return user;
}

function transferFund(){    //when we click on fundtransfer, a modal window from bootstrap must pop-up.
let v_toaccountno = toaccount.value;
let v_confirmtoacc = confirmtoaccount.value;
let v_amount = Number(amount.value);
if(v_toaccountno in localStorage){
    let user = sessionStorage.getItem("s_user");
    // let account = JSON.parse(localStorage.getItem(user));
    let account = getUser(user);
    if(account.accountBalance < v_amount){
        alert("Insufficient balance");
    } else{
        account.accountBalance -= v_amount;
        localStorage.setItem(user,JSON.stringify(account));
        let credit_ac=getUser(v_toaccountno);
        credit_ac.accountBalance += v_amount;
        localStorage.setItem(v_toaccountno,JSON.stringify(credit_ac));
    }
} else {
    alert("Invalid account number")
}
}

user = sessionStorage.getItem("s_user")
if (user){
    profile.innerHTML = `Welcome ${user}`;
}

function logout(){
    sessionStorage.removeItem("s_user");
    location.href="login.html"
}