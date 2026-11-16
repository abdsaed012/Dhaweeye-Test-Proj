import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

type Props = {
  /** Font size of the wordmark; the "D" badge scales with it. */
  size?: number;
  /** 'light' is white on green (splash), 'dark' is green on white (home). */
  variant?: 'light' | 'dark';
};

export function Logo({ size = 36, variant = 'light' }: Props) {
  const fg = variant === 'light' ? colors.white : colors.green;
  const bg = variant === 'light' ? colors.green : colors.white;
  const badge = size * 1.15;

  return (
    <View style={styles.row} accessibilityRole="header" accessibilityLabel="Dhaweeye">
      <View
        style={{
          width: badge * 0.85,
          height: badge,
          backgroundColor: fg,
          borderTopLeftRadius: badge * 0.12,
          borderBottomLeftRadius: badge * 0.12,
          borderTopRightRadius: badge * 0.5,
          borderBottomRightRadius: badge * 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: size * 0.08,
        }}
      >
        <MaterialCommunityIcons name="thumb-up" size={badge * 0.5} color={bg} />
      </View>
      <Text style={{ color: fg, fontSize: size, fontWeight: '700' }}>haweeye</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});
