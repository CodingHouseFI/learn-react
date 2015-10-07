import React from "react";
import PostList from "./PostList";
import Form from "./form";

var PostObject = Parse.Object.extend("PostObject");

export default React.createClass({
  getInitialState() {
    return { posts: [] };
  },
  addNewPost(postToAdd) {
    let currentPosts = this.state.posts;
    currentPosts.unshift(this.preparePost(postToAdd));
    var newPostObject = new PostObject();
    newPostObject.save(postToAdd);
    this.setState({posts: currentPosts});
  },
  preparePost(attributes) {
    let post = Object.assign({}, attributes);
    post.preview = post.body.slice(0, 140);
    return post;
  },
  componentDidMount() {
    var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        this.setState({
          posts: results.map(po => this.preparePost(po.attributes))
        });
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
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
