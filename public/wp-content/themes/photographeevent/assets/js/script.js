


    // intégration du bouton contact dans le menu

// Sélectionner le bouton et la div
// var btn = document.getElementById("myBtn");
// var menuContainer = document.querySelector(".menu-main-container");

// // Déplacer le bouton dans la div
// menuContainer.appendChild(btn);


        // MENU BURGER

//   toggleMenu()

// récupérez le bouton du menu hamburger et la liste des liens
const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.open_nav');

// quand l'utilisateur clique sur le bouton, la liste des liens s'ouvre ou se ferme
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('open');
});


// fermeture du menu burger
function toggleMenu () {  
    const navbar = document.querySelector('.main-navigation')
    const burger = document.querySelector('.menu-toggle')
    
    burger.addEventListener('click', () => {    
      navbar.classList.toggle('open-nav')
    })
  }
  toggleMenu()

  // // récupérez le bouton du menu hamburger et la liste des liens
// const menuBtn = document.querySelector('.menu-toggle');
// const menuList = document.querySelector('.open_nav');

// // quand l'utilisateur clique sur le bouton, la liste des liens s'ouvre ou se ferme
// menuBtn.addEventListener('click', function() {
//   menuList.classList.toggle('open');
//   menu.classList.toggle('open');
// });


//     // ouverture du menu burger 

// const menuToggle = document.querySelector('.menu-toggle');
// const menu = document.querySelector('.open_nav');

// menuToggle.addEventListener('click', function() {
//   menuToggle.classList.toggle('open')
//   menu.classList.toggle('open')
// })


//     // fermeture du menu burger
// function toggleMenu () {  
//     const navbar = document.querySelector('.main-navigation')
//     const burger = document.querySelector('.menu-toggle')
    
//     burger.addEventListener('click', () => {    
//       navbar.classList.toggle('open-nav')
//     })
//   }
// //   $('.menu-toggle').on('click', function() {
// //     $(this).parent().closest('.navbar-links').hide();
// // });
