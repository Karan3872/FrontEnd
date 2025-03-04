function isValidEmail(email) {
    var emailRegex = /^abc([._+\-][a-z]+)?@bridgelabz\.co(\.[a-z]+)?$/;
    return emailRegex.test(email);
}

console.log("Is abc@bridgelabz.co a Valid Email : " + isValidEmail("abc@bridgelabz.co"));
console.log("Is abc.xyz@bridgelabz.co.in a Valid Email : " + isValidEmail("abc.xyz@bridgelabz.co.in"));
console.log("Is abc-xyz@bridgelabz.co.in a Valid Email : " + isValidEmail("abc-xyz@bridgelabz.co.in"));
console.log("Is abc+xyz@bridgelabz.co.us a Valid Email : " + isValidEmail("abc+xyz@bridgelabz.co.us"));
console.log("Is abc_xyz@bridgelabz.co.in a Valid Email : " + isValidEmail("abc_xyz@bridgelabz.co.in"));

console.log("Is abc@bridgelabz.com a Valid Email : " + isValidEmail("abc@bridgelabz.com"));
console.log("Is abc@@bridgelabz.co a Valid Email : " + isValidEmail("abc@@bridgelabz.co"));
console.log("Is abc&xyz@bridgelabz.co a Valid Email : " + isValidEmail("abc&xyz@bridgelabz.co"));
console.log("Is abc*xyz@bridgelabz.co a Valid Email : " + isValidEmail("abc*xyz@bridgelabz.co"));
console.log("Is abc!xyz@bridgelabz.co a Valid Email : " + isValidEmail("abc!xyz@bridgelabz.co"));
console.log("Is abc123@bridgelabz.co a Valid Email : " + isValidEmail("abc123@bridgelabz.co"));
console.log("Is abc.xyz@bridgelabz. a Valid Email : " + isValidEmail("abc.xyz@bridgelabz."));
console.log("Is abc.xyz@bridgelabz.co. a Valid Email : " + isValidEmail("abc.xyz@bridgelabz.co."));
console.log("Is abc..xyz@bridgelabz.co.in a Valid Email : " + isValidEmail("abc..xyz@bridgelabz.co.in"));
console.log("Is abc@bridgelabz.co.in. a Valid Email : " + isValidEmail("abc@bridgelabz.co.in."));