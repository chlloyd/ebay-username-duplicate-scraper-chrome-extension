let usernames_set = new Set();

let usernames = document.getElementsByClassName("user-id");

for (username of usernames) {
    const user = username.innerText;
    // add data element of username
    username.setAttribute('data-username',user);
    if (usernames_set.has(user) == true){
        let random_colour = (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6);
        const duplicateUsers = document.querySelectorAll(`[data-username="${user}"]`);
        Array.from(duplicateUsers).forEach(e => e.style["background-color"] = "#" + random_colour);
        
        // highlight username

    }
    else {
        usernames_set.add(username.innerText);
    };
}