import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { TodoType } from "../../../types";

type Inputs = {
  todo: string;
};

const Create = ({
  todos,
  setTodos,
}: {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //   add todo to localStorage and localState
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newItem: TodoType = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      value: data.todo,
      status: "todo",
    };
    setTodos((prevTodos) => [...prevTodos, newItem]);
    localStorage.setItem("todos", JSON.stringify([...todos, newItem]));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} flexDirection={"column"} rowGap={5}>
        <Typography variant="h6">Please Enter Something Todo .</Typography>
        <TextField
          id="todo"
          label="Todo"
          variant="standard"
          {...register("todo", { required: true })}
          sx={{ width: "18rem" }}
        />
        <Button variant="contained" type="submit" sx={{ paddingX: "5rem" }}>
          Add
        </Button>
        {errors.todo && (
          <Typography variant="subtitle1" color="warning">
            Todo can't be empty !
          </Typography>
        )}
      </Box>
    </form>
  );
};

export default Create;
