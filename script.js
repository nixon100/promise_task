//API 1 
function cat (){
  const api = "https://cat-fact.herokuapp.com/facts"
  fetch(api)
  .then((res) => res.json())
  .then((data) => {
        console.log(data);
        let parameter = {
          name: data[0].type,
          fact: data[0].text,
          fact1: data[1].text,
          fact2: data[2].text,
          fact3: data[3].text,
          fact4: data[4].text,
        }
        console.log(parameter.name);
        content(parameter);
        })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
/////////

//API 2 
function dog (){
  const api1 = "https://dog-api.kinduff.com/api/facts"
  fetch(api1)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let parameter = {
       fact: data.facts[0],
      }
      console.log(parameter);
      content2(parameter);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
//////////////
// API 3
function bible (){
const api3 = "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10"
fetch(api3)
  .then((res) => res.json())
  .then((data) => {
   content3(data.verses)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
/////////////////////////


// functions////////////////
const maindiv = document.createElement("div");
////////bible///////////////
function content3(versesData){
  
  maindiv.innerHTML = "";

    const div= document.createElement('div')
    div.id='verses';
    /////////////////////header///////////////
    let hed = header("bible", "bible-words!")//
   
///////////////header/////////////////////////////

  const h2 = document.createElement("h1")
  h2.classList.add("title")
    h2.innerHTML="Bible"
    div.appendChild(h2)
   
    const h1 = document.createElement("h1")
    h1.innerHTML="Bible words"
    h1.classList.add("facts")
    div.appendChild(h1)
////forEach///
    versesData.forEach((verse) => {
    
    const chapterVerseElement = document.createElement('p');
    chapterVerseElement.textContent = `${verse.book_name} ${verse.chapter}:${verse.verse}`;
    div.appendChild(chapterVerseElement);
    
    const verseTextElement = document.createElement('p');
    verseTextElement.classList.add("word");
    verseTextElement.textContent = verse.text;
    div.appendChild(verseTextElement);
    });
/////forEach///

    maindiv.appendChild(div);
    document.body.append(maindiv);
  
}
/////////////////////////bible//////////////////////////////



///////////////cat/////////////////////////
function content(parameter) {
  maindiv.innerHTML = "";

    const factss = [parameter.fact, parameter.fact1, parameter.fact2, parameter.fact3, parameter.fact4];
    const factListItems = factss.map(fact => `<li>${fact}</li>`).join('');

   
  ////////////////header/////////////////
  const header = document.createElement('header');
  header.classList.add('page-header');
  
  const projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.textContent = `${parameter.name}-facts`;
  
  const projectTagline = document.createElement('h2');
  projectTagline.classList.add('project-tagline');
  projectTagline.textContent = `daily ${parameter.name} facts!`;
  
  header.appendChild(projectName);
  header.appendChild(projectTagline);
  maindiv.appendChild(header);
///////////////////////////////////////////




   const mainContent = document.createElement('main');
mainContent.classList.add('main-content');

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = parameter.name;

const facts = document.createElement('h2');
facts.classList.add('facts');
facts.textContent = `${parameter.name} Facts`;

const factsList = document.createElement('ul');
factsList.innerHTML = factListItems;

mainContent.appendChild(title);
mainContent.appendChild(facts);
mainContent.appendChild(factsList);


maindiv.appendChild(mainContent)
document.body.appendChild(maindiv);
}
//////////////////////////cat/////////////////////////////


//////////////////////dog///////////////////
function content2(parameter) {
  maindiv.innerHTML = "";
    const factss = [parameter.fact];
    const factListItems = factss.map(fact => `<li>${fact}</li>`).join('');
/////////////////header//////////////////////////////////
const header = document.createElement('header');
header.classList.add('page-header');

const projectName = document.createElement('h1');
projectName.classList.add('project-name');
projectName.textContent = "Dogs-facts";

const projectTagline = document.createElement('h2');
projectTagline.classList.add('project-tagline');
projectTagline.textContent = "daily Dog facts!";

header.appendChild(projectName);
header.appendChild(projectTagline);
maindiv.appendChild(header);
////////////////////////////////////////////////////////
    
    const mainContent = document.createElement('main');
 mainContent.classList.add('main-content');
 
 const title = document.createElement('h1');
 title.classList.add('title');
 title.textContent = "Dog";
 
 const facts = document.createElement('h2');
 facts.classList.add('facts');
 facts.textContent = "Dog Facts";
 
 const factsList = document.createElement('ul');
 factsList.innerHTML = factListItems;
 
 mainContent.appendChild(title);
 mainContent.appendChild(facts);
 mainContent.appendChild(factsList);
 maindiv.appendChild(mainContent);
 document.body.append(maindiv);
 }
 ///////////////////////dog////////////////////////////////////////////

 

// Header/////////////////////////////////////////
function header (name, nametag){
      const header = document.createElement('header');
      header.classList.add('page-header');
      
      const projectName = document.createElement('h1');
      projectName.classList.add('project-name');
      projectName.textContent = `${name}`;
      
      const projectTagline = document.createElement('h2');
      projectTagline.classList.add('project-tagline');
      projectTagline.textContent = `daily ${nametag}`;
      
      header.appendChild(projectName);
      header.appendChild(projectTagline);
      maindiv.appendChild(header);

}

  // Create a new button element
  const div = document.createElement("div")
  div.id = "button-container"
  const catButton = document.createElement("button");

  // Set the class and text content of the button
  catButton.classList.add("button");
  catButton.textContent = "Cat";

  // Define the "cat" function to be executed when the button is clicked
  catButton.onclick = function () {
   cat();
  };

  // Create the "dog" and "bible" buttons in a similar way...
  const dogButton = document.createElement("button");
  dogButton.classList.add("button");
  dogButton.textContent = "Dog";
  dogButton.onclick = function () {
    dog();
  };

  const bibleButton = document.createElement("button");
  bibleButton.classList.add("button");
  bibleButton.textContent = "Bible Words";
  bibleButton.onclick = function () {
    bible();
  };

  // Select the element with the ID "button-container"

  // Append the buttons to the "button-container" div
  div.appendChild(catButton);
  div.appendChild(dogButton);
  div.appendChild(bibleButton);
  document.body.appendChild(div);


 