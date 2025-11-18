import { View, 
  Text, 
  ScrollView, 
  StyleSheet,
 } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import FlatCardsImages from './components/FlatCardsImages'
import BlogCard from './components/BlogCard'
import ContactList from './components/ContactList'


const App = () => {
  return (
      <ScrollView>    
        <FlatCards />
        <ElevatedCard/>
        <FancyCards/>
        <FancyCards/>
        <FlatCardsImages/>
        <ContactList/>
        <BlogCard/>
      </ScrollView>
  )
}

export default App
