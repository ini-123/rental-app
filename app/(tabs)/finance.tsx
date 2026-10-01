import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../constants/colors';

export default function FinanceScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Finance</Text>

        <Text style={styles.subtitle}>
          Manage your payments and transactions
        </Text>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>

          <Text style={styles.balance}>₦120,000</Text>

          <Pressable style={styles.addButton}>
            <Ionicons name="add" size={16} color={COLORS.primary} />

            <Text style={styles.addText}>Add Payment Method</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        <Transaction
          title="Canon EOS R6 Rental"
          date="Apr 28, 2025"
          amount="-₦45,000"
        />

        <Transaction
          title="Payment Received"
          date="Apr 25, 2025"
          amount="+₦80,000"
        />
      </ScrollView>
    </View>
  );
}

function Transaction({
  title,
  date,
  amount,
}: {
  title: string;
  date: string;
  amount: string;
}) {
  return (
    <View style={styles.transaction}>
      <View style={styles.transactionIcon}>
        <Ionicons name="card-outline" size={18} color={COLORS.primary} />
      </View>

      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>{title}</Text>

        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
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

  balanceCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 20,
    marginTop: 22,
  },

  balanceLabel: {
    color: '#DCE8F3',
    fontSize: 12,
  },

  balance: {
    color: COLORS.white,
    fontSize: 29,
    fontWeight: '700',
    marginTop: 8,
  },

  addButton: {
    backgroundColor: COLORS.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  addText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 5,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 28,
    marginBottom: 12,
  },

  transaction: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  transactionIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F1F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  transactionInfo: {
    flex: 1,
    marginLeft: 10,
  },

  transactionTitle: {
    fontSize: 12,
    fontWeight: '600',
  },

  date: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  amount: {
    fontSize: 11,
    fontWeight: '700',
  },
});
