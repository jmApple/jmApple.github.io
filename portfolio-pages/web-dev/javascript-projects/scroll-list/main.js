// do not alter first 2 functions

async function fetchDictionary() {
  const data = await fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt")
  const text = await data.text()
  return text.split("\r\n")
}

function addWordsToList(list, words) {

  list.innerHTML = words.length > 5000 ? 'Too many words! :(' : words.map(word => `<li>${word}</li>`).join('');

}

// do not alter functions above this line

async function render() {
  const dictionary = await fetchDictionary();
  // console.log('Number of list items' + dictionary.length)

  const ul = document.getElementsByClassName('scroll-list')[0];;
  if (!ul) {
    throw new Error('The <ul> element was not found in the DOM.');
  }
  // scroll-list
  const scrollWrapper = document.getElementsByClassName('scroll-wrapper')[0];
  if (!scrollWrapper) {
    throw new Error('The scroll wrapper was not found in the DOM.');
  }

  //Height of UL
  const ulHeight = dictionary.length * 30;
  numItems.innerText = dictionary.length;
  console.log("UL Length:", ulHeight);
  ul.style.height = `${ulHeight}px`;
  ulHeightValue.innerText = ulHeight;
  console.log("UL Height:", ulHeight);

  // Declare variable to store the scroll position
  let ulScrollTop = 0;

  // Declare starting index variable
  let start = 0;

  // Declare ending index variable
  let end = 2000; 

  // Function to render the visible items
  function renderVisibleItems() {
    // Calculate the starting index
    start = Math.floor(ulScrollTop / 30);

    // Update the item number display
    itemNum.innerText = start; 

    // Calculate the ending index
    end = start + 5000;
    console.log("Start:", start, "End:", end);

    ul.style.paddingTop = `${ulScrollTop}px`; // Set the padding top of the <ul> to the scroll position
    ul.style.height = `${ulHeight - ulScrollTop}px`;

    // Render only the visible items
    addWordsToList(ul, dictionary.slice(start, end));
  }

  // Initial render
  renderVisibleItems();

  // addWordsToList(ul, dictionary.slice(0, 5000));
  scrollWrapper.addEventListener('scroll', function () {
    // Update the scroll position
    ulScrollTop = scrollWrapper.scrollTop;

    // Update the scroll position display
    scrollPositionText.innerText = ulScrollTop;
    console.log("Scroll Wrapper Scroll Position:", ulScrollTop);

    // Render the visible items based on the scroll position
    renderVisibleItems();
  });

}

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', render);
});
