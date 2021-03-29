import React, { Component } from 'react'
import { Button } from 'react-native'

const TwelfthExample = () => {
   const handlePress = () => alert('Here')
   return (
      <Button
         onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
   )
}
export default TwelfthExample;