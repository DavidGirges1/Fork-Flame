const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function loginuser() {
    const user =
        document.getElementById("username").value;
    const pass =
        document.getElementById("password").value;
    if (user === "Giovany@33" && pass === "12345678") {
        window.location.href = "index.html";
    }
    else {
        alert("Incorrect password or username");
    }
    return false;
}

function showalart(section) {
    alert('you clicked on :${section}');
}

let title = document.querySelector('.title');

btn.onclick = function () {
    modal.style.display = 'block';
    btn.style.display = 'none';
    title.style.display = 'none';
}

Cancelbtn.onclick = function () {
    modal.style.display = 'none';
    btn.style.display = 'block';
    title.style.display = 'block';
}

logoutbtn.onclick = function () {
    modal.style.display = 'none';
    document.querySelector('.container9').style.display = 'none';
    document.getElementById('logoutMessage').style.display = 'block';



}