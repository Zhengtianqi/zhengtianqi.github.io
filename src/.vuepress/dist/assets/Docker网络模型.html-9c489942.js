const e=JSON.parse('{"key":"v-439970e4","path":"/posts/DevOps/Docker%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B.html","title":"Docker网络模型","lang":"zh-CN","frontmatter":{"title":"Docker网络模型","author":"ztq","tag":["docker"],"category":["CICD"],"date":"2022-09-01T13:26:00.000Z","description":"Docker虚拟化技术底层是基于LXC+Cgroups+AUFS（Overlay）技术实现，而我们有熟知Cgroups是Linux内核提供的一种可以限制、记录、隔离进程组（Process Groups）所使用的物理资源的机制。 Docker虚拟化的产物是Docker容器，基于Docker Engine启动容器时，默认会给容器指定和分配各种子系统：CPU子系统、Memory子系统、IO子系统、NET子系统等。 启动一个容器，会分配Network Namespace（子系统）提供了一份独立的网络环境，包括网卡、路由、Iptables规则等，容器跟其他容器的Network Namespace是相互隔离的。 通过Docker run创建Docker容器时，可以使用–net选项指定Docker容器的网络模式，Docker默认有四种网络模式：","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/DevOps/Docker%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"Docker网络模型"}],["meta",{"property":"og:description","content":"Docker虚拟化技术底层是基于LXC+Cgroups+AUFS（Overlay）技术实现，而我们有熟知Cgroups是Linux内核提供的一种可以限制、记录、隔离进程组（Process Groups）所使用的物理资源的机制。 Docker虚拟化的产物是Docker容器，基于Docker Engine启动容器时，默认会给容器指定和分配各种子系统：CPU子系统、Memory子系统、IO子系统、NET子系统等。 启动一个容器，会分配Network Namespace（子系统）提供了一份独立的网络环境，包括网卡、路由、Iptables规则等，容器跟其他容器的Network Namespace是相互隔离的。 通过Docker run创建Docker容器时，可以使用–net选项指定Docker容器的网络模式，Docker默认有四种网络模式："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2022-09-01T13:26:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker网络模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-01T13:26:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[{"level":2,"title":"桥接模式（bridge)","slug":"桥接模式-bridge","link":"#桥接模式-bridge","children":[{"level":3,"title":"（1）hostPort:containerPort（映射所有接口地址）","slug":"_1-hostport-containerport-映射所有接口地址","link":"#_1-hostport-containerport-映射所有接口地址","children":[]},{"level":3,"title":"（2）ip:hostPort:containerPort","slug":"_2-ip-hostport-containerport","link":"#_2-ip-hostport-containerport","children":[]},{"level":3,"title":"（3）ip::containerPort（映射指定地址的任意端口）","slug":"_3-ip-containerport-映射指定地址的任意端口","link":"#_3-ip-containerport-映射指定地址的任意端口","children":[]}]},{"level":2,"title":"主机模式（host）","slug":"主机模式-host","link":"#主机模式-host","children":[]},{"level":2,"title":"容器模式（container）","slug":"容器模式-container","link":"#容器模式-container","children":[]},{"level":2,"title":"无网络模式（none）","slug":"无网络模式-none","link":"#无网络模式-none","children":[]},{"level":2,"title":"查看网络模式","slug":"查看网络模式","link":"#查看网络模式","children":[]},{"level":2,"title":"查看容器信息(包含配置、环境、网关、挂载、cmd等等信息）","slug":"查看容器信息-包含配置、环境、网关、挂载、cmd等等信息","link":"#查看容器信息-包含配置、环境、网关、挂载、cmd等等信息","children":[]},{"level":2,"title":"暴露端口","slug":"暴露端口","link":"#暴露端口","children":[]},{"level":2,"title":"创建网络","slug":"创建网络","link":"#创建网络","children":[]},{"level":2,"title":"容器绑定网络","slug":"容器绑定网络","link":"#容器绑定网络","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":7.36,"words":2209},"filePathRelative":"posts/DevOps/Docker网络模型.md","localizedDate":"2022年9月1日","excerpt":"<p>Docker虚拟化技术底层是基于LXC+Cgroups+AUFS（Overlay）技术实现，而我们有熟知Cgroups是Linux内核提供的一种可以限制、记录、隔离进程组（Process Groups）所使用的物理资源的机制。<br>\\nDocker虚拟化的产物是Docker容器，基于Docker Engine启动容器时，默认会给容器指定和分配各种子系统：CPU子系统、Memory子系统、IO子系统、NET子系统等。<br>\\n启动一个容器，会分配Network Namespace（子系统）提供了一份独立的网络环境，包括网卡、路由、Iptables规则等，容器跟其他容器的Network Namespace是相互隔离的。<br>\\n通过Docker run创建Docker容器时，可以使用–net选项指定Docker容器的网络模式，Docker默认有四种网络模式：</p>","autoDesc":true}');export{e as data};
