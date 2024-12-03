import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
    Sent: {
        veiw: {
            alignSelf: 'flex-end',
            display: 'flex',
            marginTop: 12,
        },
        avatar: {
            width: 25,
            height: 25,
            borderRadius: 50,
            marginRight: 10,
        },
    },

    Received: {
        veiw: {
            alignSelf: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
        },
        avatar: {
            width: 30,
            height: 30,
            borderRadius: 50,
        }
    },

    name: {
        color: '#124559',
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 13,
    },
  });