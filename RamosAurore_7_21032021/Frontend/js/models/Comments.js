//objet constructor 

//je cree un objet avec le constructor  Comments
class Comments {
    constructor(comment) {
        this.id = comment.message.id;
        this.comment = comment.message.comment;
        this.TchatId = comment.message.TchatId;
        this.userId = comment.message.userId;
    }
    displayComment(info) { 
        return `<div class="commentUser" data-id="${this.id}">
                    <p class="avatarComment"> 
                            <img class="avatarSize" src="${info.avatar}"/>
                    </p>
                    <input class="comment" type="texterea" name="comment" value="${this.comment}"/>      
                </div>`
    }
}