import classes from './Heading.module.css';

function Heading(props) {
  return (
    <h1><span>{props.number}.</span> {props.text}</h1>
  );
}

export default Heading;
