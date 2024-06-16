const e=JSON.parse('{"key":"v-98e8f354","path":"/posts/java/Yarn%E6%A6%82%E8%BF%B0.html","title":"Yarn概述","lang":"zh-CN","frontmatter":{"title":"Yarn概述","author":"郑天祺","tag":["HADOOP"],"category":["大数据"],"date":"2019-12-18T09:12:00.000Z","description":"一、组件介绍 ​\\tYarn的基本思想是将 JobTracker 的资源管理和作业的调度/监控两大主要职能拆分为两个独立的进程： ​\\t\\ta. 一个全局的 Resource Manager ​\\t\\tb. 每个应用对应的 Application Master（AM） ​\\tResource Manager 和每个节点上的 Node Manager（NM）组成了全新的通用操作系统，以分布式的方式管理应用程序。 ​\\tResource Manager拥有为系统中所有应用分配资源的决定权。与之相关的是应用程序的Application Master，负责与Resource Manager协商资源，并与Node Manager协同工作来执行和监控任务。","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/java/Yarn%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"Yarn概述"}],["meta",{"property":"og:description","content":"一、组件介绍 ​\\tYarn的基本思想是将 JobTracker 的资源管理和作业的调度/监控两大主要职能拆分为两个独立的进程： ​\\t\\ta. 一个全局的 Resource Manager ​\\t\\tb. 每个应用对应的 Application Master（AM） ​\\tResource Manager 和每个节点上的 Node Manager（NM）组成了全新的通用操作系统，以分布式的方式管理应用程序。 ​\\tResource Manager拥有为系统中所有应用分配资源的决定权。与之相关的是应用程序的Application Master，负责与Resource Manager协商资源，并与Node Manager协同工作来执行和监控任务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"HADOOP"}],["meta",{"property":"article:published_time","content":"2019-12-18T09:12:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Yarn概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-18T09:12:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"（1）Resource Manager","slug":"_1-resource-manager","link":"#_1-resource-manager","children":[]},{"level":2,"title":"（2）Application Master","slug":"_2-application-master","link":"#_2-application-master","children":[]},{"level":2,"title":"（3）Node Manager","slug":"_3-node-manager","link":"#_3-node-manager","children":[]},{"level":2,"title":"（4）Resource Request 和 Container","slug":"_4-resource-request-和-container","link":"#_4-resource-request-和-container","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":2.09,"words":628},"filePathRelative":"posts/java/Yarn概述.md","localizedDate":"2019年12月18日","excerpt":"<h1> 一、组件介绍</h1>\\n<p>​\\tYarn的基本思想是将 JobTracker 的资源管理和作业的调度/监控两大主要职能拆分为两个独立的进程：</p>\\n<p>​\\t\\ta. 一个全局的 Resource Manager</p>\\n<p>​\\t\\tb. 每个应用对应的 Application Master（AM）</p>\\n<p>​\\tResource Manager 和每个节点上的 Node Manager（NM）组成了全新的通用操作系统，以分布式的方式管理应用程序。</p>\\n<p>​\\tResource Manager拥有为系统中所有应用分配资源的决定权。与之相关的是应用程序的Application Master，负责与Resource Manager协商资源，并与Node Manager协同工作来执行和监控任务。</p>","autoDesc":true}');export{e as data};
