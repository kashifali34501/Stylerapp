import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
  const Contact = [
    {
      uid: 1,
      name: 'Aisha Khan',
      status: 'Building seamless mobile experiences',
      imageUrl: 'https://avatars.githubusercontent.com/u/1024025?v=4',
    },
    {
      uid: 2,
      name: 'David Miller',
      status: 'Crafting scalable cloud architectures',
      imageUrl: 'https://avatars.githubusercontent.com/u/1430902?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your apps super smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure digital banking systems',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Emily Carter',
      status: 'Designing future-ready UI/UX systems',
      imageUrl: 'https://avatars.githubusercontent.com/u/20832730?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        scrollEnabled={false}
      >
        {Contact.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={
                { uri: imageUrl }
              }
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}

      </ScrollView>
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
  userCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#1df7b9ff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    },
  userStatus: {
    fontSize: 12,
    color: '#666',
  },
})