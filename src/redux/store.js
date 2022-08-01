import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import productSaga from "./productSaga";
import cartSaga from "./cartSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    });

sagaMiddleware.run(productSaga);
sagaMiddleware.run(cartSaga);

export default store;



// import { createStore } from "redux";
// import rootReducer from "./reducers";
// const store = createStore(rootReducer);

// export default store;