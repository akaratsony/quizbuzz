import { Pressable, StyleSheet, Text, View, Image, ScrollView, Platform,Dimensions  } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome ikonok importálása

const Splash = ({ navigation }) => {
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
    
  return (

   <ImageBackground 
      source={require("../../assets/timchese.jpg")}     resizeMode="cover" // A kép kitöltése, fókuszálás a tetejére
      // A kép kitöltése, a felső rész fókuszálása

      style={{ width: '100%', height:  isWeb ?  '100%' : "100%", justifyContent: 'center', alignItems: 'center',   }} // A háttérkép kitölti a képernyőt
    >
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)' // Sötét szín átlátszósággal
      }} />
      
      {/* ScrollView alkalmazása */}
      <ScrollView
        contentContainerStyle={tw`flex-grow items-center p-6`}
        style={{ backgroundColor: 'transparent' }}
        showsVerticalScrollIndicator={false} // Eltüntetjük a görgetősávot
      >     


    {isWeb?(
        <Image 
          source={require("../../assets/na.svg")} 
          style={tw.style(tw`${ isMobileBrowser ? "h-25 w-25" : "h-50 w-50"}  mb-4 `, {aspectRatio: 1})} 
        />) : (
   <View
      style={{

        padding: 10, // Igazítás
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon
        name="question" // Kérdőjel ikon
        size={100} // Ikon mérete
        color="white" // Fehér szín
      />
    </View>)}
        <Text style={tw`text-3xl font-bold text-center mb-6 text-purple-700`}>
          Welcome to the brainrot university
        </Text>

        <View style={[tw`p-4 rounded-lg  shadow-lg
          ${widthClass}
        `, { backgroundColor: 'rgba(91, 31, 91, 0.2)' }]}>
          <Text style={tw`text-white text-lg text-center font-semibold mb-4`}>
            Test your knowledge about legendary  figures:
          </Text>

          {[
            "🔹 John Pork – The famous half-human, half-pig!",
            "🔹 Tim Chesee – A mysterious name...",
            "🔹 Marven Beak – But who is he?",
            "🔹 Bombardiro Crocodilo– Strong or kind?",
            "🔹 Tralalelotralala – More than just a phrase?",
            "🔹 Agent 5.5 – A myth or a secret agent?"
          ].map((text, index) => (
            <Text key={index} style={tw`text-white text-lg mb-2 text-center`}>
              {text}
            </Text>
          ))}
        </View>

        <Pressable 
          style={tw`bg-purple-700 mt-10 px-6 py-3 rounded-lg shadow-md`} 
          onPress={() => navigation.navigate("Question")}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            Start Quiz
          </Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({});
