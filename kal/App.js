import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState } from 'react'

export default function App() {
  const [selectedDate, setSelectedDate] = useState('')

  const wydarzenia = {
    '2023-04-16':[{opis:"twoja babcia"}],
    '2023-04-20':[{opis:"twoj dziadek"}]
  }

  function selectedDateHandler(day){
    setSelectedDate(day.dateString)
  }

  function renderPustaData(){
    return(
      <View>
        <Text>
          tak
        </Text>
      </View>
    )
  }

  function renderWydarzenia(wyd){
    return(
      <View>
        <Text>
          {wyd.opis}
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Agenda
        items={wydarzenia}
        renderItem={renderWydarzenia}
        renderEmptyData={renderPustaData}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 600,
    backgroundColor: '#fff'
  },
});
