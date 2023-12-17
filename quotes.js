fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    const advice = data.slip.advice;
    const word = document.querySelector("#word");

    word.innerText = advice;
  });
