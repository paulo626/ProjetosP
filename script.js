
var senhas=['pokemon']
var usuarios=['pokemon']

function ValidarItem(item){
    if(item == null || item == undefined){
        return(false)
    }
    else if(isNaN(item)){
        return(true)
    }
    else{return(false)}}

function ValidarItemN(itemN){
    if(itemN ==null|| itemN==undefined){
        return(false)
    }
    else{
        return(true)
    }
}

function Nconta(){
    Validacao = false
   do{
        var V0 = false;
        do{ 
           var nome = prompt('digite se nome')
           var chamado0 = ValidarItem(nome)
           if(chamado0 == false){alert('nome invalido')}
           else{
                if(nome.length<2){alert('nome invalido')}
                else{V0 = true}
            }
        }while(V0 === false);

        var V1 =false;
        do{
            var email = prompt('digite se email')
            var chamado1 = ValidarItem(email)
            if (chamado1 == false){alert('email invalido')}
            else{V1 = true}
        }
        while(V1 === false)


        var V2 = false;
        do{
            var idade = parseInt(prompt('digite sua idade'))
            var chamado2 = ValidarItemN(idade)
            if(chamado2 == false){alert('idade invalida')}
            else{
                if(idade<0 || idade>100){alert('idade invalida')}
                else{V2 = true}
            }
        }while(V2 === false)


        var V3 =false;
        do{
            var senha = prompt('digite uma senha(DEVE CONTER LETRAS E CARACTERES MINIMO 6 CARACTERES)')
            var chamado3 = ValidarItem(senha)
            if(chamado3 == false){alert('senha invalida');}
            else{
                if(senha.length<6){alert('senha muito curta');}
                else{V3 = true};
            }
        }while(V3 === false);


        var V4 = false;
        do{
            var senhaConfirmada = prompt('confirme a senha');
            var chamado4 = ValidarItem(senhaConfirmada);
            if(chamado4 == false){alert('senha invalida')}
            else{if(senhaConfirmada=!senha){alert('senha diferentes')}else{V4=true}}

        }while(V4 === false);


        var V5=false;
        do{
            var genero = prompt('digite seu genero (M ou F)');
            var chamado5 =ValidarItem(genero);
            var generoValidados = ['f','F','M','m']
            if(chamado5 == false){alert('genero invalido')}
            else{
                if(generoValidados.includes(genero)){V5 = true;Validacao = true}
                else(alert('genero invalido'))
            }
            

        }while(V5 === false)
}while(Validacao === false)

senhas.push(senha);
usuarios.push(nome);

}

function Validar(){
    let Login = document.getElementById('Login').value;
    let Senha = document.getElementById('Senha').value;
    const Alertar = document.getElementById('Alertar')

    if(senhas.includes(Login) && usuarios.includes(Senha)){
        alert("login efetuado com sucesso")
        window.location.href = 'pagina2.html';
    }
    else{
        Alertar.style.color = 'red'
        Alertar.innerText = 'usuario ou senha invalido'
        console.log(Login)
        console.log(Senha)
    }
}

var lista = ['pokemon']
var lista2 = ['pokemon']
let elemento = "esquardou"
let elemento2 = 'quadrobranco'
lista.push(elemento)
lista.push(elemento2)
if(lista.includes(elemento)){console.log('deu bom')}else{console.log('tem coisa errada')}