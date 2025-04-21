import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import questions from '../data/questions';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';



const QuizScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const bottomSheetRef=useRef<BottomSheet>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [score, setScore] = useState(0);

  //@ts-ignore
  const {category} = route.params;
  const quizQuestions = questions[category];

  const {question,options,hint,answerIndex} = quizQuestions[currentQuestionIndex];

  const handleAnswer = (option,optionIndex)=>{

    if(optionIndex === answerIndex){
      setScore(prev=>prev + 1);

    }
    if(currentQuestionIndex + 1 < quizQuestions.length){
      setCurrentQuestionIndex(prev=> prev + 1);
    }else{

      navigation.navigate('Result',{score,category,total:quizQuestions.length});

    }

  };
  const handleSheetChanges = useCallback((index: number) => {
    if(index === -1){
      setShowHints(false);
    }
  }, []);
  return (

    <View style={styles.container}>
      <Text style={styles.questions}>{question}</Text>
      <View style={styles.optionsContainer} >
      {options.map((x,i)=> (
        <TouchableOpacity key={x} style={styles.options} onPress={()=>handleAnswer(x,i)}>
          <Text style={styles.optionsText} adjustsFontSizeToFit numberOfLines={1}>{x}</Text>
        </TouchableOpacity>
      )

      )}

      </View>
      <TouchableOpacity style={styles.hint}
      onPress={()=>setShowHints(prev=>!prev)}>

        <Text style={styles.hintText}>i</Text>

      </TouchableOpacity>

      <TouchableOpacity style={[styles.prevQuestion,{backgroundColor: currentQuestionIndex===0 ? '#00f':'dodgerblue'}]}

      onPress={()=>setCurrentQuestionIndex(prev=> prev - 1)} disabled={currentQuestionIndex === 0}>
        <Text style={styles.prevQuestionText}> ⏪ Önceki Soru  </Text>

      </TouchableOpacity>
      {showHints &&( <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        snapPoints={[300,'50%']}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.bottomSheetTitle}> İpucu </Text>
          <Text style={styles.bottomSheetDescriptoin} >{hint}🎉</Text>
        </BottomSheetView>
      </BottomSheet>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    justifyContent:'center',
    gap:15,

  },
  questions:{
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',
  },
  options:{
    padding:8,
    backgroundColor:'dodgerblue',
    paddingHorizontal:32,

  },
  optionsText:{
    color:'white',
    fontSize:25,
    textAlign:'center',
  },
  optionsContainer:{
    gap:8,

  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    gap:16,
  },
  hint:{
    backgroundColor:'tomato',
    width:80,
    height:80,
    position:'absolute',
    bottom:32,
    right:16,
    borderRadius:64,
    alignItems:'center',
    justifyContent:'center',

  },
  hintText:{
    color:'white',
    fontSize:36,
    fontWeight:'bold',


  },
  bottomSheetTitle:{
    fontSize:24,

  },
  bottomSheetDescriptoin:{
    fontSize:16,
  },
  prevQuestion:{
    backgroundColor:'dodgerblue',
    position:'absolute',
    paddingHorizontal:16,
    paddingVertical:8,
    bottom:32,
    left:16,
    borderRadius:64,
    alignItems:'center',
    justifyContent:'center',

  },
  prevQuestionText:{
    fontSize:16,
    color:'white'


  },

});

export default QuizScreen;


