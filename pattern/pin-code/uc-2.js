const pinCode = "A400088";
const regex = /^[1-9]\d{5}$/;

if(regex.test(pinCode)){ 
    console.log("Validate PinCode");
}
else{
    console.log("Not validate PinCode");
}