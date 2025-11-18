import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Places</Text>
        <View style = {[styles.card, styles.cardElevated]}>
            <Image
            source= {{
                uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                }}
            style= {styles.cardimage}
            />
            <View style= {styles.cardbody}>
              <Text style= {styles.headingtitle}>Nela Pahar</Text>
              <Text style= {styles.headingLable}>Vally in KPK</Text>
               <Text style= {styles.cardDescription}>This is KPK a very beatutiful place to learn. This is around 12 hours away from of us.</Text>
                <Text style= {styles.headingfooter}>12 hours away</Text>
              
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
    card: {
        height: 320,
        width: 330,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#efebebff',
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#be1111ff',
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    cardbody: {padding: 10,

    },
    headingLable: {
        fontSize: 14,
        color: '#7d7d7d',
        fontWeight: 'bold',
        paddingVertical: 4,
     },
    cardimage: {height: 180,
    borderRadius: 4,}, 
    headingtitle: {
        fontSize: 18,
        fontWeight: 'bold',
     },
    cardDescription: {
        fontSize: 14,
        paddingVertical: 4,
     },
    headingfooter: {
        fontSize: 16,
        fontWeight: 'bold',
       
     }, 

})