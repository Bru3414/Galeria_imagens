$(document).ready(function() {

    $('header button').click(function() {

        $('form').slideDown();

    })

    $('#botao-cancelar').click(function() {

        $('form').slideUp();

    })

    $('form').on('submit', function(e) {

        e.preventDefault();

        const urlImg = $('#url-img').val();
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${urlImg}" />`).appendTo(novoItem);
        $(`<div class="overlay-image-link">
            <a href="${urlImg}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        $('#url-img').val('');

    })

})