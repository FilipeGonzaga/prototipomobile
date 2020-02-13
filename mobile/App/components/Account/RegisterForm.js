import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";
import Loading from "../Loading";

function RegisterForm(props) {
  const { toastRef, navigation } = props;
  //Mostrando senha com hooks
  const [hidePassword, setHidePassword] = useState(false);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(false);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  //Armazenando valor no estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const register = async () => {
    setIsVisibleLoading(true);

    //Recebendo informações do Botão para comunicar com o banco
    // console.log("Usuário registrado")
    // console.log('Email: ' + email)
    // console.log('Password: ' + password)
    // console.log('Reapeat Password: ' + repeatPassword)

    // const resultEmailValidation = validateEmail(email);
    // console.log('Validação de Email: ' + resultEmailValidation)

    if (!email || !password || !repeatPassword) {
      toastRef.current.show("Todos os campos são obrigatorios");
      // console.log("Todos os campos são obrigatorios");
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show("O Email não está correto");
        // console.log("El email no esta correto");
      } else {
        if (password !== repeatPassword) {
          toastRef.current.show("As senhas não são iguais");
          // console.log("As senhas não são iguais");
        } else {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate("MyAccount");
              // toastRef.current.show("Usuario criado com sucesso");
              // console.log("Usuario criado com sucesso");
            })
            .catch(() => {
              toastRef.current.show("Erro ao criar conta, tente mais tarde");
              // console.log("Erro ao criar conta, tente mais tarde")
            });
        }
      }
    }
    setIsVisibleLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder=""
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)} //Recebendo Email de registro
        // onChange={e => console.log("Email Atualizado")}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Senha"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={e => setPassword(e.nativeEvent.text)} // Recebendo informação de Registro de senha
        // onChange={() => console.log("Senha atualizada...")}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />

      <Input
        placeholder="Repetir Senha"
        password={true}
        secureTextEntry={hideRepeatPassword}
        containerStyle={styles.inputForm}
        onChange={e => setRepeatPassword(e.nativeEvent.text)} // Recebendo informação de Registro de senha
        // onChange={() => console.log("Repetir Senha de Registro")}
        rightIcon={
          <Icon
            type="material-community"
            // name="eye-outline"
            name={hideRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
          />
        }
      />

      <Button
        title="Fazer Parte "
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
      <Loading text="Criando conta" isVisible={isVisibleLoading} />
    </View>
  );
}

export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
    backgroundColor:"#ccc"
  },
  iconRight: {
    color: "#192055"
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "50%"
  },
  btnRegister: {
    backgroundColor: "#192055"
  }
});
