import * as $ from 'jquery';

const scriptHeaderLogged = () => {
  $('.loginPositionNotLogged').css('display', 'none');

  $('#icon1').click(function () {
    $('.loginPositionLogged').animate({ width: 'hide' }, 1);
  });

  $('.loginBot').click(function () {
    $('.loginPositionLogged').animate({ height: 'toggle' }, 300);
  });

  $('#icon2').click(function () {
    $('.loginPositionLogged').animate({ height: 'toggle' }, 300);
  });

  $('.menu').click(function () {
    $('.loginPositionLogged').animate({ height: 'toggle' }, 300);
  });

  $(document).ready(function () {
    $('#icon2').css(
      'background-image',
      'url(/assets/img/Icones/menuPerfil/fotografia-para-perfil.jpg)'
    );
  });

  $(document).ready(function () {
    $('#icon2').css('background-size', 'contain');
  });
};

export default scriptHeaderLogged;
