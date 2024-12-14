import React, { useEffect, useRef } from 'react';
import 'ol/ol.css'; 
import { Map as OLMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const Map = () => {
  const mapRef = useRef(); 
  const mapInstance = useRef(null); 

  useEffect(() => {
    mapInstance.current = new OLMap({
      target: mapRef.current, 
      layers: [
        new TileLayer({
          source: new OSM(), 
        }),
      ],
      view: new View({
        center: [0, 0], 
        zoom: 2,
      }),
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(null);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '500px', 
      }}
    ></div>
  );
};

export default Map;
