$(document).ready(function(){
            
    $(".hamburger").click(function(){
                $(".hamburger").toggleClass("active");
                $(".navlinks").toggleClass("hidemobile");
    });
    
}); 

$(".item1").click(function(e){
    e.preventDefault();
    $(".feature__item--button1").toggleClass("hidden");
    $(".feature__item--hidden1").toggleClass("hidden");
});
$(".item2").click(function(e){
    e.preventDefault();
    $(".feature__item--button2").toggleClass("hidden");
    $(".feature__item--hidden2").toggleClass("hidden");
});
    