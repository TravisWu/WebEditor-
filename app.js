var windowHeight= $(window).height();
//733
var menuHeight=$("#menu").height();
//40

var codeContainerHeight = windowHeight - menuHeight;
$(".codeContainer").height(codeContainerHeight + "px");

$(".toggle").click(function(){
  $(this).toggleClass("selected");



});
