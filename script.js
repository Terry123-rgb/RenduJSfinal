

fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')
    .then(response => response.json()) // transforme la réponse en JSON
    .then(data => {

        let sectionHero = document.getElementById("hero");
        let nomH1 = document.createElement("h1");
        let accrocheH2 = document.createElement("h2");
        let button = document.createElement("button");

        nomH1.textContent = data.nomCommercial;
        accrocheH2.textContent = data.phraseAccroche;
        button.textContent = data.phraseAccroche;

        sectionHero.appendChild(nomH1);
        sectionHero.appendChild(accrocheH2);
        sectionHero.appendChild(button);

        data.produits.forEach(element => {
            let contain = document.getElementById("product-container");

            let carte = document.createElement("div");
            carte.classList.add("card");
            contain.appendChild(carte);
           

            let image = document.createElement("img");
            carte.appendChild(image);
            image.src = element["image-url"];


            let titre = document.createElement("h3");
            titre.textContent = element.nom
            carte.appendChild(titre);



            let desc = document.createElement("h4");
            carte.appendChild(desc);
            desc.textContent = element.description


 });

      


   
            
  data.temoignages.forEach(element=> {
            let avoir = document.getElementById("product-container");
            let retour = document.getElementById("retour");

            let avis = document.createElement("section");
            retour.appendChild(avis);

            let nom2 = document.createElement("h3");
            nom2.textContent = element.prenom
            avis.appendChild(nom2);



            let comm = document.createElement("h4");
            comm.textContent = element.commentaire
          avis.appendChild(comm);

          

        });

    });

    



    // .catch(error => {
    //     // ici on gère les erreurs
    //     console.error('Erreur lors du fetch :', error);







    // });
