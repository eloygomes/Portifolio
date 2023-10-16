import { configureStore, combineReducers } from "@reduxjs/toolkit";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function navbarZindex(state = "show", action) {
  switch (action.type) {
    case "hide":
      return (state = "hide");
    case "show":
      return (state = "show");
    default:
      return state;
  }
}

function scrollBodyModalOn(state = "leave", action) {
  switch (action.type) {
    case "hold":
      return (state = "hold");
    case "leave":
      return (state = "leave");
    default:
      return state;
  }
}

// function controlParticles(state = "on", action) {
//   switch (action.type) {
//     case "off":
//       return (state = "off");
//     case "on":
//       return (state = "on");
//     default:
//       return state;
//   }
// }

function menuDisplayOpt(state = "home", action) {
  switch (action.type) {
    case "home":
      return (state = "home");
    case "bio":
      return (state = "bio");
    case "port":
      return (state = "port");
    case "services":
      return (state = "services");
    case "carreira":
      return (state = "carreira");
    case "contato":
      return (state = "contato");
    default:
      return state;
  }
}

const reducer = combineReducers({
  counterReducer: counterReducer,
  navbarZindex: navbarZindex,
  scrollBodyModalOn: scrollBodyModalOn,
  // controlParticles: controlParticles,
  menuDisplayOpt: menuDisplayOpt,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
