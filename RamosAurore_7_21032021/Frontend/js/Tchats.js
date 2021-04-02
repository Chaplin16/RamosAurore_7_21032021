//objet constructor 

//je cree un objet avec le constructor Tchats
class Tchats {
    constructor(tchat) {
        this.id = tchat.id;
        this.content = tchat.content;
        this.attachment = tchat.attachment;
        this.userId = tchat.userId;
        this.createdAt = tchat.createAt;
        this.updatedAt = tchat.updatedAt;
    }
}