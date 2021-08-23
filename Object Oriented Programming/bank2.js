// createAccount()
// balanceEnquiry()
// deposit()
// withdrawal()



// class bank {
//     constructor(account_number,name,balance,username,password){
//         this.accountnumber=account_number;
//         this.accountholdername=name;
//         this.accountbalance=balance;
//         this.username=username;
//         this.password=password;
//     }

//     getAccountDetails(){
//         console.log("Account Number:"+this.accountnumber + " Name:"+this.accountholdername + " Balance:"+this.accountbalance + " Username:"+this.username + " Password:"+this.password);
//     }
// }


// var person1 = new bank(1000,"shobhit",50000,"shobhit.210","football");
// var person2 = new bank(1001,"Aparna",45000,"aparna__pillai","attitude");
// // console.log(person2);
// console.log(person2.getAccountDetails());




class bank {
    status = 0;
    accounts={   //no need of var accounts = 
        1000:{account_number:1000,name:"ram",balance:4000,username:1000,password:"userone"},
        1001:{account_number:1001,name:"ravi",balance:2000,username:1001,password:"usertwo"},
        1002:{account_number:1002,name:"raju",balance:7000,username:1002,password:"userthree"},
        1003:{account_number:1003,name:"nikil",balance:6000,username:1003,password:"userfour"},
    }
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ram",balance:4000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"ravi",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"raju",balance:7000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"nikil",balance:6000,username:1003,password:"userfour"},
        }
        return accounts;
    }

    authenticate(user_name,pw){
        let data = this.getAccountDetails();  //We have to call getAccountDetails() everytime.
        if(user_name in data){
            if(data[user_name]["username"] == user_name && data[user_name]["password"] == pw){
                console.log("Authentication Successful");
                this.status = 1;
                return user_name;
            } else {
                console.log("Incorrect password");
            }
        } else {
            console.log("Invalid user");
        }
    }

    balanceEnquiry(acc_no){
        let data = this.getAccountDetails();
        if(this.status == 1){
            console.log(data[acc_no]["balance"]);
        } else {
            console.log("You must login first");
        }
    }
    
    fundTransfer(user,to_accno,amount){
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

var obj = new bank;
let user = obj.authenticate(1002,"userthree");
obj.balanceEnquiry(user);




