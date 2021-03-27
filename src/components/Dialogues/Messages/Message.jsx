import dialogues from '../Dialogues.module.css';

const Messages = (props) => {

  return (
    <div className={dialogues.message}>
      {props.message}
    </div>
  );
};

export default Messages;