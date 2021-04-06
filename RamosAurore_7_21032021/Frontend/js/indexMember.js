let btnSubmitMember = document.getElementById("btnSubmitMember");

btnSubmitMember.addEventListener("click", function (event) { // envoie du formulaire au click du bouton
    let formLogin = document.getElementById("formLogin");
    event.preventDefault();

    if (formLogin.reportValidity() == true) {//verification si le formulaire est correctement rempli
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'email': document.getElementById("emailRecognized").value,
            'password': document.getElementById("passwordRecognized").value,
        }
        let sendInfo = JSON.stringify(contact);
        let email = JSON.stringify(contact.email);
        //j'envoie des données au serveur    
        fetch('http://localhost:3000' + '/login', {
            method: "post",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            mode: "cors",
            body: sendInfo
        }).then(function (response) {
            return response.json()
        })  
            .then(function (json) {
                let userId = json.userId;
            //ouverture de la page de confirmation ave les parametres dans l url    
                window.location.assign("pageTchats.html?id=" + userId)
            }).catch(function (err) {
                console.log('Retour info Api problem: ' + err.message);
            })
            //le retour en cas de non connection au serveur 
            .catch(function (err) {
                console.log('Retour info Api problem: ' + err.message);
            })
    };
});
