$(document).ready(function(){

    $('.menu-hamburguer').click(function(){
        $('.menu').slideToggle();
    })

    $('#telefone').mask('(00) 00000 - 0000',{
        placeholder:'(00) 00000 - 0000'
    });
    
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            telefone:{
                required:true
            },
            projeto:{
                required:true
            }
        },
        messages:{
            nome:`<h4>*Este campo é obrigatório!</h4>`,
            telefone:`<h4>*Este campo é obrigatório!</h4>`,
            projeto:`<h4>*Este campo é obrigatório!</h4>`,
        },

        submitHandler: function (form){
            console.log(form);
        },

        invalidHandler: function (evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            };
        }

    });
    $('.repositorios button').click(function(){
        const destino = $('#contato');
        const nomeRepositorio = $(this).parent().find('h3').text();

        $('#projeto').val(nomeRepositorio);

        $('html').animate({
            scrollTop:destino.offset().top
        },1000);
    })
});