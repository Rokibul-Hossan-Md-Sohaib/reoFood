import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import foods from '../../consts/foods';
import COLORS from '../../consts/colors';

const CartScreen = () => {
    const CartCard = ({ item }) => {
        return (<View style={styles.cartCard}>
            <Image source={item.image} style={{ height: 80, width: 80 }} />

            <View
                style={{
                    height: 100, marginLeft: 10, paddingVertical: 20,
                    flex: 1
                }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 16, }}>{item.name}</Text>
                <Text style={{ fontSize: 13, color: COLORS.grey }}>{item.ingredients}</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 17, }}>{item.price}</Text>
                {/* <View style={{ marginLeft: 20, alignItems: ' center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
                </View> */}
            </View>
        </View>)
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={styles.header}>
                <FontAwesome5 name="" size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Text</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={foods}
                renderItem={({ item }) => <CartCard item={item} />}
            />
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({

    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})