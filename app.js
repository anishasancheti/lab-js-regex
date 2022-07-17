/* Fill your code*/
function formValidate() {
    let nam = document.getElementById("n").value;
    let pnam = /^.{8,15}$/;
    if(pnam.test(nam)){
        document.getElementById("name").innerHTML = " ";
    }
    else{
        document.getElementById("name").innerHTML = "Atleast 8 to 15 characters are required";
    }
    
    let add = document.getElementById("a").value;
    let padd = /^$/;
    if(padd.test(add)){
        document.getElementById("address").innerHTML = "Address is required";
    }
    else{
        document.getElementById("address").innerHTML = " ";
    }
    
    let ema = document.getElementById("e").value;
    let pema = /(@|\.|_)/;
    if(pema.test(ema)){
        document.getElementById("email").innerHTML = " ";
    }
    else{
        document.getElementById("email").innerHTML = "E-mail must contain @, . or _";
    }
    
    let pas = document.getElementById("p").value;
    let ppas = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&]).*$/;
    console.log(pas)
    if(ppas.test(pas)){
        document.getElementById("pwd").innerHTML = " ";
    }
    else{
        document.getElementById("pwd").innerHTML = "Password must contain an uppercase letter, a lowercase letter, a number and a special character !@#$%^&*()";
    }
    
    let cpas = document.getElementById("cp").value;
    let pcpas = /^$/;
    if(pcpas.test(cpas)){
        document.getElementById("cpwd").innerHTML = "Password is required";
    }
    else{
        if (cpas !== pas){
            document.getElementById("cpwd").innerHTML = "Confirm Password must match the password";
        }
        else{
            document.getElementById("cpwd").innerHTML = " ";
        }
    }
    let pho = document.getElementById("ph").value;
    let ppho = /^[6-9][0-9]{9}$/;
    if(ppho.test(pho)){
        document.getElementById("phone").innerHTML = " ";
    }
    else{
        document.getElementById("phone").innerHTML = "Enter a valid phone number";
    }
}