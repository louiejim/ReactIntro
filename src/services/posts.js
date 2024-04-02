import { posts as data } from "../data/posts.js";
import { generateId } from "../utils.js";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...posts];
}

export function getPostsByUser(userId) {
  return posts.filter((post) => post.userId === userId);
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((post) => post.id === id);
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  const postId = generateId(posts);
  posts = [{ id: postId, ...post }, ...posts];
}

export function updatePostTitle(id, title) {
  //update post title
  posts = posts.map((post) => {
    if (post.id == id) {
      return {
        ...post,
        title,
      };
    }
    return title;
  });
}

export function updatePostBody(id, body) {
  //update post body
  posts.map((post) => {
    if (post.id == id) {
      return {
        body,
        ...post,
      };
    }
    return posts;
  });
}

function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  post = post.map((p) => {
    return {
      ...p,
      ...post,
    };
  });
}

function deletePostBy(id) {
  //delete post by id
  posts = posts.filter((post) => post.id !== id);
}

function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  posts = posts.filter((post) => post.userId !== userId);
}
