const e=JSON.parse('{"key":"v-37b39ec5","path":"/posts/DevOps/k8s%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA.html","title":"k8s集群搭建","lang":"zh-CN","frontmatter":{"title":"k8s集群搭建","author":"ztq","tag":["k8s"],"category":["CICD"],"date":"2022-04-04T21:42:00.000Z","description":"1. 安装要求 在开始之前，部署Kubernetes集群机器需要满足以下几个条件： 一台或多台机器，操作系统 CentOS7.x-86_x64 硬件配置：2GB或更多RAM，2个CPU或更多CPU，硬盘30GB或更多 可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点 禁止swap分区 docker和k8s保持官网一致的版本，否则有报错 2. 准备环境 角色 IP master 192.168.2.145 node1 192.168.2.146 node2 192.168.2.147","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/DevOps/k8s%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"k8s集群搭建"}],["meta",{"property":"og:description","content":"1. 安装要求 在开始之前，部署Kubernetes集群机器需要满足以下几个条件： 一台或多台机器，操作系统 CentOS7.x-86_x64 硬件配置：2GB或更多RAM，2个CPU或更多CPU，硬盘30GB或更多 可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点 禁止swap分区 docker和k8s保持官网一致的版本，否则有报错 2. 准备环境 角色 IP master 192.168.2.145 node1 192.168.2.146 node2 192.168.2.147"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-04-04T21:42:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k8s集群搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T21:42:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装要求","slug":"_1-安装要求","link":"#_1-安装要求","children":[]},{"level":2,"title":"2. 准备环境","slug":"_2-准备环境","link":"#_2-准备环境","children":[]},{"level":2,"title":"3. 所有节点安装Docker/kubeadm/kubelet","slug":"_3-所有节点安装docker-kubeadm-kubelet","link":"#_3-所有节点安装docker-kubeadm-kubelet","children":[{"level":3,"title":"3.1 安装Docker","slug":"_3-1-安装docker","link":"#_3-1-安装docker","children":[]},{"level":3,"title":"3.2 添加阿里云YUM软件源","slug":"_3-2-添加阿里云yum软件源","link":"#_3-2-添加阿里云yum软件源","children":[]},{"level":3,"title":"3.3 安装kubeadm，kubelet和kubectl","slug":"_3-3-安装kubeadm-kubelet和kubectl","link":"#_3-3-安装kubeadm-kubelet和kubectl","children":[]}]},{"level":2,"title":"4. 部署Kubernetes Master","slug":"_4-部署kubernetes-master","link":"#_4-部署kubernetes-master","children":[]},{"level":2,"title":"5. 加入Kubernetes Node","slug":"_5-加入kubernetes-node","link":"#_5-加入kubernetes-node","children":[]},{"level":2,"title":"6. 部署CNI网络插件","slug":"_6-部署cni网络插件","link":"#_6-部署cni网络插件","children":[]},{"level":2,"title":"7. 测试kubernetes集群","slug":"_7-测试kubernetes集群","link":"#_7-测试kubernetes集群","children":[]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"posts/DevOps/k8s集群搭建.md","localizedDate":"2022年4月5日","excerpt":"<h2> 1. 安装要求</h2>\\n<p>在开始之前，部署Kubernetes集群机器需要满足以下几个条件：</p>\\n<ul>\\n<li>一台或多台机器，操作系统 CentOS7.x-86_x64</li>\\n<li>硬件配置：2GB或更多RAM，2个CPU或更多CPU，硬盘30GB或更多</li>\\n<li>可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点</li>\\n<li>禁止swap分区</li>\\n<li>docker和k8s保持官网一致的版本，否则有报错</li>\\n</ul>\\n<h2> 2. 准备环境</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>角色</th>\\n<th>IP</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>master</td>\\n<td>192.168.2.145</td>\\n</tr>\\n<tr>\\n<td>node1</td>\\n<td>192.168.2.146</td>\\n</tr>\\n<tr>\\n<td>node2</td>\\n<td>192.168.2.147</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{e as data};
