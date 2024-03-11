// Active menu button//
let menuBtn=document.querySelector('#menu-btn');
let menuBar=document.querySelector('.menu-bar');

menuBtn.onclick=()=>{
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// lets remove menu bar on scroll//
window.onscroll=()=>{
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

//Scroll Reveal//
ScrollReveal({
    reset:true,
    distance:'100px',
    duration:200,
    delay:200,
});
ScrollReveal().reveal('.home-bio h1, .about-resume', { origin:'left' });
ScrollReveal().reveal('.home-bio p', { origin:'right' });
ScrollReveal().reveal('.home-bio, heading', { origin:'top' });
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form', { origin:'bottom' });


// Typing Animation//
// const animText=new Typed('.animated-text',{
//     strings: ['Developer','Programmer'],
//     backSpeed:100,
//     typeSpeed:100,
//     backDelay:600,
//     loop:true
// })

const animText = new Typed('.animated-text', {
    strings: ['Trainee Software Developer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Change the path to your resume file
    var resumeUrl = 'D:/Documents/Resume_of_Subratapal.pdf';
    // Create an anchor element
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume_of_Subratapal.pdf'; // Name of the downloaded file
    // Append the anchor to the body
    document.body.appendChild(link);
    // Trigger a click event on the anchor
    link.click();
    // Remove the anchor from the body
    document.body.removeChild(link);
});

