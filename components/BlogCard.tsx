import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function BlogCard() {

  const openWebsite = (url: string) => {
    Linking.openURL(url)
  }
  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What is new in TypeScript</Text>

        </View>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop'
          }}
          style={styles.cardImage}
        />

       <View style={styles.headingbody}> 
          <Text numberOfLines={3}>
            So Now i am writing blog card component in react native. this is really
            awesome to build a component.I am trying to focus on React Native.
            and I am enjoying it.
            Become a Professioanl App Developer.
          </Text>
        </View>
        <View style={styles.headingfooter}>
          <TouchableOpacity 
          onPress={ () => openWebsite('https://stylerapp.com')  }
          >
            <Text style={styles.RtextColor}>Read More</Text>
          </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={ () => openWebsite('https://instagram.com')  }
          >
            <Text style={styles.textColor}>Follow More</Text>
          </TouchableOpacity>
          </View>
      
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    card: {},
    elevatedCard: {
      height: 380,
      width: 330,
      borderRadius: 8,
      marginVertical: 12,
      marginHorizontal: 16,
      backgroundColor: '#efebebff',
    },
    headingContainer: {},
    headerText: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
      paddingVertical: 10,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
    headingfooter: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingHorizontal: 10,
      marginTop:10, 
    },
    headingbody:{
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    RtextColor: {
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: '#00ff44ff',
      height: 30,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 7,
      },
    textColor: { 
      color: 'black',
       fontWeight: 'bold',
      backgroundColor: '#00ff44ff',
      height: 30,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 7,
    
    },
})