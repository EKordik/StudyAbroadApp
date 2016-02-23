(function($, window, document){
$(function(){
    var oneDay = 24*60*60*1000;
    var today = new Date();
    var startDate = new Date("2016-02-18");
    
    var day = Math.round(Math.abs((startDate.getTime() - today.getTime())/(oneDay)));
    
    console.log(day);
    
    $('#day' + day).show();
    
    $('.showCalendar').click(function(){
        $('#day' + day).hide();
        $('#calendar').show();
    });
    
});
}(window.jQuery, window, document));

