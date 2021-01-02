$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    // $('.bibtex.hidden').html($('.bibtex.hidden').html().replace(/\*/g, ''))
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('bibopen');
    });
});
