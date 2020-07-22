$(function() {
  $( "#js-shopping-list-form" ).submit( function(event){
    event.preventDefault();
    let newItem = $("#shopping-list-entry").val();
    $(".shopping-list").append(
        `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    $("#shopping-list-entry").val('');
  });
  $('ul').on('click','.shopping-item-toggle',function(event){
    event.preventDefault();
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  $('ul').on('click','.shopping-item-delete',function(event){
    event.preventDefault();
    $(this).parent().closest('li').remove();
  });
});