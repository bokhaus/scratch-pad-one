// Variable for 
var promoCode = '';
var bg1 = '../img/10.jpg';
var bg2 = 'https://jennamolby.com/scratch-and-win/images/500.png';
var bg3 = 'https://jennamolby.com/scratch-and-win/images/sorry.png';

// Scratch randomizer
var bgArray= [ bg1, bg2, bg3 ],
selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];
if (selectBG == bg1) {
    promoCode = 'SCRATCH400';
  } else if (selectBG == bg2) {
    promoCode = 'SCRATCH500';
  } if (selectBG == bg3) {
    var promoCode = '';
  }

  //  jQuery plugin
  $('#promo').wScratchPad({
    // the size of the eraser
    size        : 70,    
    // the randomized scratch image   
    bg:  selectBG,
    // give real-time updates
    realtime    : true, 
    // The overlay image
    fg: 'https://jennamolby.com/scratch-and-win/images/overlay.png',
    // The cursor (coin) image
    'cursor': 'url("https://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
    
    scratchMove: function (e, percent) {
        // Show the plain-text promo code and call-to-action when the scratch area is 50% scratched
        if ((percent > 50) && (promoCode != '')) {
          $('.promo-container').show();
          $('body').removeClass('not-selectable');
          $('.promo-code').html('Your code is: ' + promoCode);
        }
      }
 });