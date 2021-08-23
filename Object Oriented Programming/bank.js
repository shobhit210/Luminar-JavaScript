// createAccount()
// balanceEnquiry()
// deposit()
// withdrawal()


// class bank {
//     createAccount(account_number,name,balance){
//         this.accountno=account_number;
//         this.name=name;
//         this.accountbalance=balance;
//     }
// }



var status = 0;
class bank {
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ram",balance:4000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"ravi",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"raju",balance:7000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"nikil",balance:6000,username:1003,password:"userfour"},

        }
        return accounts
    }


    authenticate(uname,pwd){
        let data = this.getAccountDetails();   //We have to call getAccountDetails() every time.
        if(uname in data){
            if(uname == data[uname]["username"] && pwd == data[uname]["password"]){
                console.log("Authentication success");
                this.status = 1;
                return uname;
                // return 1;
            } else {
                console.log("incorrect password");
                // return -1;
            }
        } else {
            console.log("invalid user");
            // return 0;
        }
    }

    balanceEnquiry(accno){
        if (this.status==1){
            let data = this.getAccountDetails();
            console.log(data[accno]["balance"]);
        } else {
            console.log("You must login");
        }
    }

    fundTransfer(user,to_accno_amount){
        let data = this.getAccountDetails();
        if(!(to_accno in data)){
            console.log("Invalid to account number");
        } else {
            let balance = data[user]["balance"];
            if(balance < amount){
                console.log("insufficient balance");
            } else {
                // credit
                data[to_accno]["balance"] += amount;
                // debit
                data[user]["balance"] -= amount;
                console.log(data);
            }
        }
    }
}

var obj = new bank();
obj.authenticate(1000,"userone");
obj.balanceEnquiry(1000);