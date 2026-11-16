import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthLayout } from '../components/AuthLayout';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme';

const LENGTH = 4;

export default function VerificationCode() {
  const { phone } = useLocalSearchParams<{ phone?: string }>();
  const [digits, setDigits] = useState<string[]>(Array(LENGTH).fill(''));
  const inputs = useRef<(React.ComponentRef<typeof TextInput> | null)[]>([]);

  const setDigit = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    setDigits((prev) => prev.map((d, i) => (i === index ? digit : d)));
    if (digit && index < LENGTH - 1) inputs.current[index + 1]?.focus();
  };

  return (
    <AuthLayout title="Verification Code">
      <StatusBar style="light" />
      <Text style={styles.label}>Enter Verification Code</Text>
      {phone ? <Text style={styles.hint}>Sent to +252 {phone}</Text> : null}
      <View style={styles.boxes}>
        {digits.map((digit, i) => (
          <TextInput
            key={i}
            ref={(el) => {
              inputs.current[i] = el;
            }}
            style={styles.box}
            value={digit}
            onChangeText={(t) => setDigit(i, t)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && !digit && i > 0) {
                inputs.current[i - 1]?.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={i === 0}
            accessibilityLabel={`Digit ${i + 1}`}
          />
        ))}
      </View>
      <PrimaryButton
        title="Continue"
        disabled={digits.some((d) => !d)}
        onPress={() => {
          // Demo only: any 4-digit code is accepted.
          router.dismissAll();
          router.replace('/home');
        }}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 18, color: colors.text, marginLeft: 30, marginTop: 28 },
  hint: { fontSize: 14, color: colors.muted, marginLeft: 30, marginTop: 4 },
  boxes: { flexDirection: 'row', gap: 10, marginLeft: 30, marginTop: 14, marginBottom: 26 },
  box: {
    width: 48,
    height: 48,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 22,
    color: colors.text,
  },
});
