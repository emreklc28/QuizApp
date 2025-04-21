import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type Category={
    id?:string,
    name:string
}

type Props={

    category:Category

}


const Category = ({category:{id,name}}:Props) => {
    const navigation = useNavigation();


    const handlePressed = ()=>{
        // @ts-ignore
        navigation.navigate('Quiz',{category:id});

    };
  return (
    <TouchableOpacity style={styles.container} onPress={()=>handlePressed()}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'dodgerblue',
        padding:16,

    },

    text:{
        fontSize:24,
        color:'white',
        textAlign:'center',

    },

});
