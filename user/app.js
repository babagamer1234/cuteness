// CAMERA
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
  document.getElementById("video").srcObject = stream;
});

// LOCATION SEND TO FIREBASE
navigator.geolocation.watchPosition((pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  document.getElementById("status").innerText =
    `Lat: ${lat}, Lng: ${lng}`;

  firebase.database().ref("users/user1").set({
    location: {
      latitude: lat,
      longitude: lng
    },
    meta: {
      online: true,
      lastSeen: Date.now()
    }
  });

});
