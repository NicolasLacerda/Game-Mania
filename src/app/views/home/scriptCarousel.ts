import * as $ from 'jquery';

const scriptCarousel = () => {
  const radio = document.querySelectorAll('.btnSlider');

  const slides = document.querySelectorAll('.slide');
  const numberOfSlides = slides.length;

  const dots = document.querySelectorAll('.dot');
  const numberOfDots = dots.length;
  let i = 0;

  $(document).ready(function () {
    console.log('dasdasd');

    //botão next
    $('#next').click(function () {
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });

      i++;

      if (i > numberOfSlides - 1) {
        i = 0;
      }

      $(radio[i]).prop('checked', true);
      $(dots[i]).addClass('active');
    });

    //botão voltar
    $('#prev').click(function () {
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });

      i--;

      if (i < 0) {
        i = numberOfSlides - 1;
      }

      $(radio[i]).prop('checked', true);
      $(dots[i]).addClass('active');
    });
  });
};

export default scriptCarousel;
