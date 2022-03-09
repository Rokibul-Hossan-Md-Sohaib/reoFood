import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SecondaryButton } from '../components/PrimaryButton';

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <FontAwesome5 name='cart-plus' size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 280
                    }}
                >
                    <Image source={item.image} style={{ height: 220, width: 220 }} />
                </View>
                <View style={styles.details}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: COLORS.white
                            }}>{item.name}</Text>

                        <View style={styles.iconContainer}>
                            <FontAwesome5 name='heart' color={COLORS.primary} size={25} />
                        </View>
                    </View>
                    <Text style={styles.detailText}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.


                    </Text>
                    <View style={{marginTop: 40, marginBottom: 40}}>
                        
                        <SecondaryButton title="Add To Card"/>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default DetailsScreen

const styles = StyleSheet.create({

    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 20
    },
    details: {
        paddingHorizontal: 20,
        padding: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    detailText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.white
    }

})