$(document).ready(function () {
    //Validação CPF
    $("#recipient-cpf").on('keyup', function () {
        if ($("#recipient-cpf").val() == '') {
            $("#circle-false").css('display', 'block');
            $("#circle-true").css('display', 'none');
            return false;
        };

        if (validateCPF($("#recipient-cpf").val())) {
            $("#circle-false").css('display', 'none');
            $("#circle-true").css('display', 'block');
        }

        else {
            $("#circle-false").css('display', 'block');
            $("#circle-true").css('display', 'none');
        };
    });

    // Validação CPF Depósito
    $("#recipient-cpf-dep").on('keyup', function () {
        if ($("#recipient-cpf-dep").val() == '') {
            $("#circle-false20").css('display', 'block');
            $("#circle-true20").css('display', 'none');
            return false;
        };

        if (validateCPF($("#recipient-cpf-dep").val())) {
            $("#circle-false20").css('display', 'none');
            $("#circle-true20").css('display', 'block');
        }

        else {
            $("#circle-false20").css('display', 'block');
            $("#circle-true20").css('display', 'none');
        };
    });

    // Validação CPF Saque
    $("#recipient-cpf-saq").on('keyup', function () {
        if ($("#recipient-cpf-saq").val() == '') {
            $("#circle-false21").css('display', 'block');
            $("#circle-true21").css('display', 'none');
            return false;
        };

        if (validateCPF($("#recipient-cpf-saq").val())) {
            $("#circle-false21").css('display', 'none');
            $("#circle-true21").css('display', 'block');
        }

        else {
            $("#circle-false21").css('display', 'block');
            $("#circle-true21").css('display', 'none');
        };
    });

    const validateCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g, '');

        if (cpf == '') return false;

        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;

        let add = 0;
        for (i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        };

        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) {
            rev = 0;
        };

        if (rev != parseInt(cpf.charAt(9))) {
            return false;
        };

        add = 0;
        for (i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        };

        rev = 11 - (add % 11);

        if (rev == 10 || rev == 11) {
            rev = 0;
        };

        if (rev != parseInt(cpf.charAt(10))) {
            return false;
        };

        return true;
    };

    //Validação do Nome
    $('#recipient-name').on('keyup', function () {
        if ($("#recipient-name").val().length > 7
            && $("#recipient-name").val().match(/[ ]/)
        ) {
            $("#circle-false1").css('display', 'none');
            $("#circle-true1").css('display', 'block');
            return false;
        }

        else {
            $("#circle-false1").css('display', 'block');
            $("#circle-true1").css('display', 'none');
        };
    });

    //Validação E-mail
    let rx = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    $('#recipient-email').on('keyup', function () {

        if (rx.test($('#recipient-email').val().trim()) == '') {
            $("#circle-false2").css('display', 'block');
            $("#circle-true2").css('display', 'none');
        };

        if (rx.test($('#recipient-email').val().trim())) {
            $("#circle-false2").css('display', 'none');
            $("#circle-true2").css('display', 'block');
        } else {
            $("#circle-false2").css('display', 'block');
            $("#circle-true2").css('display', 'none');
        };
    });

    //Validação E-mail Saque
    $('#recipient-email-saq').on('keyup', function () {

        if (rx.test($('#recipient-email-saq').val().trim()) == '') {
            $("#circle-false23").css('display', 'block');
            $("#circle-true23").css('display', 'none');
        };

        if (rx.test($('#recipient-email-saq').val().trim())) {
            $("#circle-false23").css('display', 'none');
            $("#circle-true23").css('display', 'block');
        } else {
            $("#circle-false23").css('display', 'block');
            $("#circle-true23").css('display', 'none');
        };
    });


    // VALIDAR TELEFONE
    $('#recipient-fone').on('keyup', function () {
        if ($("#recipient-fone").val() == '' || $("#recipient-fone").val().length < 15) {
            $("#circle-false3").css('display', 'block');
            $("#circle-true3").css('display', 'none');
            return false;
        }

        else {
            $("#circle-false3").css('display', 'none');
            $("#circle-true3").css('display', 'block');
        };
    });

    //Validação data de nascimento
    $('#dt_nascimento').on('keyup', function () {
        if ($("#dt_nascimento").val() == '' || $("#dt_nascimento").val().length < 10) {
            $("#circle-false4").css('display', 'block');
            $("#circle-true4").css('display', 'none');
            return false;
        }

        else {
            $("#circle-false4").css('display', 'none');
            $("#circle-true4").css('display', 'block');
        };
    });

    //Validação data de nascimento Saque
    $('#dt_nascimento-saq').on('keyup', function () {
        if ($("#dt_nascimento-saq").val() == ''
            || $("#dt_nascimento-saq").val().length < 10
        ) {
            $("#circle-false22").css('display', 'block');
            $("#circle-true22").css('display', 'none');
            return false;
        }

        else {
            $("#circle-false22").css('display', 'none');
            $("#circle-true22").css('display', 'block');
        };
    });

    //Validação Nick
    $('#recipient-nick').on('keyup', function () {
        if ($('#recipient-nick').val() == ''
            || $('#recipient-nick').val().length < 2
        ) {
            $("#circle-false5").css('display', 'block');
            $("#circle-true5").css('display', 'none');
        }

        else {
            $("#circle-false5").css('display', 'none');
            $("#circle-true5").css('display', 'block');
        };
    });

    //Validação PW
    let validateInput = $('input.validate');

    const validateInputs = () => {
        let password = $('#recipient-pw').val();
        let conf = $('#recipient-pwConf').val();
        let all_pass = true;

        let uppercase = password.match(/[A-Z]/);
        let number = password.match(/[0-9]/);

        if (password.length >= 8) {
            $('.password_length').addClass('complete');
            $("#circle-true10").css('display', 'block');
            $("#circle-warning1").css('display', 'none');
        }
        else {
            $('.password_length').removeClass('complete');
            $("#circle-true10").css('display', 'none');
            $("#circle-warning1").css('display', 'block');
            all_pass = false;
        };

        if (uppercase) {
            $('.password_uppercase').addClass('complete');
            $("#circle-true11").css('display', 'block');
            $("#circle-warning2").css('display', 'none');
        }
        else {
            $('.password_uppercase').removeClass('complete');
            $("#circle-true11").css('display', 'none');
            $("#circle-warning2").css('display', 'block');
            all_pass = false;
        };

        if (number) {
            $('.password_number').addClass('complete');
            $("#circle-true12").css('display', 'block');
            $("#circle-warning3").css('display', 'none');
        }
        else {
            $('.password_number').removeClass('complete');
            $("#circle-true12").css('display', 'none');
            $("#circle-warning3").css('display', 'block');
            all_pass = false
        };

        // VERIFICAÇÃO DA SENHA
        if (password == '') {
            $("#circle-false7").css('display', 'none');
            $("#circle-true7").css('display', 'none');
            $("#circle-false8").css('display', 'none');
            $("#circle-true8").css('display', 'none');
            $("#circle-warning4").css('display', 'none');
        }

        else if (number && uppercase && password.length >= 8) {
            $("#circle-false7").css('display', 'none');
            $("#circle-true7").css('display', 'block');
            $("#circle-warning4").css('display', 'none');
            $("#recipient-pw").css('border', 'none');
        }

        else {
            $("#circle-false7").css('display', 'none');
            $("#circle-true7").css('display', 'none');
            $("#circle-warning4").css('display', 'block');
        };

        if (password == '') {
            $("#circle-false8").css('display', 'none');
            $("#circle-true8").css('display', 'none');
        }

        else if (password == conf && number && uppercase && password.length >= 8) {
            $("#circle-false8").css('display', 'none');
            $("#circle-true8").css('display', 'block');
            $("#recipient-pw").css('border', 'none');
            $("#recipient-pwConf").css('border', 'none');
        }

        else {
            $("#circle-false8").css('display', 'block');
            $("#circle-true8").css('display', 'none');
        };
    }

    validateInput.each(validateInputs).on('keyup', validateInputs);


    // BOTÃO MOSTRAR/OCULTAR SENHA
    $('#btnToggle').on('click', function () {
        let passwordInput = document.getElementById('recipient-pw');
        let passwordInputConf = document.getElementById('recipient-pwConf');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordInputConf.type = 'text';
            $('#eyeIcon').hide();
            $('#eyeIconHide').show();
        } else {
            passwordInput.type = 'password';
            passwordInputConf.type = 'password';
            $('#eyeIcon').show();
            $('#eyeIconHide').hide();
        }
    });


    //Envio de Dados para Cadastro
    $('#button-register').on('click', async function () {
        const form = document.querySelector('#userRegister');
        const formData = new FormData(form)
        const data = new URLSearchParams(formData)

        if ($('#recipient-cpf').val() == ''
            || !(validateCPF($("#recipient-cpf").val()))
            || $('#recipient-name').val() == ''
            || $("#recipient-name").val().length < 7
            || !$("#recipient-name").val().match(/[ ]/)
            || $('#recipient-email').val() == ''
            || !rx.test($('#recipient-email').val().trim())
            || $('#recipient-fone').val() == ''
            || $("#recipient-fone").val().length < 15
            || $("#dt_nascimento").val() == ''
            || $("#dt_nascimento").val().length < 10
            || $('#recipient-nick').val() == ''
            || $('#recipient-nick').val().length < 2
            || $('#recipient-pw').val() == ''
            || $('#recipient-pwConf').val() == ''
        ) {
            swal({
                title: "Atenção:",
                text: "Verifique se todos os campos foram preenchidos corretamente.",
                icon: "warning",
                button: "Voltar",
            });
        }

        else if ($('#recipient-pw').val().length >= 17
            || $('#recipient-pw').val().length <= 7
            || !$('#recipient-pw').val().match(/[A-Z]/)
            || !$('#recipient-pw').val().match(/[0-9]/)
        ) {
            $("#recipient-pw").css('border', '1.5px solid red');
            swal({
                title: "Atenção:",
                text: "Sua senha não possui os requisitos mínimos de segurança para poder prosseguir.",
                icon: "warning",
                button: "Voltar",
            });
        }

        else if ($('#recipient-pw').val()
            !== $('#recipient-pwConf').val()
        ) {
            $("#recipient-pwConf").css('border', '1.5px solid red');
            swal({
                title: "Atenção:",
                text: "As senhas digitadas não conferem.",
                icon: "warning",
                button: "Voltar",
            });
        }

        else {
            // fetch('./api.php', {
            //     method: 'POST',
            //     body: data
            // })
            //     .then(res => res.json())
            //     .then(res => {
            //         if (res && res.success) {
            //             $('#userRegister').hide();
            //             $('.modal-cad').addClass('animate__animated animate__fadeInRight');
            //             $('#download-app').show();
            //         } else {
            //             alert(res.message || 'Erro na solicitação.')
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         return error;
            //     });
            alert("Passou...");
        };
    });

    //Envio de Dados para Depósito
    $('#button-dep').on('click', async function () {
        const form = document.querySelector('#userDeposit');
        const formData = new FormData(form)
        const data = new URLSearchParams(formData)

        if ($('#recipient-cpf-dep').val() == ''
            || !(validateCPF($("#recipient-cpf-dep").val()))
            || $('#recipient-dep-value').val() == ''
        ) {
            swal({
                title: "Atenção:",
                text: "Verifique se todos os campos foram preenchidos corretamente.",
                icon: "warning",
                button: "Voltar",
            });
        }

        else {
            // fetch('./api.php', {
            //     method: 'POST',
            //     body: data
            // })
            //     .then(res => res.json())
            //     .then(res => {
            //         if (res && res.success) {
            //             $('#userDeposit').hide();
            //             $('.modal-cad').addClass('animate__animated animate__fadeInRight');
            //             $('#deposit-qrcode').show();
            //         } else {
            //             alert(res.message || 'Erro na solicitação.')
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         return error;
            //     });
            alert("Passou...");
        };
    });

    //Envio de Dados para Saque
    $('#button-saq').on('click', async function () {
        const form = document.querySelector('#userWithdraw');
        const formData = new FormData(form)
        const data = new URLSearchParams(formData)

        if ($('#recipient-cpf-saq').val() == ''
            || !(validateCPF($("#recipient-cpf-saq").val()))
            || $("#dt_nascimento-saq").val() == ''
            || $("#dt_nascimento-saq").val().length < 10
            || $('#recipient-email-saq').val() == ''
            || !rx.test($('#recipient-email-saq').val().trim())
            || $('#recipient-saq-value').val() == ''
        ) {
            swal({
                title: "Atenção:",
                text: "Verifique se todos os campos foram preenchidos corretamente.",
                icon: "warning",
                button: "Voltar",
            });
        }

        else {
            // fetch('./api.php', {
            //     method: 'POST',
            //     body: data
            // })
            //     .then(res => res.json())
            //     .then(res => {
            //         if (res && res.success) {
            //             $('#userDeposit').hide();
            //             $('.modal-cad').addClass('animate__animated animate__fadeInRight');
            //             $('#deposit-qrcode').show();
            //         } else {
            //             alert(res.message || 'Erro na solicitação.')
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         return error;
            //     });
            alert("Passou...");
        };
    });

    //Cookies
    function activeCookies() {
        $('.cookies-container').css('display', 'none');
        $('.modal-cook').css('display', 'none');
        window.localStorage.setItem('cookies-policy', 'Suprema Poker');
    };

    const cookiesPref = window.localStorage.getItem('cookies-policy');
    if (cookiesPref) {
        activeCookies(cookiesPref)
    };

    if (cookiesPref == 'true') {
        $('.cookies-container').css('display', 'none');
    } else {
        $('.cookies-container').css('display', 'flex');
    };

    $('#saveCookies').on('click', function () {
        $('.modal_suprema').css('display', 'flex');
        activeCookies();
    });

    $('#rejCookies').on('click', function () {
        window.location.replace("index.html")
    });


    // ABRIR MODAL DEPÓSITO
    $("#deposit-button").on('click', function () {
        $("#depsaq-modal").css('display', 'block');
        $("#card-saq").css('display', 'none');
        $("#card-dep").css('display', 'block');
    });

    $("#cashout-button").on('click', function () {
        $("#depsaq-modal").css('display', 'block');
        $("#card-dep").css('display', 'none');
        $("#card-saq").css('display', 'block');
    });

    //Close Button
    $("#card-close").on('click', function () {
        
        // $(".card-dep").css('animation', 'go-down 1s');
        $("#depsaq-modal").css('display', 'none');
        $("#recipient-cpf-dep").prop('value', '');
        $("#recipient-dep-value").prop('value', '');
        $("#recipient-cpf-saq").prop('value', '');
        $("#dt_nascimento-saq").prop('value', '');
        $("#recipient-email-saq").prop('value', '');
        $("#recipient-saq-value").prop('value', '');
    });
});

