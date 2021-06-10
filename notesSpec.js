
// Testing 

// fill-in text box
// expect page to have content
// our array contains our string/note

function testAddingItemToArray() {
    itemsArray.push("This is our first note");
    if(itemsArray.includes("This is our first note"))
        return true
    else
        return false
};

function testAddingToLocalStorage() {
    itemsArray.push("This is our first note");
    localStorage.setItem('items', JSON.stringify(itemsArray));
    if(localStorage.getItem('items') !=null)
        return true
     else
        return false
};

function testClearingLocalStorage() {
    itemsArray.push("This is our first note");
    localStorage.setItem('items', JSON.stringify(itemsArray));
    localStorage.clear();
    if(localStorage.length === 0)
        return true
     else
        return false
};

function testClearingArray() {
    itemsArray.push("This is our first note");
    localStorage.setItem('items', JSON.stringify(itemsArray));
    localStorage.clear();
    itemsArray = [];
    if(itemsArray.includes("This is our first note"))
        return false
    else
        return true
};
function testAPI(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))  
}

const stuff = {"text": "Hello, :earth_africa:"};
function testpostAPI() {
    fetch('https://makers-emojify.herokuapp.com/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stuff),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }      

// click clear 
// expect page not to have content
// our array is empty

