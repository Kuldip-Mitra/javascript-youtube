const accountId = 144553
let accountEmail = "kuldipmitra@1gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"

//accountId = 2
accountEmail = "hc@gmail.com"
accountPassword = "54321"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);


//Prefer not to use var
//because of issue in block scope and functional scope


console.table([accountId, accountPassword, accountEmail, accountCity, accountState])