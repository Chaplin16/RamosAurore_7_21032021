//objet constructor 

//je cree un objet avec le constructor  Comments
class Comments {
    constructor(comment) {
        this.id = comment.id;
        this.TchatId = comment.TchatId;
        this.User = comment.User;
        this.comment = comment.comment;    
    }
    displayComment(info) { 
        return `<div class="commentUser" data-id="${this.id}">
                    <p class="avatarComment"> 
                            <img class="avatarSize" src="${this.User.avatar}" alt="avatarde l'utilisateur qui a commenté"/>
                    </p>
                    <div class="pseudoAndText">
                        <h4 class="pseudo">${this.User.username}</h4>
                        <p class="comment" id="comment" name="comment" >${this.comment}</p>   
                    </div>
                    <img role="button" class="trashComment" data-id="${this.id}" data-enable="${info.id === this.User.id || info.isAdmin}" name="submit" src="images/trash.png" alt="supprimer le commentaire"  />       
                </div>`
    }
}