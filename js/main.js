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
});