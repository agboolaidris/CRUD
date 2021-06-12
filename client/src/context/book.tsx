import React, { createContext, ReactNode, useContext, useReducer } from "react";

const initialState = {
  data: [],
};

const reducer = (state, action: any) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        data: action.payload,
      };

      break;

    default:
      return state;
      break;
  }
};

const BookDispatchContext = createContext(null);
const BookStateContext = createContext(initialState);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);

  return (
    <BookDispatchContext.Provider value={dispatch}>
      <BookStateContext.Provider value={state}>
        {children}
      </BookStateContext.Provider>
    </BookDispatchContext.Provider>
  );
};

export const useBookState = () => useContext(BookStateContext);
export const useBookDispatch = () => useContext(BookDispatchContext);
