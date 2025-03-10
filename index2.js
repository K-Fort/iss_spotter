const fetchMyIP = require('./iss_promised');
const nextISSTimesForMyLocation = require('./iss_promised');

fetchMyIP()
  .then((ip) => fetchCoordsByIP(ip))
  .then((coords) => fetchISSFlyOverTimes(coords))
  .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });