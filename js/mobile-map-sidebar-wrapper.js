var mapSidebarVersionWidth = window.innerWidth, sidebarChecksHeight, sidebarBottom;

initMapSidebarVersion();

$(window).resize(function(){
    if (!((mapSidebarVersionWidth <= 1000 && window.innerWidth <= 1000) || (mapSidebarVersionWidth > 1000 && window.innerWidth > 1000))) {
        initMapSidebarVersion();
    }
    else {
        if (mapSidebarVersionWidth <= 1000 && window.innerWidth <= 1000) {
            sidebarBottom = window.innerHeight - $('.header').outerHeight() - $('.map-sidebar-wrapper .sidebar__checks').innerHeight() - 40;
            if (parseInt($('.map-sidebar-wrapper .sidebar').css('bottom')) !== 0) {
                $('.map-sidebar-wrapper .sidebar').css('bottom', -sidebarBottom + 'px');
            }
        }
    }
    mapSidebarVersionWidth = window.innerWidth;
});

function initMapSidebarVersion(){
    if (window.innerWidth <= 1000) {
        $('.map-sidebar-wrapper__cover').css({display: 'none', opacity: '0'});

        sidebarChecksHeight = getSidebarChecksHeight();

        sidebarBottom = window.innerHeight - $('.header').outerHeight() - sidebarChecksHeight - 40;
        $('.map-sidebar-wrapper').addClass('map-sidebar-wrapper_mobile');
        $('.map-sidebar-wrapper .sidebar').css('bottom', -sidebarBottom + 'px');
    
        $('.map-sidebar-wrapper .sidebar__check').on('click.map-sidebar-wrapper-event', function(){
            $(this).closest('.sidebar').stop().animate(
                {
                    bottom: 0
                },
                {
                    duration: 300,
                    easing: 'easeInOut',
                    queue: false,
                }
            );
    
            $(this).closest('.map-sidebar-wrapper').find('.map-sidebar-wrapper__cover').stop().animate(
                {
                    opacity: 0.6
                },
                {
                    duration: 300,
                    easing: 'easeInOut',
                    queue: false,
                    start: function(){
                        $(this).css('display', 'block');
                    },
                }
            );
        });
    
        $('.map-sidebar-wrapper__cover').on('click.map-sidebar-wrapper-event', function(){
            $(this).parent().find('.sidebar__check').removeClass('sidebar__check_mobile_active');
    
            $(this).parent().find('.sidebar').stop().animate(
                {
                    bottom: -sidebarBottom + 'px'
                },
                {
                    duration: 300,
                    easing: 'easeInOut',
                    queue: false,
                }
            );
    
            $(this).stop().animate(
                {
                    opacity: 0
                },
                {
                    duration: 300,
                    easing: 'easeInOut',
                    queue: false,
                    complete: function(){
                        $(this).css('display', 'none');
                    },
                }
            );
        });
    
        $('.map-sidebar-wrapper .sidebar__items_shops').on('click.map-sidebar-wrapper-event', '.sidebar__item', function(){
            $(this).closest('.map-sidebar-wrapper').find('.sidebar__check').removeClass('sidebar__check_mobile_active');
    
            $(this).closest('.map-sidebar-wrapper').find('.sidebar').stop().animate(
                {
                    bottom: -sidebarBottom + 'px'
                },
                {
                    duration: 300,
                    easing: 'easeInOut',
                    queue: false,
                }
            );
    
            $(this).closest('.map-sidebar-wrapper').find('.map-sidebar-wrapper__cover').stop().animate(
                {
                    opacity: 0
                },
                {
                    duration: 300,
                    easing: 'easeInOut',
                    queue: false,
                    complete: function(){
                        $(this).css('display', 'none');
                    },
                }
            );
        });
    }
    else {
        $('.map-sidebar-wrapper').removeClass('map-sidebar-wrapper_mobile');
        $('.map-sidebar-wrapper .sidebar__check').off('.map-sidebar-wrapper-event');
        $('.map-sidebar-wrapper__cover').off('.map-sidebar-wrapper-event');
        $('.map-sidebar-wrapper .sidebar__items_shops').off('.map-sidebar-wrapper-event');
        $('.map-sidebar-wrapper .sidebar').css('bottom', '0');
    }
}