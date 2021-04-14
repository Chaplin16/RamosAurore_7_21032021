//objet constructor 

//je cree un objet avec le constructor  Comments
class Comments {
    constructor(comment) {
        this.id = comment.id;
        this.comment = comment.comment;
        this.tchatId = comment.tchatId;
        this.userId = comment.User;
    }
    displayComment(user) {
        `<p class="unique">Commentaires</p>   
        <div class="commentUser" data-id="${this.id}">
            <p class="avatarComment"> 
                    <img class="avatarSize" src="${this.user.avatar}"/>
            </p>
            <input class="comment" type="texterea" name="commentUser" value="${this.comment}/>      
        </div>`
    }
}