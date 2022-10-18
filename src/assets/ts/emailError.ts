import * as $ from 'jquery';

const emailError = () => {
  $('.inputContainerEmail').css('color', 'red');
  $('#email').css('border-bottom', '1px solid red');
  $('#email').attr('placeholder', 'Email Inválido');
  $('.imagePositionEmail').addClass('active');
};

export default emailError;
