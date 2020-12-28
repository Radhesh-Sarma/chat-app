import React from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ConversationList ,Conversation,Avatar} from '@chatscope/chat-ui-kit-react';
import {Container} from 'react-bootstrap'
export default function ChatList() {
    const pranjal = "https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-1/p320x320/120998570_981775758973934_1866413869174766686_n.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=pp47M8iqdFkAX_h9X9-&_nc_ht=scontent-bom1-2.xx&tp=6&oh=b755c6eb93b731805194b0ed53815405&oe=600F496C"
    const simran = "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p320x320/53364331_1150138635147657_3010923046891421696_n.jpg?_nc_cat=104&ccb=2&_nc_sid=7206a8&_nc_ohc=VrrMhKrbV7QAX8sC2aH&_nc_ht=scontent-bom1-1.xx&tp=6&oh=b59ef4a030082a803a5f97eb509fa247&oe=600E78A3"
    return (
        <Container>

       
        <div>
<div style={{
  height: "200px",
  width: "500px"
}}>
   
      <ConversationList>        
        <Conversation name="Pranjal" lastSenderName="Pranjal" size = "lg" info="Aaj Pizza Khaane ka Mann ho raha hai Bhai, Order Kare?">
          <Avatar src={pranjal} name="Pranjal" />
        </Conversation>
        <Conversation name="Simran" lastSenderName="Simran" size = "lg" info="I wanna make n eat lasagna">
          <Avatar src={simran} name="Simran" />
        </Conversation>
        
      </ConversationList>
    </div>
    
        </div>
        </Container>
    )
}
