import React from 'react';
import { Image, StyleSheet, Platform, ScrollView, Text } from 'react-native';
import { useEffect, useState, useRef } from 'react';

const ChatPreview = ({}) => { 
    return (
        <Text>Hi</Text>
    )
}

const styles = StyleSheet.create({
    container1: {
      backgroundColor: '#AEC3B0',
      alignSelf: 'flex-end',
      maxWidth: 230,
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 10,
    },
    text1: {
      color: '#124559',
    },
    container2: {
      backgroundColor: '#01161E',
      alignSelf: 'flex-start',
      maxWidth: 230,
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 10,
    },
    text2: {
      color: '#EFF6E0',
    },
    text3: {
      backgroundColor: '598392',
      color: '#EFF6E0',
    }
  });
  
export default ChatPreview;