import Box from "@mui/material/Box";
import { SetTodosType, TodoType } from "../../../types";
import Row from "./Row";

type PropsType = {
  todos: TodoType[];
  setTodos: SetTodosType;
};

const List = ({ todos, setTodos }: PropsType) => {
  return (
    <Box
      sx={{
        height: "80vh",
        width: { xs: "20rem", md: "25rem" },
        bgcolor: "transparent",
        rowGap: 2,
        display: todos.length === 0 ? "none" : "flex",
        flexDirection: "column",
        overflowY: "scroll",
      }}
      className={"scroll-none"}
    >
      {todos.map((todo) => (
        <Row key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
      ))}
    </Box>
  );
};

export default List;
