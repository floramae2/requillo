import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function WeatherApp() {
  // Define forecast data for each hour
  const forecastData = [
    { time: '10:00 AM', icon: 'file:///C:/Users/Win10/Downloads/weather.webp', temperature: '29°C' },
    { time: '11:00 AM', icon: 'file:///C:/Users/Win10/Downloads/weather.webp', temperature: '30°C' },
    { time: '12:00 PM', icon: 'file:///C:/Users/Win10/Downloads/weather.webp', temperature: '31°C' },
    { time: '1:00 PM', icon: 'file:///C:/Users/Win10/Downloads/weather.webp', temperature: '32°C' },
    { time: '2:00 PM', icon: 'file:///C:/Users/Win10/Downloads/weather.webp', temperature: '33°C' },
    { time: '3:00 PM', icon: 'file:///C:/Users/Win10/Downloads/weather.webp', temperature: '34°C' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Image */}
      <Image
        source={{ uri: 'C:\\Users\\Win10\\Downloads\\blue-sky-2.jpg' }}
        style={styles.backgroundImage}
      />

      {/* Weather Content */}
      <View style={styles.weatherContent}>
        <Text style={styles.city}>Balilihan</Text> {/* Move to upper-left corner */}
        <Image
          source={require('file:///C:/Users/Win10/Downloads/weather.webp')} // Replace with your weather icon image
          style={styles.weatherIcon}
        />
        {/* Increase the size of the temperature text */}
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureLarge}>27°C</Text>
          <Image
            source={require('C:\\Users\\Win10\\Downloads\\cloud.png')} // Add the cloud icon
            style={styles.temperatureIcon}
          />
        </View>
        <Text style={styles.condition}>Intermittent clouds</Text> {/* Replace with actual weather condition */}
        <Text style={styles.date}>Today</Text> {/* Replace with actual date */}
        
        {/* Arrange times horizontally */}
        <View style={styles.hourlyForecast}>
          {forecastData.map((item, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.time}>{item.time}</Text>
              <View style={styles.temperatureContainer}>
                <Text style={styles.temperatureLarge}>{item.temperature}</Text>
                <Image
                  source={require('C:\\Users\\Win10\\Downloads\\cloud.png')} // Add the cloud icon
                  style={styles.temperatureIcon}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue', // Set background color to sky blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  weatherContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background for content
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  city: {
    alignSelf: 'flex-start', // Align text to the left (upper-left corner)
    fontSize: 24,
    marginBottom: 10, // Add margin for spacing
  },
  hourlyForecast: {
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Space evenly between items
    alignItems: 'center',
    flexWrap: 'wrap', // Allow items to wrap to the next row
  },
  forecastItem: {
    alignItems: 'center',
    margin: 10, // Add spacing between forecast items
  },
  time: {
    fontSize: 18,
  },
  forecastIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  // Increase the size of the temperature text
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureLarge: {
    fontSize: 40,
  },
  temperatureIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 5, // Add spacing between temperature text and icon
  },
  condition: {
    fontSize: 18,
  },
  date: {
    fontSize: 24,
  },
});
