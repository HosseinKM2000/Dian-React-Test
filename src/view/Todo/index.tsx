import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Create from "../../components/Todo/Create";
import List from "../../components/Todo/List";
import { TodoType } from "../../types";

const Todo = () => {
  const theme = useTheme();
  const storedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState<TodoType[] | []>([]);

  useEffect(() => {
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  }, []);

  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
      textAlign={"center"}
      padding={2}
      flexWrap={"wrap"}
      rowGap={5}
    >
      <Create todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Box>
  );
};

export default Todo;
