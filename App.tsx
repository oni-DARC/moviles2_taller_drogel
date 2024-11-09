// App.tsx
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, Button, Provider as PaperProvider } from "react-native-paper";
import { database } from "./firebaseConfig";
import { ref, push } from 'firebase/database';

const App = () => {
  const [nombre, setNombre] = useState("");
  const [puntaje, setPuntaje] = useState("");

  const enviarDatos = async () => {
    const puntajeNumerico = Number(puntaje);
    if (nombre && puntaje && puntajeNumerico >= 0 && puntajeNumerico <= 100) {
      const juegoRef=ref(database, 'messages/');
      push(juegoRef, {nombre, puntaje: parseInt(puntaje), timestamp:Date.now()});
      setNombre("");
      setPuntaje("");
      alert("Datos enviados con éxito");
    } else {
      alert("Por favor ingresa un nombre y un valor de puntaje entre 0 y 100");
    }
  };

  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f5f5f5" }}>
        
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image source={require("./assets/logoITSQMET.png")} style={{ width: 300, height: 100 }} />
        </View>

        <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20, color: "#14103d" }}>
          Taller Jugador DROGEL
        </Text>
        
        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
          mode="outlined"
          style={{ marginBottom: 15, backgroundColor: "#ffffff", color:"#000000" }} // color gris
          theme={{ colors: { text: "#000000", primary: "#3d8e94", placeholder: "#000000" } }}
        />

        <TextInput
          label="Puntaje"
          value={puntaje}
          onChangeText={(text) => setPuntaje(text)}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 15, backgroundColor: "#ffffff", color:"#000000" }} // color gris
          theme={{ colors: { text: "#000", primary: "#3d8e94", placeholder: "#000000" } }}
        />

        <Button mode="contained" onPress={enviarDatos} style={{ backgroundColor: "#49b2b7" }}>
          Enviar
        </Button>

        <Text style={{ position: "absolute", textAlign:"right", bottom: 10, right: 10, color: "#14103d" }}>
          By: Diego Rogel{"\n"}v 1.1.0
        </Text>
      </View>
    </PaperProvider>
  );
};

export default App;