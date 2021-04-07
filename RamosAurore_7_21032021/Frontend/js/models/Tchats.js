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
            <button class="avatarMember"> 
                <p>${this.user.avatar}</p>
            </button>
            <p id=usernameMember class="usernameMember">${this.user.username}</p>
            <label for="allTchatMember"></label>
            <input class="inputTchatMember" type="texterea" name="allTchatMember" id="tchatMember" value="${this.content}" /> 
        </div>
    </div>`
    }
}