import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';

import { COLORS } from '../../constants/colors';

type Equipment = {
  id: string;
  name: string;
  category: string;
  location: string;
  distance: string;
  price: string;
  rating: string;
  available: boolean;
};

const EQUIPMENT: Equipment[] = [
  {
    id: '1',
    name: 'Canon EOS R6',
    category: 'Camera',
    location: 'Lagos, Mainland',
    distance: '2.4 km',
    price: '₦45,000/day',
    rating: '4.8',
    available: true,
  },
  {
    id: '2',
    name: 'Godox SL60W',
    category: 'Lighting',
    location: 'Lagos, Mainland',
    distance: '3.1 km',
    price: '₦18,000/day',
    rating: '4.7',
    available: true,
  },
  {
    id: '3',
    name: 'Sony A7 III',
    category: 'Camera',
    location: 'Lagos Island',
    distance: '5.2 km',
    price: '₦40,000/day',
    rating: '4.9',
    available: true,
  },
  {
    id: '4',
    name: 'DJI Ronin-S',
    category: 'Camera',
    location: 'Yaba, Lagos',
    distance: '4.5 km',
    price: '₦25,000/day',
    rating: '4.6',
    available: true,
  },
  {
    id: '5',
    name: 'Rode Wireless GO',
    category: 'Audio',
    location: 'Surulere, Lagos',
    distance: '6.1 km',
    price: '₦12,000/day',
    rating: '4.8',
    available: false,
  },
  {
    id: '6',
    name: 'Manfrotto Tripod',
    category: 'Others',
    location: 'Ikeja, Lagos',
    distance: '8.3 km',
    price: '₦8,000/day',
    rating: '4.5',
    available: true,
  },
];

