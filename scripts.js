document.getElementById('showPicturesBtn').addEventListener('click', function() {
    //const picturesSection = document.getElementById('picturesSection');
    //picturesSection.style.display = 'block';
  });

  function showGameInfo(gameNumber) {
    //var gameInfoLine = document.getElementById("game-info-line");
  
    //gameInfoLine.style.display = "block";
    fetchInfoGame(gameNumber);
  }

  function fetchInfoGame(gameNumber) {
    var gameInfo = document.getElementById("game-info");
  
    fetch(`game${gameNumber}.html`)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Failed to fetch game content");
        }
      })
      .then(content => {
        gameInfo.innerHTML = content;
      })
      .catch(error => {
        console.error("Error fetching game content:", error);
      });
  }

  function fetchInfo(buttonName) {
    var divInfo = document.getElementById("info");
    console.log(buttonName)
    fetch(`game${buttonName}.html`)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Failed to fetch game content");
        }
      })
      .then(content => {
        divInfo.innerHTML = content;
      })
      .catch(error => {
        console.error("Error fetching game content:", error);
      });
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

  function showPictures() {
    var picturesSection = document.getElementById("picturesSection");
    if (picturesSection.style.display === "none") {
      hideSections();
      picturesSection.style.display = "block";
    } else {
      picturesSection.style.display = "none";
    }
  }
  
  function hideSections() {
    var sections = [
      document.getElementById("picturesSection"),
      document.getElementById("aboutSection"),
      document.getElementById("resumeSection"),
      document.getElementById("gameContent"),
    ];
  
    sections.forEach(function (section) {
      section.style.display = "none";
    });
  }

  // JavaScript for YouTube video slider with navigation arrows
var currentSlide = 0;
var maxSlides = 0;

window.onload = function() {
  fetchYouTubeVideos();
};

function fetchYouTubeVideos() {
  // Fetch YouTube videos dynamically using YouTube Data API or any other method
  // For demonstration, let's assume you have an array of video IDs
  var videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3'];
  maxSlides = videoIds.length;

  // Get the YouTube slider container
  var youtubeSlider = document.getElementById('youtubeSlider');

  // Loop through the video IDs and create iframe elements for each video
  videoIds.forEach(function(videoId) {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    iframe.width = '560';
    iframe.height = '315';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    youtubeSlider.appendChild(iframe);
  });

  // Show the first video initially
  showSlide(currentSlide);
}

function moveSlider(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = maxSlides - 1;
  } else if (currentSlide >= maxSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function showSlide(index) {
  var slides = document.querySelectorAll('.youtube-slider iframe');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

  
  
  
    