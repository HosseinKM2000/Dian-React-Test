import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { SetTodosType, TodoEditObjType, TodoType } from "../../../../types";
import Edit from "../Edit";

const Row = ({
  todo,
  todos,
  setTodos,
}: {
  todo: TodoType;
  todos: TodoType[];
  setTodos: SetTodosType;
}) => {
  const [todoForEdit, setTodoForEdit] = useState<null | string>(null); // Updated type to null | string | number

  //   add todo to localStorage and localState
  const setTodosHandler = (todos: TodoType[]) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //   Edit Handler
  const toDoHandler = (obj: TodoEditObjType) => {
    if (obj.type === "status" && obj.id) {
      const newTodos = todos.map((todo) =>
        todo.id === obj.id && obj.status
          ? { ...todo, status: obj.status }
          : todo
      );
      setTodosHandler(newTodos);
    }
    if (obj.type === "delete" && obj.id) {
      const newTodos = todos.filter((todo) => todo.id !== obj.id);
      setTodosHandler(newTodos);
    }
    if (obj.type === "edit") {
      const newTodos = todos.map((todo) =>
        todo.id === todoForEdit && obj.value
          ? { ...todo, value: obj.value }
          : todo
      );
      setTodosHandler(newTodos);
      setTodoForEdit(null); // Reset the edit state
    }
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
        rowGap: 2,
        backgroundColor:
          todo.status === "todo"
            ? "silver"
            : todo.status === "done"
              ? "green"
              : "red",
      }}
    >
      {todo.id !== todoForEdit && (
        <Box
          display="flex"
          columnGap={1}
          position={"relative"}
          justifyContent={"end"}
          width={"100%"}
        >
          {todo.status === "todo" && (
            <>
              <IconButton
                edge="end"
                aria-label="done"
                onClick={() =>
                  toDoHandler({ type: "status", id: todo.id, status: "done" })
                }
              >
                <DownloadDoneIcon color="inherit" />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="cancel"
                onClick={() =>
                  toDoHandler({ type: "status", id: todo.id, status: "cancel" })
                }
              >
                <CloseIcon color="inherit" />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => setTodoForEdit(todo.id)}
              >
                <EditIcon color="inherit" />
              </IconButton>
            </>
          )}
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => toDoHandler({ type: "delete", id: todo.id })}
          >
            <DeleteIcon color="inherit" />
          </IconButton>
        </Box>
      )}
      {todo.id === todoForEdit ? (
        <Edit
          todo={todo}
          toDoHandler={toDoHandler}
          setTodoForEdit={setTodoForEdit} // This should be passed properly
        />
      ) : (
        <ListItemText
          primary={todo.value}
          sx={{
            wordWrap: "break-word",
            width: "100%",
            textAlign: "left",
            color: "black",
          }}
        />
      )}
    </ListItem>
  );
};

export default Row;
