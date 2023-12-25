const express = require("express");
const route = express.Router();

let data = [
  {
    post: "mathematics fourth expect spring wherever throat winter fewer settlers income noun sit race hat rose card easy win practical sheep modern fence table game",
    id: "39b1b482-2557-5781-8301-7beafc98647d",
    user: "Nicholas Barrett",
  },
  {
    post: "mathematics fourth expect spring wherever throat winter fewer settlers income noun sit rac",
    id: "0c86314d-47f7-5f88-9740-cd418895d279",
    user: "Emily Todd  ",
  },
  {
    post: "gulf political mine begun pack thirty hot lovely pond question sale they show excitement pour bush went understanding lips guide top object outer traffic",
    id: "e270d796-2084-5fd4-90db-b21f36804b270c86314d-47f7-5f88-9740-cd418895d279 2fd7f9db-42a2-502d-af11-78caa4b9d90a",
    user: "Ruth Patterson",
  },
];

route.get("/getPosts", require("./getPosts"));

route.get("/getSinglePost", require("./getSinglePost"));

// post : add new blog
route.post("/addPost", require("./addBlog"));

// put
route.put("/editPost/:id", require("./editBlog"));
// delete
route.delete("/deletePost/:id", require("./deleteBlog"));
module.exports = route;
