
import React from 'react'
import dayjs from 'dayjs'
import { Card, Text } from 'react-native-paper'
import { View } from 'react-native'

const OrderDetailScreen = ({route} : any) => {
    const item = route.params
  return (

    <View style={{padding: 10}}>
         <Card>
    <Card.Title titleStyle={{fontSize: 24, fontWeight: 'bold'}} subtitleStyle={{fontSize: 18, fontWeight: '500'}} title={item.id} subtitle={item.customerId}/>
    <Card.Content>
    <Text> Sipariş Tarihi : {dayjs(item.orderDate,"YYYY MM DD HH:mm").format("DD MMMM YYYY dddd HH:mm")}</Text>
      <Text variant='bodyMedium'> Sevk Tarihi : {dayjs(item.shippedDate,"YYYY MM DD HH:mm").format("DD MMMM YYYY dddd HH:mm")}</Text>
      <Text variant='bodyMedium'> Teslim tarih : {dayjs(item.requiredDate,"YYYY MM DD HH:mm").format("DD MMMM YYYY dddd HH:mm")}</Text>
      <Text variant='bodyMedium'> Gönderim Yöntemi : {item.shipVia}</Text>
      <Text variant='bodyMedium'> Alıcı İsmi : {item.shipName}</Text>
    </Card.Content>
  </Card> 
    </View>
  )
}

export default OrderDetailScreen