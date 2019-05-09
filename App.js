
$(document).ready(function() {
    $('#slnav a').on('click', sectionScroll);
    $('#portfolio-section div.card').on('mouseenter mouseleave', cardLiftHandler);
    $('#portfolio-section div.card-footer a').on('click', flipCardSummary);
    $('#portfolio-section div.card-footer a').on('blur', reverseFlipCardSummary);
});

function sectionScroll(evt) {
    $('body').scrollspy( {target: '.navbar', offset: 50} )    
    if (this.hash !== '') {
        evt.preventDefault();
        let hash = this.hash;
        
        $('html, body').animate(
            { scrollTop: $(hash).offset().top },
            1000,
            function() { window.location.hash = hash; }
        );
    }
}
                                                  
function cardLiftHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if ($(this).hasClass('shadow-sm')) {
        $(this).removeClass('shadow-sm').addClass('shadow-lg');
    } else if ($(this).hasClass('shadow-lg')) {
        $(this).removeClass('shadow-lg').addClass('shadow-sm');
    }
}

function flipCardSummary(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $($(this).parentsUntil('div.col-md-4')[2]).addClass('flip');
}

function reverseFlipCardSummary(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $($(this).parentsUntil('div.col-md-4')[2]).removeClass('flip');
}