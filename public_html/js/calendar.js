(function($, window, document){
$(function(){
    var today = new Date();

    var day = dateDiff(today);
    console.log(day);
    
    showDate(day);
    
    function showDate(day){
        var numDays = 12;
        if(day < 0){
            $('#packingList').show();
        }else if(day > numDays){
            $('#thankMsg').show();
        }else{
            $('#day' + day).show();
        }
    }
    
    
    $('.showCalendar').click(function(){
        $('.day').hide();
        $('.calendar').show();
    });
    

  $('input').change(function(){
      var datePicked = $('input').val();
        console.log(datePicked);
        day = dateDiff(new Date(datePicked));
        console.log(day);
        showDate(day);
        $('.calendar').hide();
  });

    
    
    //Calculates the difference of two days to tell us which day we are on.
    function dateDiff(date){
        var oneDay = 24*60*60*1000*-1;
        var startDate = new Date("2016-02-18");
        var day =  Math.round((startDate.getTime() - date.getTime())/(oneDay));
        return day;
    }
});
}(window.jQuery, window, document));

