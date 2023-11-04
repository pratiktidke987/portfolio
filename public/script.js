const menuToggleOpen = document.querySelector(".menuToggleOpen");
const menuToggleClose = document.querySelector(".menuToggleClose");
const menu = document.querySelector(".nav");

menuToggleOpen.addEventListener("click", ()=>{
    menu.classList.remove("h-0");
    menu.classList.add("h-screen");
    console.log("working");

})

menuToggleClose.addEventListener("click", ()=>{
    menu.classList.remove("h-screen");
    menu.classList.add("h-0");
    console.log("working");

})

document.querySelectorAll(".nav-link").forEach((element)=>{
    element.addEventListener("click", ()=>{
        menuToggleClose.click();
    })
})



// Animations
gsap.registerPlugin(ScrollTrigger) 

var tl = gsap.timeline();

tl.from("#nav-icon", {y: -50, duration: 0.5});
tl.from(".nav-link", {y: -50, duration: 0.5, stagger:0.1});
tl.from("#menu-actions", {y: -50, duration: 0.5, stagger:0.1});
tl.from(".intro-text", {y: 50, opacity:0, duration: 0.5, stagger:0.1});
tl.from(".intro-img", {y:-50,  opacity:0, duration: 0.8 });



// GSAP timeline for the animation
const aboutAnimation = gsap.timeline();

aboutAnimation
  .from('.about-img', { opacity: 0, y: 100, duration: 0.5 })
  .from('.about-text-heading', { opacity: 0, y: 50, duration: 0.5 })
  .from('.about-text', { opacity: 0, y: 50, duration: 0.5, stagger:0.2},)
  .from('.about-btn', { opacity: 0, y: 50, duration: 0.5  });

// Function to trigger the animation when scrolling
var isFirst = 0;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * (2/3))
    );
}


function animateAboutSection() {
  const aboutSection = document.querySelector('#about');

  if (isInViewport(aboutSection) && isFirst === 0) {
    document.querySelector(".about-img").classList.replace("invisible", "visible");
    document.querySelector(".about-text-heading").classList.replace("invisible", "visible");
    document.querySelectorAll(".about-text").forEach((element)=>{
      element.classList.replace("invisible", "visible");
    });
    document.querySelector(".about-btn").classList.replace("invisible", "visible");
    aboutAnimation.restart();
    isFirst = 1;
  }
}

animateAboutSection();

// Listen for the scroll event and trigger the animation
// window.addEventListener('scroll', animateAboutSection);




// GSAP timeline for the animation
const skillsAnimation = gsap.timeline();

skillsAnimation
  .from('.skills-text-heading', { opacity: 0, y: 50, duration: 0.5 })
  .from('.skills-text', { opacity: 0, y: 50, duration: 0.5},)
  .from('.skill-box', { opacity: 0, y: 50, duration: 0.5, stagger:0.2},)

// Function to trigger the animation when scrolling
var isSkillsFirst = 0;


function animateSkillsSection() {
  const skillsSection = document.querySelector('#skills');

  if (isInViewport(skillsSection) && isSkillsFirst === 0) {
    document.querySelector(".skills-text-heading").classList.replace("invisible", "visible");
    document.querySelector(".skills-text").classList.replace("invisible", "visible");
    document.querySelectorAll(".skill-box").forEach((element)=>{
      element.classList.replace("invisible", "visible");
    });
    skillsAnimation.restart();
    isSkillsFirst = 1;
  }
}

animateSkillsSection();







// GSAP timeline for the animation
const projectAnimation = gsap.timeline();

projectAnimation
  .from('.project-text-heading', { opacity: 0, y: 50, duration: 0.5 })
  .from('.project-text', { opacity: 0, y: 50, duration: 0.5},)
  // .from('.project-img', { opacity: 0, y: 50, duration: 0.5},)
  // .from('.skill-item-element', { opacity: 0, y: 50, duration: 0.5, stagger:0.2},)

// Function to trigger the animation when scrolling
var isprojectFirst = 0;


function animateProjectSection() {
  const projectSection = document.querySelector('#projects');

  if (isInViewport(projectSection) && isprojectFirst === 0) {
    document.querySelector(".project-text-heading").classList.replace("invisible", "visible");
    document.querySelector(".project-text").classList.replace("invisible", "visible");
    projectAnimation.restart();
    isprojectFirst = 1;
  }
}

animateProjectSection();






// GSAP timeline for the animation

// projectAnimation
  // .from('.project-text-heading', { opacity: 0, y: 50, duration: 0.5 })
  // .from('.project-text', { opacity: 0, y: 50, duration: 0.5},)
  // .from('.project-img', { opacity: 0, y: 50, duration: 0.5},)
  // .from('.skill-item-element', { opacity: 0, y: 50, duration: 0.5, stagger:0.2},)

// Function to trigger the animation when scrolling

const project_items = document.querySelectorAll(".project-item");
const project_images = document.querySelectorAll(".project-img");
const project_item_headings = document.querySelectorAll(".project-item-heading");
const project_item_descs = document.querySelectorAll(".project-item-desc");
const project_item_links = document.querySelectorAll(".project-item-links");
var isprojectElementFirst = []
project_items.forEach((ele)=>{
  isprojectElementFirst.push(0);
})


function animateProjectElements() {
  
  for (let i=0; i<project_items.length; i++){
    let projectItem = project_items[i];

    if (isInViewport(projectItem) && isprojectElementFirst[i] === 0) {
      project_images[i].classList.replace("invisible", "visible");
      project_item_headings[i].classList.replace("invisible", "visible");
      project_item_descs[i].classList.replace("invisible", "visible");
      project_item_links[i].classList.replace("invisible", "visible");

      gsap.from(project_images[i], { opacity: 0, y: 50, duration: 0.5, delay:0.2})
      gsap.from(project_item_headings[i], { opacity: 0, y: 50, duration: 0.5, delay:0.5})
      gsap.from(project_item_descs[i], { opacity: 0, y: 50, duration: 0.5, delay:1},)
      gsap.from(project_item_links[i], { opacity: 0, y: 50, duration: 0.5, delay:1.5})

      isprojectElementFirst[i] = 1;
    }
  }

}

animateProjectElements();








// GSAP timeline for the animation
const contactAnimation = gsap.timeline();

contactAnimation
  .from('.contact-heading', { opacity: 0, y: 50, duration: 0.5 })
  .from('.contact-text', { opacity: 0, y: 50, duration: 0.5},)
  .from('.contact-input-field', { opacity: 0, y: 50, duration: 0.5, stagger:0.2},)

// Function to trigger the animation when scrolling
var isContactFirst = 0;


function animateContactSection() {
  const contactSection = document.querySelector('#contact');

  if (isInViewport(contactSection) && isContactFirst === 0) {
    document.querySelector(".contact-heading").classList.replace("invisible", "visible");
    document.querySelector(".contact-text").classList.replace("invisible", "visible");
    document.querySelectorAll(".contact-input-field").forEach((element)=>{
      element.classList.replace("invisible", "visible");
    });
    contactAnimation.restart();
    isContactFirst = 1;
  }
}

animateContactSection();









function func() {
  animateAboutSection();
  animateSkillsSection();
  animateProjectSection();
  animateProjectElements();
  animateContactSection();
}

// Listen for the scroll event and trigger the animation
window.addEventListener('scroll', func);