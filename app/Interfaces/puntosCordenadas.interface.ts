export interface PuntoGeograficoInterface {
  origen: {
    lat: number;
    lng: number;
    nombre?: string;
  };
  destino: {
    lat: number;
    lng: number;
    nombre?: string;
  };
}