import request from "./request";

//获取文章列表
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blogs", { page, limit, categoryid });
}
//获取文章分类
export async function getBlogTypes() {
  return await request.get("/api/blogtypes");
}
//获取单个博客

export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
