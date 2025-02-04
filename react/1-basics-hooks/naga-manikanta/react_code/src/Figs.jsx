import { useContext, useMemo } from "react";
import { Tasks_Context } from "./App";

export default function Figs() {
  const { state, dispatch } = useContext(Tasks_Context);
  const count = useMemo(() => {
    return state.reduce((s, i) => {
      if (i.status === true) {
        s += 1;
      }
      return s;
    }, 0);
  }, [state]);

  return (
    <div className="figs-container">
      <div className="completed-count">
        <p>Total Tasks: {state.length}</p>
        <p>Completed Tasks: {count}</p>
      </div>
    </div>
  );
}
