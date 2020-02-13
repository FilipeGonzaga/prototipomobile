import React, { useRef } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import Toast from "react-native-easy-toast";


//Tela de Registros de usuarios 
export default function Register() {
  const toastRef = useRef();




    //Importando Formularios de Registro para Pagina de Registro
  return (
    // <View>
    //   <Text> Registro de usuarios</Text>
    // </View>
     <KeyboardAwareScrollView>
       <Image
         source={require("../../../assets/love.png")} 
         style={styles.logo}
         resizeMode="contain"
       />
       <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </KeyboardAwareScrollView>
  );
}

 const styles = StyleSheet.create({
   logo: {
     width: "70%",
     height: 150,
     alignSelf:"center"
   },
   viewForm: {
     marginRight: 40,
     marginLeft: 40
   }
 });
