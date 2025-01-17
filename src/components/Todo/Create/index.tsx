import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { TodoType } from "../../../types";
import { useTranslation } from "react-i18next";

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
  
  const { t } = useTranslation();
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
        <Typography variant="h6">{t("todo.guid_text")}</Typography>
        <TextField
          id="todo"
          label={t("todo.todo")}
          variant="standard"
          {...register("todo", { required: true })}
          sx={{ width: "18rem" }}
        />
        <Button variant="contained" type="submit" sx={{ paddingX: "5rem" }}>
          {t("todo.add")}
        </Button>
        {errors.todo && (
          <Typography variant="subtitle1" color="warning">
            {t("todo.warning")}
          </Typography>
        )}
      </Box>
    </form>
  );
};

export default Create;
