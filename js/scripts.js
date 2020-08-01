
$(document).ready(function(){
  $(".design").click(function(){
    $(".p-text").toggle();
  });
  $(".design1").click(function(){
    $(".p-text1").toggle();
  });
  $(".design2").click(function(){
    $(".p-text2").toggle();
  });
  $(".project").hover(function(){
    $(this).find(".work").show();
  });
  $("project").mouseout(function(){
    $("work").find(".work").hide();
  });
});