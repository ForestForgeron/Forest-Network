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

  const dialoguesAuthors = [
    {
      id: 1,
      name: 'Olga',
    },

    {
      id: 2,
      name: 'Andrey',
    },

    {
      id: 3,
      name: 'Gena',
    },

    {
      id: 4,
      name: 'Ilya',
    },

    {
      id: 5,
      name: 'Victor',
    },

  ];

  const messagesList = [
    {
      id: 1,
      message: 'Hi! How are you?',
    },

    {
      id: 2,
      message: 'Nice weather today!',
    },

    {
      id: 3,
      message: 'Might and Magic',
    },

    {
      id: 4,
      message: 'yo',
    },

    {
      id: 5,
      message: 'me gusto',
    },

  ];

  const authorsList = dialoguesAuthors.map(
    author => <Dialogue name={author.name} id={author.id} />
  );

  const messagesItems = messagesList.map(
    message => <Message message={message.message} />
  );

  return (
    <div className={dialogues.dialogues}>
      <div className={dialogues.dialoguesList}>
        
        <div className={dialogues.dialogue}>
          { authorsList }
        </div>
  
      </div>

      
        <div className={dialogues.messages}>
          { messagesItems }
        </div>
    </div>
  );
};

export default Dialogues;