function preload()
{

   // preload wallpapers
      for (let i = 1; i < 10; i++) 
      {
         
         var img = new Image();  
         img.src = "Wallpapers/SkyrimWallpaper"+ i + ".png";
      }


   // preload images (hall of fame)
      for(let i = 1; i<5; i++)
      {
        var img = new Image()
        img.src = "Images/Image"+i+".png";
      }
}

preload();