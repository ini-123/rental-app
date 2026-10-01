import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

import { COLORS } from '../../constants/colors';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useAuthStore } from '../../store/authStore';

export default function LoginScreen() {
  const { login } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Temporary local login.
    // This will be replaced with the backend API.
    const user = {
      id: '1',
      name: 'Test User',
      email,
    };

    const token = 'temporary-token';

    await login(user, token);

    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>RentHub</Text>

        <Text style={styles.title}>Welcome back</Text>

        <Text style={styles.subtitle}>
          Login to continue renting equipment.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={COLORS.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={COLORS.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable>
          <Text style={styles.forgot}>Forgot password?</Text>
        </Pressable>

        <PrimaryButton title="Login" onPress={handleLogin} />

        <Text style={styles.signupText}>
          Dont have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => router.push('/(auth)/signup')}
          >
            Sign up
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
    marginBottom: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.text,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 8,
  },

  form: {
    marginTop: 40,
  },

  label: {
    fontSize: 14,
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
    fontSize: 16,
    marginBottom: 18,
  },

  forgot: {
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'right',
    marginBottom: 24,
  },

  signupText: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginTop: 20,
  },

  signupLink: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
