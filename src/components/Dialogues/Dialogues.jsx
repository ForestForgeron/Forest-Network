import { NavLink } from 'react-router-dom';
import Dialogue from './Dialogue/Dialogue';
import dialogues from './Dialogues.module.css';
import Messages from './Messages/Message';


const Dialogues = (props) => {

  const conversationsItems = props.conversationsList.map(
    item => <Dialogue name={item.name} id={item.id} />
  );

  const messagesItems = props.messagesList.map(
    message => <Messages message={message.message} />
  );

  return (
    <div className={dialogues.dialogues}>
      <div className={dialogues.dialoguesList}>
        
        <div className={dialogues.dialogue}>
          { conversationsItems }
        </div>
  
      </div>

      
        <div className={dialogues.messages}>
          { messagesItems }
        </div>
    </div>
  );
};

export default Dialogues;