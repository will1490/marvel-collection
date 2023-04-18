
const collection = [
  {
    filmName: "Iron Man",
    director: "Jon Favreau",
    releaseYear: 2008,
    trailer: "bande-annonce",
    picture: "../images/ironman.jpeg",
    link: "https://www.youtube.com/watch?v=rDCTb9Gp2qk",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Robert Downey JR ",
      "Gwyneth Paltrow ",
      "Jon Favreau ",
      "Jeff Bridges ",

    ],
  },
  {
    filmName: "L'Incroyable Hulk",
    director: "Louis Letterier ",
    releaseYear: 2008,
    trailer: "bande-annonce",
    picture: "../images/hulk.jpeg",
    link: "https://www.youtube.com/watch?v=LCjTxK1B5Pg",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Edward Norton ",
      "Lyv Tyler ",
      "Tim Roth ",
      "William Hurt ",
    ],
  },
  {
    filmName: "Iron Man 2",
    director: "Jon Favreau",
    releaseYear: 2010,
    trailer: "bande-annonce",
    picture: "../images/ironman2.jpeg",
    link: "https://www.youtube.com/watch?v=1eGZ-xmPQTE",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Robert Downey JR ",
      "Gwyneth Paltrow ",
      "Don Cheadle ",
      "Mickey Rourke ",
    ],
  },
  {
    filmName: "Thor",
    director: "Kenneth Branagh",
    releaseYear: 2011,
    trailer: "bande-annonce",
    picture: "../images/thor.jpeg",
    link: "https://www.youtube.com/watch?v=pzT3yeV9lT4",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Chris Hemsworth ",
      "Natalie Portman ",
      "Tom Hiddleston ",
      "Anthony Hopkins ",
    ],
  },
  {
    filmName: "Captain America, first Avenger",
    director: "Joe Johnston",
    releaseYear: 2011,
    trailer: "bande-annonce",
    picture: "../images/captain-america.jpeg",
    link: "https://www.youtube.com/watch?v=IsiV9IJieMk",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Chris Evans ",
      "Tommy Lee Jones ",
      "Hugo Weaving ",
      "Hayley Atwell ",
    ],
  },
  {
    filmName: "Avengers",
    director: "Joss Whedon",
    releaseYear: 2012,
    trailer: "bande-annonce",
    picture: "../images/avengers.jpeg",
    link: "https://www.youtube.com/watch?v=b-kTeJhHOhc",
    genre: ["Action", "Fantastique"],
    casting: [
      "Robert Downey JR ",
      "Chris Evans ",
      "Mark Ruffalo ",
      "Scarlett Johansson ",
    ],
  },
  {
    filmName: "Iron Man 3",
    director: "Shane Black",
    releaseYear: 2013,
    trailer: "bande-annonce",
    picture: "../images/ironman3.jpeg",
    link: "https://www.youtube.com/watch?v=RpAqrMNjwzc",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Robert Downey JR ",
      "Gwyneth Paltrow ",
      "Guy Pearce ",
      "Ben Kingsley ",
    ],
  },
  {
    filmName: "Thor 2: le monde des ténèbres",
    director: "Alan Taylor",
    releaseYear: 2013,
    trailer: "bande-annonce",
    picture: "../images/thor2.jpeg",
    link: "https://www.youtube.com/watch?v=WocFedghAHI",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Chris Hemsworth ",
      "Natalie Portman ",
      "Tom Hiddleston ",
      "Idris Elba ",
    ],
  },
  {
    filmName: "Captain America: le soldat de l'hiver",
    director: "Anthony & Joe Russo",
    releaseYear: 2014,
    trailer: "bande-annonce",
    picture: "../images/captain-america2.jpeg",
    link: "https://www.youtube.com/watch?v=6mQWmUwxZjI",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Chris Evans ",
      "Scarlett Johansson ",
      "Sebastian Stan ",
      "Anthony Mackie ",
    ],
  },
  {
    filmName: "Les Gardiens de la Galaxie",
    director: "James Gunn",
    releaseYear: 2014,
    trailer: "bande-annonce",
    picture: "../images/guardiens-de-la-galaxie.jpeg",
    link: "https://www.youtube.com/watch?v=ry19UYQoAro",
    genre: ["Science-fiction ", "Fantastique "],
    casting: [
      "Chris Pratt ",
      "Zoe Saldana ",
      "Dave Bautista ",
      "Bradley Cooper ",
    ],
  },
  {
    filmName: "Avengers 2: l'ère d'Ultron",
    director: "Joss Whedon",
    releaseYear: 2015,
    trailer: "bande-annonce",
    picture: "../images/avengers2.jpeg",
    link: "https://www.youtube.com/watch?v=XmzJ5WMSr-g",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Robert Downey JR ",
      "Chris Evans ",
      "Elisabeth Olsen ",
      "Jeremy Renner ",
    ],
  },
  {
    filmName: "Ant-Man",
    director: "Peyton Reed",
    releaseYear: 2015,
    trailer: "bande-annonce",
    picture: "../images/ant-man.jpeg",
    link: "https://www.youtube.com/watch?v=_mWjqYXA59E",
    genre: ["Action ", "Fantastique "],
    casting: [
      "Paul Rudd ",
      "Evangeline Lilly ",
      "Michael Douglas ",
      "Michael Pena ",
    ],
  },
];
  
  const container = document.querySelector(".container");
  
  collection.forEach((object) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const picture = document.createElement("img");
    picture.src = object.picture;
    card.appendChild(picture);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const trailer = document.createElement("a");
    trailer.textContent = object.trailer;
    trailer.href = object.link
    cardBody.appendChild(trailer);
    console.log("trailer genered");
  
    const filmName = document.createElement("h2");
    filmName.classList.add("card-filmName");
    filmName.textContent = object.filmName;
    cardBody.appendChild(filmName);

    const director = document.createElement("span");
    director.classList.add("card-text");
    director.textContent = "Director : " + object.director;
    cardBody.appendChild(director);

    const releaseYear = document.createElement("span");
    releaseYear.classList.add("card-text");
    releaseYear.textContent = "Release year : " + object.releaseYear;
    cardBody.appendChild(releaseYear);
    console.log("releaseYear genered");

    const genre = document.createElement("span");
    genre.classList.add("card-text");
    genre.textContent = "Genre : " + object.genre;
    cardBody.appendChild(genre);
    console.log("genre genered");
  
    let casting = document.createElement("span");
    casting.classList.add("card-text");
    casting.textContent = "Casting : " + object.casting;
    cardBody.appendChild(casting); 
    console.log("casting genered");

    container.appendChild(card);
  });


for(let i=0; i < collection.length; i++){
  let bouton = document.createElement("button");
  bouton.innerHTML = "Supprimer";
  bouton.setAttribute("data-index", i);
  bouton.addEventListener("click", function(){
      let index = this.getAttribute("data-index");
      collection.splice(index, 1);
      // Mise à jour de l'affichage
      afficherTableau();
  });
  document.body.appendChild(bouton);
};


function afficherTableau(){
  let contenu = "";
  for(let i=0; i < collection.length; i++){
      contenu += "<div>"+collection[i].nom+" - "+collection[i].prix+"€ <button data-index='"+i+"'>Supprimer</button></div>";
  }
  document.getElementsByName("collection").innerHTML = contenu;
};

afficherTableau();


  