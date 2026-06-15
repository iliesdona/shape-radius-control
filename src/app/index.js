
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BorderRadiusControll() {
  // Keep these as empty strings so typing, backspacing, and clearing work perfectly!
  const [borderRadius, setborderRadius] = useState("");
  const [borderToprightradius, setborderToprightradius] = useState("");
  const [borderTopleftradius, setborderTopleftradius] = useState("");
  const [borderbottomrightradius, setborderbottomrightradius] = useState("");
  const [borderbottomleftradius, setborderbottomleftradius] = useState("");
  
  

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>
          Here you can stretch the border of the box below 
        </Text>
      </View>
      
      
        <View style={{
          borderRadius: Number(borderRadius) || 0,
          borderTopLeftRadius: borderTopleftradius !== "" ? Number(borderTopleftradius) : undefined,
          borderTopRightRadius: borderToprightradius !== "" ? Number(borderToprightradius) : undefined,
          borderBottomLeftRadius: borderbottomleftradius !== "" ? Number(borderbottomleftradius) : undefined,
          borderBottomRightRadius: borderbottomrightradius !== "" ? Number(borderbottomrightradius) : undefined,
          width: 300,
          height: 300,
          backgroundColor: '#8C86AA',
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'relative', 
        }}>
        
         
        </View>
      

      <View style={styles.inputcontainer}>
      
        <TextInput style={styles.inputall} placeholder="every border Radius" value={borderRadius} onChangeText={setborderRadius} keyboardType="numeric"/>
        <View style={styles.secondaryinputcontainer}>
          <TextInput style={styles.input} placeholder="top left" value={borderTopleftradius} onChangeText={setborderTopleftradius} keyboardType="numeric"/>
          <TextInput style={styles.input} placeholder="top right" value={borderToprightradius} onChangeText={setborderToprightradius} keyboardType="numeric"/>
          <TextInput style={styles.input} placeholder="bottom left" value={borderbottomleftradius} onChangeText={setborderbottomleftradius} keyboardType="numeric"/>
          <TextInput style={styles.input} placeholder="bottom right" value={borderbottomrightradius} onChangeText={setborderbottomrightradius} keyboardType="numeric"/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#F4F5F7'
  },
  textcontainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 20
  },
  
 
  input: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 4,
    textAlign: 'center',
    fontSize: 12
  },
  inputcontainer:{
    gap: 20,
    marginTop: '5%',
    paddingHorizontal: 15
  },
  secondaryinputcontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputall: {
    alignSelf : 'center',
    backgroundColor: '#ffffff',
    width: '60%',
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center'
  },
});