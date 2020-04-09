const url = "https://5e33d48de0161c00140ac4fe.mockapi.io/users";
const mockAPI = document.getElementsByTagName("div")[2];

const getMockAPI = async () => {
    const response = await fetch(url);

    const result = await response.json();

    result.forEach((element) => {
        const newDiv = document.createElement("div");

        newDiv.innerHTML = `<p>${element.fullname}</p><img src="${element.avatar}"/>
        <div style="display: flex; justify-content:space-between">
        <button id="edit-${element.id}" class="edit-button">ubah</button><button id="delete-${element.id}" class="delete-button">hapus</button>
        </div>`;

        mockAPI.appendChild(newDiv);

        // // create name
        // const name = document.createElement("p");
        // const textName = document.createTextNode(element.fullname);
        // name.appendChild(textName);
        // newDiv.appendChild(name);

        // // create img
        // const img = document.createElement("img");
        // img.setAttribute("src", element.avatar);
        // img.setAttribute("alt", "avatar");
        // img.style.width = "200px";
        // newDiv.appendChild(img);

        // // create delete button
        // const deleteButton = document.createElement("button");
        // const deleteText = document.createTextNode("hapus");
        // deleteButton.setAttribute("id", `delete-${element.id}`);
        // deleteButton.style.display = "block";
        // deleteButton.setAttribute("class", "delete-button");

        // deleteButton.appendChild(deleteText);
        // newDiv.appendChild(deleteButton);

        // // create edit button
        // const editButton = document.createElement("button");
        // const editText = document.createTextNode("ubah");
        // editButton.setAttribute("id", `edit-${element.id}`);
        // editButton.style.display = "block";
        // editButton.setAttribute("class", "edit-button");

        // editButton.appendChild(editText);
        // newDiv.appendChild(editButton);

        // mockAPI.appendChild(newDiv);
    });

    mockAPI.style.display = "flex";
    mockAPI.style.justifyContent = "center";
    mockAPI.style.flexWrap = "wrap";
};

const registerForm = document.getElementById("register-form");

const addNewUser = async (event) => {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const avatar = document.getElementById("avatar").value;

    const registrant = {
        fullname,
        username,
        email,
        password,
        avatar,
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registrant),
    });
    await response.json();
    getMockAPI();
};

const deleteUser = async (event) => {
    if (event.target.matches(".delete-button")) {
        const id = event.target.id.replace("delete-", "");
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });

        await response.json();

        location.reload();
    }
};

// : = params

const editUser = async (event) => {
    if (event.target.matches(".edit-button")) {
        const nameEdit = prompt("insert your name");

        const id = event.target.id.replace("edit-", "");
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname: nameEdit }),
        });

        await response.json();

        location.reload();
    }
};

getMockAPI();

registerForm.addEventListener("submit", addNewUser);
mockAPI.addEventListener("click", deleteUser);
mockAPI.addEventListener("click", editUser);
