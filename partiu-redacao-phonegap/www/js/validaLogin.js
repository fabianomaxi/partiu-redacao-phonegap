$(document).ready(function()
  {
    
    $("#validaLogin").click(function(){

      var email_login = $("#email_login").val();
      var senha_login = $("#senha_login").val();
      
      var dataString = "email_login="+email_login+"&senha_login="+senha_login;

      if( $.trim(email_login).length > 0 & $.trim(senha_login).length > 0 )
      {

        $.ajax({

          type: "POST",
          url:"http://partiuredacao.com.br/controlersApp/validaUsuario.php",
          data: dataString,
          crossDomain: true,  
          cache: false,

          success: function(data){

            var dados = JSON.parse( data ) ;

            if( dados.sucesso == "0" ) {
              $("#loginInvalido").show() ;
            } else {
              window.sessionStorage.setItem( "id_usuario_logado" , dados.id_usuario ) ;
              window.sessionStorage.setItem( "email_usuario_logado" , email_login ) ; 
              window.location =  "index.html";
            }

          }

        });

      }

      return false;
      
    });

  });