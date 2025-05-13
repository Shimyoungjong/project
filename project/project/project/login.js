function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "admin" && pass === "1234") {
        alert("로그인 성공!");
    } else {
        alert("잘못된 정보입니다. 다시 시도해 주십시오.");
    }
}