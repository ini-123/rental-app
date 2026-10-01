import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { COLORS } from '../../constants/colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>

          <Pressable onPress={() => router.push('/profile/settings')}>
            <Ionicons name="settings-outline" size={20} color={COLORS.text} />
          </Pressable>
        </View>

        {/* Profile */}
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>

          <Text style={styles.name}>Setuntun Isola</Text>

          <Text style={styles.email}>setuntun@example.com</Text>

          <Text style={styles.phone}>+234 901 234 5678</Text>
        </View>

        {/* Edit */}
        <Pressable
          style={styles.editButton}
          onPress={() => router.push('/profile/edit')}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>

        {/* Stats */}
        <View style={styles.stats}>
          <Stat value="3" label="Active Rentals" />

          <Stat value="7" label="Completed Rentals" />

          <Stat value="4.8" label="My Rating" />
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <ProfileMenu
            icon="briefcase-outline"
            title="My Rentals"
            onPress={() => router.push('/(tabs)/rentals')}
          />

          <ProfileMenu
            icon="star-outline"
            title="My Reviews"
            onPress={() => router.push('/profile/reviews')}
          />

          <ProfileMenu
            icon="people-outline"
            title="Account & Settings"
            onPress={() => router.push('/profile/settings')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>

      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ProfileMenu({
  icon,
  title,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={16} color={COLORS.text} />

        <Text style={styles.menuText}>{title}</Text>
      </View>

      <Ionicons name="chevron-forward" size={16} color={COLORS.textSecondary} />
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

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  profile: {
    alignItems: 'center',
    marginTop: 18,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: '700',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 10,
  },

  email: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  phone: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  editButton: {
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  editButtonText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '600',
  },

  stats: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    marginTop: 15,
    minHeight: 55,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
  },

  statValue: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text,
  },

  statLabel: {
    fontSize: 8,
    color: COLORS.textSecondary,
    marginTop: 3,
    textAlign: 'center',
  },

  menu: {
    marginTop: 20,
  },

  menuItem: {
    height: 43,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    marginBottom: 9,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 11,
    color: COLORS.text,
    marginLeft: 10,
  },
});