const CATEGORIES = [
  {
    name: 'All',
    icon: 'grid-outline' as keyof typeof Ionicons.glyphMap,
  },
  {
    name: 'Camera',
    icon: 'camera-outline' as keyof typeof Ionicons.glyphMap,
  },
  {
    name: 'Lighting',
    icon: 'bulb-outline' as keyof typeof Ionicons.glyphMap,
  },
  {
    name: 'Audio',
    icon: 'mic-outline' as keyof typeof Ionicons.glyphMap,
  },
  {
    name: 'Others',
    icon: 'cube-outline' as keyof typeof Ionicons.glyphMap,
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEquipment = useMemo(() => {
    return EQUIPMENT.filter((item) => {
      const categoryMatch =
        selectedCategory === 'All' || item.category === selectedCategory;

      const searchValue = search.toLowerCase().trim();

      const searchMatch =
        searchValue === '' ||
        item.name.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue) ||
        item.location.toLowerCase().includes(searchValue);

      return categoryMatch && searchMatch;
    });
  }, [search, selectedCategory]);

  const handleEquipmentPress = (item: Equipment) => {
    router.push({
      pathname: '/equipment/[id]',
      params: {
        id: item.id,
        name: item.name,
        category: item.category,
        location: item.location,
        price: item.price,
      },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallHeading}>Find Equipment</Text>

            <Text style={styles.heading}>Browse Nearby</Text>
          </View>

          <Pressable style={styles.locationButton}>
            <Ionicons
              name="location-outline"
              size={19}
              color={COLORS.primary}
            />
          </Pressable>
        </View>

        {/* LOCATION */}
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={16} color={COLORS.primary} />

          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>Current Location</Text>

            <Text style={styles.locationValue}>Lagos, Nigeria</Text>
          </View>

          <Ionicons
            name="chevron-down"
            size={15}
            color={COLORS.textSecondary}
          />
        </View>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color={COLORS.textSecondary}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search equipment..."
            placeholderTextColor={COLORS.textSecondary}
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <Pressable onPress={() => setSearch('')}>
              <Ionicons
                name="close-circle"
                size={19}
                color={COLORS.textSecondary}
              />
            </Pressable>
          )}
        </View>

        {/* CATEGORIES HEADER */}
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>

          <Text style={styles.itemCount}>{filteredEquipment.length} items</Text>
        </View>

        {/* CATEGORIES */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.name;

            return (
              <Pressable
                key={category.name}
                style={[
                  styles.categoryButton,
                  isSelected && styles.categoryButtonSelected,
                ]}
                onPress={() => setSelectedCategory(category.name)}
              >
                <Ionicons
                  name={category.icon}
                  size={17}
                  color={isSelected ? COLORS.white : COLORS.text}
                />

                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.categoryTextSelected,
                  ]}
                >
                  {category.name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* NEARBY EQUIPMENT HEADER */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Nearby Equipment</Text>

            <Text style={styles.sectionSubtitle}>
              Equipment available around you
            </Text>
          </View>

          <Pressable>
            <Text style={styles.filterText}>Filter</Text>
          </Pressable>
        </View>

        {/* EQUIPMENT */}
        <View style={styles.equipmentList}>
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((item) => (
              <EquipmentCard
                key={item.id}
                item={item}
                onPress={() => handleEquipmentPress(item)}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="search-outline"
                size={45}
                color={COLORS.textSecondary}
              />

              <Text style={styles.emptyTitle}>No equipment found</Text>

              <Text style={styles.emptyDescription}>
                Try searching for another equipment or category.
              </Text>

              <Pressable
                style={styles.clearButton}
                onPress={() => {
                  setSearch('');
                  setSelectedCategory('All');
                }}
              >
                <Text style={styles.clearButtonText}>Clear Search</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

function EquipmentCard({
  item,
  onPress,
}: {
  item: Equipment;
  onPress: () => void;
}) {
  const getIcon = () => {
    if (item.category === 'Camera') {
      return 'camera-outline';
    }

    if (item.category === 'Lighting') {
      return 'bulb-outline';
    }

    if (item.category === 'Audio') {
      return 'mic-outline';
    }

    return 'cube-outline';
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Ionicons name={getIcon()} size={40} color="#AAAAAA" />

        {/* AVAILABILITY */}
        <View
          style={[
            styles.availabilityBadge,
            item.available ? styles.availableBadge : styles.unavailableBadge,
          ]}
        >
          <View
            style={[
              styles.statusDot,
              item.available ? styles.availableDot : styles.unavailableDot,
            ]}
          />

          <Text
            style={[
              styles.availabilityText,
              item.available ? styles.availableText : styles.unavailableText,
            ]}
          >
            {item.available ? 'Available' : 'Unavailable'}
          </Text>
        </View>
      </View>

      {/* INFORMATION */}
      <View style={styles.cardInfo}>
        <View style={styles.cardTop}>
          <View style={styles.nameContainer}>
            <Text style={styles.equipmentName} numberOfLines={1}>
              {item.name}
            </Text>

            <Text style={styles.equipmentCategory}>{item.category}</Text>
          </View>

          <Pressable
            style={styles.favoriteButton}
            onPress={(event) => {
              event.stopPropagation();
            }}
          >
            <Ionicons
              name="heart-outline"
              size={19}
              color={COLORS.textSecondary}
            />
          </Pressable>
        </View>

        {/* LOCATION */}
        <View style={styles.cardLocation}>
          <Ionicons
            name="location-outline"
            size={14}
            color={COLORS.textSecondary}
          />

          <Text style={styles.cardLocationText} numberOfLines={1}>
            {item.location}
          </Text>

          <Text style={styles.distance}>• {item.distance}</Text>
        </View>

        {/* RATING / PRICE */}
        <View style={styles.cardBottom}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#F2B01E" />

            <Text style={styles.rating}>{item.rating}</Text>
          </View>

          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallHeading: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 3,
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },

  locationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* LOCATION */

  locationContainer: {
    height: 58,
    marginTop: 18,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationInfo: {
    flex: 1,
    marginLeft: 8,
  },

  locationLabel: {
    fontSize: 9,
    color: COLORS.textSecondary,
  },

  locationValue: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 2,
  },

  /* SEARCH */

  searchContainer: {
    height: 50,
    marginTop: 15,
    paddingHorizontal: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 9,
    fontSize: 12,
    color: COLORS.text,
  },

  /* CATEGORIES */

  categoryHeader: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
  },

  itemCount: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },

  categoryList: {
    paddingTop: 11,
    paddingBottom: 3,
    gap: 8,
  },

  categoryButton: {
    height: 38,
    paddingHorizontal: 13,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  categoryButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  categoryText: {
    fontSize: 10,
    color: COLORS.text,
    fontWeight: '500',
  },

  categoryTextSelected: {
    color: COLORS.white,
    fontWeight: '600',
  },

  /* SECTION */

  sectionHeader: {
    marginTop: 25,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionSubtitle: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  filterText: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: '600',
  },

  /* EQUIPMENT LIST */

  equipmentList: {
    gap: 12,
  },

  card: {
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
  },

  cardPressed: {
    opacity: 0.75,
  },

  /* EQUIPMENT IMAGE */

  imageContainer: {
    width: 105,
    height: 120,
    borderRadius: 9,
    backgroundColor: COLORS.imagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  availabilityBadge: {
    position: 'absolute',
    bottom: 7,
    left: 6,
    right: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  availableBadge: {
    backgroundColor: '#EAF6EF',
  },

  unavailableBadge: {
    backgroundColor: '#F1F1F1',
  },

  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginRight: 4,
  },

  availableDot: {
    backgroundColor: '#3A9D5D',
  },

  unavailableDot: {
    backgroundColor: '#999999',
  },

  availabilityText: {
    fontSize: 7,
    fontWeight: '600',
  },

  availableText: {
    color: '#3A9D5D',
  },

  unavailableText: {
    color: '#777777',
  },

  /* CARD INFORMATION */

  cardInfo: {
    flex: 1,
    paddingLeft: 12,
    paddingVertical: 3,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  nameContainer: {
    flex: 1,
    paddingRight: 5,
  },

  equipmentName: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
  },

  equipmentCategory: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  favoriteButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* CARD LOCATION */

  cardLocation: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardLocationText: {
    flexShrink: 1,
    fontSize: 9,
    color: COLORS.textSecondary,
    marginLeft: 3,
  },

  distance: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginLeft: 4,
  },

  /* CARD BOTTOM */

  cardBottom: {
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 4,
  },

  price: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text,
  },

  /* EMPTY STATE */

  emptyContainer: {
    minHeight: 260,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 12,
  },

  emptyDescription: {
    fontSize: 10,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 5,
  },

  clearButton: {
    marginTop: 15,
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },

  clearButtonText: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.white,
  },
});
