const e=JSON.parse('{"key":"v-4c7466b4","path":"/posts/database/Redis%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%89%EF%BC%89-%E5%AD%97%E5%85%B8.html","title":"Redis数据结构与对象（三）-字典","lang":"zh-CN","frontmatter":{"title":"Redis数据结构与对象（三）-字典","author":"ztq","tag":["redis"],"category":["数据库"],"date":"2022-01-25T15:58:00.000Z","description":"字典的实现 Redis 的字典使用哈希表作为底层实现，一个哈希表里面可以有多个哈希表节点，而每个哈希表节点就保存了字典中的一个键值对。 接下来的三个小节将分别介绍 Redis 的哈希表、哈希表节点、以及字典的实现。 哈希表 Redis 字典所使用的哈希表由 dict.h/dictht 结构定义： typedef struct dictht { // 哈希表数组 dictEntry **table; // 哈希表大小 unsigned long size; // 哈希表大小掩码，用于计算索引值 // 总是等于 size - 1 unsigned long sizemask; // 该哈希表已有节点的数量 unsigned long used; } dictht;","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/database/Redis%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%89%EF%BC%89-%E5%AD%97%E5%85%B8.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"Redis数据结构与对象（三）-字典"}],["meta",{"property":"og:description","content":"字典的实现 Redis 的字典使用哈希表作为底层实现，一个哈希表里面可以有多个哈希表节点，而每个哈希表节点就保存了字典中的一个键值对。 接下来的三个小节将分别介绍 Redis 的哈希表、哈希表节点、以及字典的实现。 哈希表 Redis 字典所使用的哈希表由 dict.h/dictht 结构定义： typedef struct dictht { // 哈希表数组 dictEntry **table; // 哈希表大小 unsigned long size; // 哈希表大小掩码，用于计算索引值 // 总是等于 size - 1 unsigned long sizemask; // 该哈希表已有节点的数量 unsigned long used; } dictht;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:published_time","content":"2022-01-25T15:58:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis数据结构与对象（三）-字典\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-25T15:58:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[{"level":2,"title":"字典的实现","slug":"字典的实现","link":"#字典的实现","children":[]},{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]},{"level":2,"title":"哈希表节点","slug":"哈希表节点","link":"#哈希表节点","children":[]},{"level":2,"title":"字典","slug":"字典","link":"#字典","children":[]},{"level":2,"title":"哈希算法","slug":"哈希算法","link":"#哈希算法","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":4.82,"words":1445},"filePathRelative":"posts/database/Redis数据结构与对象（三）-字典.md","localizedDate":"2022年1月25日","excerpt":"<h2> 字典的实现</h2>\\n<p>Redis 的字典使用哈希表作为底层实现，一个哈希表里面可以有多个哈希表节点，而每个哈希表节点就保存了字典中的一个键值对。</p>\\n<p>接下来的三个小节将分别介绍 Redis 的哈希表、哈希表节点、以及字典的实现。</p>\\n<h2> 哈希表</h2>\\n<p>Redis 字典所使用的哈希表由 <code>dict.h/dictht</code> 结构定义：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>typedef struct dictht <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 哈希表数组</span>\\n    dictEntry <span class=\\"token operator\\">*</span><span class=\\"token operator\\">*</span>table<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 哈希表大小</span>\\n    unsigned <span class=\\"token keyword\\">long</span> size<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 哈希表大小掩码，用于计算索引值</span>\\n    <span class=\\"token comment\\">// 总是等于 size - 1</span>\\n    unsigned <span class=\\"token keyword\\">long</span> sizemask<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 该哈希表已有节点的数量</span>\\n    unsigned <span class=\\"token keyword\\">long</span> used<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span> dictht<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
