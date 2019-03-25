import Home from '@/module/home/page/home.vue'
import pageList from '@/module/cms/page/pageList.vue'
import pageAdd from '@/module/cms/page/pageAdd.vue'
import pageEdit from '@/module/cms/page/pageEdit.vue'
export default [{
  path: '/',
  component: Home,
  name: 'CMS内容管理',
  hidden: false,
  children: [
    {path: '/cms/page/list', name: '页面列表', component: pageList, hidden: false},
    {path: '/cms/page/add', name: '新增页面', component: pageAdd, hidden: true},
    {path: '/cms/page/edit/:pageId', name: '修改页面', component: pageEdit, hidden: true}
  ]
}]
