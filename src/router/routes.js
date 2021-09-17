import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Blog from "@/views/Blog";
import BlogDetail from "@/views/Blog/BlogDetail";
export default [
  { name: "Home", path: "/", component: Home, meta: { title: "首页" } },
  { name: "About", path: "/About", component: About, meta: { title: "关于" } },
  {
    name: "Message",
    path: "/Message",
    component: Message,
    meta: { title: "留言" },
  },
  {
    name: "Project",
    path: "/Project",
    component: Project,
    meta: { title: "项目" },
  },
  { name: "Blog", path: "/Blog", component: Blog, meta: { title: "文章" } },
  {
    name: "BlogCategory",
    path: "/blog/cate/:categoryId",
    component: Blog,
    meta: { title: "文章详情" },
  },
  {
    name: "BlogDetail",
    path: "/blog/:id",
    component: BlogDetail,
    meta: { title: "文章详情" },
  },
];
