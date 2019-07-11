

$(document).ready(function() {

  // load select2
  $('.js-example-basic-multiple').select2({
    placeholder: 'All',
  });
  $('.js-example-basic-multiple.withPhoto').select2({
    placeholder: 'All',
    templateResult: templateWithPhoto,
    templateSelection:templateWithPhoto
  });
  
  
});

let selectedID = '';

templateWithPhoto = (state) => {
  if (!state.id) {
    return state.text;
  }

  // show profile photo in options
  let profile;
  if (state.element != undefined){
    profile = state.element.attributes['data-id'].value;
  }
  let baseUrl = "img/avatars";
  let $state = $(
    `<span><img src="${baseUrl}/${profile == '' ? 'no_avatar' : profile}.png" class="img-profile" />${state.text}</span>`
  );
  return $state;
}