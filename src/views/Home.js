import React from 'react'
import {
    Text,
    SafeAreaView,
    View,
    Button,
    StyleSheet
} from 'react-native'

export default function Home({navigation}){
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.subTitle}>
                    Seja bem vindo a tela
                </Text>
                <Text style={styles.title}>
                    Home
                </Text>
                <Button
                    title='About'
                    onPress= {() => navigation.navigate('About')}

                />
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin:10,
    },
    subTitle: {
        fontSize:14,
        textAlign: 'center',
        margin:10,

    }
})