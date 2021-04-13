
//objet constructor 

//je cree un objet avec le constructor Tchats
class Tchats {
    constructor(tchat) {
        this.id = tchat.id;
        this.content = tchat.content;
        this.createdAt = tchat.createAt;
        this.updatedAt = tchat.updatedAt;
        this.user = tchat.User;
        this.comment = tchat.Comments;
    }
    displayTchats(user) {
      return  `<div class="oneTchat" data-id="${this.id}"  >
        <div class="tchatMember">
            <div class="infoMember">
                <p class="avatarMember"> 
                    <img class="avatarSize" src="${this.user.avatar}"/>
                </p>
                <p id=usernameMember class="usernameMember">${this.user.username}</p>
            </div>
            <label for="allTchatMember"></label>
            <input class="inputTchatMember" type="texterea" name="allTchatMember" id="tchatMember" value="${this.content}"  /> 
            <img role= "button" class ="trash" data-id="${this.id}"  src="images/trash.png" alt="supprimer la discussion"  /> 
        </div>
         <p class="unique">Commentaires</p>   
        <div class="commentUser">
            <p class="avatarComment"> 
                <img class="avatarSize" src="${user.avatar}"/>
            </p>
            <input class="commentUserConnect" type="texterea" name="commentUser" id="commentUserConnect" placeholder="Réagissez!"/>  
            <img role="button" class="commentSend" data-id="${user.id}" name="submit" src="images/fleche_rouge.png" alt="touche pour envoyer un commentaire">       
        </div>`;

    }
}

