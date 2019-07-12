const cardsContainer = document.querySelector('.cards');

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const folks = [ 
  axios.get(`https://api.github.com/users/A-powell`), 
axios.get(`https://api.github.com/users/dustinmyers`),
axios.get(`https://api.github.com/users/justsml`), 
axios.get(`https://api.github.com/users/luishrd`), 
axios.get(`https://api.github.com/users/bigknell`),
axios.get(`https://api.github.com/users/ebislab`)
]

// const user = 'ebislab'
// const promise = axios.get(`https://api.github.com/users/${user}`)


Promise.all(folks)
.then( 
  data => {
  console.log('response', data)
  //const images = data.data.avatar_url;
  //console.log(images);
data.forEach(prop => {
    //console.log('hi')
// const el = createProfileCard(imageUrl, user);
cardsContainer.appendChild(createProfileCard(prop.data))
 })

}
)

.catch(error => {
  console.log('Something is down, idk', error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createProfileCard(obj){  //obj = argument
  
const cards= document.createElement('div');
const img = document.createElement('img');
const cardInfo= document.createElement('div');
const h3= document.createElement('h3');
const puser= document.createElement('p');
const plocation= document.createElement('p');
const pprofile= document.createElement('p');
const alink=document.createElement('a');
const pfollowers= document.createElement('p');
const pfollowing= document.createElement('p');
const pbio= document.createElement('p');

cardsContainer.appendChild(cards);
cards.appendChild(img);
cards.appendChild(cardInfo);
cardInfo.appendChild(h3);
cardInfo.appendChild(puser);
cardInfo.appendChild(plocation);


cardInfo.appendChild(pprofile);
pprofile.textContent = 'Profile: ';
pprofile.appendChild(alink)
cardInfo.appendChild(pfollowers);
cardInfo.appendChild(pfollowing);
cardInfo.appendChild(pbio);


cards.classList.add('card');
cardInfo.classList.add('card-info')
h3.classList.add('name');
puser.classList.add('username');




img.src= obj.avatar_url;
h3.textContent = obj.name;
puser.textContent = obj.login;
plocation.textContent = `Location: ${obj.location || "none"}`;

//
alink.href = obj.html_url;
alink.textContent = obj.html_url;
//

pfollowers.textContent = `Followers: ${obj.followers}`;
pfollowing.textContent = `Following: ${obj.following}`;
pbio.textContent = obj.bio;


 console.log('data')

 return cards;

}


