import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Image, 
    Pressable,
    Linking,
 } from 'react-native';

const corGitHub = '#010409'
const corTextoGit = '#C9D1D9'
const corTextoGitDark = '#4F565E'

const fotoPerfil = 'https://avatars.githubusercontent.com/u/75583351?v=4'
const urlGitHub= 'https://github.com/JoseHelderSB'

const App = () => {
    const handlePressGoToGitHub = async () => {
       const res = await Linking.canOpenURL(urlGitHub);
       if (res) {
           await Linking.openURL(urlGitHub);
       }
    }
    return ( 
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={corGitHub} barStyle="light-content"/>
                <View style={style.content}>
                    <Image 
                    acessibilityLabel="Helder com fundo cinza"
                    style={style.avatar}
                    source={{uri: fotoPerfil}} />
                    <Text  acessibilityLabel="Nome: José Helder"
                    style={[style.padraoTexto, style.nome]}>José Helder</Text>
                    <Text  acessibilityLabel="Nickname: JoseHelderSB"
                    style={[style.padraoTexto, style.nick]}>JoseHelderSB</Text> 
                    <Text  acessibilityLabel="Descrição: Graduando em Análise e Desenvolvimento de Sistemas | Aspirante a desenvolvedor  Front-End e cientista de dados | Prof. de Língua Japonesa."
                    style={[style.padraoTexto, style.descricao]}>Graduando em Análise e Desenvolvimento de Sistemas | Aspirante a desenvolvedor  Front-End e cientista de dados | Prof. de Língua Japonesa.</Text>

                    <Pressable onPress={handlePressGoToGitHub}>
                        <View style={style.botao}>
                            <Text style={[style.padraoTexto, style.textBotao]}>Open in GitHub</Text>
                        </View>
                    </Pressable>



                </View>
        </SafeAreaView>

    );
   
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: corGitHub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 50,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    padraoTexto: {
        color: corTextoGit,
    },
    nome:{
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nick:{
        fontSize: 18,
        color: corTextoGitDark,

    },
    descricao:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    botao: {
        marginTop: 20,
        backgroundColor: corTextoGitDark,
        borderRadius: 10,
        padding: 20,
    },
    textBotao: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});