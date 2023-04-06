$(document).ready(function () {
    //Validação CPF
    $("#recipient-cpf").on('change', function() {
        if($("#recipient-cpf").val() == '') {
            $("#recipient-cpf").css('border','2.5px solid red');
          return false;
        };

        if(validateCPF($("#recipient-cpf").val())) {
            $("#recipient-cpf").css('border','2.5px solid #00a000');
        } else {
            $("#recipient-cpf").css('border','2.5px solid red');
        };
    });

    const validateCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g,'');

        if(cpf == '') return false;

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
        for (i=0; i < 9; i ++) {
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
        for (i = 0; i < 10; i ++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        };

        rev = 11 - (add % 11);

        if (rev == 10 || rev == 11) {
            rev = 0;
        };

        if (rev != parseInt(cpf.charAt(10))){
            return false;
        };

        return true;
    };

    //Validação do Nome
    $('#recipient-name').on('change', function () {
        if($("#recipient-name").val() == '') {
            $("#recipient-name").css('border','2.5px solid red');
            return false;
        };

        if($("#recipient-name").val()) {
            $("#recipient-name").css('border','2.5px solid #00a000');

        } else {
            $("#recipient-name").css('border','2.5px solid red');

        };
    });

    //Validação E-mail
    let rx = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    $('#recipient-email').on('change', function() {

        if (rx.test($('#recipient-email').val().trim()) == '') {
            $("#recipient-email").css('border','2.5px solid red');
        };

        if(rx.test($('#recipient-email').val().trim())) {
            $("#recipient-email").css('border','2.5px solid #00a000');
        } else {
            $("#recipient-email").css('border','2.5px solid red');
        };
    });

    //Validação Numero Telefonico
    window.iti = [];
    const formatarTelefoneInput = (identify, value = null) => {
        var input = document.querySelector(identify);
        var itiTmp = window.intlTelInput(input, {
            initialCountry: 'br',
            formatOnDisplay: true,

            geoIpLookup: (callback) => {
                $.get("https://ipinfo.io", () => {}, 'jsonp').always((resp) => {
                    var countryCode = (resp && resp.country) ? resp.country : '';
                    callback(countryCode);
                });
            },
            customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
                if (parseInt($(identify).css('padding-left').replace(/\D/g, '')) > 87) {
                    $(identify).css('padding-left', '87px');
                }
                return selectedCountryPlaceholder.replace(/[1-9]/g, '0');
            },
            nationalMode: true,
            separateDialCode: true,

            preferredCountries: ['br', 'ru', 'pe'],
            utilsScript: 'https://www.pokerbyte.com.br/assets/vendors/intl-tel-input/js/utils.js',
        });

        $(identify).unmask().mask($(identify).attr('placeholder').replace(/[1-9]/g, '0') || '00 00000-0000');
        input.addEventListener("open:countrydropdown", () => {
            $(identify).unmask();
            $(identify).val('');
        });

        input.addEventListener("close:countrydropdown", () => {
            $(identify).mask($(identify).attr('placeholder'));
        });

        if (value) {
            itiTmp.setNumber(value.replace(/\D/g, ''));
        };

        window.iti[identify] = itiTmp;
        return window.iti[identify];
    };

    $('#recipient-fone').on('change', function () {
        if ($('#recipient-fone').val() == '') {
            $("#recipient-fone").css('border','2.5px solid red');
        };

        if($('#recipient-fone').val()) {
            $("#recipient-fone").css('border','2.5px solid #00a000');
        } else {
            $("#recipient-fone").css('border','2.5px solid red');
        };
    });

    formatarTelefoneInput(`#recipient-fone`);

    //Validação data de nascimento
    $('#dt_nascimento').on('change', function () {
        if($('#dt_nascimento').val() == '') {
            $("#dt_nascimento").css('border','2.5px solid red');
        }else {
            $("#dt_nascimento").css('border','2.5px solid #00a000');
        }
    });

    //Validação Nick
    $('#recipient-nick').on('change', function () {
        if ($('#recipient-nick').val() == '') {
            $("#recipient-nick").css('border','2.5px solid red');
        };

        if($('#recipient-nick').val()) {
            $("#recipient-nick").css('border','2.5px solid #00a000');
        } else {
            $("#recipient-nick").css('border','2.5px solid red');
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

        if (password.length < 8) {
            $('.password_length').removeClass('complete');
            all_pass = false;
        } else $('.password_length').addClass('complete');

        if (uppercase) $('.password_uppercase').addClass('complete');
        else {
            $('.password_uppercase').removeClass('complete');
            all_pass = false;
        };

        if (number) $('.password_number').addClass('complete');
        else {
            $('.password_number').removeClass('complete');
            all_pass = false
        };


        if (password == conf && password != ''){
            $('.password_match').addClass('complete');
            $("#recipient-pw").css('border','2.5px solid #00a000');
            $("#recipient-pwConf").css('border','2.5px solid #00a000');
        }else {
            $('.password_match').removeClass('complete');

            all_pass = false;
        };
    }

    validateInput.each(validateInputs).on('keyup', validateInputs);

    $('#btnToggle').on('click', function () {
        let passwordInput = document.getElementById('recipient-pw');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            $('#eyeIcon').hide();
            $('#eyeIconHide').show();
        } else {
            passwordInput.type = 'password';
            $('#eyeIcon').show();
            $('#eyeIconHide').hide();
        }
    });


    //Envio de Dados
    $('#button-register').on('click', async function() {
        const form = document.querySelector('#userRegister');
        const formData = new FormData(form)
        const data = new URLSearchParams(formData)

        if ( $('#recipient-cpf').val() == ''
        ||  $('#recipient-name').val() == ''
        ||  $('#recipient-email').val() == ''
        ||  $('#recipient-fone').val() == ''
        ||  $('#recipient-nick').val() == ''
        ||  $('#recipient-pw').val() == ''
        ||  $('#recipient-pwConf').val() == ''
        ){
            swal({
                title: "Atenção!",
                text: "Verificar se todos os campos foram preenchidos corretamente.",
                icon: "warning",
                button: "Fechar",
            });
        } else if( $('#recipient-pw').val()
        !== $('#recipient-pwConf').val()
        ){
            $("#recipient-pw").css('border','2.5px solid red');
            $("#recipient-pwConf").css('border','2.5px solid red');
            swal({
                title: "Atenção!",
                text: "Senhas incorretas.",
                icon: "warning",
                button: "Fechar",
            });
        } else if( $('#recipient-pw').val().length >= 17 && $('#recipient-pw').val().length <= 5 ){
            $("#recipient-pw").css('border','2.5px solid red');
            $("#recipient-pwConf").css('border','2.5px solid red');
            swal({
                title: "Atenção!",
                text: "Senhas muito longa.",
                icon: "warning",
                button: "Fechar",
            });
        } else {
            fetch('./api.php', {
                method: 'POST',
                body: data
            })
            .then(res => res.json())
            .then(res => {
                if (res && res.success) {
                    $('#userRegister').hide();
                    $('.modal-cad').addClass('animate__animated animate__fadeInRight');
                    $('#download-app').show();
                } else {
                    alert(res.message || 'Erro na solicitação.')
                }
            })
            .catch(error => {
                console.log(error);
                return error;
            });
        }
    });

    //Cookies
    function activeCookies() {
        $('.cookies-container').css('display', 'none');
        $('.modal-cook').css('display', 'none');
        window.localStorage.setItem('cookies-policy', 'Suprema Poker');
    };

    const cookiesPref = window.localStorage.getItem('cookies-policy');
    if(cookiesPref){
        activeCookies(cookiesPref)
    };

    if(cookiesPref == 'true') {
        $('.cookies-container').css('display', 'none');
    }else {
        $('.cookies-container').css('display', 'flex');
    };

    $('#saveCookies').on('click', function () {
        $('.modal_suprema').css('display','flex');
        activeCookies();
    });

    $('#rejCookies').on('click', function () {
        window.location.replace("index.html")
    });
});

//Regex numero
const numberOnly = (evt) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    const regex = /^[0-9.]+$/ && /(^-|^\d)|\.+/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
};

//mask data nascimento
$('#dt_nascimento').mask('00/00/0000');

//mask cpf
$('#recipient-cpf').mask('000.000.000-00');


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

//Regex Nick
const validateNick = (evt) => {
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
function handleCharacter (event)  {
    let $input = $(this);
    let index = getIndex($input);
    let digit = $input.val().slice(0,1);
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

function handleBackspace  (event) {
    let $input = $(this);
    let index = getIndex($input);
    let $prev;
    if (event.which === 8 && !$(this).val()) {
        $prev = $(`.inputs[name="chars[${index - 1}]"]`);
        $prev.focus();
    }
};

function getIndex  ($input) {
    return parseInt($input.attr('name').split(/[\[\]]/)[1], 10);
}

function checkInputFinal  () {
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

$('.inputFinal').on('change', checkInputFinal);

function isFieldEmpty  (value) {
    if (value == '' || value == null || value == undefined) {
        return true;
    }
};


