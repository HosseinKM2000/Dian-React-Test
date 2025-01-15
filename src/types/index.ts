export interface User {
  name: string | null;
  theme: string | null;
}
export interface TodoType {
  id: string;
  value: string;
  status: "todo" | "done" | "cancel";
}

export interface TodoEditObjType {
  type: string;
  id?: string;
  status?: "todo" | "done" | "cancel";
  value?: string;
}

export type SetTodosType = React.Dispatch<React.SetStateAction<TodoType[]>>;
