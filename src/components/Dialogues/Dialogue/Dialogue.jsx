import { NavLink } from 'react-router-dom';
import dialogues from '../Dialogues.module.css';

const Dialogue = (props) => {

  return (
    <div className={dialogues.dialogue}>
      <NavLink to={'/dialogues/' + props.id}>
        { props.name }
      </NavLink>
      
    </div>
  );
};

export default Dialogue;