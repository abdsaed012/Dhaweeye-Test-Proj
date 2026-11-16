import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Mogadishu
export const PICKUP = { latitude: 2.0469, longitude: 45.3182 };

export function MapBackground({ driver }: { driver?: { latitude: number; longitude: number } }) {
  return (
    <MapView
      style={StyleSheet.absoluteFill}
      initialRegion={{ ...PICKUP, latitudeDelta: 0.06, longitudeDelta: 0.06 }}
    >
      <Marker coordinate={PICKUP} title="Pickup" />
      {driver && <Marker coordinate={driver} title="Driver" pinColor="green" />}
    </MapView>
  );
}
