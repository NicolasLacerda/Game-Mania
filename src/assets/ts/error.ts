import * as $ from 'jquery';

const scriptError = () => {
  $('.inputContainerPassword').css('color', 'red');
  $('#senha').css('border-bottom', '1px solid red');
  $('#senha').attr('placeholder', 'Senha Inválida');
  $('.imagePositionPassword').addClass('active');
  $('.inputContainerEmail').css('color', 'red');
  $('#email').css('border-bottom', '1px solid red');
  $('#email').attr('placeholder', 'Email Inválido');
  $('.imagePositionEmail').addClass('active');
};

export default scriptError;
