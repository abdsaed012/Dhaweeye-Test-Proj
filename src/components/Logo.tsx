import { Image, StyleSheet, Text, View } from 'react-native';

const LOGO_GREEN = '#009345';
// The mark is 267x337 px.
const ASPECT = 267 / 337;

type Props = {
  /** Font size of the wordmark; the "D" mark scales with it. */
  size?: number;
  /** 'light' is white on green (splash), 'dark' is green on white (home). */
  variant?: 'light' | 'dark';
};

export function Logo({ size = 36, variant = 'light' }: Props) {
  const height = size * 1.25;
  return (
    <View style={styles.row} accessibilityRole="header" accessibilityLabel="Dhaweeye">
      <Image
        source={
          variant === 'light'
            ? require('../../assets/logo-white.png')
            : require('../../assets/logo-green.png')
        }
        style={{ height, width: height * ASPECT, marginRight: size * 0.06 }}
      />
      <Text
        style={{
          color: variant === 'light' ? '#FFFFFF' : LOGO_GREEN,
          fontSize: size,
          fontWeight: '700',
        }}
      >
        haweeye
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});
