import React, {useRef, useEffect} from 'react';
import {Button, View} from 'react-native';
import UnityView from '@azesmway/react-native-unity';

const Unity = () => {
  const unityRef = useRef<UnityView>(null);

useEffect(() => {
   SendData(jsonedData);
  }, []);

// delay function help us control when to send the data to unity in ms.
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));



// Send Data function is uses the main function that send the data to Unity.
// With the delay.
  async function SendData(data: any) {
    await delay(500);
    // This is the main function postMessage take 3 arguments ReacttoUnity is the game Object
    // GetDatas is the function name we will send the data to in Unity depends on hierarchy.
    // data is the data we will send.
    console.log('sending data...' + data);
    unityRef.current?.postMessage('MSG', 'MessageRN', data);
  }

const unityData = {
     name: "I'm Stepa",
     age: 25,
  };

  var jsonedData = JSON.stringify(unityData);


  return (
    // If you wrap your UnityView inside a parent, please take care to set dimensions to it (with `flex:1` for example).
    // See the `Know issues` part in the README.
    <View style={{flex: 1}}>
      <Button
        title="Go to Unity"
        onPress={() => SendData("test")}
      />
      <UnityView
        // @ts-ignore
        ref={unityRef}
        style={{flex: 1}}
        onUnityMessage={result =>
          console.log('onUnityMessage', result.nativeEvent.message)
        }
      />
      
    </View>
  );
};

export default Unity;
