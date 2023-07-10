import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import iconoVerde from "../assets/marker-verde.png"

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 40.45700734005109, lng: -3.7834404125036043 }), []);
    // const icon = {
    //     url: "https/.....", scaledSize: { width: 32, height: 32 }
    // }
    return (
        <GoogleMap zoom={14} center={center} mapContainerClassName="map-container" options={{ mapId: '74ae34bf23656ff' }}>
            <MarkerF position={center} icon={iconoVerde} />
        </GoogleMap>
    );
}