import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { COLORS } from '../../constants/colors';

type Tab = 'Active' | 'Upcoming' | 'Past';

const rentals = [
  {
    id: '1',
    name: 'Canon EOS R6',
    dates: 'Apr 26 – Apr 28, 2025',
    price: '₦45,000',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Canon EOS R6',
    dates: 'Apr 26 – Apr 28, 2025',
    price: '₦45,000',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Godox SL60W Light',
    dates: 'May 1 – May 3, 2025',
    price: '₦18,000',
    status: 'Past',
  },
];

export default function RentalsScreen() {
  const [selectedTab, setSelectedTab] = useState<Tab>('Active');

  const filteredRentals = rentals.filter((item) => item.status === selectedTab);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Rentals</Text>
      </View>

      <View style={styles.tabs}>
        {(['Active', 'Upcoming', 'Past'] as Tab[]).map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {filteredRentals.map((rental) => (
          <Pressable key={rental.id} style={styles.rentalCard}>
            <View style={styles.imagePlaceholder}>
              <Ionicons name="image-outline" size={23} color="#AAAAAA" />
            </View>

            <View style={styles.rentalInfo}>
              <Text style={styles.rentalName}>{rental.name}</Text>

              <Text style={styles.rentalDate}>{rental.dates}</Text>

              <View
                style={[
                  styles.status,
                  selectedTab === 'Active' && styles.activeStatus,
                  selectedTab === 'Past' && styles.pastStatus,
                ]}
              >
                <Text style={styles.statusText}>{rental.status}</Text>
              </View>
            </View>

            <Text style={styles.price}>{rental.price}</Text>
          </Pressable>
        ))}

        {filteredRentals.length === 0 && (
          <View style={styles.empty}>
            <Ionicons name="briefcase-outline" size={35} color="#AAAAAA" />

            <Text style={styles.emptyTitle}>
              No {selectedTab.toLowerCase()} rentals
            </Text>

            <Text style={styles.emptyText}>
              Your {selectedTab.toLowerCase()} rentals will appear here.
            </Text>
          </View>
        )}
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

  tabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    gap: 7,
  },

  tab: {
    flex: 1,
    height: 38,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  activeTab: {
    backgroundColor: COLORS.active,
    borderColor: COLORS.active,
  },

  tabText: {
    fontSize: 11,
    color: COLORS.text,
  },

  activeTabText: {
    color: COLORS.white,
    fontWeight: '600',
  },

  list: {
    padding: 20,
    paddingBottom: 30,
  },

  rentalCard: {
    borderWidth: 1,
    borderColor: '#EDE5D8',
    borderRadius: 10,
    padding: 10,
    minHeight: 95,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  imagePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 6,
    backgroundColor: COLORS.imagePlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rentalInfo: {
    flex: 1,
    marginLeft: 12,
  },

  rentalName: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },

  rentalDate: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  status: {
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: '#EEEEEE',
  },

  activeStatus: {
    backgroundColor: '#EEEEEE',
  },

  pastStatus: {
    backgroundColor: '#EEEEEE',
  },

  statusText: {
    fontSize: 8,
    color: COLORS.textSecondary,
  },

  price: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.text,
  },

  empty: {
    alignItems: 'center',
    paddingTop: 100,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    color: COLORS.text,
  },

  emptyText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 5,
  },
});
