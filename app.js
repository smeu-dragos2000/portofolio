$(document).ready(() => {

    $('#me-left').css('opacity', '0');
    $('#me-right').css('opacity', '0');

    //    Left Side Animation
    $('#artist').on('mouseover', () => {
        $('#me-left').animate({opacity: '1'}, 400);
        $('#me-front').animate({opacity: '0'}, 400);
    });

    $('#artist').on('mouseleave', () => {
        $('#me-left').animate({opacity: '0'}, 400);
        $('#me-front').animate({opacity: '1'}, 400);
    });

    //    Right Side Animation
    $('#coder').on('mouseover', () => {
        $('#me-right').animate({opacity: '1'}, 400);
        $('#me-front').animate({opacity: '0'}, 400);
    });

    $('#coder').on('mouseleave', () => {
        $('#me-right').animate({opacity: '0'}, 400);
        $('#me-front').animate({opacity: '1'}, 400);
    });
});



//  --- Google Maps API ---

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
