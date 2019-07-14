$(document).ready(function() {
  // load select2
  $('.select2_custom').select2({
    placeholder: 'All',
  });
  $('.select2_custom.withPhoto').select2({
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
  let baseUrl = "src/img/avatars";
  let $state = $(
    `<span><img src="${baseUrl}/${profile == '' ? 'no_avatar' : profile}.png" class="img-profile" />${state.text}</span>`
  );
  return $state;
}