import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import { COLORS } from '../../constants/colors';
import { PrimaryButton } from '../../components/PrimaryButton';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.visual}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Nearby Equipment</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Discover equipment nearby</Text>

        <Text style={styles.description}>
          Browse available equipment around your location and find what works
          for you.
        </Text>

        <PrimaryButton
          title="Next"
          onPress={() => router.push('/onboarding/rent')}
        />

        <Text
          style={styles.skip}
          onPress={() => router.push('/onboarding/get-started')}
        >
          Skip
        </Text>
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

  skip: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginTop: 18,
    fontWeight: '600',
  },
});
