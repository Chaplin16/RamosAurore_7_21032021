//objet constructor 

//je cree un objet avec le constructor Tchats
class Tchats {
    constructor(tchat) {
        this.id = tchat.id;
        this.content = tchat.content;
        this.createdAt = tchat.createAt;
        this.updatedAt = tchat.updatedAt;
        this.user = tchat.User;
    }
    displayTchats() {
      return  `<div class="allTchats" id="allTchats">
        <div class="tchatMember">
            <div class="infoMember">
                <p class="avatarMember"> 
                    <img class="avatarSize" src="${this.user.avatar}"/>
                </p>
                <p id=usernameMember class="usernameMember">${this.user.username}</p>
            </div>
            <label for="allTchatMember"></label>
            <input class="inputTchatMember" type="texterea" name="allTchatMember" id="tchatMember" value="${this.content}" /> 
            <img data-id="${this.id}" role= "button" class ="trash" src="images/trash.png" alt="image d'une poubelle"> 
            </div>
    </div>`;

    }
}