export const data = JSON.parse("{\"key\":\"v-2c13bb28\",\"path\":\"/posts/database/%E5%88%9D%E8%AF%86redis%EF%BC%883%EF%BC%89-%E6%8C%81%E4%B9%85%E5%8C%96.html\",\"title\":\"初识redis（3）-持久化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"初识redis（3）-持久化\",\"author\":\"ztq\",\"tag\":[\"redis\"],\"category\":[\"数据库\"],\"date\":\"2021-08-01T22:43:00.000Z\",\"description\":\"1、Redis 数据持久化概念 Redis 的数据持久化，即：将内存中的数据存储到硬盘（本文中亦称之为 “落地”）。Redis 提供了 RDB 和 AOF 两种持久化的方法： •\\tRDB：基于特定的时间间隔将数据 “全量快照”，生成 RDB 文件并落地 •\\tAOF (Append Only File)：将 Redis 接收到命令以 “增量追加” 的方式，写入 AOF 文件 Redis 允许使用任意一种持久化方法，亦允许同时使用或同时不使用。以下将阐述两者涉及的配置选项、命令以及优缺点。 2、RDB 与 AOF 优缺点和选择\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/database/%E5%88%9D%E8%AF%86redis%EF%BC%883%EF%BC%89-%E6%8C%81%E4%B9%85%E5%8C%96.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"初识redis（3）-持久化\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1、Redis 数据持久化概念 Redis 的数据持久化，即：将内存中的数据存储到硬盘（本文中亦称之为 “落地”）。Redis 提供了 RDB 和 AOF 两种持久化的方法： •\\tRDB：基于特定的时间间隔将数据 “全量快照”，生成 RDB 文件并落地 •\\tAOF (Append Only File)：将 Redis 接收到命令以 “增量追加” 的方式，写入 AOF 文件 Redis 允许使用任意一种持久化方法，亦允许同时使用或同时不使用。以下将阐述两者涉及的配置选项、命令以及优缺点。 2、RDB 与 AOF 优缺点和选择\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"redis\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-08-01T22:43:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"初识redis（3）-持久化\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-08-01T22:43:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"配置选项\",\"slug\":\"配置选项\",\"link\":\"#配置选项\",\"children\":[]},{\"level\":2,\"title\":\"RDB 相关\",\"slug\":\"rdb-相关\",\"link\":\"#rdb-相关\",\"children\":[{\"level\":3,\"title\":\"•\\tSAVE\",\"slug\":\"•save\",\"link\":\"#•save\",\"children\":[]},{\"level\":3,\"title\":\"•\\tBGSAVE\",\"slug\":\"•bgsave\",\"link\":\"#•bgsave\",\"children\":[]},{\"level\":3,\"title\":\"•\\tLASTSAVE\",\"slug\":\"•lastsave\",\"link\":\"#•lastsave\",\"children\":[]}]},{\"level\":2,\"title\":\"配置选项\",\"slug\":\"配置选项-1\",\"link\":\"#配置选项-1\",\"children\":[]},{\"level\":2,\"title\":\"AOF 相关\",\"slug\":\"aof-相关\",\"link\":\"#aof-相关\",\"children\":[{\"level\":3,\"title\":\"appendfsync 配置选项：\",\"slug\":\"appendfsync-配置选项\",\"link\":\"#appendfsync-配置选项\",\"children\":[]},{\"level\":3,\"title\":\"no-appendfsync-on-rewrite 配置选项：\",\"slug\":\"no-appendfsync-on-rewrite-配置选项\",\"link\":\"#no-appendfsync-on-rewrite-配置选项\",\"children\":[]},{\"level\":3,\"title\":\"AOF 文件 rewrite\",\"slug\":\"aof-文件-rewrite\",\"link\":\"#aof-文件-rewrite\",\"children\":[]},{\"level\":3,\"title\":\"BGREWRITEAOF 命令：\",\"slug\":\"bgrewriteaof-命令\",\"link\":\"#bgrewriteaof-命令\",\"children\":[]},{\"level\":3,\"title\":\"auto-aof-rewrite-percentage & auto-aof-rewrite-min-size 配置选项：\",\"slug\":\"auto-aof-rewrite-percentage-auto-aof-rewrite-min-size-配置选项\",\"link\":\"#auto-aof-rewrite-percentage-auto-aof-rewrite-min-size-配置选项\",\"children\":[]}]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":4.45,\"words\":1335},\"filePathRelative\":\"posts/database/初识redis（3）-持久化.md\",\"localizedDate\":\"2021年8月2日\",\"excerpt\":\"<h1> 1、Redis 数据持久化概念</h1>\\n<p>Redis 的数据持久化，即：将内存中的数据存储到硬盘（本文中亦称之为 “落地”）。Redis 提供了 RDB 和 AOF 两种持久化的方法：<br>\\n•\\tRDB：基于特定的时间间隔将数据 “全量快照”，生成 RDB 文件并落地<br>\\n•\\tAOF (Append Only File)：将 Redis 接收到命令以 “增量追加” 的方式，写入 AOF 文件<br>\\nRedis 允许使用任意一种持久化方法，亦允许同时使用或同时不使用。以下将阐述两者涉及的配置选项、命令以及优缺点。</p>\\n<h1> 2、RDB 与 AOF 优缺点和选择</h1>\",\"autoDesc\":true}")
