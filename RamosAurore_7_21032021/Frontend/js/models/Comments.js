//objet constructor 

const { Tchat } = require("../../../Backend/models");

//je cree un objet avec le constructor  Comments
class Comments {
    constructor(comment) {
        this.id = comment.id;
        Tchat = comment.TchatId;
        this.user = comment.userId;
        this.user = avatar; 
        this.comment = comment.comment;
    
    }

    displayComment() { 
        return `<div class="commentUser" data-id="${this.id}">
                    <p class="avatarComment"> 
                            <img class="avatarSize" src="${this.user}"/>
                    </p>
                    <input class="comment" type="texterea" name="comment" value="${this.comment}"/>
                    <img role= "button" class ="trash" data-id="${this.id}"  src="images/trash.png" alt="supprimer la discussion"  />       
                </div>`
    }
}