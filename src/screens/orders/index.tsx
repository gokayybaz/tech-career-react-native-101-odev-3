import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from './OrdersScreen';
import OrderDetailScreen from './OrderDetailScreen';


const OrdersStack = createNativeStackNavigator();


const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="OrderScreen" component={OrdersScreen} options={{headerTitle: "Siparişler"}} />
      <OrdersStack.Screen name='OrderDetailScreen' component={OrderDetailScreen} options={{headerTitle: "Sipariş Detayı"}} />
    </OrdersStack.Navigator>
  )
}

export default OrdersStackScreen