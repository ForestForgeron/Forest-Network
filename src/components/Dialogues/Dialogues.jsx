import { NavLink } from 'react-router-dom';
import dialogues from './Dialogues.module.css';

const Dialogue = (props) => {

  return (
    <div className={dialogues.dialogue}>
      <NavLink to={'/dialogues/' + props.id}>
        {props.name}
      </NavLink>
      
    </div>
  );
};

const Message = (props) => {

  return (
    <div className={dialogues.message}>
      {props.message}
    </div>
  );
};

const Dialogues = () => {
  return (
    <div className={dialogues.dialogues}>
      <div className={dialogues.dialoguesList}>
        
        <div className={dialogues.dialogue}>
          <Dialogue name="Olga" id='1' />
        </div>
        <div className={dialogues.dialogue}>
          <Dialogue name="Ilya" id='2' />
        </div>
        <div className={dialogues.dialogue}>
          <Dialogue name="Gena" id='3' />        
        </div>
        <div className={dialogues.dialogue}>
          <Dialogue name="Andrey" id='4' />        
        </div>
        <div className={dialogues.dialogue}>
          <Dialogue name="Victor" id='5' />        
        </div>
        
      </div>

      
        <div className={dialogues.messages}>
          <Message message="Hi! How are you?" />
          <Message message="Nice weather today!" />
          <Message message="Might and Magic" />
          <Message message="Let's go" />
          <Message message="Forest theme, man" />

        </div>
    </div>
  );
};

export default Dialogues;