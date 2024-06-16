const e=JSON.parse('{"key":"v-a5c5d70e","path":"/posts/java/%E4%BA%92%E6%96%A5%E9%94%81.html","title":"互斥锁","lang":"zh-CN","frontmatter":{"title":"互斥锁","author":"郑天祺","tag":["锁"],"category":["java基础"],"date":"2019-08-31T13:13:00.000Z","description":"1、关于“互斥”和“同步”的概念 互斥 : 就是线程A访问了一组数据，线程BCD就不能同时访问这些数据，直到A停止访问了 同步 : 就是ABCD这些线程要约定一个执行的协调顺序，比如D要执行，B和C必须都得做完，而B和C要开始，A必须先得做完。 互斥 ：就是不同线程通过竞争进入临界区（共享的数据和硬件资源），为了防止访问冲突，在有限的时间内只允许其中之一独占性的使用共享资源。如不允许同时写 同步 ：关系则是多个线程彼此合作，通过一定的逻辑关系来共同完成一个任务。一般来说，同步关系中往往包含互斥，同时对临界区的资源会按照某种逻辑顺序进行访问。如先生产后使用","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/java/%E4%BA%92%E6%96%A5%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"互斥锁"}],["meta",{"property":"og:description","content":"1、关于“互斥”和“同步”的概念 互斥 : 就是线程A访问了一组数据，线程BCD就不能同时访问这些数据，直到A停止访问了 同步 : 就是ABCD这些线程要约定一个执行的协调顺序，比如D要执行，B和C必须都得做完，而B和C要开始，A必须先得做完。 互斥 ：就是不同线程通过竞争进入临界区（共享的数据和硬件资源），为了防止访问冲突，在有限的时间内只允许其中之一独占性的使用共享资源。如不允许同时写 同步 ：关系则是多个线程彼此合作，通过一定的逻辑关系来共同完成一个任务。一般来说，同步关系中往往包含互斥，同时对临界区的资源会按照某种逻辑顺序进行访问。如先生产后使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"锁"}],["meta",{"property":"article:published_time","content":"2019-08-31T13:13:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"互斥锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-08-31T13:13:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"1、关于“互斥”和“同步”的概念","slug":"_1、关于-互斥-和-同步-的概念","link":"#_1、关于-互斥-和-同步-的概念","children":[]},{"level":2,"title":"2、JAVA中synchronized和Lock是互斥锁","slug":"_2、java中synchronized和lock是互斥锁","link":"#_2、java中synchronized和lock是互斥锁","children":[]},{"level":2,"title":"3、synchronized的用法","slug":"_3、synchronized的用法","link":"#_3、synchronized的用法","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.82,"words":547},"filePathRelative":"posts/java/互斥锁.md","localizedDate":"2019年8月31日","excerpt":"<h2> 1、关于“互斥”和“同步”的概念</h2>\\n<p>互斥 : 就是线程A访问了一组数据，线程BCD就不能同时访问这些数据，直到A停止访问了<br>\\n同步 : 就是ABCD这些线程要约定一个执行的协调顺序，比如D要执行，B和C必须都得做完，而B和C要开始，A必须先得做完。</p>\\n<p>互斥 ：就是不同线程通过竞争进入临界区（共享的数据和硬件资源），为了防止访问冲突，在有限的时间内只允许其中之一独占性的使用共享资源。如不允许同时写</p>\\n<p>同步 ：关系则是多个线程彼此合作，通过一定的逻辑关系来共同完成一个任务。一般来说，同步关系中往往包含互斥，同时对临界区的资源会按照某种逻辑顺序进行访问。如先生产后使用</p>","autoDesc":true}');export{e as data};
