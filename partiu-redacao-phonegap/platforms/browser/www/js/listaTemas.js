function listaTemas() {

    var url="http://partiuredacao.com.br/controlersApp/listaTemas.php";

    $("#temas").append("Carregando...");

    $.getJSON(url,function(result){

      // console.log(result);

      $("#temas").html("");      
      $.each(result, function(i, field){

        var titulo = field.titulo;
        var descricao = field.descricao;
        var imagem = field.imagem;
        var id_tema_redacao = field.id_tema_redacao;
        
        $("#temas").append("<li class='swipeout'> <div class='swipeout-content item-content'>   <div class='post_entry'>       <div class='post_thumb'><img src='"+imagem+"' alt=' title=' /></div>       <div class='post_details'>            <div class='post_category'><a href='detalhesTema.html' onClick='exibeTema("+id_tema_redacao+")'>"+titulo+"</a></div>                   <h2><a href='detalhesTema.html' onClick='exibeTema("+id_tema_redacao+")'>"+descricao+"</a></h2>          </div>       <div class='post_swipe'><img src='images/swipe_more.png' alt=' title=' /></div>   </div> </div> <div class='swipeout-actions-right'>   <a href='detalhesTema.html' onClick='exibeTema("+id_tema_redacao+")' class='action1'><img src='images/icons/black/message.png' alt=' title=' /></a>      <a href='detalhesTema.html' onClick='exibeTema("+id_tema_redacao+")' class='action1 open-popup' data-popup='.popup-social'><img src='images/icons/black/like.png' alt=' title=' /></a>      <a href='detalhesTema.html' onClick='exibeTema("+id_tema_redacao+")' class='action1 open-popup' data-popup='.popup-social'><img src='images/icons/white/contact.png' alt=' title=' /></a> </div></li>");
      
      });

    });

}

function exibeTema( id ) {

  var url = "http://partiuredacao.com.br/controlersApp/getDadosTema.php" ;

  $.getJSON( url , { id: id } )
    .done(function( json ) {
      $("#titulo_blog").html( "Fabiano" ) ;
      $("#blog_descricao").html( json.descricao ) ;
  })


}