fetch("JS/data.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (data) {
    // ***profil***

    // avatar
    document
      .querySelector(".section .avatar")
      .setAttribute("src", "images/avatar.jpg");

    //nom
    document.querySelector(".section .name").innerHTML = data.profil.name;

    //email
    document
      .querySelector(".section .email")
      .setAttribute("href", "mailto:kanyindasylva8@gmail.com");
    document.querySelector(".section .email").innerHTML = data.profil.email;

    //role
    document.querySelector(".section .role").innerHTML = data.profil.role;

    //description
    document.querySelector(".section.description p").innerHTML =
      data.profil.description;

    //telephone
    document.querySelector(".section.description .telephone").innerHTML =
      data.profil.telephone;

    //github
    document
      .querySelector(".section.description .github")
      .setAttribute("href", "https://github.com/RabbiSylva01");

    // ***competence***

    let skills = data.competence;
    for (const skill of skills) {
      //creer un div avec class skill-item
      let skillItem = document.createElement("div");
      skillItem.classList.add("skill-item");
      // un span avec class progress
      let progressSpan = document.createElement("span");
      progressSpan.classList.add("progress");
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
    for (const lang of langues) {
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
    for (const expert of experts) {
      //creer un div lang-item
      let expertItem = document.createElement("div");
      expertItem.classList.add("expert-item");

      expertItem.innerHTML = `
                     <div class="tagline">
                        <span class="dot"></span>
                        <hr> 
                     </div>
                     <p class="tag-data">${expert.year} : ${expert.role} </p>`;
      document.querySelector(".expert .expert-list").appendChild(expertItem);
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

const form = document.querySelector(".form1");
const nom = document.querySelector(".input-nom");
const middle = document.querySelector(".postnom");
const email = document.querySelector(".input-email");
const select = document.querySelector(".dropdown");
const comment = document.querySelector(".commentaire");
const radios = document.querySelectorAll(".radio");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //donner la valeur
  const nomValue = nom.value.trim();
  const middleValue = middle.value.trim();
  const emailValue = email.value.trim();
  const selectValue = select.value;
  const commentValue = comment.value.trim();
 
  verify_name();
  verify_middle();
  verify_mail();
  verify_radios();
  verify_select();
  verify_comment();
  //verifier nom
  function verify_name() {
    let letterNameNum = nomValue.length;
    if (nomValue === "") {
      //montre l'erreur
      //ajouter la classe erreur
      let message = "Le champ ne peut pas etre vide";
      setErrorFor(nom, message);
    } else if (!nomValue.match(/^[a-zA-Z]/)) {
      let message = "Le nom doit commencer par une lettre";
      setErrorFor(nom, message);
    } else if (letterNameNum < 5) {
      let message = "Le nom doit avoir au moins 5 caractères";
      setErrorFor(nom, message);
    } else if (letterNameNum > 30) {
      let message = "Le nom doit avoir moins de 30 caractères";
      setErrorFor(nom, message);
    } else {
      setSuccesFor(nom);
    }
  }

  function verify_middle() {
    let letterMiddleNum = middleValue.length;
    // VERIFIER POSTNOM
    if (middleValue === "") {
      //montre l'erreur
      //ajouter la classe erreur
      let message = "Le champ ne peut pas etre vide";
      setErrorFor(middle, message);
    } else if (!middleValue.match(/^[a-zA-Z]/)) {
      let message = "Le nom doit commencer par une lettre";
      setErrorFor(middle, message);
    } else if (letterMiddleNum < 5) {
      let message = "Le nom doit avoir au moins 5 caractères";
      setErrorFor(middle, message);
    } else if (letterMiddleNum > 30) {
      let message = "Le nom doit avoir moins de 30 caractères";
      setErrorFor(middle, message);
    } else {
      setSuccesFor(middle);
    }
  }

  function verify_mail() {
   
    if (emailValue === "") {
      let message = "Le champ ne peut pas etre vide";
      setErrorFor(email, message);
    }
     else if (!Verify(emailValue)) {
      let message = "email non valide, veuillez tapez un email valide";
      setErrorFor(email, message);
    } 
    else {
      setSuccesFor(email);
    }
  }
  
function verify_radios() {
    var valid = false;
    for (i = 0; i < radios.length; i++)
    {
       if (radios[i].checked)
        {
         valid = true;
         break;
        }
        
    }
    if(valid){
      return true;
    }
    else{
    alert("Veuillez choisir un genre: Homme ou Femme");
    return false;
}
    }

function verify_select() {
  var valide = false;
    for (i = 0; i < select.options.length; i++)
    {
       if (select.options[i].selected === true)
        {
         valide = true;
         break;
        }
    }
    if(!valide){
      let message = "sélectionne un objet";
      setErrorFor(select, message);
      return false;
    }
    else{
      setSuccesFor(select);
      return true;     
}

}
function verify_comment() {
  let letterCommentNum = commentValue.length;
  if (commentValue === "") {
    
    let message = "Le champ ne peut pas etre vide";
    setErrorFor(comment, message);
  } else if (letterCommentNum < 10 || letterCommentNum> 200) {
    let message = "Le commmentaire doit avoir entre 10 et 20 caractères";
    setErrorFor(comment, message);
  }else{
    setSuccesFor(comment);
  }
}
}

//ajouter la fonction error
function setErrorFor(elem, message) {
  const formControl = elem.parentElement; //.form-control

  const small = formControl.querySelector("small");

  small.innerText = message;
  //ajouter la classe
  formControl.classList.add("error");
}

//ajouter la classe succès
function setSuccesFor(elem) {
  const formControl = elem.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}
function Verify(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
