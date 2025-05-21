

fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')
  .then(response => response.json()) // transforme la réponse en JSON
  .then(data => {

    let sectionHero = document.getElementById("hero");
    let nomH1 = document.createElement("h1");
    let accrocheH2 = document.createElement ("h2");
let button = document.createElement("button");

nomH1.textContent = data.nomCommercial;
accrocheH2.textContent = data.phraseAccroche;
button.textContent =data.phraseAccroche;

sectionHero.appendChild(nomH1);
sectionHero.appendChild(accrocheH2);
sectionHero.appendChild(button);



    // ici on utilise les données reçues
    console.log(data);
  })
  .catch(error => {
    // ici on gère les erreurs
    console.error('Erreur lors du fetch :', error);
  });

  let produits = data.produits;
  produits.forEach(produits => {
    
  });