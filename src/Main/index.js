import React, { useRef, useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from "../services/api";
import styles from "./styles";

export default function Main() {

    const [cep, setCep] = useState('');
    const inputRef = useRef(null);
    const [cepUser, setCepUser] = useState(null);

    async function buscar() {

        if (cep.length != 8) {
            alert('CEP inválido!');
            setCep('');
            return;
        }

        try {
            const response = await api.get(`/${cep}/json`);
            console.log(response.data);
            setCepUser(response.data);
            Keyboard.dismiss(); // fechar o teclado

        } catch (error) {
            console.log("Error: " + error);
        }

    }

    function limpar() {
        setCep('');
        setCepUser(null);
        inputRef.current.focus();
    }

    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>Localizador de Código Postal</Text>

            <View style={styles.caixa}>
                <Text style={styles.text}>Digite o CEP desejado</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    placeholder="Ex. 12345678"
                    value={cep}
                    onChangeText={(texto) => setCep(texto)}
                    ref={inputRef}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'blue' }]}
                        onPress={buscar}
                    >
                        <Text style={styles.textButton}>Buscar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'red' }]}
                        onPress={limpar}
                    >
                        <Text style={styles.textButton}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {cepUser &&
                <View style={styles.result}>
                    <Text style={styles.adress}>CEP: {cepUser.cep}</Text>
                    <Text style={styles.adress}>Estado: {cepUser.uf}</Text>
                    <Text style={styles.adress}>Cidade: {cepUser.localidade}</Text>
                    <Text style={styles.adress}>Bairro: {cepUser.bairro}</Text>
                    <Text style={styles.adress}>Logradouro: {cepUser.logradouro}</Text>
                </View>
            }

        </View>
    )
}