//Regex numero
const numberOnly = (evt) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9.]+$/ && /(^-|^\d)|\.+/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
};

//mask data nascimento
$('#dt_nascimento').mask('00/00/0000');
$('#dt_nascimento-saq').mask('00/00/0000');

//mask cpf
$('#recipient-cpf').mask('000.000.000-00');
$('#recipient-cpf-dep').mask('000.000.000-00');
$('#recipient-cpf-saq').mask('000.000.000-00');

// mask telefone
$('#recipient-fone').mask('(00) 0 0000-0000');

// mask moeda
$('#recipient-dep-value').maskMoney({allowNegative: false, thousands:'.', decimal:',', affixesStay: false});
$('#recipient-saq-value').maskMoney({allowNegative: false, thousands:'.', decimal:',', affixesStay: false});


//Regex nome
const validateName = (evt) => {
    const event = evt || window.event;
    const charCode = event.keyCode || event.which;
    const isSpace = charCode == 32;
    const isBackspace = charCode == 8;
    const isUppercaseChars = charCode > 64 && charCode < 91;
    const isLowercaseChars = charCode > 96 && charCode < 123;
    return (isUppercaseChars || isLowercaseChars || isBackspace || isSpace);
};

const execMasck = () => {
    v_obj.value = v_fun(v_obj.value)
};

