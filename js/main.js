

checkForSection('kontakt-oss-id');

function checkForSection(section){

    const homePage = document.querySelector('.nav-btn-home');
    const kontaktOssPage = document.querySelector('.nav-btn-kontakt-oss');

    const valg = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((observe) => {
        observe.forEach(observe => {
            if(observe.isIntersecting){
                homePage.classList.remove('active');
                kontaktOssPage.classList.add('active');
            }
            else{
                homePage.classList.add('active');
                kontaktOssPage.classList.remove('active');
            }
        });
    }, valg);

    const kontaktSection = document.querySelector(`#${section}`);
    if(kontaktSection){
        observer.observe(kontaktSection);
    }
}


function showAnswer(answer) {
    var answers = document.getElementsByClassName("faq-answer");
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.display = "none";
    }
    document.getElementById(answer).style.display = "block";
}

