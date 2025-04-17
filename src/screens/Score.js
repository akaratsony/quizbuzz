import { StyleSheet, Text, View,Image, Pressable , ScrollView, Platform, Dimensions} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native';

const Score = ({navigation}) => {
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
    const route = useRoute();

    const { score } = route.params;

  return (
    <ScrollView style={tw`mt-6 p-4`}>
    <View style={[
        tw`bg-white p-4 rounded-3xl shadow-lg`, // Fehér háttér, lekerekített sarkok, árnyék
        {
            backgroundColor: '#fff', // Szép háttérszín a kártyán
        }
    ]}>
    <View style={tw`items-center mb-4`}>
        <Image source={require("../../assets/win.png")}    style={[
                tw`w-120 h-120 rounded-xl
                ${ isMobileBrowser ? "h-80 w-80 " 
                 :   isWeb ?  "h-100 w-100 rounded-xl"
                 : "h-80 w-80 " 
                 } 
                `,  // Lekerekített sarkok
                {
                    shadowColor: '#000', // Árnyék színe
                    shadowOffset: { width: 0, height: 4 }, // Árnyék eltolása
                    shadowOpacity: 0.25, // Árnyék átlátszósága
                    shadowRadius: 5, // Árnyék élessége
                    padding: 10 // Kép körüli kis tér
                }]}/>
       <Text style={tw`text-2xl`}>Your scored {score} Points</Text>

       <Pressable style={tw`bg-purple-500 p-2 rounded-md mt-4`} 
       onPress={ () => navigation.navigate("Brainrot university")}>
        <Text style={tw`text-white font-medium text-2xl`}> Play Again</Text>
       </Pressable>
                   </View>
       
                   </View>
       
    </ScrollView>
  );
};
export default Score;

const styles = StyleSheet.create({})