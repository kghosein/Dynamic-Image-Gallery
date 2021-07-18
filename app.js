function addImages() {
  // Rather than repeating the img tag in the html document, this function adds images dynamically from images folder 
  const imgarr = [1, 2, 3, 4, 5, 6]; // array for adding number to the images name as seen in images folder
  // this loop iterates through the array and add numbers
  for (const iterator of imgarr) {
    let img = document.createElement('img'); // creating element
    img.src = `images/images${iterator}.jpg`; // adding src attribute
    img.alt = `images${iterator}`; // adding alt attribute
    img.style =
      'width: 20rem; height: 25rem; border: 1px solid #d8f3dc; box-shadow: 0 0 0.5rem 0.1rem #d8f3dc;';
    document.getElementById('initimage').appendChild(img); // this statement adds the image element to the element in the markup selected by the id
  }
}

function imageFromUrl(getUrl) {
  // this function lets you add images by entering a url
  const img = document.createElement('img'); // create image element dynamically
  img.src = getUrl; // sets the src attribute
  img.alt = 'image'; // sets the alt attribute
  img.style =
      'width: 20rem; height: 25rem; border: 1px solid #d8f3dc; box-shadow: 0 0 0.5rem 0.1rem #d8f3dc;'; // sets the  inline styles
  const parentId = document.getElementById('imgUrl'); 
  const childId = parentId.firstChild;
  parentId.insertBefore(img, childId);
}

document.getElementById('getform').onsubmit = function values() {
  // this functions gets the input values
  const formValues = document.getElementById('url').value; 
  // console.log(formValues);
  imageFromUrl(formValues); 
  return false; // prevents reload on form submit
};

addImages();