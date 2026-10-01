
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/colors';

export default function BookingConfirmationScreen() {
  const { id, startDate, endDate } =
    useLocalSearchParams<{
      id: string;
      startDate: string;
      endDate: string;
    }>();

  const formatDate = (value?: string) => {
    if (!value) {
      return 'Not selected';
    }

    return new Date(value).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const saveRental = async () => {
    try {
      const existingRentals =
        await AsyncStorage.getItem('rentals');

      const rentals = existingRentals
        ? JSON.parse(existingRentals)
        : [];

      const newRental = {
        id: Date.now().toString(),

        equipmentId: id,

        name: 'Canon EOS R6',

        dates: `${formatDate(startDate)} - ${formatDate(endDate)}`,

        price: '₦45,000',

        status: 'Active',

        startDate,

        endDate,
      };

      const updatedRentals = [
        ...rentals,
        newRental,
      ];

      await AsyncStorage.setItem(
        'rentals',
        JSON.stringify(updatedRentals)
      );

      router.replace('/(tabs)/rentals');
    } catch (error) {
      console.log('Error saving rental:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successCircle}>
          <Ionicons
            name="checkmark"
            size={42}
            color={COLORS.white}
          />
        </View>

        <Text style={styles.title}>
          Rental Confirmed!
        </Text>

        <Text style={styles.subtitle}>
          Your equipment rental has been successfully booked.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Rental Details
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>
              Equipment
            </Text>

            <Text style={styles.value}>
              #{id}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>
              Start Date
            </Text>

            <Text style={styles.value}>
              {formatDate(startDate)}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>
              End Date
            </Text>

            <Text style={styles.value}>
              {formatDate(endDate)}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>
              Status
            </Text>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                Confirmed
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          style={styles.rentalsButton}
          onPress={saveRental}
        >
          <Text style={styles.buttonText}>
            View My Rentals
          </Text>

          <Ionicons
            name="arrow-forward"
            size={19}
            color={COLORS.white}
          />
        </Pressable>

        <Pressable
          style={styles.homeButton}
          onPress={() =>
            router.replace('/(tabs)/home')
          }
        >
          <Text style={styles.homeButtonText}>
            Back to Home
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  successCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 8,
  },

  card: {
    marginTop: 30,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },

  label: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  value: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E7D32',
  },

  rentalsButton: {
    height: 52,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 25,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },

  homeButton: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: COLORS.white,
  },

  homeButtonText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '600',
  },
});