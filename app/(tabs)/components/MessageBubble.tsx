import React from 'react';
import { styles } from '../styles/MessageBubbleCss'
import { useState } from 'react';

import {
  View, 
  Text, 
  TouchableOpacity,
  Button,
  Image, 
  ScrollView, 
  TextInput,
  StyleSheet
} from 'react-native';

const MessageBubble = ({msg, msgSentByMe, reply = false}) => {
  const timestamp = new Date(msg.sentAt)
  const hoursDigit = timestamp.getHours() > 12 ? timestamp.getHours() - 12 : timestamp.getHours();
  const hours = hoursDigit.toString().padStart(2, '0');
  const daytime = timestamp.getHours() > 12 ? "pm" : "am"
  const minutes = timestamp.getMinutes().toString().padStart(2, '0');
  const showEdited = msg.sentAt !== msg.updatedAt
  let dynamicClassName = msgSentByMe ? "Sent" : "Received"
  dynamicClassName = reply ? "Reply"+dynamicClassName : dynamicClassName;

  function normalizeImageDimensions(imageWidth, imageHeight, maxWidth = 200, maxHeight = 200) {
    // Calculate the aspect ratio
    const aspectRatio = imageWidth / imageHeight;
  
    // Determine the new width and height based on the aspect ratio and maximum dimensions
    let newWidth = maxWidth;
    let newHeight = newWidth / aspectRatio;
  
    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = newHeight * aspectRatio;   
    }
  
    return {
      width: newWidth,
      height: newHeight   
    };
  }

  return (
    <View>
      {reply && <View style={styles[dynamicClassName].verticalLine}></View>}
      <View style={styles[dynamicClassName].msgContainer}>
        <TouchableOpacity style={styles[dynamicClassName].msg} >
          <Text style={styles[dynamicClassName].text}>{msg.text}</Text>
          {msg.attachments.map((attachment: object, index: number) => {
            return (
              <View key={index} style={styles.attachment}>
                <Image 
                  style={{
                    width: normalizeImageDimensions(attachment.width, attachment.height).width, 
                    height: normalizeImageDimensions(attachment.width, attachment.height).height, 
                    borderRadius: 10
                  }}
                  source={{ uri: attachment.url }}/>
              </View>
            )
          })}
          {showEdited && <Text style={styles.edited}>*edited</Text>}
          {msg.reactions && 
            <View style={styles[dynamicClassName].reactionsContainer}>
              {msg.reactions.map((reaction: object, index: number) => {
                return <Text key={index} style={styles[dynamicClassName].reactions}>{reaction.value}</Text>
              })}
            </View>
          }
        </TouchableOpacity>
        <Text style={styles[dynamicClassName].timestamp}>{hours}:{minutes} {daytime}</Text>
      </View> 
    </View>
  );
};

export default MessageBubble;