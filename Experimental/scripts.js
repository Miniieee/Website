document.getElementById('showPicturesBtn').addEventListener('click', function() {
    const picturesSection = document.getElementById('picturesSection');
    picturesSection.style.display = 'block';
  });

function showGameInfo(gameNumber) {
    var line = document.getElementById("game-info-line");
    var text = document.getElementById("game-info-text");
  
    line.style.display = "block";
    text.style.display = "block";
    text.textContent = "This is game number " + gameNumber;
  }

  function togglePortfolio() {
    var picturesSection = document.getElementById("picturesSection");
    var gameInfoLine = document.getElementById("game-info-line");
    var gameInfoText = document.getElementById("game-info-text");
    hideSections();
    
    if (picturesSection.style.display === "none") {
      picturesSection.style.display = "block";
    }
  }
  
  function toggleResume() {
    var resumeSection = document.getElementById("resumeSection");
    hideSections();
  
    if (resumeSection.style.display === "none") {
      resumeSection.style.display = "block";
    }
  }
  
  function toggleAbout() {
    var aboutSection = document.getElementById("aboutSection");
    hideSections();
  
    if (aboutSection.style.display === "none") {
      aboutSection.style.display = "block";
    }
  }
  
  function hideSections() {
    var sections = [document.getElementById("picturesSection"), document.getElementById("aboutSection"), document.getElementById("resumeSection")];
    var gameInfoLine = document.getElementById("game-info-line");
    var gameInfoText = document.getElementById("game-info-text");
  
    sections.forEach(function(section) {
      section.style.display = "none";
    });
  
    gameInfoLine.style.display = "none";
    gameInfoText.style.display = "none";
  }

  function loadGame(gameNumber) {
    hideSections();
    var gameContent = document.getElementById("gameContent");
    gameContent.style.display = "block";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        gameContent.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "game" + gameNumber + ".html", true);
    xhttp.send();
  }
  
  // Update the hideSections function to hide the gameContent div
  function hideSections() {
    var sections = [
      document.getElementById("picturesSection"),
      document.getElementById("aboutSection"),
      document.getElementById("resumeSection"),
      document.getElementById("gameContent"),
    ];
  
    sections.forEach(function(section) {
      section.style.display = "none";
    });
  }
  
  
    