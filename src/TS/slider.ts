const dots:NodeListOf<Element> = document.querySelectorAll('.slider-dots');
const banner = document.getElementById('banner') as HTMLImageElement;

let activeSlideIndex:number = 0;

dots.forEach((dot) => {
    const bannerSrcOne:string = '/src/images/banner-01.png';
    const bannerSrcTwo:string = '/src/images/banner-02.svg';
    const bannerSrcThree:string = '/src/images/banner-03.svg';

    dot.addEventListener('click', (event) => {
        const dotObj:HTMLElement = event.target as HTMLElement;
        console.log(dotObj.classList)

        if (dotObj.classList.contains('slider-dots__dot-1')) {
            clearActiveEllipse();
            banner.src = bannerSrcOne;
            dotObj.classList.add('active-dot');
        }
        if (dotObj.classList.contains('slider-dots__dot-2')) {
            clearActiveEllipse();
            banner.src = bannerSrcTwo
            dotObj.classList.add('active-dot');
        }
        if (dotObj.classList.contains('slider-dots__dot-3')) {
            clearActiveEllipse();
            banner.src = bannerSrcThree
            dotObj.classList.add('active-dot');
        }
    });
});

function clearActiveEllipse() {
    dots.forEach((dot) => {
        console.log(dot)
        dot.classList.remove('active-dot')
    })
};


