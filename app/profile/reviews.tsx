import { View, Text, StyleSheet } from 'react-native';

export default function Reviews() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
  },
});
