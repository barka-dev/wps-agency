// ==== for menu scroll
const pageLink = document.querySelectorAll(".ud-menu-scroll");

pageLink.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(elem.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      offsetTop: 1 - 60,
    });
  });
});

// section menu active
function onScroll(event) {
  const sections = document.querySelectorAll(".ud-menu-scroll");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    const scrollTopMinus = scrollPos + 73;
    if (
      refElement.offsetTop <= scrollTopMinus &&
      refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
      document
        .querySelector(".ud-menu-scroll")
        .classList.remove("active");
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  }
}

window.document.addEventListener("scroll", onScroll);

// Testimonial
const testimonialSwiper = new Swiper(".testimonial-carousel", {
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const sendEmail = (emailParams)=>{
  emailjs.send('service_hws7yyd', 'template_gv23oky', emailParams, 'I0kTlTgMs-3h-or2r')
  .then(
      ()=>{
          console.log('SUCCESS!');
          setEmailStatus('success');
      },
      (error)=>{
          console.log('FAILED...', error.text);
          setEmailStatus('failed');
      },
  );
}

const getSubmittedData = ()=>{
  const form = document.querySelector("#contact-form");
  const form_data = new FormData(form);

  const emailParams = {
      from_fullName: form_data.get("fullName"),
      from_email: form_data.get("email"),
      from_phone: form_data.get("phone"),
      message: form_data.get("message"),
  }
  return emailParams;
}

const contact_form = document.querySelector("#contact-form");

const submitForm = (e)=>{
  e.preventDefault();
  const emailParams = getSubmittedData();
  sendEmail(emailParams);
}

contact_form.addEventListener("submit", submitForm);