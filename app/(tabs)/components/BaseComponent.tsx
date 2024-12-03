import { TextInput, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { styles } from '../styles/BaseComponentsCss'
import { useStore } from '../utils/NewStore'
import Message from './Message'
import Avatar from './Avatar'

export default function BaseComponent() {
  const scrollViewRef = useRef();
  const [usersHash, setUsersHash] = useState([]);
  const [allMsgs, setAllMsgs] = useState(true);
  let currentUser: string = ""
  let currentDate: string = ""
  let currentTime: string = ""

  const callApi = allMsgs ? 'messages/all' : 'messages/latest'
  const {fetchData, msgList, isLoading, participantsData} = useStore();

  useEffect(() => {
    fetchData(callApi);
  },[allMsgs])

  useEffect(() => {
    if (participantsData.length) {
      const dataHash = {}
      participantsData.map((user: object) => {
        dataHash[user.uuid] = user 
      })
      setUsersHash(dataHash);
    }
  },[participantsData])

  return (
    <ScrollView style={styles.body}>
      <Text style={styles.text}>Tribe Chat</Text>
      <TouchableOpacity 
        style={styles.ApiContainer}
        onPress={()=>setAllMsgs(!allMsgs)}
      >
        <Text style={styles.Api}>{allMsgs ? "Show All Chat" : "Show Latest 25 Chat"}</Text>
      </TouchableOpacity>
      {!isLoading ? <ScrollView 
        style={styles.container} 
        ref={scrollViewRef}
        onContentSizeChange={() => 
          scrollViewRef.current.scrollToEnd({ animated: true })
        }>
        {!isLoading && msgList.map((element, index) => {
          const msgSentByMe = element.authorUuid == "you"
          const dateObject = new Date(element.sentAt) 
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth() + 1; // Months are zero-indexed
          const day = dateObject.getDate()
          const showDate = currentDate !== day
          currentDate = day

          const showTime = element.sentAt - currentTime > 100000
          currentTime = element.sentAt

          currentUser = currentUser === "" ? element.authorUuid : currentUser
          const lastMsg = currentUser !== element.authorUuid || index === 0
          currentUser = element.authorUuid

          return ( 
            <View key={index} style={styles.view}>
              {showDate && (
                  <View style={styles.weekday}>
                      <Text style={styles.weekdayText}>{month}/{day}/{year}</Text>
                  </View>
              )}
              {lastMsg && usersHash[element.authorUuid] && <Avatar user={usersHash[element.authorUuid]} msgSentByMe={msgSentByMe}/>}
            <Message 
              msg={element} 
              msgSentByMe={msgSentByMe}
              showTime={showTime}
            />
            </View>
          )
        })}
        {!isLoading && 
          <View style={styles.Input}>
            <TextInput 
              style={styles.TextInput}
              placeholder="Reply Here"/>
            <TouchableOpacity style={styles.SendContainer}>
              <Text style={styles.SendButton}>Send</Text>
            </TouchableOpacity>
          </View>
        }
      </ScrollView> :
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Something Awesom is Loading...</Text>
        </View>
      }
    </ScrollView>
  );
}
