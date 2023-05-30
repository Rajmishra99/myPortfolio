// <!-- Dark mode -->
        // Check if the user has a preferred color scheme stored
        const isDarkMode = localStorage.getItem('darkMode');
        
        // Set the initial color scheme based on the user's preference
        if (isDarkMode === 'true') {
          document.body.classList.add('dark-mode');
        }
        
        // Toggle the dark mode when the button is clicked
        const toggleButton = document.getElementById('dark-mode-toggle');
        toggleButton.addEventListener('click', function () {
          // Toggle the dark mode class on the body element
          document.body.classList.toggle('dark-mode');
        
          // Store the user's preference in local storage
          if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
          } else {
            localStorage.setItem('darkMode', 'false');
          }
        });


// <!-- Background sound -->
        var buttons = document.querySelectorAll('#my-button');
        var sound = document.getElementById('button-sound');
        
        // Iterate through all the buttons and attach click event listeners
        buttons.forEach(function(button) {
          button.addEventListener('click', function() {
            sound.play();
          });
        });
     


// dynamic intro
        var typeData = new Typed(".role", {
            strings: [
                "Full Stack Developer",
                "React Developer",
                "FrontEnd Developer",
                "JavaScript Developer",
                "Java Developer",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });



// <!-- navigation bar -->
        const toggleButton1 = document.getElementById('nav-toggle');
        const navLinks = document.getElementById('nav-links');
        
        toggleButton1.addEventListener("click", () => {
        navLinks.classList.toggle('active');
        })