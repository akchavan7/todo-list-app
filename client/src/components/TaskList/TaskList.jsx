import "./TaskList.css";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

export default function TaskList(props) {
  const { id, text } = props;
  return (
    <div className="todo-row">
      <div onClick={() => {}}>{text}</div>
      <div className="icons">
        <DoneIcon onClick={() => {}} className="delete-icon" />
        <EditIcon onClick={() => {}} className="edit-icon" />
      </div>
    </div>
  );
}
