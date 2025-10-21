import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import {thunk} from "redux-thunk";

// Import your reducers
import { authReducer } from "./Auth/authReducer";
import { productsReducer } from "./products/productsReducer";

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Setup Redux DevTools and middleware
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
export const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Create the persisted store
export const persistor = persistStore(store);
