$(document).ready(function() {
  $('#note-form').submit(function(e) {
    "use strict";
    e.preventDefault();

    var form = {
      url: $(this).attr('action'),
      type: $(this).attr('method')
    };

    $.ajax({
      url: form.url,
      type: form.type,
      data: $(this).serialize(),
      success: function(result) {
        if (form.type === 'PUT') {
          $('.note-content').html(result);
          $('#update-modal').modal('hide');
        } else if (form.type === 'POST') {
          $('.notes-list').prepend(result);
          $('#add-modal').modal('hide');
        }
      },
      error: function(err) {
        console.log(err)
      }
    })
  });
});
