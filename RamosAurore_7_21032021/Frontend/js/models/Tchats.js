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
        <h3 class="tchatMember">
            <div class="infoMember">
                <h4 class="avatarMember"> 
                    <img class="avatarSize" src="${this.user.avatar}" alt="avatar de l'utilisateur connecté"/>
                </h4>
                <h4 id="usernameMember" class="usernameMember">${this.user.username}</h4>
            </div>
            <div class="inputWithImg">
                    <p class="inputTchatMember" type="textarea" name="allTchatMember" id="tchatMember" >${this.content}</p> 
                     <p>
                        ${this.attachment ? `<img class="imgUser" src="${this.attachment}" alt="image de l'utilisateur">` : ""}
                    </p>
                </label>
            </div>
            <p>
                <img role= "button" class ="trash" data-id="${this.id}"  src="images/trash.png" alt="supprimer la discussion" data-enable="${user.id == this.user.id}" /> 
            </p>
        </h3>
        <h3 class="unique">Commentaires</h3>  
        <p class="commentUserMade"></p>  
        <div class="commentUser">
            
            <h4 class="avatarComment"> 
                <img class="avatarSize" src="${user.avatar}" alt="avatar de l'utilisateur connecté"/>
            </h4>
            <label for="userWriter" >ecrire ici votre commentaire</label>
            <input class="commentUserConnect" id="userWriter" data-id="${this.id}" type="texterea" name="commentUser" placeholder="Réagissez!"/>  
            <img role="button" class="commentSend" data-id="${user.id}" data-postid="${this.id}"  name="submit" src="images/fleche_rouge.png" alt="touche pour envoyer un commentaire"/>       
        </div>
    </div>`;

    }
}

