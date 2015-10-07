import React from "react";
import PostList from "./PostList";
import Form from "./form";
import PostActions from "../actions/PostActions";

import PostStore from "../stores/PostStore";

let readState = () => {
  console.log("?. Reading the state now");
  return { posts: PostStore.getAll() };
};

export default React.createClass({
  getInitialState() {
    return readState();
  },
  addNewPost(postToAdd) {
    // let currentPosts = this.state.posts;
    // currentPosts.unshift(this.preparePost(postToAdd));
    // var newPostObject = new PostObject();
    // newPostObject.save(postToAdd);
    // this.setState({posts: currentPosts});
  },
  onChange() {
    console.log("5. State has changed");
    this.setState(readState());
  },
  // preparePost(attributes) {
  //   let post = Object.assign({}, attributes);
  //   post.preview = post.body.slice(0, 140);
  //   return post;
  // },
  componentDidMount() {
    PostActions.startFetchAll();
    PostStore.addChangeListener(this.onChange);
  },
  componentWillUnmount() {
    PostStore.removeChangeListener(this.onChange);
  },
  render() {
    return (
      <div>
        <PostList posts={this.state.posts}>
        </PostList>
        <Form addPost={this.addNewPost} />
      </div>
    );
  }
});
