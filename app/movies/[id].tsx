import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'

const Details = () => {
  const {id} = useSearchParams()
  return (
    <View>
      <Text>Movie Details: {id}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})