export const data = JSON.parse("{\"key\":\"v-009e1325\",\"path\":\"/posts/database/ElasticSearch%E5%AE%A2%E6%88%B7%E7%AB%AF.html\",\"title\":\"ElasticSearch客户端\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ElasticSearch客户端\",\"author\":\"郑天祺\",\"tag\":[\"es\"],\"category\":[\"大数据\"],\"date\":\"2020-07-15T11:10:00.000Z\",\"description\":\"以下为springboot整合elasticsearch es版本为7.2.1 1、先引入es的依赖 &lt;!-- ES --&gt; &lt;dependency&gt; &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt; &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt; &lt;version&gt;7.2.1&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.elasticsearch&lt;/groupId&gt; &lt;artifactId&gt;elasticsearch&lt;/artifactId&gt; &lt;version&gt;7.2.1&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt; &lt;artifactId&gt;elasticsearch-rest-client-sniffer&lt;/artifactId&gt; &lt;version&gt;7.2.1&lt;/version&gt; &lt;/dependency&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/database/ElasticSearch%E5%AE%A2%E6%88%B7%E7%AB%AF.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ElasticSearch客户端\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"以下为springboot整合elasticsearch es版本为7.2.1 1、先引入es的依赖 &lt;!-- ES --&gt; &lt;dependency&gt; &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt; &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt; &lt;version&gt;7.2.1&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.elasticsearch&lt;/groupId&gt; &lt;artifactId&gt;elasticsearch&lt;/artifactId&gt; &lt;version&gt;7.2.1&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt; &lt;artifactId&gt;elasticsearch-rest-client-sniffer&lt;/artifactId&gt; &lt;version&gt;7.2.1&lt;/version&gt; &lt;/dependency&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"es\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-07-15T11:10:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"ElasticSearch客户端\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-07-15T11:10:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":2.03,\"words\":610},\"filePathRelative\":\"posts/database/ElasticSearch客户端.md\",\"localizedDate\":\"2020年7月15日\",\"excerpt\":\"<p>以下为springboot整合elasticsearch</p>\\n<p>es版本为7.2.1</p>\\n<h1> 1、先引入es的依赖</h1>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code>  <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">!</span><span class=\\\"token operator\\\">--</span> <span class=\\\"token constant\\\">ES</span>  <span class=\\\"token operator\\\">--</span><span class=\\\"token operator\\\">&gt;</span>\\n        <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>org<span class=\\\"token punctuation\\\">.</span>elasticsearch<span class=\\\"token punctuation\\\">.</span>client<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>elasticsearch<span class=\\\"token operator\\\">-</span>rest<span class=\\\"token operator\\\">-</span>high<span class=\\\"token operator\\\">-</span>level<span class=\\\"token operator\\\">-</span>client<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>version<span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token number\\\">7.2</span><span class=\\\"token number\\\">.1</span><span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>version<span class=\\\"token operator\\\">&gt;</span>\\n        <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n        <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>org<span class=\\\"token punctuation\\\">.</span>elasticsearch<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>elasticsearch<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>version<span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token number\\\">7.2</span><span class=\\\"token number\\\">.1</span><span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>version<span class=\\\"token operator\\\">&gt;</span>\\n        <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n        <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>org<span class=\\\"token punctuation\\\">.</span>elasticsearch<span class=\\\"token punctuation\\\">.</span>client<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>elasticsearch<span class=\\\"token operator\\\">-</span>rest<span class=\\\"token operator\\\">-</span>client<span class=\\\"token operator\\\">-</span>sniffer<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n            <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>version<span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token number\\\">7.2</span><span class=\\\"token number\\\">.1</span><span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>version<span class=\\\"token operator\\\">&gt;</span>\\n        <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
