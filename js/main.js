function sendMail(){
    let data = {
        names : document.getElementById('names').value,
        email : document.getElementById('email').value,
        comment: document.getElementById('comment').value
    }

    emailjs.send("service_oplvpjc", "template_k3rf6rt", data).then(alert("Your message has been sent!"));
}

