import { Alert, StyleSheet, Text, View,ScrollView, Image,Platform,Dimensions } from 'react-native'
import React, { use } from 'react'
import { reactQuestions } from '../config/question'
import { useState } from 'react'
import tw from 'twrnc'
import { Pressable } from 'react-native'
import * as Progress from 'react-native-progress';

const Questions = ({navigation}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [quizProgress, setQuizProgress] = useState(reactQuestions.length)
    const progress = (currentQuestionIndex+1)/quizProgress
    const [warning, setWarning] = useState(null)
    console.log(isCorrect)
    console.log(selectedOption)
// Manually map images to require()
const imageMap = {
    0 : require( "../../assets/question.png"),
    // Add more images here if needed
};

 const isWeb = Platform.OS === 'web'; // Ellenőrizzük, hogy weben fut-e
    const { width, height } = Dimensions.get('window');
    const isMobileBrowser = isWeb && width < 768;  // Általában a mobil böngészők képernyőszélessége 768px alatt van
    let widthClass;

    if (isMobileBrowser) {
      widthClass = "w-80";  // Mobil böngészőn 80
    } else if (isWeb) {
      widthClass = "w-150"; // Web platformon 150
    } else {
      widthClass = "w-80";  // Egyéb platformokon 50
    }
    
    const handleNext = ()=>{
        console.log(selectedOption)

    if(selectedOption != null){
        if(currentQuestionIndex === reactQuestions.length-1){

            navigation.navigate("Score", {score: score});
            //return;
        }
        else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setSelectedOption(null)
            setIsCorrect(null)
            setWarning(null)
        }
    }
    else{
        setWarning("Egy választ minimum megkell jelölnöd")
    }
    }

    //Handle Pressed Option
    const handleOptionPress = (pressedOption) => {

        setSelectedOption(pressedOption);
        const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer===pressedOption;

        setIsCorrect(isAnswerCorrect);
        console.log("csa "+isAnswerCorrect)

        if(isAnswerCorrect){
            setScore((prevScore) => prevScore+10);
        }
    }

    return (
        <ScrollView style={tw`mt-6 p-4`}>
                {warning ? <Text style={tw`text-2xl mb-4`}>{warning}</Text> : null}
                <View style={[
        tw`bg-white p-4 rounded-3xl shadow-lg`, // Fehér háttér, lekerekített sarkok, árnyék
        {
            backgroundColor: '#f7f7f7', // Szép háttérszín a kártyán
        }
    ]}>

                <View style={tw`items-center mb-4`}>
                <Image
                    source={reactQuestions[currentQuestionIndex].img}
                    style={[
                tw`w-120 h-120 rounded-xl
                ${ isMobileBrowser ? "h-80 w-80 " 
                 :   isWeb ?  "h-120 w-120 rounded-xl"
                 : "h-80 w-80 " 
                 } 
                `,  // Lekerekített sarkok
                {
                    shadowColor: '#000', // Árnyék színe
                    shadowOffset: { width: 0, height: 4 }, // Árnyék eltolása
                    shadowOpacity: 0.25, // Árnyék átlátszósága
                    shadowRadius: 5, // Árnyék élessége
                    padding: 10 // Kép körüli kis tér
                }
            ]}                    resizeMode="contain" // Megőrzi a kép arányait
                />

            </View>
            <View style={tw`flex-row`}>
                <View style={tw`flex-1`}>
                  <Progress.Bar progress={progress} width={null} height={20} color={"rgb(168 85 247)"}/>
                </View>
            </View>
            <Text style={tw`text-2xl mb-4`}>{reactQuestions[currentQuestionIndex].question}</Text>
            {
                reactQuestions[currentQuestionIndex].options.map((option) => (
                    <Pressable
    style={tw`border-2 p-4 my-2 rounded-md
        ${
            selectedOption === option
            ? isCorrect === true
                ? "bg-green-200 border-green-500"
                : isCorrect === false
                    ? "bg-red-200 border-red-500"
                    : ""
            : "border-purple-500"
        }
    `}
    onPress={() => handleOptionPress(option)} 
    disabled={selectedOption !== null} // Disable after selecting any option
>
    <Text style={tw`text-lg`}>
        {option}
    </Text>
</Pressable>

                ))
            }
            <Pressable style={tw `bg-purple-500 p-4 rounded-md mt-6`} onPress={handleNext}>
                <Text style={tw `text-white text-lg text-center font-bold`}>
                {currentQuestionIndex === reactQuestions.length-1 
                ? "Finish" 
                : "Next"}
                </Text>
            </Pressable>
                           </View>

        </ScrollView>

    )
}

export default Questions

const styles = StyleSheet.create({})