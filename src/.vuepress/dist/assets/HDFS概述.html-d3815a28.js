const t=JSON.parse('{"key":"v-518e86aa","path":"/posts/database/HDFS%E6%A6%82%E8%BF%B0.html","title":"HDFS概述","lang":"zh-CN","frontmatter":{"title":"HDFS概述","author":"郑天祺","tag":["HDFS","HADOOP"],"category":["大数据"],"date":"2019-12-16T10:10:00.000Z","description":"本文权威指南读书笔记 一、HDFS的设计前提和目标 ​\\t（1）存储大文件：HDFS支持GB级别大小的文件； ​\\t（2）流式数据访问：保证高吞吐量 ​\\t（3）容错性：完善的冗余备份机制； ​\\t（4）简单的一致性模型：一次写入多次读取； ​\\t（5）移动计算优于移动数据：HDFS使应用计算移动到离他最近数据位置的接口； ​\\t（6）兼容各种硬件和软件平台。 ​\\tHDFS不适合的场景： ​\\t（1）大量小文件：文件的元数据存储在NameNode内容中，大量小文件意味着元数据增加，会占用大量内存；","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/database/HDFS%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"HDFS概述"}],["meta",{"property":"og:description","content":"本文权威指南读书笔记 一、HDFS的设计前提和目标 ​\\t（1）存储大文件：HDFS支持GB级别大小的文件； ​\\t（2）流式数据访问：保证高吞吐量 ​\\t（3）容错性：完善的冗余备份机制； ​\\t（4）简单的一致性模型：一次写入多次读取； ​\\t（5）移动计算优于移动数据：HDFS使应用计算移动到离他最近数据位置的接口； ​\\t（6）兼容各种硬件和软件平台。 ​\\tHDFS不适合的场景： ​\\t（1）大量小文件：文件的元数据存储在NameNode内容中，大量小文件意味着元数据增加，会占用大量内存；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"HDFS"}],["meta",{"property":"article:tag","content":"HADOOP"}],["meta",{"property":"article:published_time","content":"2019-12-16T10:10:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-16T10:10:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"(1) NameNode","slug":"_1-namenode","link":"#_1-namenode","children":[]},{"level":2,"title":"(2) DataNode","slug":"_2-datanode","link":"#_2-datanode","children":[]},{"level":2,"title":"（3）元信息的持久化","slug":"_3-元信息的持久化","link":"#_3-元信息的持久化","children":[]},{"level":2,"title":"（4）SecondaryNameNode","slug":"_4-secondarynamenode","link":"#_4-secondarynamenode","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":4.94,"words":1483},"filePathRelative":"posts/database/HDFS概述.md","localizedDate":"2019年12月16日","excerpt":"<p>本文权威指南读书笔记</p>\\n<h1> 一、HDFS的设计前提和目标</h1>\\n<p>​\\t（1）存储大文件：HDFS支持GB级别大小的文件；</p>\\n<p>​\\t（2）流式数据访问：保证高吞吐量</p>\\n<p>​\\t（3）容错性：完善的冗余备份机制；</p>\\n<p>​\\t（4）简单的一致性模型：一次写入多次读取；</p>\\n<p>​\\t（5）移动计算优于移动数据：HDFS使应用计算移动到离他最近数据位置的接口；</p>\\n<p>​\\t（6）兼容各种硬件和软件平台。</p>\\n<p>​\\tHDFS不适合的场景：</p>\\n<p>​\\t（1）大量小文件：文件的元数据存储在NameNode内容中，大量小文件意味着元数据增加，会占用大量内存；</p>","autoDesc":true}');export{t as data};
