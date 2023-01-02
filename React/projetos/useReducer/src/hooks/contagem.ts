import { useReducer } from "react";

const initialState = {
    count: 0
}

interface reducerState {
    count: number;
}

interface reducerAction {
    type: string;
}

const reducer = (state: reducerState, action: reducerAction) => {




    switch (action.type) {
        case "add":
            return { ...state, count: state.count + 1 };
        case "del":
            return { ...state, count: state.count - 1 }
        case "reset":
            return initialState;
    }

    return state;
}

export const useContagem = () => {
    return useReducer(reducer, initialState);
}