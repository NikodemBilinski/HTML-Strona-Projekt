function GenerateTime()
{

    Mcolor = "cos";
    time_Year = new Date().getFullYear();
    time_Month = new Date().getMonth();
    time_Day = new Date().getDate();
    time_Hours = new Date().getHours();
    time_Minutes = new Date().getMinutes();
    time_seconds = new Date().getSeconds();
    
    if(time_seconds < 10)
    {
        time_seconds = "0" + time_seconds;
    }
    else if(time_Minutes < 10)
    {
        time_Minutes = "0" + time_Minutes;
    }
    else if(time_Hours < 10)
    {
        time_Hours = "0" + time_Hours
    }
    
    time_YMD = time_Year + "/" + (time_Month+1) + "/" + time_Day;
    
    time_HMS = time_Hours + ":" + time_Minutes  + ":" + time_seconds;

    document.getElementById("YMD").textContent = time_YMD;
    document.getElementById("HMS").textContent = time_HMS;

}

GenerateTime();
setInterval(GenerateTime, 1000);


