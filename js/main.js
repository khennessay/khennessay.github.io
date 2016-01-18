$(function() {
 
   $('.scrollTo').on('click', goToSection);
       
   function goToSection(e) {
       e.preventDefault();
       
       var $this = $(this);
       var elemId = $this.attr('href');
       
       var $scrollToElem = $(elemId);
       
   $('html,body').animate({
       scrollTop: $scrollToElem.offset().top},
       'slow');
};
   
});