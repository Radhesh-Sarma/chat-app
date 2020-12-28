import React from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {SendButton,AttachmentButton,InputToolbox,InfoButton, MessageSeparator,TypingIndicator, ChatContainer, MessageList, Message, MessageInput,ConversationHeader,Avatar ,VoiceCallButton,VideoCallButton} from '@chatscope/chat-ui-kit-react';
import {Container} from 'react-bootstrap'
export default function ChatWindow() {
    const simran = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
   
    return (
        <div>
            <Container>
            <div style={{
  height: "500px"
}}>
      <ChatContainer>
        <ConversationHeader>
          <Avatar src={simran} name="Simran" />
          <ConversationHeader.Content userName="Simran" info="Active 10 mins ago" />
          <ConversationHeader.Actions>
            <VoiceCallButton />
            <VideoCallButton />
            <InfoButton />
          </ConversationHeader.Actions>          
        </ConversationHeader>
        <MessageList typingIndicator={<TypingIndicator content="Simran is typing" />}>
          
          <MessageSeparator content="Saturday, 30 November 2019" />
          
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "single"
      }}>
            <Avatar src={simran} name={"Simran"} />
          </Message>
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "first"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "last"
      }} />
          
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "first"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "last"
      }}>
            <Avatar src={simran} name={"Simran"} />
          </Message>
          
          <MessageSeparator content="Saturday, 31 November 2019" />
          
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "single"
      }}>
            <Avatar src={simran} name={"Simran"} />
          </Message>
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "first"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "last"
      }}>
            <Avatar src={simran} name={"Simran"} />
          </Message>
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "first"
      }} />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "last"
      }} />
          
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "first"
      }} avatarSpacer />
          <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "last"
      }}>
            <Avatar src={simran} name={"Simran"} />
          </Message>
          
        </MessageList>
        <MessageInput placeholder="Type message here" sendButton={false} attachButton={false} />
        <InputToolbox>
           <AttachmentButton />
           <SendButton />
        </InputToolbox>
      </ChatContainer>
    </div>
                </Container>
        </div>
    )
}
