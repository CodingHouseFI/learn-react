import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";

class PostEmitter {
}

let PostStore = new PostEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_POSTS:
      console.log("4. Inside the Store register case method");
      console.log(action.data);
      // do something with the data
      break;
    default:
     // do nothing
  }
});

export default PostStore;
