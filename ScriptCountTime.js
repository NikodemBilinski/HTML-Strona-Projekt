function GenerateTime()
{
    var start = new Date("2018-06-11T12:00:30");
    var end = new Date();

    var result = Math.floor((end - start)/1000);

    

    var seconds = result

    var minutes = Math.round(result/60);

    var hours = Math.round(minutes/60);

    var days = Math.round(hours/24);

    var years = Math.round(days/365 * 100)/100;

    document.getElementById("CountTime").innerHTML = "Seconds: "+ seconds + " | "+"Minutes: "+ minutes + "<br>"+"Hours: "+ hours + " | "+
    "Days: "+days + "<br>"+"Total Years: "+ years + "<br>";
    
}

GenerateTime();
setInterval(GenerateTime , 1000)
