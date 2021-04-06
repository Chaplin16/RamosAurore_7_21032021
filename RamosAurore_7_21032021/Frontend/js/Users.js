//objet constructor 

//je cree un objet avec le constructor Users
class Users {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.job = user.job;
        this.avatar = user.avatar;
        this.isAdmin = user.isAdmin;
        this.createdAt = user.createAt;
        this.updatedAt = user.updatedAt;
    }
}