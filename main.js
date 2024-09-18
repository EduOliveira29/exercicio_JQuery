$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $('#button-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on ("submit", function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('endereno-nova-img').val();
        const novoItem = $('<li style="display: none;"></li>').val();
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-img-link">
            <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $(enderecoDaNovaImagem).val('');
        $
    }) 
})

