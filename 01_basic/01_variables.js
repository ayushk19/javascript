//variables

const account_id = 12345;
let account_email = "ayu@mail.com"
var account_password = "123445"
account_city = "Chandigarh"
let account_state; // prints undefined if we can't assign anything

// account_id = 23 // not allowed ( we can't change constant variables value )

account_email = "ayush@gmail.com"
account_password = "122"
account_city = "Jaipur"

/**
 * prefer not to use var
 * because of issue in block scope and functional scope
 */

console.table([account_id, account_email, account_password, account_city, account_state])