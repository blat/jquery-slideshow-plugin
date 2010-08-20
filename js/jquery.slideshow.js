(function($) {

    var current = -1;
    var parent, children;
    var timer;

    var options = {};
    var default_options = {
        class_previous: 'previous',
        class_next: 'next',
        img_previous: 'img/previous.png',
        img_next: 'img/next.png'
    };

    $.fn.slideshow = function(user_options) {
        parent = this;
        children = $(this.selector + ' > li');
        if (!user_options) user_options = {};
        $.each(default_options, function(key, default_value) {
            options[key] = user_options[key] || default_value;
        });
        slideshow_init();
    }

    slideshow_init = function() {

        $(parent).append($('<a></a>')
            .addClass(options.class_next)
            .append($('<img></img>', {src: options.img_next}))
            .click(function() { slideshow_stop(); slideshow_next(); }));

        $(parent).prepend($('<a></a>')
            .addClass(options.class_previous)
            .append($('<img></img>', {src: options.img_previous}))
            .click(function() { slideshow_stop(); slideshow_previous(); }));

        for (var i = 0; i < children.length; i++) {
            var child = $(children[i]);
            child.css('display', 'none');
        }

        $(parent).mouseover(function() { 
            $(this).find('.' + options.class_next).fadeIn();
            $(this).find('.' + options.class_previous).fadeIn();
        });

        slideshow_rotate();
    }

    slideshow_rotate = function() {
        slideshow_next();
        timer = setTimeout(slideshow_rotate, 3500);
    }

    slideshow_previous = function() {
        slideshow_next(-1);
    }

    slideshow_next = function(orientation) {
        if (typeof orientation == 'undefined') orientation = 1;
        slideshow_hide();
        current += orientation;
        if (current < 0) current = children.length - 1;
        else if (current >= children.length) current = 0;
        slideshow_show();
    }

    slideshow_hide = function() {
        var child = $(children[current]);
        child.fadeOut();
    }

    slideshow_show = function() {
        var child = $(children[current]);
        child.fadeIn();
    }

    slideshow_stop = function() {
        clearTimeout(timer);
    }

})(jQuery);

