import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../consts/colors';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();
const Bottomnavigator = () => {

    return (

            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: COLORS.primary,
                    showLabel: false,
                    // inactiveTintColor: '#F8F8F8',
                    style: {
                        height: 55,
                        borderTopWidth: 0,
                        elevation: 0
                    },
                }}
            >
                
                <Tab.Screen name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name='home'
                                color={color}
                                size={28}
                            />
                        )
                    }}
                />

                <Tab.Screen name="LocalMail"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name='mail-bulk'
                                color={color}
                                size={28}
                            />
                        )
                    }}
                />

                <Tab.Screen name="Search"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View
                                style={{
                                    height: 60,
                                    width: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: COLORS.primary,
                                    borderWidth: 2,
                                    borderRadius: 30,
                                    top: -30,

                                }}
                            >
                                <FontAwesome5
                                    name='search'
                                    color={COLORS.primary}
                                    size={28}
                                />
                            </View>
                        )
                    }}
                />


                <Tab.Screen name="Favorite"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name='heartbeat'
                                color={color}
                                size={28}
                            />
                        )
                    }}
                />


                <Tab.Screen name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name='cart-plus'
                                color={color}
                                size={28}
                            />
                        )
                    }}
                />

            </Tab.Navigator>
    
    );
}

const styles = StyleSheet.create({})

export default Bottomnavigator;
