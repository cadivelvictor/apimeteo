var listeVilles = [
    {"ville":"saint-denis", "lat":"-20.888403375511267", "lon":"55.455257982139365"},
    {"ville":"saint-benoit", "lat":"-21.033488588778383", "lon":"55.71328718076884"},
    {"ville":"saint-pierre", "lat":"-21.338928499897772", "lon":"55.47191683033333"},
    {"ville":"saint-paul","lat":"-21.020292545037638", "lon":"55.335839018266626"}
];

var latitude;
var longitude;

function urlVille(lat,lon) {
    var url =  'https://api.openweathermap.org/data/2.5/weather?' +
        'lat=' + lat +
        '&lon=' + lon +
        '&appid=7f736b1c64ab4ee576dfd26442befeb1&units=metric&lang=fr';
    return(url);
}

function iconMeteo(icon) {
    urlIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
    return urlIcon;
}

function meteoVille(x,y) {
    var orders = $('#orders');
    orders.empty();
    $.ajax({
    type: 'GET',
    url: urlVille(x,y),
    success: function(data) {
            console.log(data);
            console.log(iconMeteo(data.weather['0'].icon));
            orders.append('<li>' + '<img src=' + iconMeteo(data.weather['0'].icon) + ' width=10%>'+ '</li>');
            orders.append('<li>Météo: '+ data.weather['0'].description + '</li>');
            orders.append('<li>Température: '+ data.main['temp'] + ' °C' + '</li>');
            orders.append('<li>Pression: '+ data.main['pressure'] + '</li>');
            orders.append('<li>Humidité: '+ data.main['humidity'] + '</li>');
        }
    });
}

function selectionVille() {
    //On récupère le nom de la ville sélectionnée dans la liste déroulante
    var valeurOption = document.getElementById('ville').value;

    switch (valeurOption) {
        case 'saint-denis':
            latitude = listeVilles[0].lat;
            longitude = listeVilles[0].lon;
            meteoVille(latitude,longitude);
            break;
        case 'saint-benoit':
            latitude = listeVilles[1].lat;
            longitude = listeVilles[1].lon;
            meteoVille(latitude,longitude);
            break;
        case 'saint-pierre':
            latitude = listeVilles[2].lat;
            longitude = listeVilles[2].lon;
            meteoVille(latitude,longitude);
            break;
        case 'saint-paul':
            latitude = listeVilles[3].lat;
            longitude = listeVilles[3].lon;
            meteoVille(latitude,longitude);
            break;
        default:
            var orders = $('#orders');
            orders.empty();
    }
}
