function pegarvalor(){
    var usuario = document.getElementById("inputusuario").value
    var senha = document.getElementById("inputsenha").value
    return{Usuario:usuario,Senha:senha}
}

function validar() {
    var listaDeUsuarios = ["usuario1","usuario2","usuario3","Usuario1","Usuario2","Usuario3"]
    var listaDeSenhas = ["senha1","senha2","senha3","Senha1","Senha2","Senha3"]
    var valoresPegados= pegarvalor()
    if(listaDeUsuarios.includes(valoresPegados.Usuario)){
        if(listaDeSenhas.includes(valoresPegados.Senha)){
            window.location.href ="http://127.0.0.1:5500/segundapagina.html"
        }
    }
    else{
        alert("sai dai vagabundo")
        window.location.href ="https://www.youtube.com/index"
    }

}

