/* Envio de mensagens para o formulário */

//Card de mensagens  - msg.html
const msgList = document.querySelector('#comment-list');

//1.função para gerar chaves randomicas

function gerarChave(){
    return Math.floor(Math.random() * 20);
}


//2.Verificação de mensagens enviadas

function adicionarMensagem(){

   armazenarMensagens();
}



//3.Armazenar mensagens enviadas

function armazenarMensagens(){
     // Recebendo dados enviados pelo formulário

     const formName = document.querySelector('#name-form')
     const formEmail = document.querySelector('#email-form')
     const formDesc = document.querySelector('#text-form')
 
     //Verificação de valores
     if(formName.value == "" && formEmail.value == "" && formDesc.value == ""){
         
         alert("Não há dados")
 
     }else{
 
         //Modelo objeto de formulário
 
         let email = {
             name: "",
             email: "",
             description: ""
         }
 
         //Verificar se houve inserção de dados
         

            //Inserindo dados de input no formulário
            email.name = formName.value;
            email.email = formEmail.value;
            email.description = formDesc.value;

            if(email.name!=='' && email.email!==''&& email.description!==''){

                //Salvando objeto no sessionStorage
                sessionStorage.setItem(gerarChave(), JSON.stringify(email))
                alert("Mensagem enviada com sucesso!")

            }else{

                alert("Não há dados nas mensagens, por favor, insira informação nas mensagem!")

            }
    
     }
}



//4.Modelo card de mensagens

function recuperarMensagem(){

    //Recupera todas as chaves que estão dentro do sessionStorage

    let keys = Object.keys(sessionStorage)

    //Percorre todas as chaves e busca cada objeto que existe por lá
    if(keys !== Number){
        console.log("Atenção, não há mensagens para serem exibidas");
    }

    for(let i of keys){

        
        let getEmail = sessionStorage.getItem(i)
        console.log(getEmail)
        if(getEmail == 'true'){
            
            console.log("Atenção, não há mensagens para serem exibidas!");

        }else{
            let emailObject = JSON.parse(getEmail)
        
            const div = document.createElement('div');
            
            let divHTML =   `<div class="comment-card" >

                            <h2>${emailObject.name}</h2>

                            <h3>${emailObject.email}</h3>

                            <p>${emailObject.description}</p>

                            </div>`

            div.innerHTML = divHTML;
            div.id = emailObject.id;
            msgList.appendChild(div)
            
            

        }
        
    }

}



//5.Deletar todas as mensagens mensagens

function deletar(){
    sessionStorage.clear();
}
