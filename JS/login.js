/* eslint-disable no-unused-vars */
const form = document.getElementsByTagName('form')[0];
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        fetch(`http://127.0.0.1:5000/user/login`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            if (!response.ok) {
                document.getElementsByTagName("P")[0].style.visibility = "visible";
            }
            return response.json()
        })
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                window.open("http://127.0.0.1:5500/HTML/articles.html", "_self");
            }
            )
    }
    )

}