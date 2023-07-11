function passwordValidation1(password) {
    if (password.length > 7){ 
        return "strong";
    }
}
function passwordValidation2(password) {
    let pass= password.length > 7 ? 'strong' : 'weak';  
    return pass ;
}
function passwordValidation3(password) {
   if(typeof password =="string" && password.length > 7 ) {
    return "strong"; 
   }
}
function passwordValidation4(password) {
    if(password.length >7){
        if(/[A-Z]/.test(password)){
            return "VERY STRONG"
        }
        else {
            return "Strong"
        }
    }
    else
    return "weak"; 
 }

console.log(passwordValidation4("fdfDffdwe")); 

// console.log("dfdfddd".length) ; 
