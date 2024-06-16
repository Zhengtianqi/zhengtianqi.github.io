const t=JSON.parse('{"key":"v-1b8bf3cf","path":"/posts/spring/SpringCloud%E4%BD%BF%E7%94%A8Feign-Ribbon.html","title":"SpringCloud使用Feign+Ribbon","lang":"zh-CN","frontmatter":{"title":"SpringCloud使用Feign+Ribbon","author":"郑天祺","tag":["SpringCloud"],"category":["spring"],"date":"2020-12-14T12:39:00.000Z","description":"1、引入依赖 &lt;dependency&gt; &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt; &lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/spring/SpringCloud%E4%BD%BF%E7%94%A8Feign-Ribbon.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"SpringCloud使用Feign+Ribbon"}],["meta",{"property":"og:description","content":"1、引入依赖 &lt;dependency&gt; &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"SpringCloud"}],["meta",{"property":"article:published_time","content":"2020-12-14T12:39:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud使用Feign+Ribbon\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-14T12:39:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.59,"words":478},"filePathRelative":"posts/spring/SpringCloud使用Feign-Ribbon.md","localizedDate":"2020年12月14日","excerpt":"<h1> 1、引入依赖</h1>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependency<span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>com<span class=\\"token punctuation\\">.</span>alibaba<span class=\\"token punctuation\\">.</span>cloud<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>spring<span class=\\"token operator\\">-</span>cloud<span class=\\"token operator\\">-</span>starter<span class=\\"token operator\\">-</span>alibaba<span class=\\"token operator\\">-</span>nacos<span class=\\"token operator\\">-</span>discovery<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependency<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>dependency<span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>groupId<span class=\\"token punctuation\\">&gt;</span></span>org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>cloud<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>groupId<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>artifactId<span class=\\"token punctuation\\">&gt;</span></span>spring<span class=\\"token operator\\">-</span>cloud<span class=\\"token operator\\">-</span>starter<span class=\\"token operator\\">-</span>netflix<span class=\\"token operator\\">-</span>ribbon<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>artifactId<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>dependency<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
