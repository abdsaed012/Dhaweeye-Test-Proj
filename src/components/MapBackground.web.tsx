import { StyleSheet, View } from 'react-native';

// react-native-maps has no web implementation, so the browser gets an
// embedded OpenStreetMap instead.
export const PICKUP = { latitude: 2.0469, longitude: 45.3182 };

const SPAN = 0.03;

export function MapBackground({ driver }: { driver?: { latitude: number; longitude: number } }) {
  const pin = driver ?? PICKUP;
  const bbox = [
    PICKUP.longitude - SPAN,
    PICKUP.latitude - SPAN,
    PICKUP.longitude + SPAN,
    PICKUP.latitude + SPAN,
  ].join(',');
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${pin.latitude},${pin.longitude}`;

  return (
    <View style={StyleSheet.absoluteFill}>
      <iframe title="Map" src={src} style={{ border: 0, width: '100%', height: '100%' }} />
    </View>
  );
}
