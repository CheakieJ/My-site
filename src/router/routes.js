import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Blog from "@/views/Blog";
import BlogDetail from "@/views/Blog/BlogDetail";
export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/About", component: About },
  { name: "Message", path: "/Message", component: Message },
  { name: "Project", path: "/Project", component: Project },
  { name: "Blog", path: "/Blog", component: Blog },
  { name: "BlogCategory", path: "/blog/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
];
