//objet constructor 

//je cree un objet avec le constructor  Comments
class Comments {
    constructor(comment) {
        this.id = comment.id;
        this.TchatId = comment.TchatId;
        this.User = comment.User;
        this.comment = comment.comment;
    
    }

    displayComment() { 
        return `<div class="commentUser" data-id="${this.id}">
                    <p class="avatarComment"> 
                            <img class="avatarSize" src="${this.User.avatar}"/>
                    </p>
                    <div class="pseudoAndText">
                        <p class="pseudo">${this.User.username}</p>
                        <input class="comment" type="texterea" name="comment" value="${this.comment}"/>
                    </div>
                    <img role="button" class="trashComment" data-id="${this.id}" name="submit" src="images/trash.png" alt="supprimer le commentaire"  />       
                </div>`
    }
}