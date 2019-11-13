$(function(){
   var $finger = $(this).css('cursor','pointer');    
   var $defo = $(this).css('cursor','default');
    
    $('.page-top').click(function(){
        $('html,body').animate({
            'scrollTop': 0
        },500);
        });
    $('.page-top').hover(
        function(){
            $(this).css('background-color','#696969');
        },function(){
            $(this).css('background-color','#000000');
    });
    
    $('.header-left h2').click(function(){
        $('html,body').animate({
            'scrollTop': 0
        },500);
    });
    $('.header-left h2').hover(
        function(){
            $(this).css('cursor','pointer'); 
        },function(){
            $(this).css('cursor','default');
        }
    );
    
    $('.btn').hover(
        function(){
            $(this).css('cursor','pointer').css('border-bottom','1px solid white'); 
        },function(){
            $(this).css('cursor','default').css('border-bottom','none');
    });
    
    $('.btn').click(function(){
        const navigate = (scrollPosition)=> {$('html,body').animate({
            'scrollTop': $(scrollPosition).offset().top
        }),500};
        
        switch($(this).attr('id')){
            case "event-btn":
                navigate('#event');
                break;
            case "access-btn":
                navigate('#access');
                break;
            case "form-btn":
                navigate('#form');
                break;
            case "feature-btn":
                navigate('#feature');
                break;
            case "faculty-btn":
                navigate('#faculty');
                break;
        }
    });
       
    $('.bunnkei-btn').click(function(){
        if ($(this).hasClass('notActive')){
            $(this).removeClass('notActive');
            $('.rikei-btn').addClass('notActive');
            $('.bunnkei').css('display','block');
            $('.rikei').css('display','none');
        } 
    });

    $('.rikei-btn').click(function(){
        if ($(this).hasClass('notActive')){
            $(this).removeClass('notActive');
            $('.bunnkei-btn').addClass('notActive');
            $('.rikei').css('display','block');
            $('.bunnkei').css('display','none');
        } 
    });

    $('.switch-btn h2').hover(
        function(){
            $(this).css('cursor','pointer');
        },function(){
            $(this).css('cursor','default');
        }
    );
    
    $('.submit').hover(
        function(){
            $(this).css('cursor','pointer').css('opacity','1');    
        },function(){
            $(this).css('cursor','default').css('opacity','0.9');
        }
    );
    
    $('.fa-bars').click(function(){
        $('header').css('display','none');
        $('.m-header-wrapper').slideDown();
        $('#fadeLayer').css('display','block');
    });
    
    $('.fa-close').click(function(){
        $('header').css('display','block');
        $('.m-header-wrapper').slideUp();
        $('#fadeLayer').css('display','none');
    });
    
    $('.modal-btn').click(function(){
        const navigate = (scrollPosition)=> {$('html,body').animate({
            'scrollTop': $(scrollPosition).offset().top
        }),500};
        
        switch($(this).attr('id')){
            case "modal-event":
                navigate('#event');
                break;
            case "modal-access":
                navigate('#access');
                break;
            case "modal-form":
                navigate('#form');
                break;
            case "modal-feature":
                navigate('#feature');
                break;
            case "modal-faculty":
                navigate('#faculty');
                break;
        };
        
        $('header').css('display','block');
        $('.m-header-wrapper').css('display','none');
        $('#fadeLayer').css('display','none');
    });
   
    
});
 
