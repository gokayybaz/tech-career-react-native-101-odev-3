import {  FlatList, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import dayjs from 'dayjs'
import "dayjs/locale/tr"
import { Card, Text } from 'react-native-paper'

dayjs.locale('tr')

const OrdersScreen = ({ navigation } : any) => {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    const getOrders = async () => {
      const data = (await axios.get("https://northwind.vercel.app/api/orders")).data
      setOrders(data)
    }
    getOrders()
  }, [])
  return (
    <View style={{padding: '4%'}}>
      <FlatList
        data={orders}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('OrderDetailScreen', item)}>
            <Card style={{marginBottom: '5%'}}>
    <Card.Title title={`Sipariş No: ${item.id}`} subtitle={dayjs(item.orderDate,"YYYY MM DD HH:mm").format("DD MMMM YYYY dddd HH:mm")} />
  </Card>
          </Pressable>
          
          )}
      />
    </View>
  )
}

export default OrdersScreen