import * as $ from 'jquery';

const passwordError = () => {
  $('.inputContainerPassword').css('color', 'red');
  $('#senha').css('border-bottom', '1px solid red');
  $('#senha').attr('placeholder', 'Senha Inválida');
  $('.imagePositionPassword').addClass('active');
};

export default passwordError;
