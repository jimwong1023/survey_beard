var choice = 2;
var question = 1;


$(document).ready(function() {
  $('form.add-choice').on('submit', function(e) {
    choice ++;
    console.log("click heard");
    e.preventDefault();
    console.log(this.action);
    $.ajax({
      type: this.method,
      url: this.action,
      data:{question_value: question, choice_value: choice}
    }).done(function(server_data) {
      $('.add-survey-content').append(server_data);
      // console.log("success " + server_data);
    });

  });

  $('form.add-question').on('submit', function(e) {
    choice = 2;
    question +=1;
    e.preventDefault();
    $.ajax({
      type: this.method,
      url: this.action,
      data:{question_value: question, choice_value: choice}
    }).done(function(server_data) {
      $('.add-survey-content').append(server_data);
    });
  });
  $('#survey-name-modal').on('click', function(){
    console.log("proceed button clicked");
    var surveyName = $('input').val();
    console.log($('input').val());
    $(".new-survey-title h3").append(surveyName);
    $("#hidden-survey-title").val(surveyName);
    console.log($("#hidden-survey-title").val());

  });

  $('#untaken_surveys a').on('click', function(e){
    e.preventDefault();
      console.log($(this));
      $('#untaken_surveys').hide();
      $('#survey_field').show() 
    $.ajax({
      type: this.method,
      url: this.href,
      data: $(this).serialize()
    }).done(function(server_data){
      $('#middle').html(server_data);


    }); // .done from end of ajax
  }); // ends on click function

});