//Inserir código de validação
function handleCharacter(event) {
    let $input = $(this);
    let index = getIndex($input);
    let digit = $input.val().slice(0, 1);
    let rest = $input.val().slice(1);
    let $next;
    if (rest.length > 0) {
        $input.val(digit);
        $next = $(`.inputs[name="chars[${index + 1}]"]`);
        if ($next.length > 0) {
            $next.val(rest);
            $next.focus();
            handleCharacter.call($next, event);
            checkInputFinal();
        }
    }
};

function handleBackspace(event) {
    let $input = $(this);
    let index = getIndex($input);
    let $prev;
    if (event.which === 8 && !$(this).val()) {
        $prev = $(`.inputs[name="chars[${index - 1}]"]`);
        $prev.focus();
    }
};

function getIndex($input) {
    return parseInt($input.attr('name').split(/[\[\]]/)[1], 10);
}

function checkInputFinal() {
    if ($('.inputFinal').val()) {
        let hasError = false;
        for (const code of $('#registerform input.inputs')) {
            if (!code.value) {
                hasError = true;
                break;
            }
        }
        if (hasError) {
            $('#registerform input.inputs:eq(0)').focus();
        } else {
            $('#inputCod').addClass('hide');
        }
    }
};

$('.inputs')
    .on('keyup', handleCharacter)
    .on('keydown', handleBackspace);

$('.inputFinal').on('keyup', checkInputFinal);

function isFieldEmpty(value) {
    if (value == '' || value == null || value == undefined) {
        return true;
    }
};