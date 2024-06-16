const e=JSON.parse('{"key":"v-1c6d7040","path":"/posts/java/Hash%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"Hash解决冲突的方法","lang":"zh-CN","frontmatter":{"title":"Hash解决冲突的方法","author":"郑天祺","tag":["哈希表"],"category":["面试"],"date":"2020-09-18T13:02:00.000Z","description":"1、什么是hash表 ​\\t\\t散列表（hash table，也叫哈希表），是根据关键码值（key value）而直接进行访问的数据结构。 ​\\t\\t也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫 散列函数，存放记录的数组叫做散列表。 ​\\t\\t给定表M，存在函数f（key），对于任意给定的关键字值 key，代入函数后若能得到包含改关键字的记录在表中的地址，则称表M为哈希（hash）表，函数 f（key）为哈希（hash）函数。 2、hash冲突 ​\\t\\t对应不同的关键字可能获得相同的 hash 地址，即 key1 ≠ key2，但是f（key1） = f（key2）。这种现象就是冲突，而且这种冲突只能尽可能的减少，不能完全避免。","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/java/Hash%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81%E7%9A%84%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"Hash解决冲突的方法"}],["meta",{"property":"og:description","content":"1、什么是hash表 ​\\t\\t散列表（hash table，也叫哈希表），是根据关键码值（key value）而直接进行访问的数据结构。 ​\\t\\t也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫 散列函数，存放记录的数组叫做散列表。 ​\\t\\t给定表M，存在函数f（key），对于任意给定的关键字值 key，代入函数后若能得到包含改关键字的记录在表中的地址，则称表M为哈希（hash）表，函数 f（key）为哈希（hash）函数。 2、hash冲突 ​\\t\\t对应不同的关键字可能获得相同的 hash 地址，即 key1 ≠ key2，但是f（key1） = f（key2）。这种现象就是冲突，而且这种冲突只能尽可能的减少，不能完全避免。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"哈希表"}],["meta",{"property":"article:published_time","content":"2020-09-18T13:02:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hash解决冲突的方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-18T13:02:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"1、直接定址法","slug":"_1、直接定址法","link":"#_1、直接定址法","children":[]},{"level":2,"title":"2、除留余数法","slug":"_2、除留余数法","link":"#_2、除留余数法","children":[]},{"level":2,"title":"3、数字分析法","slug":"_3、数字分析法","link":"#_3、数字分析法","children":[]},{"level":2,"title":"4、平方区中法","slug":"_4、平方区中法","link":"#_4、平方区中法","children":[]},{"level":2,"title":"1、开放定址法","slug":"_1、开放定址法","link":"#_1、开放定址法","children":[]},{"level":2,"title":"2、再哈希法","slug":"_2、再哈希法","link":"#_2、再哈希法","children":[]},{"level":2,"title":"3、链地址法","slug":"_3、链地址法","link":"#_3、链地址法","children":[]},{"level":2,"title":"4、建立公共溢出区","slug":"_4、建立公共溢出区","link":"#_4、建立公共溢出区","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"posts/java/Hash解决冲突的方法.md","localizedDate":"2020年9月18日","excerpt":"<h1> 1、什么是hash表</h1>\\n<p>​\\t\\t散列表（hash table，也叫哈希表），是根据关键码值（key value）而直接进行访问的数据结构。</p>\\n<p>​\\t\\t也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫 散列函数，存放记录的数组叫做散列表。</p>\\n<p>​\\t\\t给定表M，存在函数f（key），对于任意给定的关键字值 key，代入函数后若能得到包含改关键字的记录在表中的地址，则称表M为哈希（hash）表，函数 f（key）为哈希（hash）函数。</p>\\n<h1> 2、hash冲突</h1>\\n<p>​\\t\\t对应不同的关键字可能获得相同的 hash 地址，即 key1 ≠ key2，但是f（key1） = f（key2）。这种现象就是冲突，而且这种冲突只能尽可能的减少，不能完全避免。</p>","autoDesc":true}');export{e as data};
