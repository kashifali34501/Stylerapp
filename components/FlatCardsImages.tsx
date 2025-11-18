import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCardsImages() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards with Images</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card, styles.cardShadow]}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop' }}
            style={styles.image}
          />
        </View>
        <View style={[styles.card, styles.cardShadow]}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop' }}
            style={styles.image}
          />
        </View>
        <View style={[styles.card, styles.cardShadow]}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop' }}
            style={styles.image}
          />
        </View>
        <View style={[styles.card, styles.cardShadow]}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop' }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  card: {
    height: 100,
    width: 140,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#eee',
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
})


