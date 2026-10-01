import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { COLORS } from '../../constants/colors';

const equipment = {
  id: '1',
  name: 'Canon EOS R6',
  category: 'Camera',
  location: 'Lagos, Mainland',
  price: 45000,
  description:
    'A professional full-frame mirrorless camera suitable for photography, events, and content creation.',
  owner: 'John',
  rating: '4.8',
  deposit: 20000,
};

export default function EquipmentDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={22}
              color={COLORS.text}
            />
          </Pressable>

          <Text style={styles.headerTitle}>Equipment Details</Text>

          <Pressable style={styles.iconButton}>
            <Ionicons
              name="heart-outline"
              size={22}
              color={COLORS.text}
            />
          </Pressable>
        </View>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Ionicons
            name="camera-outline"
            size={70}
            color="#AAAAAA"
          />
        </View>

        {/* Equipment information */}
        <View style={styles.titleRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{equipment.name}</Text>

            <Text style={styles.category}>
              {equipment.category}
            </Text>
          </View>

          <View style={styles.rating}>
            <Ionicons name="star" size={15} color="#F5A623" />
            <Text style={styles.ratingText}>{equipment.rating}</Text>
          </View>
        </View>

        {/* Location */}
        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={18}
            color={COLORS.primary}
          />

          <Text style={styles.location}>
            {equipment.location}
          </Text>
        </View>

        {/* Price */}
        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Rental price</Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>
              ₦{equipment.price.toLocaleString()}
            </Text>

            <Text style={styles.perDay}>/day</Text>
          </View>
        </View>

        {/* Owner */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipment owner</Text>

          <View style={styles.ownerCard}>
            <View style={styles.avatar}>
              <Ionicons
                name="person-outline"
                size={22}
                color={COLORS.primary}
              />
            </View>

            <View style={styles.ownerInfo}>
              <Text style={styles.ownerName}>
                {equipment.owner}
              </Text>

              <Text style={styles.ownerText}>
                Equipment owner
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={COLORS.textSecondary}
            />
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.description}>
            {equipment.description}
          </Text>
        </View>

        {/* Deposit */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Security deposit
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Refundable deposit
            </Text>

            <Text style={styles.infoValue}>
              ₦{equipment.deposit.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Rent button */}
        <Pressable
          style={styles.rentButton}
          onPress={() =>
            router.push({
              pathname: '/booking/select-dates',
              params: { id: String(id || equipment.id) },
            })
          }
        >
          <Text style={styles.rentButtonText}>
            Rent Equipment
          </Text>

          <Ionicons
            name="arrow-forward"
            size={19}
            color={COLORS.white}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
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

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    height: 230,
    borderRadius: 15,
    backgroundColor: COLORS.imagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
  },

  titleContainer: {
    flex: 1,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },

  category: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 10,
  },

  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  location: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 5,
  },

  priceSection: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  priceLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 3,
  },

  price: {
    fontSize: 21,
    fontWeight: '700',
    color: COLORS.text,
  },

  perDay: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 3,
  },

  section: {
    marginTop: 24,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },

  ownerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 12,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F1F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ownerInfo: {
    flex: 1,
    marginLeft: 10,
  },

  ownerName: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },

  ownerText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  description: {
    fontSize: 12,
    lineHeight: 19,
    color: COLORS.textSecondary,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
  },

  infoLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },

  infoValue: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },

  rentButton: {
    height: 52,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  rentButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.white,
  },
});