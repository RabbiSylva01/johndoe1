fetch('data.json')
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(data) {
    // ***profil***
     
    // avatar
    document.querySelector(".section .avatar").setAttribute("src", "images/avatar.jpg");
    
    //nom
    document.querySelector(".section .name").innerHTML = data.profil.name;
    
    //email
    document.querySelector(".section .email").setAttribute("href", "mailto:kanyindasylva8@gmail.com");
    document.querySelector(".section .email").innerHTML = data.profil.email;

    //role
    document.querySelector(".section .role").innerHTML = data.profil.role;

    //description
    document.querySelector(".section.description p" ).innerHTML = data.profil.description;

    //telephone
    document.querySelector(".section.description .telephone").innerHTML = data.profil.telephone;

    //github
    document.querySelector(".section.description .github").setAttribute("href","https://github.com/RabbiSylva01");
    
    // ***competence***
    
    let skills = data.competence;
    for(const skill of skills){
        //creer un div avec class skill-item
        let skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");
        // un span avec class progress
        let progressSpan = document.createElement("span");
        progressSpan.classList.add('progress');
        progressSpan.textContent = skill.progress;
        // lier le span au skill-item
        skillItem.appendChild(progressSpan);
        //creer un div skill-info
        let skillInfo = document.createElement("div");
        skillInfo.classList.add("skill");
        //creer un h3
        let titre = document.createElement("h3");
        titre.classList.add("title");
        titre.textContent = skill.title;
        //creer un p
        let paragraph = document.createElement("p");
        paragraph.classList.add("description");
        paragraph.textContent = skill.description;
        //lier h3 et p à skill-info
        skillInfo.appendChild(titre);
        skillInfo.appendChild(paragraph);
        //lier skill info à skill-item
        skillItem.appendChild(skillInfo);
        //lier skill item au skill list du dom

        document.querySelector(".skills .skills-list").appendChild(skillItem);
        
    }
    
    //  ***langue***

    let langues = data.langue;
    for(const lang of langues){
      //creer un div lang-item
      let langItem = document.createElement("div");
      langItem.classList.add("lang-item");
      //ajouter une img de drapeau
      let drapeau = document.createElement("img");
      drapeau.classList.add("flag");
      drapeau.setAttribute("src", lang.flag);
      // ajouter un span qui contient la langue
      let langage = document.createElement("span");
      langage.classList.add("name");
      langage.textContent = lang.language;
      //lier img et la langue au div lang-item
      langItem.appendChild(drapeau);
      langItem.appendChild(langage);
      //lier lang-item au langs-list du dom

      document.querySelector(".langs .langs-list").appendChild(langItem);

    }

    let experts = data.experience;
    for(const expert of experts){
      //creer un div lang-item
      let expertItem = document.createElement("div");
      expertItem.classList.add("expert-item");

      expertItem.innerHTML =  `
                     <div class="tagline">
                        <span class="dot"></span>
                        <hr> 
                     </div>
                     <p class="tag-data">${expert.year} : ${expert.role} </p>`
      document.querySelector(".expert .expert-list").appendChild(expertItem);
   }

 })
  .catch(function(err) {
    // Une erreur est survenue
  });
