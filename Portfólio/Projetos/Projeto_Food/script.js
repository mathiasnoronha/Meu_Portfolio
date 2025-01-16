    $(document).ready(function() {
        $('#mobile_btn').on('click', function () {
            $('#mobile_menu').toggleClass('active');
            $('#mobile_btn').find('i').toggleClass('fa-x');
        });
    
        ScrollReveal().reveal('#cta', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });
    
        ScrollReveal().reveal('.dish', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });
    
        ScrollReveal().reveal('#testemunho_chef', {
            origin: 'left',
            duration: 1000,
            distance: '20%'
        })
    
        ScrollReveal().reveal('.feedback', {
            origin: 'right',
            duration: 1000,
            distance: '20%'
        })
    });
