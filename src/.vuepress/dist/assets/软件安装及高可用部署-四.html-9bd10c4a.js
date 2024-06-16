const e=JSON.parse('{"key":"v-28bbcd58","path":"/posts/DevOps/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2-%E5%9B%9B.html","title":"软件安装及高可用部署(四)","lang":"zh-CN","frontmatter":{"title":"软件安装及高可用部署(四)","author":"ztq","tag":["运维"],"category":["CICD"],"date":"2022-11-16T10:37:00.000Z","description":"本文介绍了redis安装 一、下载 官网下载需要安装版本redis，下载地址 https://redis.io/download http://download.redis.io/releases/ (所有版本)","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/DevOps/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2-%E5%9B%9B.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"软件安装及高可用部署(四)"}],["meta",{"property":"og:description","content":"本文介绍了redis安装 一、下载 官网下载需要安装版本redis，下载地址 https://redis.io/download http://download.redis.io/releases/ (所有版本)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"运维"}],["meta",{"property":"article:published_time","content":"2022-11-16T10:37:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"软件安装及高可用部署(四)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-16T10:37:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[{"level":2,"title":"修改启动文件","slug":"修改启动文件","link":"#修改启动文件","children":[]},{"level":2,"title":"重载系统服务","slug":"重载系统服务","link":"#重载系统服务","children":[]},{"level":2,"title":"添加自启","slug":"添加自启","link":"#添加自启","children":[]},{"level":2,"title":"在redis-master服务器上修改keepalived配置文件。","slug":"在redis-master服务器上修改keepalived配置文件。","link":"#在redis-master服务器上修改keepalived配置文件。","children":[]},{"level":2,"title":"在redis-master服务器上创建检测脚本。","slug":"在redis-master服务器上创建检测脚本。","link":"#在redis-master服务器上创建检测脚本。","children":[]},{"level":2,"title":"为检测脚本添加可执行权限。","slug":"为检测脚本添加可执行权限。","link":"#为检测脚本添加可执行权限。","children":[]},{"level":2,"title":"在redis-master服务器上验证虚拟IP是否绑定。","slug":"在redis-master服务器上验证虚拟ip是否绑定。","link":"#在redis-master服务器上验证虚拟ip是否绑定。","children":[]},{"level":2,"title":"验证keepalived服务是否可用。","slug":"验证keepalived服务是否可用。","link":"#验证keepalived服务是否可用。","children":[]},{"level":2,"title":"在redis-backup服务器上修改keepalived配置文件。","slug":"在redis-backup服务器上修改keepalived配置文件。","link":"#在redis-backup服务器上修改keepalived配置文件。","children":[]},{"level":2,"title":"在redis-backup服务器上创建检测脚本。","slug":"在redis-backup服务器上创建检测脚本。","link":"#在redis-backup服务器上创建检测脚本。","children":[]},{"level":2,"title":"为检测脚本添加可执行权限。","slug":"为检测脚本添加可执行权限。-1","link":"#为检测脚本添加可执行权限。-1","children":[]},{"level":2,"title":"在redis-backup服务器上创建处理脚本。","slug":"在redis-backup服务器上创建处理脚本。","link":"#在redis-backup服务器上创建处理脚本。","children":[]},{"level":2,"title":"为处理脚本添加可执行权限。","slug":"为处理脚本添加可执行权限。","link":"#为处理脚本添加可执行权限。","children":[]},{"level":2,"title":"在redis-backup服务器上，验证redis从库是否可以升级为主库。","slug":"在redis-backup服务器上-验证redis从库是否可以升级为主库。","link":"#在redis-backup服务器上-验证redis从库是否可以升级为主库。","children":[]},{"level":2,"title":"恢复使用主库Redis","slug":"恢复使用主库redis","link":"#恢复使用主库redis","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":4.81,"words":1442},"filePathRelative":"posts/DevOps/软件安装及高可用部署-四.md","localizedDate":"2022年11月16日","excerpt":"<p>本文介绍了redis安装</p>\\n<h1> 一、下载</h1>\\n<p>官网下载需要安装版本redis，下载地址<br>\\n<a href=\\"https://redis.io/download\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://redis.io/download</a><br>\\n<a href=\\"http://download.redis.io/releases/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://download.redis.io/releases/</a>  (所有版本)</p>","autoDesc":true}');export{e as data};
