const a=JSON.parse(`{"key":"v-0f9a80e9","path":"/posts/database/Hive%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%EF%BC%882%EF%BC%89.html","title":"Hive数据操作（2）","lang":"zh-CN","frontmatter":{"title":"Hive数据操作（2）","author":"郑天祺","tag":["hive"],"category":["大数据"],"date":"2020-01-19T15:50:00.000Z","description":"Hive 中 SQL JOIN 语句，只支持等值连接 一、INNER JOIN ​\\t内连接（INNER JOIN）中，只有进行连接的两个表中都存在于连接标准相匹配的数据才会被保留下来。不支持 &gt;= 等不相等匹配、ON子句中谓词之间不能使用OR。 // 苹果公司股价 AAPL IBM股价IBM // ON子句指定了两个表间数据进行连接的条件 // WHERE子句限制了左边表是AAPL的记录，右边表是IBM的记录 hive&gt; SELECT a.ymd, a.price_close, b.price_close \\t&gt;FROM stocks a JOIN stocks b ON a.ymd = b.ymd \\t&gt;WHERE a.symbol = 'AAPL' AND b.symbol = 'IBM'; 2010-01-04 214.01 132.45 2010-01-05 214.38 130.85 ...","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/database/Hive%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%EF%BC%882%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"Hive数据操作（2）"}],["meta",{"property":"og:description","content":"Hive 中 SQL JOIN 语句，只支持等值连接 一、INNER JOIN ​\\t内连接（INNER JOIN）中，只有进行连接的两个表中都存在于连接标准相匹配的数据才会被保留下来。不支持 &gt;= 等不相等匹配、ON子句中谓词之间不能使用OR。 // 苹果公司股价 AAPL IBM股价IBM // ON子句指定了两个表间数据进行连接的条件 // WHERE子句限制了左边表是AAPL的记录，右边表是IBM的记录 hive&gt; SELECT a.ymd, a.price_close, b.price_close \\t&gt;FROM stocks a JOIN stocks b ON a.ymd = b.ymd \\t&gt;WHERE a.symbol = 'AAPL' AND b.symbol = 'IBM'; 2010-01-04 214.01 132.45 2010-01-05 214.38 130.85 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"hive"}],["meta",{"property":"article:published_time","content":"2020-01-19T15:50:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hive数据操作（2）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-19T15:50:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":4.89,"words":1468},"filePathRelative":"posts/database/Hive数据操作（2）.md","localizedDate":"2020年1月19日","excerpt":"<p>Hive 中 SQL  JOIN 语句，只支持等值连接</p>\\n<h1> 一、INNER JOIN</h1>\\n<p>​\\t内连接（INNER JOIN）中，只有进行连接的两个表中都存在于连接标准相匹配的数据才会被保留下来。不支持 &gt;= 等不相等匹配、ON子句中谓词之间不能使用OR。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 苹果公司股价 AAPL   IBM股价IBM</span>\\n<span class=\\"token comment\\">// ON子句指定了两个表间数据进行连接的条件</span>\\n<span class=\\"token comment\\">// WHERE子句限制了左边表是AAPL的记录，右边表是IBM的记录</span>\\n\\nhive<span class=\\"token operator\\">&gt;</span> <span class=\\"token constant\\">SELECT</span> a<span class=\\"token punctuation\\">.</span>ymd<span class=\\"token punctuation\\">,</span> a<span class=\\"token punctuation\\">.</span>price_close<span class=\\"token punctuation\\">,</span> b<span class=\\"token punctuation\\">.</span>price_close\\n\\t<span class=\\"token operator\\">&gt;</span><span class=\\"token constant\\">FROM</span> stocks a <span class=\\"token constant\\">JOIN</span> stocks b <span class=\\"token constant\\">ON</span> a<span class=\\"token punctuation\\">.</span>ymd <span class=\\"token operator\\">=</span> b<span class=\\"token punctuation\\">.</span>ymd \\n\\t<span class=\\"token operator\\">&gt;</span><span class=\\"token constant\\">WHERE</span> a<span class=\\"token punctuation\\">.</span>symbol <span class=\\"token operator\\">=</span> <span class=\\"token char\\">'AAPL'</span> <span class=\\"token constant\\">AND</span> b<span class=\\"token punctuation\\">.</span>symbol <span class=\\"token operator\\">=</span> <span class=\\"token char\\">'IBM'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token number\\">2010</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">01</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">04</span>  <span class=\\"token number\\">214.01</span>  <span class=\\"token number\\">132.45</span>\\n<span class=\\"token number\\">2010</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">01</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">05</span>  <span class=\\"token number\\">214.38</span>  <span class=\\"token number\\">130.85</span>\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};
