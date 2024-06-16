export const data = JSON.parse("{\"key\":\"v-12693d7d\",\"path\":\"/posts/database/Hive%E8%B0%83%E4%BC%98.html\",\"title\":\"Hive调优\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Hive调优\",\"author\":\"郑天祺\",\"tag\":[\"hive\"],\"category\":[\"大数据\"],\"date\":\"2020-01-21T16:48:00.000Z\",\"description\":\"一、使用EXPLAIN ​\\t\\t查看逻辑，更多用 EXPLAIN EXTENDED 二、限制调整LIMIT 三、JOIN优化 ​\\t\\t表足够小用map-side JOIN 四、本地模式 ​\\t对于小数据集，单机或单线程执行时间比较短 hive&gt; set oldjobtracker=${hiveconf.mapred.job.tracker}; hive&gt; set mapred.job.tracker=local; hive&gt; set mapred.tmp.dir=/home/edward/tmp hive&gt; SELECT * from people WHERE firstname=bob; hive&gt; set mapred.job.tracker=${oldjobtracker};\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/database/Hive%E8%B0%83%E4%BC%98.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Hive调优\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一、使用EXPLAIN ​\\t\\t查看逻辑，更多用 EXPLAIN EXTENDED 二、限制调整LIMIT 三、JOIN优化 ​\\t\\t表足够小用map-side JOIN 四、本地模式 ​\\t对于小数据集，单机或单线程执行时间比较短 hive&gt; set oldjobtracker=${hiveconf.mapred.job.tracker}; hive&gt; set mapred.job.tracker=local; hive&gt; set mapred.tmp.dir=/home/edward/tmp hive&gt; SELECT * from people WHERE firstname=bob; hive&gt; set mapred.job.tracker=${oldjobtracker};\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"hive\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-01-21T16:48:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Hive调优\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-01-21T16:48:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.61,\"words\":182},\"filePathRelative\":\"posts/database/Hive调优.md\",\"localizedDate\":\"2020年1月22日\",\"excerpt\":\"<h1> 一、使用EXPLAIN</h1>\\n<p>​\\t\\t查看逻辑，更多用 EXPLAIN EXTENDED</p>\\n<h1> 二、限制调整LIMIT</h1>\\n<h1> 三、JOIN优化</h1>\\n<p>​\\t\\t表足够小用map-side JOIN</p>\\n<h1> 四、本地模式</h1>\\n<p>​\\t对于小数据集，单机或单线程执行时间比较短</p>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code>hive<span class=\\\"token operator\\\">&gt;</span> set oldjobtracker<span class=\\\"token operator\\\">=</span>$<span class=\\\"token punctuation\\\">{</span>hiveconf<span class=\\\"token punctuation\\\">.</span>mapred<span class=\\\"token punctuation\\\">.</span>job<span class=\\\"token punctuation\\\">.</span>tracker<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\nhive<span class=\\\"token operator\\\">&gt;</span> set mapred<span class=\\\"token punctuation\\\">.</span>job<span class=\\\"token punctuation\\\">.</span>tracker<span class=\\\"token operator\\\">=</span>local<span class=\\\"token punctuation\\\">;</span>\\nhive<span class=\\\"token operator\\\">&gt;</span> set mapred<span class=\\\"token punctuation\\\">.</span>tmp<span class=\\\"token punctuation\\\">.</span>dir<span class=\\\"token operator\\\">=</span><span class=\\\"token operator\\\">/</span>home<span class=\\\"token operator\\\">/</span>edward<span class=\\\"token operator\\\">/</span>tmp\\nhive<span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token constant\\\">SELECT</span> <span class=\\\"token operator\\\">*</span> from people <span class=\\\"token class-name\\\">WHERE</span> firstname<span class=\\\"token operator\\\">=</span>bob<span class=\\\"token punctuation\\\">;</span>\\nhive<span class=\\\"token operator\\\">&gt;</span> set mapred<span class=\\\"token punctuation\\\">.</span>job<span class=\\\"token punctuation\\\">.</span>tracker<span class=\\\"token operator\\\">=</span>$<span class=\\\"token punctuation\\\">{</span>oldjobtracker<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
