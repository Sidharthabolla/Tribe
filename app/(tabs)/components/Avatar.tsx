import React from 'react';
import { styles } from '../styles/AvatarCss'
import { View, Text, Image } from 'react-native';

const Avator = ({user, msgSentByMe}) => {
    let dynamicClassName = msgSentByMe ? "Sent" : "Received"
    return (
        <View style={styles[dynamicClassName].veiw}>
            <Image
                source={{ uri: user.avatarUrl }}
                style={styles[dynamicClassName].avatar}
            />
            {!msgSentByMe && (<Text style={styles.name}>{user.name}</Text>)}
        </View>
    )
}
  
export default Avator;