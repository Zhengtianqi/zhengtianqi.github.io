import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a as n}from"./app-26f2803c.js";const p={},r=n(`<h1 id="_1、jvm参数调优" tabindex="-1"><a class="header-anchor" href="#_1、jvm参数调优" aria-hidden="true">#</a> 1、JVM参数调优</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xms</span><span class="token generics"><span class="token punctuation">&lt;</span>size<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示JVM初始化堆的大小</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xmx</span><span class="token generics"><span class="token punctuation">&lt;</span>size<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示JVM堆的最大值</p><p>​ 这两个值的大小一般根据需要进行设置。当应用程序需要的内存超出堆的最大值时虚拟机就会提示内存溢出，并且导致应用服务崩溃。因此一般建议堆的最大值设置为可用内存的最大值的80%。</p><p>​ 在catalina.bat中，设置JAVA_OPTS=&#39;-xms256m-Xmx512M‘，表示初始化内存为256 MB，可以使用的最大内存为512 MB。</p><h1 id="_2、禁用dns查询" tabindex="-1"><a class="header-anchor" href="#_2、禁用dns查询" aria-hidden="true">#</a> 2、禁用DNS查询</h1><p>​ 当web应用程序向要记录客户端的信息时，它也会记录客户端的IP地址或者通过域名服务器查找机器名转换为IP地址。</p><p>​ DNS查询需要占用网络，并且包括可能从很多很远的服务器或者不起作用的服务器上去获取对应的IP的过程，这样会消耗一定的时间。</p><p>​ 为了消除DNS查询对性能的影响我们可以关闭DNS查询，方式是修改server.xml文件中的enableLookups参数值。</p><h1 id="_3、调整线程数" tabindex="-1"><a class="header-anchor" href="#_3、调整线程数" aria-hidden="true">#</a> 3、调整线程数</h1><p>​ 通过应用程序的连接器(Connector)进行性能控制的的参数是创建的处理请求的线程数。Tomcat 使用线程池加速响应速度来处理请求。</p><p>​ 在Java中线程是程序运行时的路径，是在一个程序中与其它控制线程无关的、能够独立运行的代码段。它们共享相同的地址空间。</p><p>​ 多线程帮助程序员写出CPU最大利用率的高效程序，使空闲时间保持最低，从而接更多的请求。</p><p>​ Tomcat4中可以通过修改minProcessors和maxProcessors的值来控制线程数。这些值在安装后就已经设定为默认值并且是足够使用的，但是随着站点的扩容而改大这些值。</p><p>​ minProcessors 服务器启动时创建的处理请求的线程数应该足够处理一个小量的负载。也就是说，如果一天内每秒仅发生5次单击事件，并且每个请求任务处理需要1秒钟，那么预先设置线程数为5就足够了。但在你的站点访问量较大时就需要设置更大的线程数，指定为参数maxProcessors的值。</p><p>​ maxProcessors的值也是有上限的，应防止流量不可控制(或者恶意的服务攻击)，从而导致超出了虚拟机使用内存的大小。如果要加大并发连接数，应同时加大这两个参数。</p><p>​ Web server 允许的最大连接数还受制于操作系统的内核参数设置，通常Windows是2000个左右，Linux是1000个左右。</p><p>在Tomcat5对这些参数进行了调整，请看下面属性:</p><p>​ maxThreads Tomcat 使用线程来处理接收的每个请求。这个值表示Tomcat可创建的最大的线程数。<br> ​ acceptCount指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中的请求数，超过这个数的请求将不予处理。<br> ​ connnection Timeout网络连接超时，单位:毫秒。设置为0表示永不超时，这样设置有隐患的。通常可设置为30000毫秒。</p><p>​ minSpareThreadsTomcat初始化时创建的线程数。<br> ​ maxSpareThreads一旦创建的线程超过这个值，Tomcat就会关闭不再需要的socket 线程。</p><p>​ 最好的方式是多设置几次并且进行测试，观察响应时间和内存使用情况。在不同的机器、操作系统或虚拟机组合的情况下可能会不同，而且并不是所有人的web站点的流量都是一样的，因此没有一刀切的方案来确定线程数的值。</p><h1 id="_4、加大tomcat内存" tabindex="-1"><a class="header-anchor" href="#_4、加大tomcat内存" aria-hidden="true">#</a> 4、加大Tomcat内存</h1><p>​ 首先检查程序有没有限入死循环<br> ​ 这个问题主要还是由这个问题 java.lang.0utOfMemoryError:Javaheap space引起的。</p><p>​ 第一次出现这样的的问题以后，引发了其他的问题。在网上—查可能是JAVA的堆栈设置太小的原因。</p><p>跟据网上的答案大致有这两种解决方法:</p><p>（1）设置环境变量<br> 解决方法:手动设置Heap size<br> 修改TOMCAT_HOME/bin/catalina.sh</p><p>​ set JAVA_OPTS=-Xms32m-Xmx512m</p><p>​ 可以根据自己机器的内存进行更改。</p><p>（2）java-Xms32m-Xmx800m className<br> 就是在执行JAVA类文件时加上这个参数，其中className<br> 是需要执行的确类名。(包括包名)这个解决问题了。而且执行的速度比没有设置的时候快很多。</p><p>​ 如果在测试的时候可能会用Eclispe这时候就需要在Eclipse-&gt;run-arguments中的VM arguments中输入-Xms32m-Xmx800m这个参数就可以了。</p><p>（3）java.lang.OutOfMemoryError: PermGen space<br> PermGen space的全称是Permanent Generation space ,是指内存的永久保存区域，这块内存主要是被JVM存放Class和Meta信息的,Class在被Loader时就会被放到PermGen space中,它和存放类实例(Instance)的Heap区域不同,GC(GarbageCollection)不会在主程序运行期对PermGen space进行清理，所以如果你的应用中有很多CLASS的话，就很可能出现PermGen space 错误。<br> 解决方法:手动设置MaxPermSize大小修</p><p>（4）java.lang.OutOfMemoryError:Java heap space Heap size设置<br> JVM堆的设置是指java程序运行过程中JVM可以调配使用的内存空间的设置.JVM在启动的时候会自动设置Heap size的值，其初始空间(即-Xms)是物理内存的1/64，最大空间(-Xmx)是物理内存的1/4。可以利用JVM提供的-Xmn-Xms-Xmx等选项可进行设置。Heap size的大小是Young Generation和TenuredGeneraion之和。</p><p>​ 提示:在JVM中如果98%的时间是用于GC且可用的Heap size不足2%的时候将抛出此异常信息。<br> ​ 提示:Heap Size最大不要超过可用物理内存的80%，一般的要将-Xms 和-Xmx选项设置为相同，而-Xms为1/4的-Xmx值。<br> 解决方法:手动设置Heap size<br> 修改 TOMCAT_HOME/bin/catalina.sh<br> 在“echo&quot;Using CATALINA_BASE:$CATALINA_BASE&quot;&quot;上面加入以下行:JAVA_OPTS=&quot;-server-Xms800m-Xmx800m-XX:MaxNewSize=256m&quot;</p><p>5、</p>`,36),t=[r];function o(c,m){return e(),s("div",null,t)}const d=a(p,[["render",o],["__file","Tomcat性能优化整理.html.vue"]]);export{d as default};
