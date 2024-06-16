export const data = JSON.parse("{\"key\":\"v-5d0db34d\",\"path\":\"/posts/spring/SpringCloud%E4%BD%BF%E7%94%A8Feign-Ribbon-Hystrix.html\",\"title\":\"SpringCloud使用Feign+Ribbon+Hystrix\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SpringCloud使用Feign+Ribbon+Hystrix\",\"author\":\"郑天祺\",\"tag\":[\"SpringCloud\"],\"category\":[\"spring\"],\"date\":\"2020-12-14T12:39:00.000Z\",\"description\":\"1、引入依赖 &lt;dependency&gt; &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt; &lt;/dependency&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/spring/SpringCloud%E4%BD%BF%E7%94%A8Feign-Ribbon-Hystrix.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SpringCloud使用Feign+Ribbon+Hystrix\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1、引入依赖 &lt;dependency&gt; &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt; &lt;/dependency&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"SpringCloud\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-14T12:39:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"SpringCloud使用Feign+Ribbon+Hystrix\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-12-14T12:39:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1）.启动两个服务端，端口分别为8080，8090\",\"slug\":\"_1-启动两个服务端-端口分别为8080-8090\",\"link\":\"#_1-启动两个服务端-端口分别为8080-8090\",\"children\":[]},{\"level\":2,\"title\":\"2）.启动服务消费端，多次调用对应的服务\",\"slug\":\"_2-启动服务消费端-多次调用对应的服务\",\"link\":\"#_2-启动服务消费端-多次调用对应的服务\",\"children\":[]},{\"level\":2,\"title\":\"3）. 关掉两个服务端实例\",\"slug\":\"_3-关掉两个服务端实例\",\"link\":\"#_3-关掉两个服务端实例\",\"children\":[]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.31,\"words\":392},\"filePathRelative\":\"posts/spring/SpringCloud使用Feign-Ribbon-Hystrix.md\",\"localizedDate\":\"2020年12月14日\",\"excerpt\":\"<h1> 1、引入依赖</h1>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>org<span class=\\\"token punctuation\\\">.</span>springframework<span class=\\\"token punctuation\\\">.</span>boot<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>spring<span class=\\\"token operator\\\">-</span>boot<span class=\\\"token operator\\\">-</span>starter<span class=\\\"token operator\\\">-</span>actuator<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>org<span class=\\\"token punctuation\\\">.</span>springframework<span class=\\\"token punctuation\\\">.</span>cloud<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>spring<span class=\\\"token operator\\\">-</span>cloud<span class=\\\"token operator\\\">-</span>starter<span class=\\\"token operator\\\">-</span>openfeign<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>com<span class=\\\"token punctuation\\\">.</span>alibaba<span class=\\\"token punctuation\\\">.</span>cloud<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>spring<span class=\\\"token operator\\\">-</span>cloud<span class=\\\"token operator\\\">-</span>starter<span class=\\\"token operator\\\">-</span>alibaba<span class=\\\"token operator\\\">-</span>nacos<span class=\\\"token operator\\\">-</span>discovery<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency<span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId<span class=\\\"token punctuation\\\">&gt;</span></span>org<span class=\\\"token punctuation\\\">.</span>springframework<span class=\\\"token punctuation\\\">.</span>cloud<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>groupId<span class=\\\"token operator\\\">&gt;</span>\\n    <span class=\\\"token generics\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId<span class=\\\"token punctuation\\\">&gt;</span></span>spring<span class=\\\"token operator\\\">-</span>cloud<span class=\\\"token operator\\\">-</span>starter<span class=\\\"token operator\\\">-</span>netflix<span class=\\\"token operator\\\">-</span>hystrix<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>artifactId<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>dependency<span class=\\\"token operator\\\">&gt;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
