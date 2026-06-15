import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function layoutRoot() {
  return (
   
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
     
        <Stack.Screen 
          name="index" 
          options={{
            title: "Border Radius Controller",
            headerShown: true
          }} 
        />
      </Stack>
    </GestureHandlerRootView>
  );
}