import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { COLORS } from '../../constants/colors';

const equipment = [
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
  {
    id: '3',
    name: 'Power Generator',
    category: 'Generator',
    location: 'Ikeja, Lagos',
    price: '₦25,000/day',
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState('');

  const filtered = equipment.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>

        <Text style={styles.subtitle}>Find equipment available near you</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={19}
          color={COLORS.textSecondary}
        />

        <TextInput
          style={styles.input}
          placeholder="Search equipment"
          placeholderTextColor={COLORS.lightText}
          value={search}
          onChangeText={setSearch}
        />

        <Pressable>
          <Ionicons name="options-outline" size={20} color={COLORS.text} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.nearbyTitle}>Nearby Equipment</Text>

        {filtered.map((item) => (
          <Pressable key={item.id} style={styles.card}>
            <View style={styles.image}>
              <Ionicons name="image-outline" size={28} color="#AAAAAA" />
            </View>

            <View style={styles.info}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>

                  <Text style={styles.category}>{item.category}</Text>
                </View>

                <Ionicons
                  name="heart-outline"
                  size={19}
                  color={COLORS.textSecondary}
                />
              </View>

              <View style={styles.bottom}>
                <View style={styles.location}>
                  <Ionicons
                    name="location-outline"
                    size={12}
                    color={COLORS.textSecondary}
                  />

                  <Text style={styles.locationText}>{item.location}</Text>
                </View>

                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },

  subtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 5,
  },

  searchContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9,
    marginHorizontal: 20,
    marginTop: 18,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 13,
    marginLeft: 9,
    color: COLORS.text,
  },

  list: {
    padding: 20,
    paddingBottom: 30,
  },

  nearbyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 13,
  },

  card: {
    borderWidth: 1,
    borderColor: '#EDE5D8',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 12,
  },

  image: {
    width: 85,
    height: 85,
    borderRadius: 7,
    backgroundColor: COLORS.imagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
  },

  name: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },

  category: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  bottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  locationText: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginLeft: 3,
  },

  price: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.text,
  },
});
