$(() => {
  $('.title-fade').removeClass('title-fade');
  //$('.jobTitle').on('transitionend', () => {
    //$('.navBox').removeClass('navBox-fade');
  //})
  $('.navBox').removeClass('navBox-fade');
  popPanes();
  fadePanes(20, 90, 110, 180);
})
function popPanes() {
  let $paneContainer = $('<div class="paneContainer"></div>');
  for(let i = 0; i < 200; i++) {
    let $pane = $(`<div class="pane pane${i} pane-fade"></div>`)
    $($paneContainer).append($pane);
  }
  $('body').append($paneContainer);
}
// function fadePanes(start, end) {
//   for(let i = start; i < end; i++) {
//     if(i + 1 < end) {
//       $(`.pane${i}`).on('transitionend', () => {
//         $(`.pane${i+1}`).removeClass('pane-fade')
//       })
//     } else {
//       $(`.pane${i}`).on('transitionend', () => {
//         removePaneListeners();
//       })
//     }
//   }
//   $(`.pane${start}`).focus();
//   $(`.pane${start}`).removeClass('pane-fade')
// }
function fadePanes(start, end, start2, end2) {
  for(let i = start; i < end; i++) {
    $(`.pane${i}`).focus();
    $(`.pane${i}`).css('transition-delay', `${(i - start) * .004}s`);
    $(`.pane${i}`).removeClass('pane-fade');
  }
  for(let i = start2; i < end2; i++) {
    $(`.pane${i}`).focus();
    $(`.pane${i}`).css('transition-delay', `${(i - start) * .004}s`);
    $(`.pane${i}`).removeClass('pane-fade');
  }
  let contentFadePoint = Math.floor((end-start) / 2);
  $(`.pane${contentFadePoint}`).on('transitionend', () => {
    // fade in content
    // remove this listener
  })
}
function removePaneListeners() {
  for(let i = 0; i < 50; i++) {
    $(`.pane${i}`).off();
  }
}
