export const data = JSON.parse("{\"key\":\"v-a75e0f00\",\"path\":\"/posts/DevOps/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html\",\"title\":\"软件安装及高可用部署(一)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"软件安装及高可用部署(一)\",\"author\":\"ztq\",\"tag\":[\"运维\"],\"category\":[\"CICD\"],\"date\":\"2022-11-11T11:25:00.000Z\",\"description\":\"本文介绍了磁盘挂载、JDK安装、Keepalived安装 一、硬盘挂载 （1）查看设备的挂载情况 lsblk或lsblk –f或者fdisk -l （2）分区 fdisk /dev/vdb 其中/dev/vdb表示上图未挂载的硬盘 分区步骤如下图，下图以/dev/sdb为例\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/DevOps/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"软件安装及高可用部署(一)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本文介绍了磁盘挂载、JDK安装、Keepalived安装 一、硬盘挂载 （1）查看设备的挂载情况 lsblk或lsblk –f或者fdisk -l （2）分区 fdisk /dev/vdb 其中/dev/vdb表示上图未挂载的硬盘 分区步骤如下图，下图以/dev/sdb为例\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"运维\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-11-11T11:25:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"软件安装及高可用部署(一)\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-11-11T11:25:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"（1）查看设备的挂载情况\",\"slug\":\"_1-查看设备的挂载情况\",\"link\":\"#_1-查看设备的挂载情况\",\"children\":[]},{\"level\":2,\"title\":\"（2）分区\",\"slug\":\"_2-分区\",\"link\":\"#_2-分区\",\"children\":[]},{\"level\":2,\"title\":\"（3）格式化\",\"slug\":\"_3-格式化\",\"link\":\"#_3-格式化\",\"children\":[]},{\"level\":2,\"title\":\"（4）挂载\",\"slug\":\"_4-挂载\",\"link\":\"#_4-挂载\",\"children\":[]},{\"level\":2,\"title\":\"（5）设置可以自动挂载（永久挂载，当你重启 Linux 之后，仍然可以挂载）\",\"slug\":\"_5-设置可以自动挂载-永久挂载-当你重启-linux-之后-仍然可以挂载\",\"link\":\"#_5-设置可以自动挂载-永久挂载-当你重启-linux-之后-仍然可以挂载\",\"children\":[]},{\"level\":2,\"title\":\"（6）查看\",\"slug\":\"_6-查看\",\"link\":\"#_6-查看\",\"children\":[]},{\"level\":2,\"title\":\"（1）官网下载需要安装版本jdk，下载地址\",\"slug\":\"_1-官网下载需要安装版本jdk-下载地址\",\"link\":\"#_1-官网下载需要安装版本jdk-下载地址\",\"children\":[]},{\"level\":2,\"title\":\"（2）拷贝至linux安装目录\",\"slug\":\"_2-拷贝至linux安装目录\",\"link\":\"#_2-拷贝至linux安装目录\",\"children\":[]},{\"level\":2,\"title\":\"（3）配置环境变量\",\"slug\":\"_3-配置环境变量\",\"link\":\"#_3-配置环境变量\",\"children\":[]},{\"level\":2,\"title\":\"（4）验证是否安装成功\",\"slug\":\"_4-验证是否安装成功\",\"link\":\"#_4-验证是否安装成功\",\"children\":[]},{\"level\":2,\"title\":\"(1)安装\",\"slug\":\"_1-安装\",\"link\":\"#_1-安装\",\"children\":[]},{\"level\":2,\"title\":\"(2)配置\",\"slug\":\"_2-配置\",\"link\":\"#_2-配置\",\"children\":[]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.52,\"words\":456},\"filePathRelative\":\"posts/DevOps/软件安装及高可用部署.md\",\"localizedDate\":\"2022年11月11日\",\"excerpt\":\"<p>本文介绍了磁盘挂载、JDK安装、Keepalived安装</p>\\n<h1> 一、硬盘挂载</h1>\\n<h2> （1）查看设备的挂载情况</h2>\\n<p>lsblk或lsblk –f或者fdisk -l<br>\\n<img src=\\\"/assets/images/bushu1.png\\\" alt=\\\"img\\\" loading=\\\"lazy\\\"><br>\\n<img src=\\\"/assets/images/bushu2.png\\\" alt=\\\"img\\\" loading=\\\"lazy\\\"></p>\\n<h2> （2）分区</h2>\\n<p>fdisk /dev/vdb   其中/dev/vdb表示上图未挂载的硬盘<br>\\n分区步骤如下图，下图以/dev/sdb为例<br>\\n<img src=\\\"/assets/images/bushu3.png\\\" alt=\\\"img\\\" loading=\\\"lazy\\\"><br>\\n<img src=\\\"/assets/images/bushu4.png\\\" alt=\\\"img\\\" loading=\\\"lazy\\\"><br>\\n<img src=\\\"/assets/images/bushu5.png\\\" alt=\\\"img\\\" loading=\\\"lazy\\\"></p>\",\"autoDesc\":true}")
