$(function () {
    $('.main_header_content_menu_mobile_click').on('click', function () {
       $('.main_header_content_menu_mobile_sub').toggleClass('ds_none');
       $(this).toggleClass('main_header_content_menu_mobile_click_active');
    });
});