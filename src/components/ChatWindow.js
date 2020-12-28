import React from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {SendButton,AttachmentButton,InputToolbox,InfoButton, MessageSeparator,TypingIndicator,MainContainer, ChatContainer, MessageList, Message, MessageInput,ConversationHeader,Avatar ,VoiceCallButton,VideoCallButton} from '@chatscope/chat-ui-kit-react';
import {Container} from 'react-bootstrap'
export default function ChatWindow() {
    const pranjal = "https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-1/p320x320/120998570_981775758973934_1866413869174766686_n.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=pp47M8iqdFkAX_h9X9-&_nc_ht=scontent-bom1-2.xx&tp=6&oh=b755c6eb93b731805194b0ed53815405&oe=600F496C"
    const simran = "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p320x320/53364331_1150138635147657_3010923046891421696_n.jpg?_nc_cat=104&ccb=2&_nc_sid=7206a8&_nc_ohc=VrrMhKrbV7QAX8sC2aH&_nc_ht=scontent-bom1-1.xx&tp=6&oh=b59ef4a030082a803a5f97eb509fa247&oe=600E78A3"
   
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
        message: "Dual Leke Galti kardi",
        sentTime: "15 mins ago",
        sender: "Simran",
        direction: "incoming",
        position: "last"
      }}>
            <Avatar src={simran} name={"Simran"} />
          </Message>
          <Message model={{
        message: "Wahi na yaar, itna bekaar hai",
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
