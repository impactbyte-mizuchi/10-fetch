const getCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then((result) => {
            return result.json();
        })
        .then((result) => {
            const flagBox = document.getElementsByTagName("div")[1];

            result.forEach((element) => {
                const img = document.createElement("img");
                img.setAttribute("src", element.flag);
                img.setAttribute("alt", `flag-${element.flag.toLowerCase()}`);
                img.style.width = "200px";

                flagBox.appendChild(img);
            });
        });
};

const getGithubData = async () => {
    const response = await fetch("https://api.github.com/users/miftahmfaris");
    const result = await response.json();

    const name = document.getElementById("name");
    const githubBox = document.getElementsByTagName("div")[0];
    const img = document.createElement("img");
    const followers = document.createElement("p");
    const followersTotal = document.createTextNode(result.followers);

    followers.appendChild(followersTotal);
    img.setAttribute("src", result.avatar_url);

    githubBox.appendChild(img);
    githubBox.appendChild(followers);

    name.innerText = result.name;
};

getCountries();
getGithubData();
