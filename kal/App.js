import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState } from 'react'

export default function App() {
  const [selectedDate, setSelectedDate] = useState('')

  function selectedDateHandler(day){
    setSelectedDate(day.dateString)
  }
  return (
    <View style={styles.container}>
      <CalendarList
      current='2023-01-01'
      minDate='2022-01-01'
      maxDate={'2024-01-01'}
      onDayPress={selectedDateHandler}
        markedDates={{
          [selectedDate]:{selected: true, selectedColor: 'orange'},
            '2023-04-08':{marked: true},
            '2023-04-15':{selected: true},
            '2023-04-18':{marked: true, dotColor: 'red'},
            '2023-04-5':{selected: true, selectedTextColor: 'red', selectedColor: 'red'}
          }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
