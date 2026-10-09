
const contactForm = document.querySelector('.kontakt-skjema');

stopAnimationOnResize();


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
})



function showAnswer(answer, button) {
                     if (button.classList.contains("active")) {

                        document.getElementById(answer).style.display = "none";
                        document.getElementById("default-answer").style.display = "block";
                        button.classList.remove("active");
                        return; }

                    var answers = document.getElementsByClassName("faq-answer");
                    for (var i = 0; i < answers.length; i++) {
                        answers[i].style.display = "none";
                    }

                    document.getElementById("default-answer").style.display = "none";
                    document.getElementById(answer).style.display = "block";

                      var buttons = document.querySelectorAll("#faq-questions button");

                    for (var i = 0; i < buttons.length; i++) {
                    buttons[i].classList.remove("active");
                     }

                    button.classList.add("active");
                    
                }


function stopAnimationOnResize(){
    let resizeTimer;
    
    window.addEventListener('resize', () => {
        document.querySelector('nav').classList.add('resize-animation-stopper');
    
        clearTimeout(resizeTimer);
    
        resizeTimer = setTimeout(() => {
            document.querySelector('nav').classList.remove('resize-animation-stopper');
        }, 400);
    })
}
