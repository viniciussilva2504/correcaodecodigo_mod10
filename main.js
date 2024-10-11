$(document).ready(function () {
    // Inicializa o carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    // Máscaras para os campos de telefone, CPF e CEP
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Validação do formulário
    $('form').validate();

    // Função para resetar o formulário após o envio
    $('#form').on('submit', function (e) {
        e.preventDefault(); // Impede o comportamento padrão de envio do formulário
        alert("Formulário enviado com sucesso!");
        this.reset(); // Reseta o formulário
    });
});
