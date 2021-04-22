//objet constructor 

//je cree un objet avec le constructor Tchats
class Tchats {
    constructor(tchat) {
        this.id = tchat.id;
        this.content = tchat.content;
        this.attachment = tchat.attachment;
        this.createdAt = tchat.createAt;
        this.updatedAt = tchat.updatedAt;
        this.user = tchat.User;
        this.comment = tchat.Comments;
    }
    displayTchats(user) {
        return `<div class="oneTchat" data-id="${this.id}"  >
        <div class="tchatMember">
            <div class="infoMember">
                <p class="avatarMember"> 
                    <img class="avatarSize" src="${this.user.avatar}"/>
                </p>
                <p id="usernameMember" class="usernameMember">${this.user.username}</p>
            </div>
            <div class="inputWithImg">
                <label for="allTchatMember"></label>
                <input class="inputTchatMember" type="texterea" name="allTchatMember" id="tchatMember" value="${this.content}"  /> 
                <p> 
                    <img class="imgUser" src="${this.attachment}" alt="image de l'utilisateur">
                </p>
            </div>
            <img role= "button" class ="trash" data-id="${this.id}"  src="images/trash.png" alt="supprimer la discussion" data-enable="${user.id == this.user.id}" /> 
        </div>
        <p class="unique">Commentaires</p>  
        <p class="commentUserMade"></p>  
        <div class="commentUser">
            <p class="avatarComment"> 
                <img class="avatarSize" src="${user.avatar}"/>
            </p>
            <input class="commentUserConnect" data-id="${this.id}" type="texterea" name="commentUser" placeholder="Réagissez!"/>  
            <img role="button" class="commentSend" data-id="${user.id}" data-postid="${this.id}"  name="submit" src="images/fleche_rouge.png" alt="touche pour envoyer un commentaire"/>       
        </div>
    </div>`;

    }
}

