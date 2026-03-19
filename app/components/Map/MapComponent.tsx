"use client";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import { useEffect, useRef } from "react";
import { PuntoGeograficoInterface } from "@/Interfaces/puntosCordenadas.interface";

// Fix para iconos
if (typeof window !== "undefined") {
  const DefaultIcon = L.Icon.Default.prototype as L.Icon.Default & {
    _getIconUrl?: string;
  };
  delete DefaultIcon._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
}

type Props = {
  puntos: PuntoGeograficoInterface;
};

function Routing({ puntos }: Props) {
  const map = useMap();
  const routingRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(puntos.origen.lat, puntos.origen.lng),
        L.latLng(puntos.destino.lat, puntos.destino.lng),
      ],
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      containerClassName: "hidden",
      lineOptions: {
        extendToWaypoints: true,
        missingRouteTolerance: 0,
        // Azul fuerte para resaltar sobre el mapa claro
        styles: [{ color: "#1d4ed8", weight: 6, opacity: 0.85 }],
      },
    });

    try {
      routingControl.addTo(map);
      routingRef.current = routingControl;
    } catch (e) {
      console.warn("Error en routing:", e);
    }

    return () => {
      if (routingRef.current && map) {
        try {
          routingRef.current.setWaypoints([]);
          map.removeControl(routingRef.current);
        } catch (e) {
          /* Silenciar error de limpieza */
        } finally {
          routingRef.current = null;
        }
      }
    };
  }, [
    map,
    puntos.origen.lat,
    puntos.origen.lng,
    puntos.destino.lat,
    puntos.destino.lng,
  ]);

  return null;
}

export default function MapComponent({ puntos }: Props) {
  const position: [number, number] = [puntos.origen.lat, puntos.origen.lng];

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Estilo del mapa*/}
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <Routing puntos={puntos} />
      </MapContainer>
    </div>
  );
}
