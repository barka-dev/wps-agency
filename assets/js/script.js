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

// const sendEmail = (emailParams)=>{
//   emailjs.send('service_hws7yyd', 'template_gv23oky', emailParams, 'I0kTlTgMs-3h-or2r')
//   .then(
//       ()=>{
//           console.log('SUCCESS!');
//           alert("Email sent successfully");
//       },
//       (error)=>{
//           console.log('FAILED...', error.text);
//           alert("Email sending failed");
//       },
//   );
// }

const sendEmail = (emailParams) => {
  emailjs.send('service_hws7yyd', 'template_gv23oky', emailParams, 'I0kTlTgMs-3h-or2r')
    .then(
      () => {
        console.log('SUCCESS!');
        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: 'Your email has been sent successfully.',
          timer: 3000,
          showConfirmButton: false,
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email sending failed. Please try again.',
        });
      },
    );
};


// const getSubmittedData = ()=>{
//   const form = document.querySelector("#contact-form");
//   const form_data = new FormData(form);

//   const emailParams = {
//       from_fullName: form_data.get("fullName"),
//       from_email: form_data.get("email"),
//       from_phone: form_data.get("phone"),
//       message: form_data.get("message"),
//   }
//   return emailParams;
// }

const getSubmittedData = () => {
  const form = document.querySelector("#contact-form");
  const form_data = new FormData(form);

  // Get form values
  const fullName = form_data.get("fullName").trim();
  const email = form_data.get("email").trim();
  const phone = form_data.get("phone").trim();
  const message = form_data.get("message").trim();

  // Validation
  if (!fullName || !email || !phone || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Fields',
      text: 'Please fill in all the fields.',
    });
    return null;
  }

  if (!validateEmail(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
    });
    return null;
  }

  if (!validatePhone(phone)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Phone Number',
      text: 'Please enter a valid phone number.',
    });
    return null;
  }

  // Return the validated data
  const emailParams = {
    from_fullName: fullName,
    from_email: email,
    from_phone: phone,
    message: message,
  };

  return emailParams;
};

// Email validation function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation function (basic example)
const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10,15}$/; // Adjust the pattern as needed
  return phoneRegex.test(phone);
};


const contact_form = document.querySelector("#contact-form");

const submitForm = (e)=>{
  e.preventDefault();
  const emailParams = getSubmittedData();
  if (emailParams) {
    sendEmail(emailParams);
    contact_form.reset();
  } 
}

contact_form.addEventListener("submit", submitForm);