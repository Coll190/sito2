
function sendMail(){
    var params = {
        name: document.getElementById("your-nome").value,
        surname: document.getElementById("your-cognome").value,
        email: document.getElementById("your-email").value,
        phone_number: document.getElementById("your-cellulare").value,
        tipology: document.getElementById("your-tipologia").value,
        message: document.getElementById("your-messaggio").value,
    };
}

const serviceID = "service_93xc8lo";
const templateID = "template_ffflatv"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("your-nome").value ="";
        document.getElementById("your-cognome").value ="";
        document.getElementById("your-email").value ="";
        document.getElementById("your-cellulare").value ="";
        document.getElementById("your-tipologia").value ="";
        document.getElementById("your-messaggio").value ="";
        console.log(res);
        alert("your message sent successfully");  
    })
    .catch(err=>console.log(err));