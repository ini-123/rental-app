import { View, Text, TextInput, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

import { COLORS } from '../../constants/colors';
import { PrimaryButton } from '../../components/PrimaryButton';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    router.replace('/(auth)/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RentHub</Text>

      <Text style={styles.title}>Create account</Text>

      <Text style={styles.subtitle}>
        Create an account to start renting equipment.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Full name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <PrimaryButton title="Create Account" onPress={handleSignup} />

        <Text style={styles.login}>
          Already have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => router.replace('/(auth)/login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    paddingTop: 70,
  },

  logo: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 35,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.text,
  },

  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 16,
    marginTop: 8,
  },

  form: {
    marginTop: 35,
  },

  label: {
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },

  input: {
    height: 54,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 18,
  },

  login: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.textSecondary,
  },

  link: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
