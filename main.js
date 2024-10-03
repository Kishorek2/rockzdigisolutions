// Logo 

const logo = document.querySelector('.logo');
const rockz = document.querySelector('.rockz');

logo.addEventListener('mouseover', () => {
rockz.style.transform = 'scale(0.5)';
rockz.style.display = 'block';
rockz.style.fontFamily = 'Lumanosimo, cursive'; 
rockz.style.fontSize = '45px'; 
rockz.style.fontweight = '1000';
});

logo.addEventListener('mouseout', () => {
rockz.style.transform = 'scale(1)';
rockz.style.display = 'none';
});

function toggleMenu() {
    const navbarCollapse = document.getElementById('navbarTogglerDemo2');
    if (navbarCollapse.style.display == "block") {
      navbarCollapse.style.display = "none";
  } else {
    navbarCollapse.style.display = "block";
  }
   // navbarCollapse.classList.toggle('active');
  }



// Dark mode

  function myFunction() {
    alert("Test");
   var element = document.body;
   element.classList.toggle("dark-mode");
}


// Testimonials

document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentTestimonial = 0;
  const intervalTime = 5000; // Time interval for auto-sliding (5 seconds)
  let slideInterval;

  // Function to show the current testimonial and hide others
  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          if (i === index) {
              testimonial.style.display = "block";
          } else {
              testimonial.style.display = "none";
          }
      });
  }

  // Show the next testimonial
  function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
  }

  // Show the previous testimonial
  function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
  }

  // Set up the automatic sliding functionality
  function startAutoSlide() {
      slideInterval = setInterval(nextTestimonial, intervalTime);
  }

  // Stop automatic sliding (for when user clicks next/prev)
  function stopAutoSlide() {
      clearInterval(slideInterval);
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", function() {
      stopAutoSlide();
      nextTestimonial();
      startAutoSlide(); // Restart auto slide after manual action
  });

  prevBtn.addEventListener("click", function() {
      stopAutoSlide();
      prevTestimonial();
      startAutoSlide(); // Restart auto slide after manual action
  });

  // Initialize
  showTestimonial(currentTestimonial); // Show the first testimonial
  startAutoSlide(); // Start automatic slide
});



