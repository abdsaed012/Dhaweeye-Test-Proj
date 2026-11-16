# Dhaweeye (demo)

A small Expo / React Native recreation of the Dhaweeye rider flow:

Splash → Verification (phone) → Verification Code → Home → Taxi (pick a ride) → Driver found

## Run

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (iOS / Android). `npx expo start --web` also works, but the map is a placeholder in the browser.

## Structure

- `src/app/` – one file per screen (Expo Router)
- `src/components/` – logo, button, auth layout, map
- `src/theme.ts` – colours

Everything is mock data: any 4-digit code is accepted and the driver is hard-coded.
