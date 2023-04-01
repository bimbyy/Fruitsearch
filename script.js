const input = document.querySelector('#fruit'); //selecting the HTML elements to be used
const suggestions = document.querySelector('.suggestions ul');

//listing fruits to be used
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//will filter the fruits based on the input string
function search(str) {
  let results = [];

  if (str.length > 0) { //just checking if string by running it through a toLowerCase
    results = fruit.filter(item => {
      return item.toLowerCase().includes(str.toLowerCase());
    });
  }

  return results;
}

 //Will handle the input event on the input field
function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

//Function to show suggestions list based on search results
function showSuggestions(results, inputVal) {
  let html = '';
  results.forEach(result => {
    const regex = new RegExp(inputVal, 'gi'); //creates a reg expression regex with the value of inputVal, gi specifies a global search
    const highlight = result.replace(regex, `<span class="highlight">${inputVal}</span>`);//replace is called to replace all occurances of the search pattern with span and highlight which will highlight matching text
    html += `<li>${highlight}</li>`; //uses the li which will be used to build the list of suggestions to be displayed
  });
  suggestions.innerHTML = html;
}

// will handle the click event on the suggestions list
function useSuggestion(e) {
  if (e.target.matches('li')) { //check whether the element that was click is an li element which indicates that the user has clicked on one of the fruits
    input.value = e.target.textContent; //sets value of input to the text content of the click li element
    suggestions.innerHTML = ''; //this will reset the list of suggestions from the page
  }
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);