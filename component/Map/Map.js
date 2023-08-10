import "leaflet/dist/leaflet.css";
import style from "../../styles/Home.module.css"
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";

function Map() {
    const MapEvents = () => {
        useMapEvents({
            click(e) {
                // setState your coords here
                // coords exist in "e.latlng.lat" and "e.latlng.lng"
                console.log(e.latlng.lat);
                console.log(e.latlng.lng);
            },
        });
        return false;
    }
    return(

       <MapContainer className={style.map} center={[52.505, -0.09]} zoom={13} scrollWheelZoom={true}>
           <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           />
       </MapContainer>
    )
}

export default Map