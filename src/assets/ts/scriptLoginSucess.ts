import * as $ from 'jquery';

const scriptLoginSucess = () => {
  $('.logged').addClass('active');
  setTimeout(function () {
    $('.logged').animate({ opacity: 'hide' }, 300);
  }, 2000);
};

export default scriptLoginSucess;
