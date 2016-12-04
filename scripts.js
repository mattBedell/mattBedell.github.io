$(() => {
  $('.title-fade').removeClass('title-fade');
  //$('.jobTitle').on('transitionend', () => {
    //$('.navBox').removeClass('navBox-fade');
  //})
  $('.navBox').removeClass('navBox-fade');
  popPanes();
  fadePanes(10, 30);
})
function popPanes() {
  let $paneContainer = $('<div class="paneContainer"></div>');
  for(let i = 0; i < 50; i++) {
    let $pane = $(`<div class="pane pane${i} pane-fade"></div>`)
    $($paneContainer).append($pane);
  }
  $('body').append($paneContainer);
}
function fadePanes(start, end) {
  for(let i = start; i < end; i++) {
    if(i + 1 < end) {
      $(`.pane${i}`).on('transitionend', () => {
        $(`.pane${i+1}`).removeClass('pane-fade')
      })
    } else {
      $(`.pane${i}`).on('transitionend', () => {
        removePaneListeners();
      })
    }
  }
  $(`.pane${start}`).focus();
  $(`.pane${start}`).removeClass('pane-fade')
}
function removePaneListeners() {
  for(let i = 0; i < 50; i++) {
    $(`.pane${i}`).off();
  }
}
