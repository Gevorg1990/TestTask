"use strict"

$(document).ready(function () {
    $('.btn--menu').on('click', function () {
        let self = $(this),
            parentUl = self.closest('ul'),
            submenu = self.next();

        parentUl.toggleClass('is-open').find('.submenu').fadeOut('fast');
        parentUl.find('.btn.active').removeClass('active');

        if (submenu.is(':visible')) {
            submenu.removeClass('is-open').find('.submenu').fadeOut('fast');
        } else {
            submenu.removeClass('is-open').fadeIn('fast');
            self.addClass('active');
            parentUl.addClass('is-open')
        }
    });

    $('.burger').click(function () {
        $(this).toggleClass('burger--active');
        $('body').toggleClass('burger--open');
    });
});