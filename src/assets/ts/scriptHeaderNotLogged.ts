import * as $ from 'jquery';

const scriptHeaderNotLogged = () => {
  $('.loginPositionLogged').css('display', 'none');

  $('#icon1').click(function () {
    $('.loginPositionNotLogged').animate({ width: 'hide' }, 1);
  });

  $('.loginBot').click(function () {
    $('.loginPositionNotLogged').animate({ height: 'toggle' }, 300);
  });

  $('#icon2').click(function () {
    $('.loginPositionNotLogged').animate({ height: 'toggle' }, 300);
  });

  $('.menu').click(function () {
    $('.loginPositionNotLogged').animate({ height: 'toggle' }, 300);
  });

  $(document).ready(function () {
    $('#icon2').css(
      'background-image',
      'url(/assets/img/Icones/Perfil/miniPerfilCinza.png)'
    );
  });

  $(document).ready(function () {
    $('#icon2').css('background-size', 'initial');
  });
};

export default scriptHeaderNotLogged;
