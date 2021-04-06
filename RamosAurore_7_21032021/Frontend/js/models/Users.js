//objet constructor 

//je cree un objet avec le constructor Users
class User {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.avatar = user.avatar; 
        this.isAdmin = user.isAdmin;
        this.createdAt = user.createAt;
        this.updatedAt = user.updatedAt;
    }
    save(token){
        this.token = token;
        sessionStorage.setItem("user", JSON.stringify(this))
    }
}