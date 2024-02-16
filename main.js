function login(){
    nomej1 = document.getElementById("j1").value
    nomej2 = document.getElementById("j2").value

    localStorage.setItem("j1", nomej1);
    localStorage.setItem("j2", nomej2);

    window.location = "materia.html";
}