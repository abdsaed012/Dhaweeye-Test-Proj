import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ComponentProps } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '../components/Logo';
import { colors } from '../theme';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const comingSoon = (name: string) => Alert.alert(name, 'Coming soon');

const SERVICES: { label: string; icon: IconName; color: string; onPress: () => void }[] = [
  { label: 'Taxi', icon: 'taxi', color: colors.text, onPress: () => router.push('/taxi') },
  { label: 'Suuq', icon: 'cart', color: colors.green, onPress: () => comingSoon('Suuq') },
  { label: 'Food', icon: 'silverware-fork-knife', color: colors.text, onPress: () => comingSoon('Food') },
  { label: 'Gas', icon: 'gas-cylinder', color: colors.green, onPress: () => comingSoon('Gas') },
];

const TABS: { label: string; icon: IconName }[] = [
  { label: 'Home', icon: 'home-outline' },
  { label: 'History', icon: 'history' },
  { label: 'My Cart', icon: 'shopping' },
  { label: 'Help', icon: 'headset' },
  { label: 'Profile', icon: 'account' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <View style={styles.topBar}>
          <Feather name="menu" size={26} color={colors.text} style={styles.menu} />
          <Logo size={22} variant="dark" />
        </View>

        <View style={styles.points}>
          <Text style={styles.pointsLabel}>Points Balance</Text>
          <Text style={styles.pointsValue}>17</Text>
        </View>

        <View style={styles.services}>
          <Text style={styles.servicesTitle}>services</Text>
          {SERVICES.map((s) => (
            <Pressable
              key={s.label}
              style={styles.service}
              onPress={s.onPress}
              accessibilityRole="button"
              accessibilityLabel={s.label}
            >
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name={s.icon} size={28} color={s.color} />
              </View>
              <Text style={styles.serviceLabel}>{s.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.tabBar}>
        {TABS.map((t, i) => (
          <View key={t.label} style={styles.tab}>
            <MaterialCommunityIcons
              name={t.icon}
              size={24}
              color={i === 0 ? colors.green : '#B5B5B5'}
            />
            <Text style={styles.tabLabel}>{t.label}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },
  topBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  menu: { marginRight: 10 },
  points: {
    backgroundColor: colors.cardBg,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 28,
  },
  pointsLabel: { fontSize: 14, color: colors.text },
  pointsValue: { fontSize: 14, fontWeight: '600', color: colors.text, marginTop: 2 },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 8,
  },
  servicesTitle: {
    position: 'absolute',
    top: -13,
    left: 24,
    backgroundColor: colors.white,
    paddingHorizontal: 6,
    fontSize: 18,
    color: colors.text,
  },
  service: { alignItems: 'center' },
  serviceIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceLabel: { fontSize: 13, color: colors.text, marginTop: 4 },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#8A8A8A',
    paddingTop: 8,
    paddingBottom: 6,
  },
  tab: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 12, color: colors.text, marginTop: 4 },
});
