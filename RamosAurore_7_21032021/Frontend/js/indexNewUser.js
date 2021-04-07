let btnSubmitNewUser = document.getElementById("btnSubmitNewUser");

btnSubmitNewUser.addEventListener("click", function (event) { // envoie du formulaire au click du bouton
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
        //j'envoie des données au serveur    
        fetch('http://localhost:3000' +'/signup', {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })
        .then(function (response) {
            return response.json()
        }) 
        .then(function() { //j enregistre le retour  de l'api dans des variables
            
//ouverture de la page de confirmation ave les parametres dans l url
               window.location.assign("connect.html")
        })
        //le retour en cas de non connection au serveur 
        .catch(function(err) {
        console.log('Retour info Api problem: ' + err.message);
        })
}

});