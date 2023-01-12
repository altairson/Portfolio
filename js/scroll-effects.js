$(document).ready(function() {

    var backgroundTexts = [
        'You are awesome !',
        'Discover yourself!',
        'Pricing',
        'About us'
    ];

    function animateText(txt) {
        var text = $('#text')[0];
        var color = $('body').hasClass('theme-dark') ? 'indianred' : 'indianred';
        text.innerHTML = txt;
        var shadow = '';
        for(var i = 0; i < 25; i++) { 
            shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 ' + color;
        }
        text.style.textShadow = shadow;
    }

    animateText(backgroundTexts[0]);


    $(".nav-link").click(function(e) {
        e.preventDefault();
        this.children[0].click();
    })

    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        let n = this.hash == '#first' ? 0 : this.hash == '#second' ? 1 : this.hash == '#third' ? 2 : 3;
        let topScroll = n * $('body').height();
        $('main').animate({
            scrollTop: topScroll
        }, 1 );
        $(".show").removeClass("show");
        $(".selected").removeClass("selected");
        $(this.hash)[0].children[0].classList.add("show");
        $(".tabs")[0].children[0].children[n].classList.add("selected");
        if(n == 3) {
            $('.logo').addClass("show");
        }
        let x = $('.active').index();
        animateText(backgroundTexts[x]);
    });
    

    // // Active link switching
    $('main').scroll(function(e) {
        e.preventDefault();
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            let n = this.hash == '#first' ? 0 : this.hash == '#second' ? 1 : this.hash == '#third' ? 2 : 3;
            
            let topScroll = n * $('body').height() - 500;
            if ( topScroll < scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
                $(".show").removeClass("show");
                $(".selected").removeClass("selected");
                $(".tabs")[0].children[0].children[n].classList.add("selected");
                $(this.hash)[0].children[0].classList.add("show");
                if(n == 3) {
                    $('.logo').addClass("show");
                }
            }
            let x = $('.active').index();
            animateText(backgroundTexts[x]);
        })
    })
})