// src/redux/Store.js
import { createStore } from "redux";
import { Reducer } from "./Reducer";

export const Store = createStore(Reducer);
