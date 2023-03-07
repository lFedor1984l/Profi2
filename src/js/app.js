import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

// Слайдер
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})