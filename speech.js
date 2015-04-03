var array = [];

function speech(index) {
  chrome.tts.speak(
    array[index],
    {
      lang: 'ja-JP',
      onEvent: function(e) {
        if((e.type == "end") && (index < array.length)) {
          speech(index + 1);
        }
      }
    }
  );
}

function play() {
  speech(0);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#speech').addEventListener('click', play);

  array = document.body.innerHTML.replace(/(<([^>]+)>|")/g, '').replace(/\s+/g, ' ').split(/[、。\s]/);
});
