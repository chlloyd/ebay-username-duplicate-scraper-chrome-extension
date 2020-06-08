let usernames_set = new Set();

let usernames = document.getElementsByClassName("user-id");

for (username of usernames) {
    const user = username.innerText;
    // add data element of username
    username.setAttribute('data-username',user);
    if (usernames_set.has(user) == true){
        const duplicateUsers = document.querySelectorAll(`[data-username="${user}"]`);
        Array.from(duplicateUsers).forEach(e => e.style["background-color"] = "#FF00FF");
        
        // highlight username

    }
    else {
        usernames_set.add(username.innerText);
    };
}