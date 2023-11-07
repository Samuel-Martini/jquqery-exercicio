$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    $(`<li id="item-li">${novaTarefa}</li>`).appendTo('ul');
    $('#nova-tarefa').val(null);
})

$('ul').on('click', 'li', function() {
    $(this).toggleClass('strike');
});