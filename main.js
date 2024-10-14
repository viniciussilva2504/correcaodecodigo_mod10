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
                minlength: 14,
                noRepeatedNumbers: true
            },
            cpf: {
                required: true,
                minlength: 14,
                noRepeatedNumbers: true
            },
            endereco: {
                required: true,
                validEndereco: true
            },
            cep: {
                required: true,
                minlength: 9,
                noRepeatedNumbers: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo.",
                minlength: "Seu nome completo deve ter pelo menos 5 caracteres.",
                nomeCompleto: "Por favor, insira nome e sobrenome."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "Por favor, insira um telefone válido.",
                noRepeatedNumbers: "Insira um formato válido."
            },
            cpf: {
                required: "Por favor, insira seu CPF.",
                minlength: "Por favor, insira um CPF válido.",
                noRepeatedNumbers: "Insira um formato válido."
            },
            endereco: {
                required: "Por favor, insira seu endereço completo.",
                validEndereco: "Por favor, insira um endereço válido (com letras e números)."
            },
            cep: {
                required: "Por favor, insira seu CEP.",
                minlength: "Por favor, insira um CEP válido.",
                noRepeatedNumbers: "Insira um formato válido."
            }
        }
    });

    $.validator.addMethod("nomeCompleto", function (value, element) {
        return /\s/.test(value.trim()); 
    }, "Por favor, insira seu nome completo.");

    $.validator.addMethod("validEndereco", function (value, element) {
        return /[A-Za-z]/.test(value) && /\d/.test(value); 
    }, "Por favor, insira um endereço válido.");

    $.validator.addMethod("noRepeatedNumbers", function (value, element) {
        return !/(.)\1{4,}/.test(value.replace(/\D/g, ''));
    }, "Insira um formato válido.");
});
