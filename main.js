$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000');
    
    $('#cpf').mask('000.000.000-00');
    
    $('#cep').mask('00000-000');

    $('#form').on('submit', function (e) {
        e.preventDefault(); 
        alert("Formulário enviado com sucesso!");
        this.reset();
    });
});
