//objet constructor 

//je cree un objet avec le constructor  Comments
class Comments {
    constructor(comment) {
        this.id = comment.id;
        this.userId = comment.tchatId;
        this.comment = comment.comment;
        this.user = comment.User;
    }
    displayComment() {
        `<p class="unique">Commentaires</p>   
        <div class="commentUser">
            <p class="avatarComment"> 
                    <img class="avatarSize" src="${this.user.avatar}"/>
            </p>
            <input class="commentUserConnect" type="texterea" name="commentUser" id="commentUserConnect" value="${this.comment}/>      
        </div>`
    }
}