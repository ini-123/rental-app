import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { COLORS } from '../../constants/colors';

const recommendedEquipment = [
  {
    id: '1',
    name: 'Canon EOS R6',
    category: 'Camera',
    location: 'Lagos, Mainland',
    price: '₦45,000/day',
  },
  {
    id: '2',
    name: 'Godox SL60W Light',
    category: 'Lighting',
    location: 'Lagos, Mainland',
    price: '₦18,000/day',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Welcome back</Text>

            <Text style={styles.userName}>Setuntun</Text>
          </View>

          <Pressable style={styles.notificationButton}>
            <Ionicons
              name="notifications-outline"
              size={21}
              color={COLORS.text}
            />
          </Pressable>
        </View>

        {/* Location */}
        <Pressable style={styles.locationContainer}>
          <Ionicons name="location-outline" size={18} color={COLORS.primary} />

          <View>
            <Text style={styles.locationLabel}>Your location</Text>

            <Text style={styles.location}>Lagos, Nigeria</Text>
          </View>

          <Ionicons
            name="chevron-down"
            size={17}
            color={COLORS.textSecondary}
            style={styles.locationArrow}
          />
        </Pressable>

        {/* Search */}
        <Pressable
          style={styles.searchBox}
          onPress={() => router.push('/(tabs)/explore')}
        >
          <Ionicons
            name="search-outline"
            size={20}
            color={COLORS.textSecondary}
          />

          <Text style={styles.searchText}>Search equipment</Text>

          <Ionicons
            name="options-outline"
            size={20}
            color={COLORS.textSecondary}
          />
        </Pressable>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Rent what you need</Text>

            <Text style={styles.bannerText}>
              Find quality equipment from trusted renters near you.
            </Text>

            <Pressable
              style={styles.bannerButton}
              onPress={() => router.push('/(tabs)/explore')}
            >
              <Text style={styles.bannerButtonText}>Explore Equipment</Text>
            </Pressable>
          </View>

          <View style={styles.bannerCircle}>
            <Ionicons name="construct-outline" size={45} color={COLORS.white} />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>

          <Pressable onPress={() => router.push('/(tabs)/explore')}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          <Category icon="camera-outline" title="Cameras" />

          <Category icon="bulb-outline" title="Lighting" />

          <Category icon="construct-outline" title="Tools" />

          <Category icon="car-outline" title="Vehicles" />
        </ScrollView>

        {/* Recommended */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>

          <Pressable onPress={() => router.push('/(tabs)/explore')}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        {recommendedEquipment.map((item) => (
          <EquipmentCard
  key={item.id}
  id={item.id}
  name={item.name}
  category={item.category}
  location={item.location}
  price={item.price}
/>
        ))}
      </ScrollView>
    </View>
  );
}

function Category({
  icon,
  title,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}) {
  return (
    <Pressable style={styles.category}>
      <View style={styles.categoryIcon}>
        <Ionicons name={icon} size={23} color={COLORS.primary} />
      </View>

      <Text style={styles.categoryText}>{title}</Text>
    </Pressable>
  );
}


function EquipmentCard({
  id,
  name,
  category,
  location,
  price,
}: {
  id: string;
  name: string;
  category: string;
  location: string;
  price: string;
}) {
  return (
    <Pressable
      style={styles.equipmentCard}
      onPress={() =>
        router.push({
          pathname: '/booking/equipment',
          params: { id },
        })
      }
    >
      <View style={styles.equipmentImage}>
        <Ionicons
          name="image-outline"
          size={30}
          color="#AAAAAA"
        />
      </View>

      <View style={styles.equipmentInfo}>
        <View style={styles.equipmentTop}>
          <View style={styles.equipmentNameContainer}>
            <Text style={styles.equipmentName}>{name}</Text>

            <Text style={styles.equipmentCategory}>
              {category}
            </Text>
          </View>

          <Pressable>
            <Ionicons
              name="heart-outline"
              size={20}
              color={COLORS.textSecondary}
            />
          </Pressable>
        </View>

        <View style={styles.equipmentBottom}>
          <View style={styles.locationRow}>
            <Ionicons
              name="location-outline"
              size={13}
              color={COLORS.textSecondary}
            />

            <Text style={styles.equipmentLocation}>
              {location}
            </Text>
          </View>

          <Text style={styles.price}>{price}</Text>
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
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  userName: {
    fontSize: 23,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 3,
  },

  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },

  locationLabel: {
    fontSize: 11,
    color: COLORS.lightText,
  },

  location: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 2,
  },

  locationArrow: {
    marginLeft: 5,
  },

  searchBox: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginTop: 18,
  },

  searchText: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.lightText,
    fontSize: 14,
  },

  banner: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    minHeight: 170,
    padding: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  bannerContent: {
    flex: 1,
  },

  bannerTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '700',
  },

  bannerText: {
    color: '#DCE8F3',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 7,
    maxWidth: 220,
  },

  bannerButton: {
    backgroundColor: COLORS.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 8,
    marginTop: 15,
  },

  bannerButtonText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: '700',
  },

  bannerCircle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },

  seeAll: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  categoryList: {
    gap: 12,
  },

  category: {
    alignItems: 'center',
    width: 75,
  },

  categoryIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#F1F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryText: {
    fontSize: 11,
    color: COLORS.text,
    marginTop: 7,
  },

  equipmentCard: {
    borderWidth: 1,
    borderColor: '#EDE5D8',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: COLORS.white,
  },

  equipmentImage: {
    width: 75,
    height: 75,
    borderRadius: 7,
    backgroundColor: COLORS.imagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  equipmentInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  equipmentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  equipmentNameContainer: {
    flex: 1,
  },

  equipmentName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },

  equipmentCategory: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  equipmentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  equipmentLocation: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginLeft: 3,
  },

  price: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.text,
  },
});
