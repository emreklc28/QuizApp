import { FlatList, StyleSheet,View } from 'react-native';
import React from 'react';
import Category from '../components/Category';


const catogories=[
    {id:'history', name:'Tarih'},
    {id:'general', name:'Genel Kültür'},
    {id:'movies', name:'Filmler'},
    {id:'music', name:'Müzikler'},

]

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
      <FlatList
      data={catogories}
        renderItem={({item})=><Category category={item} />}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        contentContainerStyle={{
            gap:16,
            marginHorizontal:16,
        }}
        columnWrapperStyle={{
            gap:16,
        }}
      />

</View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
});