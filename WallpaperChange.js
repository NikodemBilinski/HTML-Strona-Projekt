previous = 0;
function wallpaperChange()
{
    random = previous;
    random = Math.round((Math.random() * 8) + 1);
    if(random == previous)
    {
       random = Math.round((Math.random() * 8) + 1); 
    }
    else
    {
        document.getElementById("bg-overlay").style.opacity = 1;
        setTimeout(Wallpaper(random),10000);
    }

    
}

function Wallpaper(random)
{
        document.getElementById("bg").style.backgroundImage = "url(Wallpapers/SkyrimWallpaper"+random+".png";
        document.getElementById("bg-overlay").style.opacity = 0;
}


setInterval(wallpaperChange, 60000)

