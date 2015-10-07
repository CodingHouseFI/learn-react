import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";

import { EventEmitter } from "events";

let _posts = [];
let preparePost = (attributes) => {
  let post = Object.assign({}, attributes);
  post.preview = post.body.slice(0, 140);
  return post;
};

const CHANGE_EVENT = "CHANGE";

class PostEmitter extends EventEmitter {
  getAll() {
    return _posts.map(po => preparePost(po.attributes));
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let PostStore = new PostEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_POSTS:
      console.log("4. Inside the Store register case method");
      console.log(action.data);
      _posts = action.data;
      PostStore.emitChange();
      break;
    default:
     // do nothing
  }
});

export default PostStore;
