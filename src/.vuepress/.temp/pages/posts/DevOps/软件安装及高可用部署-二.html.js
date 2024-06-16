export const data = JSON.parse("{\"key\":\"v-1fad5f26\",\"path\":\"/posts/DevOps/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2-%E4%BA%8C.html\",\"title\":\"软件安装及高可用部署(二)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"软件安装及高可用部署(二)\",\"author\":\"ztq\",\"tag\":[\"运维\"],\"category\":[\"CICD\"],\"date\":\"2022-11-16T09:41:00.000Z\",\"description\":\"本文介绍了Nginx安装 一、修改主机名 以 nginx-master 为例，修改所有服务器的对应的主机名。 vim /etc/hostname # 删除所有的内容，修改为要修改的主机名 nginx01 vim /etc/hosts #在第一行最后追加主机名，有127.0.0.1内容的这行 127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4 nginx01 # 重启服务器 reboot\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/DevOps/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2-%E4%BA%8C.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"软件安装及高可用部署(二)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本文介绍了Nginx安装 一、修改主机名 以 nginx-master 为例，修改所有服务器的对应的主机名。 vim /etc/hostname # 删除所有的内容，修改为要修改的主机名 nginx01 vim /etc/hosts #在第一行最后追加主机名，有127.0.0.1内容的这行 127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4 nginx01 # 重启服务器 reboot\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"运维\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-11-16T09:41:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"软件安装及高可用部署(二)\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-11-16T09:41:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"nginx-master配置\",\"slug\":\"nginx-master配置\",\"link\":\"#nginx-master配置\",\"children\":[]},{\"level\":2,\"title\":\"在nginx-master服务器上创建检测脚本。\",\"slug\":\"在nginx-master服务器上创建检测脚本。\",\"link\":\"#在nginx-master服务器上创建检测脚本。\",\"children\":[]},{\"level\":2,\"title\":\"为检测脚本添加可执行权限。\",\"slug\":\"为检测脚本添加可执行权限。\",\"link\":\"#为检测脚本添加可执行权限。\",\"children\":[]},{\"level\":2,\"title\":\"在nginx-master服务器上验证虚拟IP是否绑定。\",\"slug\":\"在nginx-master服务器上验证虚拟ip是否绑定。\",\"link\":\"#在nginx-master服务器上验证虚拟ip是否绑定。\",\"children\":[]},{\"level\":2,\"title\":\"nginx-backup配置\",\"slug\":\"nginx-backup配置\",\"link\":\"#nginx-backup配置\",\"children\":[]},{\"level\":2,\"title\":\"在nginx-backup服务器上创建检测脚本。\",\"slug\":\"在nginx-backup服务器上创建检测脚本。\",\"link\":\"#在nginx-backup服务器上创建检测脚本。\",\"children\":[]},{\"level\":2,\"title\":\"为检测脚本添加可执行权限。\",\"slug\":\"为检测脚本添加可执行权限。-1\",\"link\":\"#为检测脚本添加可执行权限。-1\",\"children\":[]},{\"level\":2,\"title\":\"在nginx-backup服务器上验证虚拟IP是否绑定。\",\"slug\":\"在nginx-backup服务器上验证虚拟ip是否绑定。\",\"link\":\"#在nginx-backup服务器上验证虚拟ip是否绑定。\",\"children\":[]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":2.74,\"words\":823},\"filePathRelative\":\"posts/DevOps/软件安装及高可用部署-二.md\",\"localizedDate\":\"2022年11月16日\",\"excerpt\":\"<p>本文介绍了Nginx安装</p>\\n<h1> 一、修改主机名</h1>\\n<p>以 nginx-master 为例，修改所有服务器的对应的主机名。</p>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code>vim <span class=\\\"token operator\\\">/</span>etc<span class=\\\"token operator\\\">/</span>hostname\\n# 删除所有的内容，修改为要修改的主机名\\nnginx01\\nvim <span class=\\\"token operator\\\">/</span>etc<span class=\\\"token operator\\\">/</span>hosts\\n#在第一行最后追加主机名，有<span class=\\\"token number\\\">127.0</span><span class=\\\"token number\\\">.0</span><span class=\\\"token number\\\">.1</span>内容的这行\\n<span class=\\\"token number\\\">127.0</span><span class=\\\"token number\\\">.0</span><span class=\\\"token number\\\">.1</span> localhost localhost<span class=\\\"token punctuation\\\">.</span>localdomain localhost4 localhost4<span class=\\\"token punctuation\\\">.</span>localdomain4\\nnginx01\\n# 重启服务器\\nreboot\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
