
$(document).ready(() => {
    sectionScroll();
});

const sectionScroll = () => {
    $(body).scrollspy( {target: '.navbar', offset: 50} )
    $('slnav a').on('click', (e) => {
        if (this.hash !== '') {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, () => {
                window.location.hash = hash;
            });
        }
    });
}
