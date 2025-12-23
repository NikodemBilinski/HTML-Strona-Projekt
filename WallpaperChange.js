let previous = 0;
function wallpaperChange()
{
    let random = previous;
    random = Math.round((Math.random() * 8) + 1);
    if(random == previous)
    {
       random = Math.round((Math.random() * 8) + 1); 
    }
    else
    {
        // fade out
        document.getElementById("bg-overlay").style.opacity = 1;

        //fade in
        setTimeout(Wallpaper, 2500, random);
    }

    
}

function Wallpaper(random)
{
        document.getElementById("bg").style.backgroundImage = `url("Wallpapers/SkyrimWallpaper`+random+`.png")`;
        document.getElementById("bg-overlay").style.opacity = 0;
}


setInterval(wallpaperChange, 60000)

