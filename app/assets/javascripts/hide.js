function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);






// let hideWhenClicked = (event) {
//   let clicked = $(event.target);
//   clicked.hide();
// }
//
// $['#hide_this').click(callbackFn)]
