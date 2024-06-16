const e=JSON.parse('{"key":"v-046c70dc","path":"/posts/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80ID%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5.html","title":"分布式全局唯一ID生成策略","lang":"zh-CN","frontmatter":{"title":"分布式全局唯一ID生成策略","author":"郑天祺","tag":["分布式"],"category":["分布式"],"date":"2019-10-09T12:00:00.000Z","description":"一、需求 在复杂分布式系统中，往往需要对大量的数据和消息进行唯一标识。 当需要将节点之间在不同时间的交互做唯一标识，数据日渐增长， 对数据库的分库分表后需要有一个唯一ID来标识一条数据或消息，数据库的自增ID显然不能满足需求。 此时一个能够生成全局唯一ID的系统是非常必要的。 二、ID生成的原则： 1、全局唯一性：不能出现重复的ID（最基本的要求） 2、高性能，低延迟。（不要太繁杂的算法） 3、易于存储，（占用较低的空间） 三、相对应的算法：","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80ID%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"分布式全局唯一ID生成策略"}],["meta",{"property":"og:description","content":"一、需求 在复杂分布式系统中，往往需要对大量的数据和消息进行唯一标识。 当需要将节点之间在不同时间的交互做唯一标识，数据日渐增长， 对数据库的分库分表后需要有一个唯一ID来标识一条数据或消息，数据库的自增ID显然不能满足需求。 此时一个能够生成全局唯一ID的系统是非常必要的。 二、ID生成的原则： 1、全局唯一性：不能出现重复的ID（最基本的要求） 2、高性能，低延迟。（不要太繁杂的算法） 3、易于存储，（占用较低的空间） 三、相对应的算法："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:published_time","content":"2019-10-09T12:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式全局唯一ID生成策略\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-09T12:00:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"1、雪花算法 snowflake","slug":"_1、雪花算法-snowflake","link":"#_1、雪花算法-snowflake","children":[{"level":3,"title":"（1）优点：","slug":"_1-优点","link":"#_1-优点","children":[]},{"level":3,"title":"（2）缺点：","slug":"_2-缺点","link":"#_2-缺点","children":[]}]},{"level":2,"title":"2、UUID","slug":"_2、uuid","link":"#_2、uuid","children":[{"level":3,"title":"(1)    优点：","slug":"_1-优点-1","link":"#_1-优点-1","children":[]},{"level":3,"title":"(2)    缺点：","slug":"_2-缺点-1","link":"#_2-缺点-1","children":[]}]},{"level":2,"title":"3、利用数据库","slug":"_3、利用数据库","link":"#_3、利用数据库","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":5.43,"words":1630},"filePathRelative":"posts/distributed/分布式全局唯一ID生成策略.md","localizedDate":"2019年10月9日","excerpt":"<h1> 一、需求</h1>\\n<p>在复杂分布式系统中，往往需要对大量的数据和消息进行唯一标识。</p>\\n<p>当需要将节点之间在不同时间的交互做唯一标识，数据日渐增长，</p>\\n<p>对数据库的分库分表后需要有一个唯一ID来标识一条数据或消息，数据库的自增ID显然不能满足需求。</p>\\n<p>此时一个能够生成全局唯一ID的系统是非常必要的。</p>\\n<h1> 二、ID生成的原则：</h1>\\n<p>1、全局唯一性：不能出现重复的ID（最基本的要求）</p>\\n<p>2、高性能，低延迟。（不要太繁杂的算法）</p>\\n<p>3、易于存储，（占用较低的空间）</p>\\n<h1> 三、相对应的算法：</h1>","autoDesc":true}');export{e as data};
