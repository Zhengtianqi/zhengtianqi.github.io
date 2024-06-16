export const data = JSON.parse("{\"key\":\"v-61cafd0d\",\"path\":\"/posts/database/%E5%88%9D%E8%AF%86redis%EF%BC%885%EF%BC%89-%E5%86%85%E5%AD%98%E8%B0%83%E4%BC%98.html\",\"title\":\"初识redis（5）-内存调优\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"初识redis（5）-内存调优\",\"author\":\"ztq\",\"tag\":[\"redis\"],\"category\":[\"数据库\"],\"date\":\"2021-08-02T00:14:00.000Z\",\"description\":\"1、优化 Redis 内存使用 合理的 Redis 实例，内存的占有量不应当超过 60%，当内存使用率过高时，应该予以清理及优化。 2、使用 ziplist &amp; intset ziplist 优化机制 ziplist 实现了 “紧凑” 的数据结构，通过尽可能减少非数据节点的占用，以提供内存密度。 image-20210802000308665\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/database/%E5%88%9D%E8%AF%86redis%EF%BC%885%EF%BC%89-%E5%86%85%E5%AD%98%E8%B0%83%E4%BC%98.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"初识redis（5）-内存调优\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1、优化 Redis 内存使用 合理的 Redis 实例，内存的占有量不应当超过 60%，当内存使用率过高时，应该予以清理及优化。 2、使用 ziplist &amp; intset ziplist 优化机制 ziplist 实现了 “紧凑” 的数据结构，通过尽可能减少非数据节点的占用，以提供内存密度。 image-20210802000308665\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"redis\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-08-02T00:14:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"初识redis（5）-内存调优\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-08-02T00:14:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"ziplist 优化机制\",\"slug\":\"ziplist-优化机制\",\"link\":\"#ziplist-优化机制\",\"children\":[]},{\"level\":2,\"title\":\"intset 优化机制\",\"slug\":\"intset-优化机制\",\"link\":\"#intset-优化机制\",\"children\":[]},{\"level\":2,\"title\":\"分布式 “数据分片”\",\"slug\":\"分布式-数据分片\",\"link\":\"#分布式-数据分片\",\"children\":[]},{\"level\":2,\"title\":\"单实例 “数据分片”\",\"slug\":\"单实例-数据分片\",\"link\":\"#单实例-数据分片\",\"children\":[]},{\"level\":2,\"title\":\"基于业务进行优化\",\"slug\":\"基于业务进行优化\",\"link\":\"#基于业务进行优化\",\"children\":[]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":4.25,\"words\":1275},\"filePathRelative\":\"posts/database/初识redis（5）-内存调优.md\",\"localizedDate\":\"2021年8月2日\",\"excerpt\":\"<h1> 1、优化 Redis 内存使用</h1>\\n<p>合理的 Redis 实例，内存的占有量不应当超过 60%，当内存使用率过高时，应该予以清理及优化。</p>\\n<h1> 2、使用 ziplist &amp; intset</h1>\\n<h2> ziplist 优化机制</h2>\\n<p>ziplist 实现了 “紧凑” 的数据结构，通过尽可能减少非数据节点的占用，以提供内存密度。</p>\\n<figure><img src=\\\"/assets/images/image-20210802000308665.png\\\" alt=\\\"image-20210802000308665\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>image-20210802000308665</figcaption></figure>\",\"autoDesc\":true}")
