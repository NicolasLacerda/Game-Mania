import * as $ from 'jquery';

const scriptLogin = () => {
  let inputColorChanger = document.querySelectorAll('.inputContainer');
  $('.inputContainer').css('color', 'red');
  $('#email').css('color', 'red');
  $('#email').css('border-bottom', '1px solid red');
  $('#senha').css('color', 'red');
  $('#senha').css('border-bottom', '1px solid red');
};

export default scriptLogin;
