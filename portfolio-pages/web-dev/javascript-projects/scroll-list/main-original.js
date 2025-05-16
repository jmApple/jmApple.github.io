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
  console.log('Number of list items' + dictionary.length)

  const ul = document.querySelector('ul');
  if (!ul) {
    throw new Error('The <ul> element was not found in the DOM.');
  }

  const scrollWrapper = document.getElementsByClassName('scroll-wrapper')[0];
  if (!scrollWrapper) {
    throw new Error('The scroll wrapper was not found in the DOM.');
  }


  //length of UL
  const ulLength = dictionary.length * 30;
  numItems.innerText = dictionary.length;
  console.log("UL Length:", ulLength);
  ul.style.height = `${ulLength}px`;
  ulHeight.innerText = ulLength;

  let ulScrollTop = 0; // Declare a variable to store the scroll position

  let start = 0; // Declare a variable to store the starting index
  let end = 5000; // Declare a variable to store the ending index
  // addWordsToList(ul, dictionary.slice(start, end));

  // Function to render the visible items
  function renderVisibleItems() {
    start = Math.floor(ulScrollTop / 30); // Calculate the starting index
    itemNum.innerText = start; // Update the item number display
    end = start + 5000; // Calculate the ending index
    console.log("Start:", start, "End:", end);

    ul.style.paddingTop = `${ulScrollTop}px`; // Set the padding top of the <ul> to the scroll position
    ul.style.height = `${ulLength-ulScrollTop}px`;

    // Render only the visible items
    addWordsToList(ul, dictionary.slice(start, end));
  }

  // Initial render
  renderVisibleItems();

  // scrollWrapper.addEventListener('scroll', function () {
  //   ulScrollTop = scrollWrapper.scrollTop;
  //   // Update the scroll position within the <ul> 
  //   console.log("UL Scroll Position:", ulScrollTop);

  //   // Update UI or perform actions based on the scroll position
  //   scrollPositionText.innerText = ulScrollTop;

  //   start = Math.ceil(ulScrollTop / 30);
  //   itemNum.innerText = start;

  //   end = start + 5000;

  //   const li = ul.querySelector('li');
  //   if (!li) {
  //     throw new Error('No <li> elements found inside the <ul>.');
  //   }

  //   li.style.paddingTop = `${ulScrollTop}px`;


  //   addWordsToList(ul, dictionary.slice(start, end));

  // });

  // if (scrollWrapper) {
  //   scrollWrapper.style.paddingTop = `${ulScrollTop}px`;
  // } else {
  //   console.error('No element with class "scroll-wrapper" found.');
  // }
  // addWordsToList(ul, dictionary.slice(0, 5000));
  // Add a scroll event listener to dynamically update the visible items
  scrollWrapper.addEventListener('scroll', function () {
    ulScrollTop = scrollWrapper.scrollTop; // Update the scroll position
    scrollPositionText.innerText = ulScrollTop; // Update the scroll position display
    console.log("Scroll Wrapper Scroll Position:", ulScrollTop);

    // Render the visible items based on the scroll position
    renderVisibleItems();
  });

}

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', render); // Call your render function here
});


