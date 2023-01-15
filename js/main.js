$(document).ready(function() {
    $("#menu").click(function() {
        $('#nav').toggleClass('hidden');
    })

    $(".btn").click(function() {
        alert('it has not been yet implemented!');
    });

    $('.slider').click(function(e) {
        changeTheme(this.parentElement.children[0].checked);
    })

    function changeTheme(isDark) {
        if (isDark) {
            $('body').toggleClass('theme-light');
            $('body').toggleClass('theme-dark');
        }
        else {
            $('body').toggleClass('theme-dark');
            $('body').toggleClass('theme-light');
        }
    }

    function toggleSkillProgress(index) {
        let progresses = [70, 100, 80, 95, 75, 80, 65, 85, 60, 90, 100, 80];
        let progs = $('.progress');
        let difference = 10 * (index * -1);
        for(let i = 0; i < progs.length; i++) {
            progs[i].children[0].style.width = progresses[i] + difference + '%';
            progs[i].children[1].innerHTML = progresses[i] + difference + '%';
        }

    }

    toggleSkillProgress(0);


    $('.toggle div').click(function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
        toggleSkillProgress($(this).index());
    })

});