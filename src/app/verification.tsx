import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthLayout } from '../components/AuthLayout';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme';

export default function Verification() {
  const [phone, setPhone] = useState('');

  return (
    <AuthLayout title="Verification">
      <StatusBar style="light" />
      <Text style={styles.label}>Enter your mobile number</Text>
      <View style={styles.inputRow}>
        <Text style={styles.prefix}>+252</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(t) => setPhone(t.replace(/\D/g, ''))}
          keyboardType="phone-pad"
          maxLength={10}
          autoFocus
          accessibilityLabel="Mobile number"
        />
      </View>
      <PrimaryButton
        title="Continue"
        disabled={phone.length < 7}
        onPress={() => router.push('/verification-code')}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 18, color: colors.text, marginLeft: 10, marginBottom: 14 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  prefix: { fontSize: 18, color: colors.muted, marginRight: 8 },
  input: { flex: 1, fontSize: 18, height: '100%', color: colors.text },
});
