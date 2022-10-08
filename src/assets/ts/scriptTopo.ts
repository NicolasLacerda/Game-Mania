import * as $ from 'jquery';

const scriptTopo = () => {
  $('#icon1').click(function () {
    $('.loginPositionNotLogged').animate({ width: 'hide' }, 1);
  });

  $('.close').click(function () {
    $('.carrinhoPosition').animate({ width: 'hide' }, 300);
  });

  $('.loginBot').click(function () {
    $('.loginPositionNotLogged').animate({ height: 'toggle' }, 300);
  });

  $('#icon2').click(function () {
    $('.loginPositionNotLogged').animate({ height: 'toggle' }, 300);
  });

  $('#icon2').click(function () {
    $('.carrinhoPosition').animate({ height: 'hide' }, 300);
  });

  $('.menu').click(function () {
    $('.loginPositionNotLogged').animate({ height: 'toggle' }, 300);
  });

  $('.caixaDePesquisa').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('.caixaDePesquisaPosition').removeClass('active');
      $('.dropdownPesquisa').css('display', 'none');
      $(':input').css('border-bottom-left-radius', '5px');
      $('.icon3').css('border-bottom-right-radius', '5px');
    } else {
      $('.caixaDePesquisaPosition').addClass('active');
      $('.dropdownPesquisa').css('display', 'flex');
      $(':input').css('border-bottom-left-radius', '0px');
      $('.icon3').css('border-bottom-right-radius', '0px');
    }

    $(this).data('clicks', !clicks);
  });
};

export default scriptTopo;
