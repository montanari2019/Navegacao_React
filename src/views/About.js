import React from 'react'
import {
    Text,
    SafeAreaView,
    View,
    Button,
    StyleSheet
} from 'react-native'

export default function About({navigation}){
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.subTitle}>
                    Seja bem vindo a tela
                </Text>
                <Text style={styles.title}>
                    About
                </Text>
                <Button
                    title='Home'
                    onPress={() => navigation.navigate('Home')}

                />
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
    },
    subTitle: {
        fontSize:14,
        margin: 10,
        textAlign: 'center',

    }
})