import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'
export default [
	{path:"/",component:ShowBlog},
	{path:"/add",component:AddBlog},
	{path:"/edit/:id",component:EditBlog},
	{path:"/blog/:id",component:SingleBlog},
]