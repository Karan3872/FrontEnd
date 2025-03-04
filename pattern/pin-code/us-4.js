const pinCode = "400 088";
const regex = /^[1-9][0-9]{2}\s?\d{3}$/;

if(regex.test(pinCode)){ 
    console.log("Validate PinCode");
}
else{
    console.log("Not validate PinCode");
}