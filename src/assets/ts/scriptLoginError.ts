import * as $ from 'jquery';

const scriptLoginError = () => {
  $('.inputContainer').css('color', 'red');
  $('#email').css('border-bottom', '1px solid red');
  $('#email').attr('placeholder', 'Email Inválido');
  $('#senha').css('border-bottom', '1px solid red');
  $('#senha').attr('placeholder', 'Senha Inválida');
  $('.imagePosition').addClass('active');
};

export default scriptLoginError;
