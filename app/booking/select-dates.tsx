
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { COLORS } from '../../constants/colors';

type DateOption = {
  value: string;
  day: string;
  date: string;
};

export default function SelectDatesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [startDate, setStartDate] = useState<DateOption | null>(null);
  const [endDate, setEndDate] = useState<DateOption | null>(null);
  const [selecting, setSelecting] = useState<'start' | 'end'>('start');

  const dates = useMemo(() => {
    const options: DateOption[] = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + i);

      options.push({
        value: date.toISOString(),
        day: date.toLocaleDateString('en-US', {
          weekday: 'short',
        }),
        date: date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        }),
      });
    }

    return options;
  }, []);

  const handleDatePress = (date: DateOption) => {
    if (selecting === 'start') {
      setStartDate(date);
      setEndDate(null);
      setSelecting('end');
      return;
    }

    if (startDate && new Date(date.value) <= new Date(startDate.value)) {
      return;
    }

    setEndDate(date);
  };


const handleContinue = () => {
  if (!startDate || !endDate) {
    return;
  }

  router.push({
    pathname: '/booking/review',
    params: {
      id: id ?? '',
      startDate: startDate.value,
      endDate: endDate.value,
    },
  });
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            size={22}
            color={COLORS.text}
          />
        </Pressable>

        <Text style={styles.title}>Select Dates</Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading}>Choose your rental dates</Text>

        <Text style={styles.subtitle}>
          Select when you would like to rent this equipment.
        </Text>

        <Text style={styles.equipmentId}>
          Equipment ID: {id}
        </Text>

        <View style={styles.selectionContainer}>
          <Pressable
            style={[
              styles.dateBox,
              selecting === 'start' && styles.selectedDateBox,
            ]}
            onPress={() => setSelecting('start')}
          >
            <View>
              <Text style={styles.dateLabel}>Start Date</Text>

              <Text
                style={[
                  styles.dateValue,
                  !startDate && styles.placeholderText,
                ]}
              >
                {startDate
                  ? `${startDate.day}, ${startDate.date}`
                  : 'Select start date'}
              </Text>
            </View>

            <Ionicons
              name="calendar-outline"
              size={21}
              color={COLORS.primary}
            />
          </Pressable>

          <Pressable
            style={[
              styles.dateBox,
              selecting === 'end' && styles.selectedDateBox,
            ]}
            onPress={() => setSelecting('end')}
          >
            <View>
              <Text style={styles.dateLabel}>End Date</Text>

              <Text
                style={[
                  styles.dateValue,
                  !endDate && styles.placeholderText,
                ]}
              >
                {endDate
                  ? `${endDate.day}, ${endDate.date}`
                  : 'Select end date'}
              </Text>
            </View>

            <Ionicons
              name="calendar-outline"
              size={21}
              color={COLORS.primary}
            />
          </Pressable>
        </View>

        <Text style={styles.chooseText}>
          {selecting === 'start'
            ? 'Choose your start date'
            : 'Now choose your end date'}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
        >
          {dates.map((date) => {
            const isStart = startDate?.value === date.value;
            const isEnd = endDate?.value === date.value;

            const isBeforeStart =
              startDate &&
              new Date(date.value) <= new Date(startDate.value);

            return (
              <Pressable
                key={date.value}
                disabled={selecting === 'end' && !!isBeforeStart}
                onPress={() => handleDatePress(date)}
                style={[
                  styles.dateCard,
                  (isStart || isEnd) && styles.activeDateCard,
                  selecting === 'end' &&
                    !!isBeforeStart &&
                    styles.disabledDateCard,
                ]}
              >
                <Text
                  style={[
                    styles.dateDay,
                    (isStart || isEnd) && styles.activeDateText,
                  ]}
                >
                  {date.day}
                </Text>

                <Text
                  style={[
                    styles.dateNumber,
                    (isStart || isEnd) && styles.activeDateText,
                  ]}
                >
                  {date.date.split(' ')[1]}
                </Text>

                <Text
                  style={[
                    styles.dateMonth,
                    (isStart || isEnd) && styles.activeDateText,
                  ]}
                >
                  {date.date.split(' ')[0]}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <Pressable
          style={[
            styles.continueButton,
            (!startDate || !endDate) && styles.disabledButton,
          ]}
          disabled={!startDate || !endDate}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>Continue</Text>

          <Ionicons
            name="arrow-forward"
            size={19}
            color={COLORS.white}
          />
        </Pressable>
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
    height: 90,
    paddingTop: 45,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },

  headerSpacer: {
    width: 40,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 21,
    marginTop: 8,
  },

  equipmentId: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 20,
  },

  selectionContainer: {
    marginTop: 25,
    gap: 12,
  },

  dateBox: {
    minHeight: 68,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectedDateBox: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },

  dateLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },

  dateValue: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },

  placeholderText: {
    color: COLORS.lightText,
    fontWeight: '400',
  },

  chooseText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 25,
    marginBottom: 12,
  },

  dateList: {
    gap: 10,
    paddingBottom: 5,
  },

  dateCard: {
    width: 64,
    height: 78,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeDateCard: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  disabledDateCard: {
    opacity: 0.35,
  },

  dateDay: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },

  dateNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 3,
  },

  dateMonth: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginTop: 1,
  },

  activeDateText: {
    color: COLORS.white,
  },

  continueButton: {
    height: 52,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 30,
  },

  disabledButton: {
    opacity: 0.45,
  },

  continueText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },
});