import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import {useEffect} from "react";
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min';


const MapLeaflet = () => {
    useEffect(()=> {

        document.getElementById('contact-map').innerHTML = "<div id='map' style='height:500px'></div>"
        var map = L.map('map').setView([51.505, -0.09], 13);

      var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09],{
                icon: L.icon(
                    {
                        popupAnchor : [12, 6],
                        iconUrl : "./map/mapmarker.png"
                    }
                )
            },

            ).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
            L.control.locate().addTo(map);


    }, [])


    return(
        <div id="contact-map"></div>
    )

}

export default MapLeaflet