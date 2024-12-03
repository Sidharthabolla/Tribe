import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    edited: {
      fontSize: 10,
      color: "#598392",
      alignSelf: "flex-end",
      marginTop: 10.
    },

    attachment: {
      alignSelf: 'center',
      marginTop: 10,
    },

    Sent: {
      msgContainer: {
        flexDirection: 'row-reverse',
      },
      msg: {
        backgroundColor: '#AEC3B0',
        maxWidth: 230,
        minWidth: 70,
        padding: 10,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 10,
      },
      text: {
        color: '#124559',
      },
      timestamp: {
        fontSize: 10,
        alignSelf: 'center',
        marginRight: 40,
        color: '#AEC3B0',
      },
      reactionsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        left: 5,
      },
      reactions: {
        backgroundColor: "#AEC3B0",
        borderWidth: 1,
        borderColor: "#598392",
        padding: 3,
        borderRadius: 15,
      },
    },

    Received: {
      msgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      msg: {
        backgroundColor: '#01161E',
        alignSelf: 'flex-start',
        maxWidth: 230,
        padding: 10,
        marginLeft: 35,
        borderRadius: 10,
        marginBottom: 16,
      },
      text: {
        color: '#EFF6E0',
      },
      timestamp: {
        fontSize: 10,
        alignSelf: 'center',
        marginRight: 13,
        color: '#AEC3B0'
      },
      reactionsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        left: 10,
      },
      reactions: {
        backgroundColor: "#01161E",
        borderWidth: 1,
        borderColor: "#124559",
        padding: 3,
        borderRadius: 15,
      },
      reply: {
        marginLeft: 40,
        fontSize: 40,
        color: "#EFF6E0"
      },
    },

    ReplySent: {
      msgContainer: {
        flexDirection: 'row-reverse',
      },
      msg: {
        borderColor: '#AEC3B0',
        borderWidth: 1,
        alignSelf: 'flex-start',
        maxWidth: 200,
        padding: 10,
        marginLeft: 65,
        borderRadius: 10,
        marginBottom: 16,
        marginTop: 10
      },
      text: {
        color: '#598392',
      },
      timestamp: {
        fontSize: 10,
        alignSelf: 'center',
        marginRight: 13,
        color: '#AEC3B0'
      },
      reactionsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -20,
        left: 10,
        borderRadius: 15,
      },
      reactions: {
        backgroundColor: "#EFF6E0",
        borderColor: '#01161E',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
      },
      reply: {
        marginLeft: 40,
        fontSize: 40,
        color: "#EFF6E0"
      },
      verticalLine: {
        width: 2,
        height: 30, 
        backgroundColor: '#AEC3B0',
        marginLeft: 180,
        marginTop: -8,
      },
    },

    ReplyReceived: {
      msgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      msg: {
        borderColor: '#01161E',
        borderWidth: 1,
        alignSelf: 'flex-start',
        maxWidth: 200,
        padding: 10,
        marginLeft: 65,
        borderRadius: 10,
        marginBottom: 16,
        marginTop: 10
      },
      text: {
        color: '#01161E',
      },
      timestamp: {
        fontSize: 10,
        alignSelf: 'center',
        marginRight: 13,
        color: '#AEC3B0'
      },
      reactionsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -20,
        left: 10,
      },
      reactions: {
        backgroundColor: "#EFF6E0",
        borderColor: '#01161E',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
      },
      reply: {
        marginLeft: 40,
        fontSize: 40,
        color: "#EFF6E0"
      },
      verticalLine: {
        width: 2,
        height: 30, 
        backgroundColor: '#01161E',
        marginLeft: 80,
        marginTop: -8,
      },
    },

  });
