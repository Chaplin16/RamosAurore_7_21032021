let btnSubmitNewUser = document.getElementById("btnSubmitNewUser");
//creer un nouvel utilisateur
btnSubmitNewUser.addEventListener("click", function (event) { 
    let formSignup = document.getElementById("formSignup");
    event.preventDefault();

    if( formSignup.reportValidity() == true) {//verification si le formulaire est correctement rempli
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'username': document.getElementById("username").value,
            'email': document.getElementById("email").value,
            'password': document.getElementById("password").value,
            'job': document.getElementById("job").value
        }     
        let sendInfo = JSON.stringify( contact );
        
        fetch('http://localhost:3000' +'/signup', {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })
        .then(function (response) {
            return response.json()
        }) 
        .then(function() { 
               window.location.assign("connect.html")
        })
        .catch(function(err) {
        console.log('Retour info Api problem: ' + err.message);
        })
    }
});