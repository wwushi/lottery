项目基于https://github.com/LOG1997/log-lottery
## 功能改动

在原有功能基础上，对抽奖系统进行了以下改动：

- ✅ 后台中奖名单支持排序和导出功能
- ✅ 新增一键重置抽奖状态按钮
- ✅ 新增奖项奖品名称功能，可分别设置奖项名称和奖品名称
- ✅ 注释掉设置页面图片管理功能
- ✅ 前台可手动选择奖项
- ✅ 前台奖项列表中，已抽完的奖项不可手动选中
- ✅ 去除奖品图片功能，简化界面显示
- ✅ 调整奖项名称和奖品名称的字体颜色和大小
- ✅ 主标题默认为空不显示
- ✅ 前台显示参与抽奖人数
- ✅ 抽奖时自动播放音乐，结束停止
- ✅ 前后台点击设置/首页按钮从新标签页打开
- ✅ 抽奖时设置按钮不能点击，显示为灰色
- ✅ 抽奖按钮响应速度优化
- ✅ 抽完奖后，点击继续按钮后才能手动选择奖项
- ✅ 导入本地音乐文件，支持抽奖时自动播放



需要更多功能或发现bug请留言[issues](https://github.com/LOG1997/log-lottery/issues)


## 开发

安装依赖

```bash
pnpm i
or
npm install
```

开发运行

```bash
pnpm dev
or
npm run dev
```

打包

```bash
pnpm build
or
npm run build
```

若想直接以打开html文件的方式运行，请执行以下命令进行打包。打包完成后在dist目录中直接打开index.html即可。

```bash
pnpm build:file
or
npm run build:file
```


## Docker支持

构建镜像

```bash
docker build -t log-lottery
```

运行容器

```bash
docker run -d -p 9279:80 log-lottery
```

容器运行成功后即可在本地通过<http://localhost:9279/log-lottery/>访问

