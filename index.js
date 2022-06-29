$("h1").click(function(){
    $("h1").animate({opacity: 0.5})
})


// animation list
// .animate
// .slideUp()/.slideDown()/.slideToggle()
// .hide()/.show()/.fadeOut()/.fadeIn()/.toggle()
// can only use .animate with number values

$("button").click(function() {
    $("h1").css("color", "purple"); 
});

$("body").keypress(function(event){
    $("h1").text(event.key)
})

// before() will place new hmtl elements before selected element
// after() will place new hmtl elements after selected element
// prepend() will add new element just after selected element
// append() will add new element just before selected element
// .remove will remove all elements specified
// EX: $("button").remove

