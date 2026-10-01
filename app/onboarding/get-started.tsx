import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import { COLORS } from '../../constants/colors';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useOnboardingStore } from '../../store/onboardingStore';

export default function GetStartedScreen() {
  const { completeOnboarding } = useOnboardingStore();

  const handleGetStarted = async () => {
    await completeOnboarding();

    router.replace('/(auth)/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.visual}>
        <View style={styles.placeholder}>
          <Text style={styles.logo}>RentHub</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Everything you need to rent</Text>

        <Text style={styles.description}>
          Find equipment, make bookings, and keep track of your rentals in one
          convenient place.
        </Text>

        <PrimaryButton title="Get Started" onPress={handleGetStarted} />
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
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: '900',
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
