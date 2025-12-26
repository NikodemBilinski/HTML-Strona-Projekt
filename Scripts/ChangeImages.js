// globalny numer obrazu (strona zawsze zaczyna na 1)
let current_image = 1;

function changeimages_left()
{
    if(current_image != 1)
    {
        current_image--;
        image = document.getElementById("imagechange").src = "Images/Image" + current_image + ".png";

        
    }
    //alert(current_image);
}

function changeimages_right()
{
    if(current_image != 4)
    {
        current_image++;
        image = document.getElementById("imagechange").src = "Images/Image" + current_image + ".png";

    }
    //alert(current_image);
}