
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/colors';

export default function BookingReviewScreen() {
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            size={22}
            color={COLORS.text}
          />
        </Pressable>

        <Text style={styles.title}>Review Booking</Text>

        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Review your rental</Text>

        <Text style={styles.subtitle}>
          Check your rental details before continuing.
        </Text>

        <View style={styles.card}>
          <View style={styles.imagePlaceholder}>
            <Ionicons
              name="image-outline"
              size={32}
              color="#AAAAAA"
            />
          </View>

          <View style={styles.details}>
            <Text style={styles.equipmentName}>
              Equipment #{id}
            </Text>

            <Text style={styles.equipmentText}>
              Rental equipment
            </Text>
          </View>
        </View>

        <View style={styles.dateCard}>
          <View style={styles.dateRow}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="calendar-outline"
                size={19}
                color={COLORS.primary}
              />
            </View>

            <View>
              <Text style={styles.label}>Start Date</Text>
              <Text style={styles.value}>
                {formatDate(startDate)}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.dateRow}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="calendar-outline"
                size={19}
                color={COLORS.primary}
              />
            </View>

            <View>
              <Text style={styles.label}>End Date</Text>
              <Text style={styles.value}>
                {formatDate(endDate)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Booking Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Equipment</Text>
            <Text style={styles.summaryValue}>
              #{id}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Rental period</Text>
            <Text style={styles.summaryValue}>
              Selected dates
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.confirmButton}
         onPress={() =>
  router.push({
    pathname: '/booking/confirmation',
    params: {
      id,
      startDate,
      endDate,
    },
  })
}
        >
          <Text style={styles.confirmText}>
            Confirm Rental
          </Text>

          <Ionicons
            name="arrow-forward"
            size={19}
            color={COLORS.white}
          />
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

  header: {
    height: 90,
    paddingTop: 45,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },

  headerSpacer: {
    width: 40,
  },

  content: {
    padding: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 21,
    marginTop: 8,
  },

  card: {
    marginTop: 25,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imagePlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: COLORS.imagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  details: {
    marginLeft: 14,
    flex: 1,
  },

  equipmentName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },

  equipmentText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 5,
  },

  dateCard: {
    marginTop: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  label: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 14,
  },

  summaryCard: {
    marginTop: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },

  summaryTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  summaryLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  summaryValue: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },

  confirmButton: {
    height: 52,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 25,
  },

  confirmText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
