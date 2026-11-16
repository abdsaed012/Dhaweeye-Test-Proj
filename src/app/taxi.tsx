import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MapBackground } from '../components/MapBackground';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme';

const RIDES = [
  { id: 'near', name: 'Dhaweeye', eta: '1 Min' },
  { id: 'far', name: 'Dhaweeye', eta: '2 Min' },
];

export default function Taxi() {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(RIDES[0].id);

  return (
    <View style={styles.root}>
      <MapBackground />
      <View style={styles.sheetEdge}>
        <View style={[styles.sheet, { paddingBottom: insets.bottom + 20 }]}>
          {RIDES.map((ride) => (
            <Pressable
              key={ride.id}
              onPress={() => setSelected(ride.id)}
              accessibilityRole="radio"
              accessibilityState={{ selected: selected === ride.id }}
              style={[styles.ride, selected === ride.id && styles.rideSelected]}
            >
              <MaterialCommunityIcons name="taxi" size={28} color={colors.text} />
              <Text style={styles.rideName}>{ride.name}</Text>
              <Text style={styles.rideEta}>{ride.eta}</Text>
            </Pressable>
          ))}
          <PrimaryButton
            title="Request"
            onPress={() =>
              router.push({
                pathname: '/driver-found',
                params: { eta: RIDES.find((r) => r.id === selected)?.eta },
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end' },
  // Green band that peeks out above the white sheet.
  sheetEdge: {
    backgroundColor: colors.green,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 28,
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 36,
    paddingHorizontal: 2,
    gap: 18,
  },
  ride: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.optionBg,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  rideSelected: { backgroundColor: colors.greenLight },
  rideName: { flex: 1, fontSize: 16, color: colors.text, marginLeft: 16 },
  rideEta: { fontSize: 16, color: colors.text, marginRight: 40 },
});
