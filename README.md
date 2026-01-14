自用，项目基于https://github.com/LOG1997/log-lottery
## 功能改动

在原有功能基础上，对抽奖系统进行了以下改动：

### 🎯 核心功能优化
- ✅ 后台中奖名单支持排序和导出功能
- ✅ 新增一键重置抽奖状态按钮
- ✅ 新增奖项奖品名称功能，可分别设置奖项名称和奖品名称
- ✅ 前台可手动选择奖项
- ✅ 前台显示参与抽奖人数
- ✅ 抽奖时自动播放音乐，结束停止
- ✅ 抽奖按钮响应速度优化
- ✅ 支持批量上传图片
- ✅ 奖项卡片样式优化
- ✅ 图片预览效果增强
- ✅ 响应式设计优化


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

