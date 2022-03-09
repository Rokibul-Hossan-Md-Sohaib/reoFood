import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../consts/colors'
import PrimaryButton from '../components/PrimaryButton'
import Example from '../components/Example'


const onBoardScreen = ({ navigation }) => {
    const [hidden, setHidden] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('')
    console.log(text)
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

            <View style={{ height: 400 }}>
                <Image
                    style={{
                        width: '100%',
                        resizeMode: 'contain',
                        top: -150,

                    }}
                    source={require('../../assets/onboardImage.png')}
                />
            </View>
            <View style={styles.textContainer}>

                <Text style={{
                    fontSize: 32, fontWeight: 'bold', textAlign: 'center'
                }} >
                    Delicious Food
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 18,
                        textAlign: 'center',
                        color: COLORS.grey

                    }}

                >
                    we help you to find best delicious food
                </Text>
                <View style={styles.indicatorContainer}>
                    <View style={styles.currentIndicator}></View>
                    <View style={styles.indicator}></View>
                    <View style={styles.indicator}></View>
                </View>
                <PrimaryButton
                    title="Get Started"
                    onPress={() => navigation.navigate('Home')}
                />


            </View>
            {/* <Example /> */}



        </SafeAreaView>

    )
}

export default onBoardScreen

const styles = StyleSheet.create({

    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: "center",
        top: 20
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5
    }

})