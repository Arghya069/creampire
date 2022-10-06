const menuBtn = document.querySelector('.menu-btn');
      const navbar = document.querySelector('.navbar ul');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
          if(!menuOpen) {
            menuBtn.classList.add('open');
            navbar.classList.add('open');
            menuOpen = true;
          } else {
            menuBtn.classList.remove('open');
            navbar.classList.remove('open');
            menuOpen = false;
          }
          document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",()=>{
            menuBtn.classList.remove('open');
            navbar.classList.remove('open');
            menuOpen = false;
          }))
        });