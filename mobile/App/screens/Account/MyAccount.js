import React, { UseState, UseEffects } from "react";
import * as firebase from "firebase";
import { useState, useEffect } from "react";
import Loading  from "../../components/Loading";
import UserGuest from "./UserGuest"
import UserLogged from "./UserLogged"


// import { View, Text } from "react-native";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user) nulo pois não estava definida

      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    //  return( <View><Text>carregando...</Text></View>)

     return <Loading isVisible={true} text="Carregando" />;
  }
    return login ? <UserLogged /> : <UserGuest />;


}




  // //Pagina de usuário logado
  // if (login) {
  //   return (
  //     // <View>
  //     //   <Text>Usuario logado</Text>
  //     // </View>


  //   );
  // }

  // //Pagina de registro
  // return (
  //   // <View>
  //   //   <Text>Usuario não logado</Text>
  //   // </View>

    

  // );