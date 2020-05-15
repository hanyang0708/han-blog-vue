import 'element-ui/lib/theme-chalk/base.css';
import Vue from 'vue'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import { 
    Button, 
    Container, 
    Header, 
    Aside, 
    Main, 
    Row, 
    Col, 
    Divider, 
    Card, 
    InfiniteScroll, 
    Tabs, 
    TabPane,
    Form,
    FormItem,
    Input,
    Message,
    Footer,
    Dialog,
    Switch,
} from 'element-ui'

Vue.use(Button)
    .use(Container)
    .use(Header)
    .use(Aside)
    .use(Main)
    .use(Row)
    .use(Col)
    .use(Divider)
    .use(Card)
    .use(InfiniteScroll)
    .use(Tabs)
    .use(TabPane)
    .use(Form)
    .use(FormItem)
    .use(Input)
    .use(Footer)
    .use(Dialog)
    .use(Switch)

Vue.component(CollapseTransition.name, CollapseTransition)

let elMessage = {
    success: (message)=>{
        Message({
            message: message,
            center: true,
            type: 'success'
        });
    },
    error: (message)=>{
        Message({
            message: message,
            center: true,
            type: 'error'
        });
    },
    warning: (message)=>{
        Message({
            message: message,
            center: true,
            type: 'warning'
        });
    },
}

Vue.prototype.$message = elMessage;