export default function (mapElem = document.getElementById('map')) {
    const durbanvilleLatLong = {lat: -33.8339603, lng: 18.6739144}
    const brackenfellLatLong = {lat: -33.8875038, lng: 18.7140832}


    var map = new google.maps.Map(mapElem, {
        zoom: 12,
        center: {
            lat: -33.8527984,lng: 18.6915371
        }
      });

      var marker = new google.maps.Marker({
        position: durbanvilleLatLong,
        map: map,
        title: 'Durbanville Class'
      });

      var marker = new google.maps.Marker({
        position: brackenfellLatLong,
        map: map,
        title: 'Brackenfell Class'
      });
}