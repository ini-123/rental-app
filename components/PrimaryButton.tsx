import { Pressable, Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';

type Props = {
  title: string;
  onPress: () => void;
};

export function PrimaryButton({ title, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.8,
  },

  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
