$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    $(`<li id="item-li">${novaTarefa}</li>`).appendTo('ol');
    $('#nova-tarefa').val(null);
})

$('ol').on('click', 'li', function() {
    $(this).toggleClass('strike');
});