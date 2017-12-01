function showPic() {
  var pics = ['imgs/one.jpg',
              'imgs/two.jpg',
              'imgs/three.jpg',
              'imgs/four.jpg',
              'imgs/five.jpg',
              'imgs/six.jpg',
              'imgs/seven.jpg',
              'imgs/eight.jpg',
              'imgs/nine.jpg',
              'imgs/ten.jpg'];

  var rand = Math.floor(Math.random() * pics.length);
  var displayPic = '<img src="' + pics[rand] + '">';
  $('#picContainer').html(displayPic);
}

$('#another').on('click', function() {
  console.log('clicky, I console in the BROWSER RAWR');
  showPic();
});

showPic();
