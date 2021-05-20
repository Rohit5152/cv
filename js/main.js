//animated our scrooling for smooth experience
$('#view-work').on('click',function(){
    const images=$('#images').position().top;

    $('htm,body').animate({
        scrollTop: images
    },900
    );
});