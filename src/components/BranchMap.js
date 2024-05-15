import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./BranchMap.css";
import data from "../assets/data/data.json";

function BranchMap() {
  const center = useMemo(() => ({ lat: 25.2422127, lng: 55.2846505 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [selectedBranch, setSelectedBranch] = useState(null);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      {data?.branches?.map((branch) => (
        <Marker
          key={branch.id}
          position={{
            lat: parseFloat(branch.lat),
            lng: parseFloat(branch.lng),
          }}
          onClick={() => {
            setSelectedBranch(branch);
          }}
        />
      ))}

      {selectedBranch && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedBranch.lat),
            lng: parseFloat(selectedBranch.lng),
          }}
          onCloseClick={() => {
            setSelectedBranch(null);
          }}
        >
          <div>{selectedBranch.name}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default BranchMap;
