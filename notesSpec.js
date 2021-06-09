
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
// click clear 
// expect page not to have content
// our array is empty

