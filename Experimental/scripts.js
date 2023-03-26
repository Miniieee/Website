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
  
  
    