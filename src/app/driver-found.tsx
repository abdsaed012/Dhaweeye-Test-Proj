import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MapBackground, PICKUP } from '../components/MapBackground';
import { colors } from '../theme';

// Mock driver; replace with real data from your backend.
const DRIVER = {
  name: 'Abdulahi Warsame',
  car: 'Probox',
  location: { latitude: PICKUP.latitude + 0.008, longitude: PICKUP.longitude - 0.006 },
};

export default function DriverFound() {
  const insets = useSafeAreaInsets();
  const { eta } = useLocalSearchParams<{ eta?: string }>();

  return (
    <View style={styles.root}>
      <MapBackground driver={DRIVER.location} />
      <View style={[styles.card, { paddingBottom: insets.bottom + 28 }]}>
        <MaterialCommunityIcons name="taxi" size={28} color={colors.text} />
        <View style={styles.info}>
          <Text style={styles.text}>{DRIVER.name}</Text>
          <Text style={styles.text}>{DRIVER.car}</Text>
        </View>
        {eta ? <Text style={styles.text}>{eta}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#555',
    paddingTop: 26,
    paddingHorizontal: 26,
  },
  info: { flex: 1, marginLeft: 22 },
  text: { fontSize: 16, color: colors.text, lineHeight: 24 },
});
