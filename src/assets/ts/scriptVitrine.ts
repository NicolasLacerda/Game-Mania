import * as $ from 'jquery';

const scriptVitrine = () => {
  let coracaoVazio = document.querySelectorAll('.coracao');

  $(coracaoVazio).click(function () {
    $(this).toggleClass('active');
  });

  //
  $('.bar1').click(function () {
    $('.fileira1').css('margin-left', '0');
    $('.fileira2').css('margin-left', '0');
  });
  $('.bar2').click(function () {
    $('.fileira1').css('margin-left', '-20%');
    $('.fileira2').css('margin-left', '0%');
  });
  //

  //
  $('.bar3').click(function () {
    $('.fileira3').css('margin-left', '0');
    $('.fileira4').css('margin-left', '0');
  });
  $('.bar4').click(function () {
    $('.fileira3').css('margin-left', '-20%');
    $('.fileira4').css('margin-left', '0');
  });
  //

  //
  $('.bar5').click(function () {
    $('.fileira5').css('margin-left', '0');
    $('.fileira6').css('margin-left', '0');
  });
  $('.bar6').click(function () {
    $('.fileira5').css('margin-left', '-20%');
    $('.fileira6').css('margin-left', '0');
  });
  //

  //
  $('.bar7').click(function () {
    $('.fileira7').css('margin-left', '0');
    $('.fileira8').css('margin-left', '0');
  });
  $('.bar8').click(function () {
    $('.fileira7').css('margin-left', '-20%');
    $('.fileira8').css('margin-left', '0');
  });
  //

  //
  $('.bar9').click(function () {
    $('.fileira9').css('margin-left', '0');
    $('.fileira10').css('margin-left', '0');
  });
  $('.bar10').click(function () {
    $('.fileira9').css('margin-left', '-20%');
    $('.fileira10').css('margin-left', '0');
  });
  //
};

export default scriptVitrine;
