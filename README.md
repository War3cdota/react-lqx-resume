<a href="https://war3cdota.github.io/react-lqx-resume/">Demo</a>

## 干啥的
使用了**create react app + typescript**模仿的一个简历生成器，使用第三方的库：

- google的图表API生成扇形图，并将其包装成React组件，进行自定义。
- 使用**monaco editor**在线编辑器对简历内容进行在线编辑，并实时展示。

## 怎么做

1. 页面设计+布局，参考了之前的静态页面，并将其优化，找出其中的HTML元素之间的布局关系，然后抽象并封装成可以复用的UI Component，其中可以使用阿里巴巴矢量图标库下的svg图标生成css库的方式使用图标。
2. 搭建**create react app + typescript**的开发环境，快速掌握typescript，并进行相应的**react组件**的开发。
3. 调通页面数据的展示部分的组件逻辑，并进行图表等第三方UI组件的开发。
4. 完成整个页面内容展示的开发后。再进行editor组件，涉及monaco editor第三方组件，以及编辑，重置，pdf导出功能。

## 参考&&鸣谢（排名不分先后）
参考模板：https://tracy-nwu.github.io/resume/

create react app + typescript学习：https://create-react-app.dev/docs/adding-typescript/

​							https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets（学习指导）

typescript快速入门+速查：https://2ality.com/2018/04/type-notation-typescript.html（**这篇blog非常好，快速入门typescript**）

js+css API：https://developer.mozilla.org/zh-CN/

flex布局：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

​				https://www.ruanyifeng.com/blog/2015/07/flex-examples.html

​				https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

react-API：https://reactjs.org/docs/react-api.html

React引入静态JS（引入本地JS需要修改配置文件，太麻烦了，所以直接引用Web库）：https://zhuanlan.zhihu.com/p/58297149

图表API：https://developers.google.com/chart/interactive/docs/gallery/piechart#fullhtml

monaco editor的react组件库：https://github.com/react-monaco-editor/react-monaco-editor

~~外部点击事件~~（废弃，改用Modal实现）：https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

Modal实现：https://www.30secondsofcode.org/react/s/modalreact

​						https://github.com/react-monaco-editor/react-monaco-editor/blob/master/example/index.js

项目发布到githubpages：https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

