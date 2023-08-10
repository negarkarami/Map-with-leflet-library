import {useMapEvents} from "react-leaflet";

function MyComponent() {
    const map = useMapEvents({
        dragend: (e) => {
            console.log("mapCenter", e.target.getCenter());
            console.log("map bounds", e.target.getBounds());
        }
    });
    return null;
}

export default MyComponent