import React, {useState, useEffect} from 'react';
import { 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  Text, 
  Animated, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function App(){

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));

  useEffect(()=>{
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 30
    }).start();
  }, []);
  return(
    <KeyboardAvoidingView style={styles.fundo}>
      <View style={styles.cont}>
        <Text style={styles.texto}>LOGIN</Text>
      </View>

      <Animated.View style={[styles.conteudo, 
        {
          transform: [
            { translateY: offset.y}
          ]
        }]}>
        <TextInput
        style={styles.entrada} 
        placeholder= "Email"
        autoCorrect={false}
        onChangeText= {()=>{}}
        />

        <TextInput 
        style={styles.entrada} 
        placeholder= "Senha"
        autoCorrect={false}
        onChangeText= {()=>{}}
        ></TextInput>

        <TouchableOpacity style={styles.btn} >
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text>Criar Conta Gratuita</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fundo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  cont:{
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{    
    fontSize: 40,
    color: '#993399'
  },
  conteudo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  entrada:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btn:{
    backgroundColor: '#35aaff',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 10
  }
})
