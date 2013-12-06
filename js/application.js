(function($) {

  var current_destination = 0;
  var can_search = 1;

  $( "input[type='text']" ).on("keyup", function() {
    if( $(this).val().length == 0 ) {
      $( "#search-select" ).addClass( "hidden" );
      can_search = 0;
    } else {
      $( "#search-select" ).removeClass( "hidden" );
      can_search = 1;
    }
    $( ".display-span" ).html($( "#search-input" ).val());
  });

  $(document).keydown(function(e){
    if (e.keyCode == 27) {
      $( "#overlay" ).addClass( "hidden" );
      $( "#search-input" ).val('')
    }
    if (!$( "#overlay" ).hasClass( "hidden" )) {
      if (e.keyCode == 38) {
        if(current_destination > 0){
          $( "#display-a-" + current_destination ).removeClass( "btn-default-selected" );
          current_destination--;
          $( "#display-a-" + current_destination ).addClass( "btn-default-selected" );
        }
      }
      if (e.keyCode == 40) {
        if(current_destination < 3){
          $( "#display-a-" + current_destination ).removeClass( "btn-default-selected" );
          current_destination++;
          $( "#display-a-" + current_destination ).addClass( "btn-default-selected" );
        }
      }
      if (e.keyCode == 13 && can_search == 1) {
        $( "#overlay" ).addClass( "hidden" );
        if(current_destination == 0){
          window.open('https://www.google.fr/search?q=' + $( "#search-input" ).val());
        }
        if(current_destination == 1){
          window.open('http://fr.wikipedia.org/wiki/Special:Search?search=' + $( "#search-input" ).val() + '&go=Go');
        }
        if(current_destination == 2){
          window.open('https://github.com/search?q=' + $( "#search-input" ).val() + '&ref=cmdform');
        }
        if(current_destination == 3){
          window.open('http://www.youtube.com/results?search_query=' + $( "#search-input" ).val() + '&sm=3');
        }

        $( "#search-input" ).val('')
      }
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      display_search()
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      display_search()
    }

    function display_search() {
      $( "#overlay" ).removeClass( "hidden" );
      $( "#search-input" ).focus();
      $( "#display-a-" + current_destination ).removeClass( "btn-default-selected" );
      $( "#display-a-0" ).addClass( "btn-default-selected" );
      current_destination = 0;
    }
  });

})(jQuery);
