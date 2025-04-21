import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';



const ResultScreen = () => {
  const router = useRoute();
  const navigation = useNavigation();
  const {score,total,category} = router.params;

  const handleHome=()=>{
    navigation.navigate('Home')

  }

  const handleRetry=()=>{
    navigation.navigate('Quiz',{category})

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Tamamlandı</Text>
      <Text style={styles.scoreText}>Doğru Sayısı: {score}/{total}</Text>
      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.homeText} onPress={handleHome}>🏠 Ana Sayfaya Dön </Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
        <Text style={styles.retryText}>🔁 Tekrar Oyna </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    gap:16,

  },
  title:{
    fontSize:24,

  },
  scoreText:{
    fontSize:18,

  },
  homeButton:{
    backgroundColor:'dodgerblue',
    width:'100%',
    paddingVertical:16,

  },
  homeText:{
    color:'white',
    fontSize:16,
    textAlign:'center',

  },
  retryButton:{
    backgroundColor:'dodgerblue',
    width:'100%',
    paddingVertical:16,

  },
  retryText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
  },




});