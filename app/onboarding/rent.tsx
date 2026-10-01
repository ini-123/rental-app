import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import { COLORS } from '../../constants/colors';
import { PrimaryButton } from '../../components/PrimaryButton';

export default function RentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.visual}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Easy Rental</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Rent with ease</Text>

        <Text style={styles.description}>
          Choose your equipment, select your rental dates, and manage your
          bookings from one place.
        </Text>

        <PrimaryButton
          title="Continue"
          onPress={() => router.push('/onboarding/get-started')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    paddingTop: 60,
    paddingBottom: 35,
  },

  visual: {
    flex: 1,
    justifyContent: 'center',
  },

  placeholder: {
    height: 280,
    borderRadius: 28,
    backgroundColor: '#E8EEF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textSecondary,
    marginBottom: 25,
  },
});
