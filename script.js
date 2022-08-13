orange = '#C16622';
green = '#8A9045';
darkgreen = '#58593F';
blue = '#155F83';
purple = '#350E20';
lightgray = '#EEEEEE';
$(document).ready(function()
{
    $('#nav1').hover(
        function(){$('#heading-wrapper').css('border-bottom-color',green);$('#section1').css('background-color',lightgray);},
        function(){$('#heading-wrapper').css('border-bottom-color',orange);$('#section1').css('background-color','white');});
    $('#nav2').hover(
        function(){$('#heading-wrapper').css('border-bottom-color',darkgreen);$('#section2').css('background-color',lightgray);},
        function(){$('#heading-wrapper').css('border-bottom-color',orange);$('#section2').css('background-color','white');});
    $('#nav3').hover(
        function(){$('#heading-wrapper').css('border-bottom-color',blue);$('#section3').css('background-color',lightgray);},
        function(){$('#heading-wrapper').css('border-bottom-color',orange);$('#section3').css('background-color','white');});
    $('#nav4').hover(
        function(){$('#heading-wrapper').css('border-bottom-color',purple);$('#section4').css('background-color',lightgray);},
        function(){$('#heading-wrapper').css('border-bottom-color',orange);$('#section4').css('background-color','white');});
        
/*    $(window).scroll(event, function(){
        if ($(document).scrollTop() < 120)
        {
            $('#heading-wrapper').css('position','absolute');
            $('#heading-wrapper').css('top','0px');
            $('.nav').css('position','absolute');
            $('.nav').css('top','128px');
        }
        else
        {
            $('#heading-wrapper').css('position','fixed');
            $('#heading-wrapper').css('top','-118px');
            $('.nav').css('position','fixed');
            $('.nav').css('top','8px');
        }
    });
    $(window).scroll();*/
});
