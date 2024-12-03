import React from 'react';
import { Image, StyleSheet, Platform, ScrollView, Text } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import ChatPreview from './ChatPreview'

const ListView = () => {
    
    return (
        <>
          {msgList.map((list, index) => {
            return (
              <Text key={index} style={styles.text}>{list.authorUuid}</Text> 
            )
          })}
        </>
    )
}

const styles = StyleSheet.create({
    text: {
      color: '#EFF6E0',
      marginLeft: 30,
      textAlign: 'left',
      marginTop: 50,
      fontSize: 10,
    }
  });

export default ListView;