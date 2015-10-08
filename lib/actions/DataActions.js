import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";

export default {
  receivedPosts(results) {
    console.log("3. Inside receivedPosts");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      data: results
    });
  },
  receivedOnePost(post) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_POST,
      post
    });
  }
}
