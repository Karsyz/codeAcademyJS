const city = 'New York City'

function logCitySkyline() {
  let skyscraper = 'Empire State Building'

  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())


// let satellite = 'The Moon'

// let galaxy = 'The Milky Way'

// let stars = 'North Star'

function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log (callMyNightSky())




function logVisibleLightWaves() {
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
  }
  
  logVisibleLightWaves()
  
  console.log(lightWaves)  //  throws undefined error





  const satellite = 'The Moon';
  const galaxy = 'The Milky Way';
  let stars = 'North Star';
  
  const callMyNightSky = () => {
    stars = 'Sirius';  //  redefines stars
      return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
  };
  
  console.log(callMyNightSky());
  console.log(stars);  // shows redefined 
  



  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights'
      console.log(lightWaves) // will log what's inside the if block
    }
    
    console.log(lightWaves); // will log what's outside the if block
  };
  
  logVisibleLightWaves();