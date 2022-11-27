const refs = {
    bodyColor: document.querySelector('body'),
    startColor: document.querySelector('[data-start]'),
    stopColor: document.querySelector('[data-stop]')
}

console.log(refs.bodyColor)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let timerId = null;

  refs.stopColor.disabled = true;

  refs.startColor.addEventListener('click', () => {
    timerId = setInterval(() => {
        refs.bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.startColor.disabled = true;
    refs.stopColor.disabled = false;
  });

  refs.stopColor.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startColor.disabled = false;
    refs.stopColor.disabled = true;
  });


  