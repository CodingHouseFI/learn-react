import API from "../API";

export default {
  startFetchAll() {
    console.log("1. Inside the PostActions.startFetchAll");
    API.fetchPosts();
  }
}
