$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 5,
                nomeCompleto: true 
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo.",
                minlength: "Seu nome completo deve ter pelo menos 5 caracteres.",
                nomeCompleto: "Por favor, insira nome e sobrenome."
            }
        }
    });
    $.validator.addMethod("nomeCompleto", function(value, element) {
        return /\s/.test(value.trim()); 
    }, "Por favor, insira seu nome completo.");
});
