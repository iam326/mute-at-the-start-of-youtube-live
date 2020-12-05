(function () {
  const intervalId = setInterval(mute, 1000);

  function mute() {
    console.log('=== start mute() ===');
    const button = document.querySelector(
      'button#button[aria-label="ミュート"]'
    );
    if (button) {
      button.click();
      clearInterval(intervalId);
    }
  }
})();
