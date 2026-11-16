import { StyleSheet, Text, View } from 'react-native';

// react-native-maps has no web implementation, so the browser gets a placeholder.
export const PICKUP = { latitude: 2.0469, longitude: 45.3182 };

export function MapBackground(_props: { driver?: { latitude: number; longitude: number } }) {
  return (
    <View style={[StyleSheet.absoluteFill, styles.placeholder]}>
      <Text style={styles.text}>Map (shown on iOS / Android)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { backgroundColor: '#E8EDE4', alignItems: 'center', paddingTop: 160 },
  text: { color: '#7A8576' },
});
