//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById } from "/src/services/users.js";
import * as x from "/src/services/comments.js";
import * as y from "/src/services/posts.js";

updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());
console.log("get user by Id", getUserById(1));

//comment
console.log("get Comment by Id ", x.getCommentById(1));
console.log("get Comment by post Id ", x.getCommentsByPostId(1));
x.updateCommentBody(1, { name: "Louiejim Hernandez" });
console.log(
  "get Comment by post Id with louiejim Name body",
  x.getCommentsByPostId(1)
);
x.deleteCommentById(1);
console.log("delete comment", x.getCommentsByPostId(1));
x.addComment({
  postId: 1,
  name: "hello",
  email: "test@gmail.com",
  body: "this is body",
});
console.log("check add comment", x.getComment());

//post
console.log("post...");
console.log(y.getPosts());
console.log("get Post By user id ", y.getPostsByUser(1));
console.log("get post by Id", y.getPostById(2));

y.addPost({ userId: 1, title: "test title", body: "this is a body" });
console.log("check add post ", y.getPostsByUser(1));
y.updatePostTitle(1, "testing lang");
console.log("check update ", y.getPostsByUser(1));

//update post body

y.updatePostBody(1, "buddies");
console.log("check update ", y.getPostById(1));
