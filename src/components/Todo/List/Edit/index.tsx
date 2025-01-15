import DoneAllIcon from "@mui/icons-material/DoneAll";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { TodoEditObjType, TodoType } from "../../../../types";

type Inputs = {
  todo: string;
};

type SetTodoForEditType = React.Dispatch<React.SetStateAction<null | string>>;

const Edit = ({
  todo,
  toDoHandler,
  setTodoForEdit,
}: {
  todo: TodoType;
  toDoHandler: (obj: TodoEditObjType) => void;
  setTodoForEdit: SetTodoForEditType;
}) => {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.todo);
  };

  return (
    <>
      <Box
        display="flex"
        columnGap={1}
        position={"relative"}
        justifyContent={"end"}
        width={"100%"}
      >
        <IconButton
          edge="end"
          aria-label="done"
          onClick={() => toDoHandler({ type: "edit", value: watch("todo") })}
        >
          <DoneAllIcon color="inherit" />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => setTodoForEdit(null)}
        >
          <HighlightOffIcon color="inherit" />
        </IconButton>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} flexDirection={"column"} rowGap={5}>
          <TextField
            id="todo"
            label="Todo"
            defaultValue={todo.value}
            variant="standard"
            {...register("todo", { required: true })}
            sx={{ width: "18rem" }}
          />
        </Box>
      </form>
    </>
  );
};

export default Edit;
