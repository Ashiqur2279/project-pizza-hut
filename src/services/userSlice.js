//get the user position or location
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//fetch the user location data
async function fetchAddress() {
  //get the user geolocation position
  const positionObj = await getPosition();

  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  //use a reverse geocoding API to get a description of the user's address, so we can display it the order form and the user can correction it if wrong.

  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  //return an object with the data we are interested in

  return { position, address };
}
