const e=JSON.parse('{"key":"v-328c165e","path":"/posts/java/maven%E6%A2%B3%E7%90%86.html","title":"maven梳理","lang":"zh-CN","frontmatter":{"title":"maven梳理","tag":["maven"],"category":["软件管理"],"author":"郑天祺","date":"2019-08-28T17:01:00.000Z","description":"Maven使用 maven的命令： maven常用命令 创建maven项目：mvn archetype:create 指定 group： -DgroupId=packageName 指定 artifact：-DartifactId=projectName 创建web项目：-DarchetypeArtifactId=maven-archetype-webapp 创建maven项目：mvn archetype:generate 验证项目是否正确：mvn validate maven 打包：mvn package 只打jar包：mvn jar:jar 生成源码jar包：mvn source:jar 产生应用需要的任何额外的源代码：mvn generate-sources 编译源代码： mvn compile 编译测试代码：mvn test-compile 运行测试：mvn test 运行检查：mvn verify 清理maven项目：mvn clean 该操作会清空当前目录的target文件夹 生成eclipse项目：mvn eclipse:eclipse 清理eclipse配置：mvn eclipse:clean 生成idea项目：mvn idea:idea 安装项目到本地仓库：mvn install 发布项目到远程仓库：mvn:deploy 在集成测试可以运行的环境中处理和发布包：mvn integration-test 显示maven依赖树：mvn dependency:tree 显示maven依赖列表：mvn dependency:list 下载依赖包的源码：mvn dependency:sources 安装本地jar到本地仓库：mvn install:install-file -DgroupId=packageName -DartifactId=projectName -Dversion=version -Dpackaging=jar -Dfile=path WEB 启动tomcat：mvn tomcat:run 启动jetty：mvn jetty:run 运行打包部署：mvn tomcat:deploy 撤销部署：mvn tomcat:undeploy 启动web应用：mvn tomcat:start 停止web应用：mvn tomcat:stop 重新部署：mvn tomcat:redeploy 部署展开的war文件：mvn war:exploded tomcat:exploded maven 命令的格式为 mvn [plugin-name]:[goal-name]，可以接受的参数如下。 -D 指定参数，如 -Dmaven.test.skip=true 跳过单元测试； -P 指定 Profile 配置，可以用于区分环境； -e 显示maven运行出错的信息； -o 离线执行命令,即不去远程仓库更新包； -X 显示maven允许的debug信息； -U 强制去远程更新snapshot的插件或依赖，默认每天只更新一次。","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/java/maven%E6%A2%B3%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"maven梳理"}],["meta",{"property":"og:description","content":"Maven使用 maven的命令： maven常用命令 创建maven项目：mvn archetype:create 指定 group： -DgroupId=packageName 指定 artifact：-DartifactId=projectName 创建web项目：-DarchetypeArtifactId=maven-archetype-webapp 创建maven项目：mvn archetype:generate 验证项目是否正确：mvn validate maven 打包：mvn package 只打jar包：mvn jar:jar 生成源码jar包：mvn source:jar 产生应用需要的任何额外的源代码：mvn generate-sources 编译源代码： mvn compile 编译测试代码：mvn test-compile 运行测试：mvn test 运行检查：mvn verify 清理maven项目：mvn clean 该操作会清空当前目录的target文件夹 生成eclipse项目：mvn eclipse:eclipse 清理eclipse配置：mvn eclipse:clean 生成idea项目：mvn idea:idea 安装项目到本地仓库：mvn install 发布项目到远程仓库：mvn:deploy 在集成测试可以运行的环境中处理和发布包：mvn integration-test 显示maven依赖树：mvn dependency:tree 显示maven依赖列表：mvn dependency:list 下载依赖包的源码：mvn dependency:sources 安装本地jar到本地仓库：mvn install:install-file -DgroupId=packageName -DartifactId=projectName -Dversion=version -Dpackaging=jar -Dfile=path WEB 启动tomcat：mvn tomcat:run 启动jetty：mvn jetty:run 运行打包部署：mvn tomcat:deploy 撤销部署：mvn tomcat:undeploy 启动web应用：mvn tomcat:start 停止web应用：mvn tomcat:stop 重新部署：mvn tomcat:redeploy 部署展开的war文件：mvn war:exploded tomcat:exploded maven 命令的格式为 mvn [plugin-name]:[goal-name]，可以接受的参数如下。 -D 指定参数，如 -Dmaven.test.skip=true 跳过单元测试； -P 指定 Profile 配置，可以用于区分环境； -e 显示maven运行出错的信息； -o 离线执行命令,即不去远程仓库更新包； -X 显示maven允许的debug信息； -U 强制去远程更新snapshot的插件或依赖，默认每天只更新一次。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"maven"}],["meta",{"property":"article:published_time","content":"2019-08-28T17:01:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"maven梳理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-08-28T17:01:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"maven的命令：","slug":"maven的命令","link":"#maven的命令","children":[]},{"level":2,"title":"1、Maven的简介","slug":"_1、maven的简介","link":"#_1、maven的简介","children":[{"level":3,"title":"1.1 构建（build）","slug":"_1-1-构建-build","link":"#_1-1-构建-build","children":[]},{"level":3,"title":"1.2 Maven的用途","slug":"_1-2-maven的用途","link":"#_1-2-maven的用途","children":[]}]},{"level":2,"title":"2、Maven的安装和配置","slug":"_2、maven的安装和配置","link":"#_2、maven的安装和配置","children":[{"level":3,"title":"2.1 Maven怎么升级：","slug":"_2-1-maven怎么升级","link":"#_2-1-maven怎么升级","children":[]},{"level":3,"title":"2.2 Maven目录介绍：","slug":"_2-2-maven目录介绍","link":"#_2-2-maven目录介绍","children":[]},{"level":3,"title":"2.3 设置HTTP代理","slug":"_2-3-设置http代理","link":"#_2-3-设置http代理","children":[]},{"level":3,"title":"2.4 设置MAVEN_OPTS环境变量","slug":"_2-4-设置maven-opts环境变量","link":"#_2-4-设置maven-opts环境变量","children":[]},{"level":3,"title":"2.5 参数设置：","slug":"_2-5-参数设置","link":"#_2-5-参数设置","children":[]},{"level":3,"title":"2.6 用户配置：","slug":"_2-6-用户配置","link":"#_2-6-用户配置","children":[]}]},{"level":2,"title":"3、使用入门","slug":"_3、使用入门","link":"#_3、使用入门","children":[{"level":3,"title":"3.1 编写pom.xml","slug":"_3-1-编写pom-xml","link":"#_3-1-编写pom-xml","children":[]},{"level":3,"title":"3.2编写主代码，项目打包过程","slug":"_3-2编写主代码-项目打包过程","link":"#_3-2编写主代码-项目打包过程","children":[]}]},{"level":2,"title":"4、坐标和依赖","slug":"_4、坐标和依赖","link":"#_4、坐标和依赖","children":[{"level":3,"title":"4.1 坐标详解","slug":"_4-1-坐标详解","link":"#_4-1-坐标详解","children":[]}]},{"level":2,"title":"5、依赖","slug":"_5、依赖","link":"#_5、依赖","children":[{"level":3,"title":"5.1 依赖范围","slug":"_5-1-依赖范围","link":"#_5-1-依赖范围","children":[]},{"level":3,"title":"5.2 传递性依赖","slug":"_5-2-传递性依赖","link":"#_5-2-传递性依赖","children":[]},{"level":3,"title":"5.3 排除依赖","slug":"_5-3-排除依赖","link":"#_5-3-排除依赖","children":[]}]},{"level":2,"title":"6、仓库","slug":"_6、仓库","link":"#_6、仓库","children":[{"level":3,"title":"6.1概念","slug":"_6-1概念","link":"#_6-1概念","children":[]},{"level":3,"title":"6.2 仓库的布局","slug":"_6-2-仓库的布局","link":"#_6-2-仓库的布局","children":[]},{"level":3,"title":"6.3 仓库的分类","slug":"_6-3-仓库的分类","link":"#_6-3-仓库的分类","children":[]},{"level":3,"title":"6.4 仓库的配置","slug":"_6-4-仓库的配置","link":"#_6-4-仓库的配置","children":[]}]}],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":9.44,"words":2831},"filePathRelative":"posts/java/maven梳理.md","localizedDate":"2019年8月29日","excerpt":"<h1> Maven使用</h1>\\n<h2> maven的命令：</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>maven常用命令\\n\\n创建maven项目：mvn archetype<span class=\\"token operator\\">:</span>create\\n指定 group： <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">DgroupId</span><span class=\\"token operator\\">=</span>packageName\\n指定 artifact：<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">DartifactId</span><span class=\\"token operator\\">=</span>projectName\\n创建web项目：<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">DarchetypeArtifactId</span><span class=\\"token operator\\">=</span>maven<span class=\\"token operator\\">-</span>archetype<span class=\\"token operator\\">-</span>webapp \\n创建maven项目：mvn archetype<span class=\\"token operator\\">:</span>generate\\n验证项目是否正确：mvn validate\\nmaven 打包：mvn <span class=\\"token keyword\\">package</span>\\n只打jar包：mvn jar<span class=\\"token operator\\">:</span>jar\\n生成源码jar包：mvn source<span class=\\"token operator\\">:</span>jar\\n产生应用需要的任何额外的源代码：mvn generate<span class=\\"token operator\\">-</span>sources\\n编译源代码： mvn compile\\n编译测试代码：mvn test<span class=\\"token operator\\">-</span>compile\\n运行测试：mvn test\\n运行检查：mvn verify\\n清理maven项目：mvn clean  该操作会清空当前目录的target文件夹\\n生成eclipse项目：mvn eclipse<span class=\\"token operator\\">:</span>eclipse\\n清理eclipse配置：mvn eclipse<span class=\\"token operator\\">:</span>clean\\n生成idea项目：mvn idea<span class=\\"token operator\\">:</span>idea\\n安装项目到本地仓库：mvn install\\n发布项目到远程仓库：mvn<span class=\\"token operator\\">:</span>deploy\\n在集成测试可以运行的环境中处理和发布包：mvn integration<span class=\\"token operator\\">-</span>test\\n显示maven依赖树：mvn dependency<span class=\\"token operator\\">:</span>tree\\n显示maven依赖列表：mvn dependency<span class=\\"token operator\\">:</span>list\\n下载依赖包的源码：mvn dependency<span class=\\"token operator\\">:</span>sources\\n安装本地jar到本地仓库：mvn install<span class=\\"token operator\\">:</span>install<span class=\\"token operator\\">-</span>file <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">DgroupId</span><span class=\\"token operator\\">=</span>packageName <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">DartifactId</span><span class=\\"token operator\\">=</span>projectName <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">Dversion</span><span class=\\"token operator\\">=</span>version <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">Dpackaging</span><span class=\\"token operator\\">=</span>jar <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">Dfile</span><span class=\\"token operator\\">=</span>path\\n    <span class=\\"token constant\\">WEB</span>\\n启动tomcat：mvn tomcat<span class=\\"token operator\\">:</span>run\\n启动jetty：mvn jetty<span class=\\"token operator\\">:</span>run\\n运行打包部署：mvn tomcat<span class=\\"token operator\\">:</span>deploy\\n撤销部署：mvn tomcat<span class=\\"token operator\\">:</span>undeploy\\n启动web应用：mvn tomcat<span class=\\"token operator\\">:</span>start\\n停止web应用：mvn tomcat<span class=\\"token operator\\">:</span>stop\\n重新部署：mvn tomcat<span class=\\"token operator\\">:</span>redeploy\\n部署展开的war文件：mvn war<span class=\\"token operator\\">:</span>exploded tomcat<span class=\\"token operator\\">:</span>exploded\\n    maven 命令的格式为 mvn <span class=\\"token punctuation\\">[</span>plugin<span class=\\"token operator\\">-</span>name<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span>goal<span class=\\"token operator\\">-</span>name<span class=\\"token punctuation\\">]</span>，可以接受的参数如下。\\n<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">D</span> 指定参数，如 <span class=\\"token operator\\">-</span><span class=\\"token class-name\\">Dmaven</span><span class=\\"token punctuation\\">.</span>test<span class=\\"token punctuation\\">.</span>skip<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">true</span> 跳过单元测试；\\n<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">P</span> 指定 <span class=\\"token class-name\\">Profile</span> 配置，可以用于区分环境；\\n<span class=\\"token operator\\">-</span>e 显示maven运行出错的信息；\\n<span class=\\"token operator\\">-</span>o 离线执行命令<span class=\\"token punctuation\\">,</span>即不去远程仓库更新包；\\n<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">X</span> 显示maven允许的debug信息；\\n<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">U</span> 强制去远程更新snapshot的插件或依赖，默认每天只更新一次。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
