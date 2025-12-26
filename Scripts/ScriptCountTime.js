function GenerateTime()
{
    var start = new Date("2018-06-11T12:00:30");
    var end = new Date();

    var result = Math.floor((end - start)/1000);

    
    // obliczanie czasu
    var seconds = result
    
    var minutes = Math.round(result/60);
    
    var hours = Math.round(minutes/60);
    
    var days = Math.round(hours/24);

    var years = Math.round(days/365 * 100)/100;


    // formatowanie poszczegolnych liczb
    seconds = Intl.NumberFormat('pl-PL').format(seconds);
    minutes = Intl.NumberFormat('pl-PL').format(minutes);
    hours = Intl.NumberFormat('pl-PL').format(hours);

    document.getElementById("CountTime").innerHTML = "Seconds: "+ seconds + " | "+"Minutes: "+ minutes + "<br>"+"Hours: "+ hours + " | "+
    "Days: "+days + "<br>"+"Total Years: "+ years + "<br>";
    
}

GenerateTime();
setInterval(GenerateTime , 1000)
