// Array of Slogans
const slogans = [
    "Healthy Crops, Happy Farmers!",
    "Your Trusted Farming Partner!",
    "Protect Your Fields, Ensure Your Future!",
    "Stay One Step Ahead of Crop Diseases!",
    "Expert Solutions for All Your Farming Needs!"
  ];
  
  let sloganIndex = 0;
  
  function rotateSlogans() {
    const sloganText = document.getElementById('slogan-text');
    
    // Update the slogan text
    sloganText.textContent = slogans[sloganIndex];
    
    // Increment the index to show the next slogan
    sloganIndex = (sloganIndex + 1) % slogans.length;
  }
  
  // Rotate slogans every 3 seconds
  setInterval(rotateSlogans, 3000);
  
  