import { For } from "solid-js";
import useRedux from "./useRedux";
import reduxStore from "./store";
import actions from "./actions";

export const ImmutableStores = () => {
  const [store, { addTodo, toggleTodo }] = useRedux(
    reduxStore,
    actions
  );
  let input: any;
  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={store.todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log("Create", text)
          return <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onchange={[toggleTodo, id]}
            />
            <span
              style={{ "text-decoration": todo.completed ? "line-through" : "none"}}
            >{text}</span>
          </div>
        }}
      </For>
    </>
  );
};