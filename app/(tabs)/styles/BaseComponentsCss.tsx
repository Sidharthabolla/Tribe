import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
      backgroundColor: '#01161E',
      height: 30,
    },
    text: {
      color: '#EFF6E0',
      textAlign: 'center',
      marginTop: 30,
      fontSize: 30,
    },
    container: {
      marginTop: 10,
      height: 500,
      backgroundColor: '#EFF6E0',
      padding: 5,
      borderWidth: 3,
      borderColor: '#EFF6E0',
    },
    weekday: {
      backgroundColor: "#598392",
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10, 
      paddingVertical:3,
      borderRadius: 10,
      marginVertical: 10
    },
    weekdayText: {
      textAlign: 'center',
      fontSize: 12,
      color: '#EFF6E0'
    },
    TextInput: { 
      flex: 1,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      padding: 5,
      backgroundColor: "#FFFFFF",
    },
    SendButton:{
      color: "#EFF6E0",
    },
    Input: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
    SendContainer: {
      backgroundColor: "#598392",
      marginLeft: 5,
      color: "#EFF6E0",
      padding: 5,
      borderRadius: 5,
    },
    ApiContainer: {
      backgroundColor: "#AEC3B0",
      alignSelf: "flex-end",
      marginRight: 10,
      marginTop: 10,
      padding: 5,
      borderRadius: 5
    },
    Api: {
      color: "#01161E",
      fontSize: 12
    },
    loadingContainer: {
      marginTop: 10,
      height: 500,
      backgroundColor: '#EFF6E0',
      padding: 5,
      borderWidth: 3,
      borderColor: '#EFF6E0',
    },
    loadingText: {
      fontSize: 50,
      margin: 'auto',
      textAlign: 'center'
    }
  });
  