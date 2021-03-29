/*View is the most common element in React Native. You can consider it as an equivalent of the div element used in web development.

Use Cases
Let us now see a few common use cases.

When you need to wrap your elements inside the container, you can use View as a container element.

When you want to nest more elements inside the parent element, both parent and child can be View. It can have as many children as you want.

When you want to style different elements, you can place them inside View since it supports style property, flexbox etc.

View also supports synthetic touch events, which can be useful for different purposes.*/
import React, { Component } from 'react'
import { View, Text } from 'react-native'

const ThirteenthExample = () => {
   return (
      <View>
      <Text>This is my text1 </Text>
         <View>
            <Text>This is my text</Text>
         </View>
      </View>
   )
}
export default ThirteenthExample;