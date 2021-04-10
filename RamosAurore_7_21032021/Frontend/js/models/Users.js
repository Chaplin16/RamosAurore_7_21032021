//objet constructor 

//je cree un objet avec le constructor Users
class User {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.avatar = user.avatar; 
        this.job = user.job;
        this.isAdmin = user.isAdmin;
        this.createdAt = user.createAt;
        this.updatedAt = user.updatedAt;
    }
    save(token){
        this.token = token;
        sessionStorage.setItem("user", JSON.stringify(this))
    }
}
