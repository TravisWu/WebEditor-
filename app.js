var windowHeight= $(window).height();
//733
var menuHeight=$("#menu").height();
//40

var codeContainerHeight = windowHeight - menuHeight;
$(".codeContainer").height(codeContainerHeight + "px");

$(".toggle").click(function(){
  $(this).toggleClass("selected");
  var activeDiv = $(this).html();
    $("#"+ activeDiv + "Container").toggle();

  var showDiv = $(".codeContainer").filter(function(){
    return($(this).css("display")!= "none");
  }).length;

  var widthColumn = 100/showDiv;
  $(".codeContainer").width(widthColumn + "%"); 
});
