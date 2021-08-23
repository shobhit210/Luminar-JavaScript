// createAccount()
// balanceEnquiry()
// fund transfer
// deposit()
// withdrawal()

class bank {
    status = 0;
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ram",balance:4000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"ravi",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"raju",balance:7000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"nikil",balance:6000,username:1003,password:"userfour"},

        }
        return accounts;
    }

    authenticate(uname,pwd){
        let data = this.getAccountDetails();
        if(uname in data){
            if(data[uname]["username"] == uname && data[uname]["password"] == pwd){
                console.log("Authentication Successful");
                this.status = 1;
                return uname;
            } else {
                console.log("Incorrect Password");
            }
        } else {
            console.log("Invalid user account");
        }
    }

    balanceEnquiry(acc_no){
        let data = this.getAccountDetails();
        if(this.status == 1){
            console.log(data[acc_no]["balance"]);
        }
    }

    fundTransfer(user,amt,to_account_no){
        let data = this.getAccountDetails();
        if (to_account_no in data){
            // Checking if the sender has sufficient balance in his account
            let balance = data[user]["balance"];
            if(balance < amt){
                log("insufficient account balance");
            } else {
                data[user]["balance"] -= amt;
                data[to_account_no]["balance"] += amt;
                console.log("Fund transfer successful");
            }

        } else {
            console.log("Invalid receiver's account number");
        }
    }

    withdrawal(){}

    deposit(){}

}

var obj = new bank();
var result = obj.authenticate(1003,"userfour");
obj.balanceEnquiry(result);
obj.fundTransfer(result,2000,1003);