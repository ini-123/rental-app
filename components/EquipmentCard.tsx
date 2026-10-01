import { View, Text, StyleSheet, Pressable } from 'react-native';

import { COLORS } from '../constants/colors';
import { Equipment } from '../types/equipment';

type Props = {
  equipment: Equipment;
  onPress: () => void;
};

export function EquipmentCard({ equipment, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.image}>
        <Text style={styles.imageText}>Equipment</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.name}>{equipment.name}</Text>

          <View
            style={[
              styles.status,
              {
                backgroundColor: equipment.available ? '#DCFCE7' : '#FEE2E2',
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color: equipment.available ? COLORS.success : COLORS.danger,
                },
              ]}
            >
              {equipment.available ? 'Available' : 'Unavailable'}
            </Text>
          </View>
        </View>

        <Text style={styles.category}>{equipment.category}</Text>

        <Text style={styles.location}>
          📍 {equipment.location} • {equipment.distance} km
        </Text>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>
            ₦{equipment.pricePerDay.toLocaleString()}
            <Text style={styles.perDay}> / day</Text>
          </Text>

          <Text style={styles.view}>View</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },

  image: {
    height: 180,
    backgroundColor: '#E8EEF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  content: {
    padding: 16,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },

  status: {
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },

  category: {
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  location: {
    color: COLORS.textSecondary,
    marginTop: 10,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  price: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '800',
  },

  perDay: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },

  view: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
