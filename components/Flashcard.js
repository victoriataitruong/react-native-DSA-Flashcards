import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flashcard = ({ card }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{card.question}</Text>
      <Text style={styles.answer}>{card.answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5, // Adds shadow for Android
    margin: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 18,
    color: '#555',
  },
});

export default Flashcard;