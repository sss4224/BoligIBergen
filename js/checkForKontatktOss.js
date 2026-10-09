

const PATH = window.location.pathname;

if(PATH.includes('index.html')){
    checkForSection('kontakt-oss-id', 'home');
}
else if(PATH.includes('om-oss.html')){
    checkForSection('kontakt-oss-id', 'om-oss');
}
else if(PATH.includes('prosjekt.html')){
    checkForSection('kontakt-oss-id', 'prosjekt');
}


function checkForSection(section, page){

const activePage = document.querySelector(`.nav-btn-${page}`);
    const kontaktOssPage = document.querySelector('.nav-btn-kontakt-oss');

    const valg = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((observe) => {
        observe.forEach(observe => {
            if(observe.isIntersecting){
                activePage.classList.remove('active');
                kontaktOssPage.classList.add('active');
            }
            else{
                activePage.classList.add('active');
                kontaktOssPage.classList.remove('active');
            }
        });
    }, valg);

    const kontaktSection = document.querySelector(`#${section}`);
    if(kontaktSection){
        observer.observe(kontaktSection);
    }
}