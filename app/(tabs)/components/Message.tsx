import React from 'react';
import MessageBubble from './MessageBubble'
import { View } from 'react-native';

const Message = ({msg, msgSentByMe}) => {
    return (
        <View>
            <MessageBubble msg={msg} msgSentByMe={msgSentByMe}/>
            {msg.replyToMessage && (
                <>
                    <MessageBubble 
                        msg={msg.replyToMessage} 
                        msgSentByMe={msg.replyToMessage.authorUuid === "you"} 
                        reply={true}
                    />
                </>
            )}
        </View>
    );
};

export default Message;