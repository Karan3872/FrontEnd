function validity(email){
    const regex = /^abc(\.[a-z]+)?@bridgelabz.co(\.[a-z]+)$/;
    if(regex.test(email)){
        return "Email Validated";
    }
    else{
        return "Invalid Email";
    }
    
    }
    
    console.log("1st email :",validity("abc.xyz@bridgelabz.co.in"));
    console.log("2nd Email :",validity("abc@yahoo.com"));
    console.log("3rd Email :",validity("abc.india@bridgelabz.co.ind"));
    