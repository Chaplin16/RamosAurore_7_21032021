let config = "http://localhost:3000";

let allMembers = document.getElementById('allMembers');

function showMembers(users) {
    allMembers.innerHTML += `<button class="avatarMember"> 
    <a href="#">Avatar</a>
</button>
<label for="username"> </label>           
<input class="inputMemberName" type="text" name="username" id="username"/>`
}

