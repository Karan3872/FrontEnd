const pinCode = "400088B";
const regex = /^[1-9]\d{5}$/;

if(regex.test(pinCode)){ 
    console.log("Validate PinCode");
}
else{
    console.log("Not validate PinCode");
}