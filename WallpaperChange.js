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
        document.body.style.backgroundImage = "url(SkyrimWallpaper" + random +".png)";
    }
    
}

