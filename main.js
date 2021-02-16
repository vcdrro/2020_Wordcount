// DOM element
const textareaEl = document.querySelector('textarea');
const wordCounterEl = document.querySelector('#word_count');

// Get the value of textarea
// and calculate the total word
const getTotalWord = (element) => {
  let text = element.value;
  let totalWord = text.split(' ').length;

  return text === '' ? 0 : totalWord;
}

// Update the word counter element
const setWordCounter = (element, value) => {
  element.textContent = value;
} 

// Fire this function when the user is typing
textareaEl.addEventListener('keyup', () => {
  let totalWord = getTotalWord(textareaEl);
  setWordCounter(wordCounterEl, totalWord);
});

