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

  ];

  return (
    <div className={dialogues.dialogues}>
      <div className={dialogues.dialoguesList}>
        
        <div className={dialogues.dialogue}>
          <Dialogue name={dialoguesAuthors[0].name} id={dialoguesAuthors[0].id} />
        </div>
        <div className={dialogues.dialogue}>
          <Dialogue name={dialoguesAuthors[1].name} id={dialoguesAuthors[1].id} />
        </div>
        <div className={dialogues.dialogue}>
          <Dialogue name={dialoguesAuthors[2].name} id={dialoguesAuthors[2].id} />
        </div>
        
        
      </div>

      
        <div className={dialogues.messages}>
          <Message message={messagesList[0].message} />
          <Message message={messagesList[1].message} />
          <Message message={messagesList[2].message} />

        </div>
    </div>
  );
};

export default Dialogues;