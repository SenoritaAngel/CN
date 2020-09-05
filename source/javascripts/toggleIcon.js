$(document).ready(function(){
  $("#collapse1").on("hide.bs.collapse", function(){
    $(".rotate-icon").html('<img src="images/chevron_down_cn.png" alt="chevron down red" class="chevron-down rotate-icon');
  });
  $("#collapse1").on("show.bs.collapse", function(){
    $(".rotate-icon").html('<img src="images/chevron_up_cn.png" alt="chevron up red" class="chevron-up rotate-icon">');
  });
});
