function uploadRedacao() {

    var data = new FormData();
    data.append('fileimagem', $('#fileimagem')[0].files[0]);

    $.ajax({
        url: 'http://partiuredacao.com.br/controlersApp/salvaRedacao.php',
        data: data,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) 
        {
            alert(data);
        }
    });

    alert(data);

