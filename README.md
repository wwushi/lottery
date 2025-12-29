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
...
需要更多功能或发现bug请留言[issues](https://github.com/LOG1997/log-lottery/issues)

## 详细介绍

### 配置参与人员

于人员配置管理界面下载excel模板，按要求填好数据后导入即可。

### 配置奖项

于奖项配置管理界面添加奖项后，自定义修改名称、抽取人数、是否全员参加、图片显示。

### 界面配置

可自定义配置标题、列数、卡片颜色、首页图案等。

### 图片和音乐管理

上传图片或音乐即可，数据使用indexdb在浏览器本地进行存储。

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
- ✅ 前台点击设置按钮从新标签页打开
- ✅ 后台点击首页按钮从新标签页打开
- ✅ 抽奖时设置按钮不能点击，显示为灰色
- ✅ 抽奖按钮响应速度优化
- ✅ 抽完奖后，点击继续按钮后才能手动选择奖项
- ✅ 奖项列表影藏后的呼出按钮位置优化
- ✅ 导入本地音乐文件，支持抽奖时播放

## 预览

首页

![image_home](./static/images/home.png)

![image_home_prize_list](./static//images/home_prizelist.png)

抽奖

![image_lottery](./static/images/lottery-enter.png)

![image_lottery_done](./static/images/lottery-done.png)

配置

![image_config_person_all](./static/images/config_personall.png)

![image_config_prize_list](./static/images/config_prize.png)

![image_config_view](./static/images/config-view.png)

![image_config_pattern](./static/images/config_pattern.png)

图片音乐配置

![image_config_img](./static/images/image_config.png)

![image_music](./static/images/music_music.png)

## 技术

- vue3
- threejs
- indexdb
- pinia
- daisyui

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

> 项目思路来源于 <https://github.com/moshang-xc/lottery>

## Docker支持

构建镜像

```bash
docker build -t log-lottery .
```

运行容器

```bash
docker run -d -p 9279:80 log-lottery
```

容器运行成功后即可在本地通过<http://localhost:9279/log-lottery/>访问

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LOG1997/log-lottery&type=Date)](https://star-history.com/#LOG1997/log-lottery&Date)

## License

[MIT](http://opensource.org/licenses/MIT)
