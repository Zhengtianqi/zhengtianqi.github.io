import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as t,b as s,d as a,e as c,a as l}from"./app-26f2803c.js";const r="/assets/images/GETPOST.png",i={},k=l(`<h1 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍" aria-hidden="true">#</a> 1、介绍</h1><p>​ 最常用的利用GET和POST请求后端数据。GET和POST是HTTP与服务器交互的方式，交互方式还有DELETE、PUT、HEAD、OPTIONS、CONNECT等。</p><p>​ 先看看GET和POST的样貌：</p><h2 id="get请求" tabindex="-1"><a class="header-anchor" href="#get请求" aria-hidden="true">#</a> GET请求</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">GET</span> <span class="token operator">/</span>empty_project<span class="token operator">/</span>inde<span class="token punctuation">.</span>jsp <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
  <span class="token class-name">Host</span><span class="token operator">:</span> localhost<span class="token operator">:</span><span class="token number">8088</span>
  <span class="token class-name">Connection</span><span class="token operator">:</span> keep<span class="token operator">-</span>alive
  <span class="token class-name">Upgrade</span><span class="token operator">-</span><span class="token class-name">Insecure</span><span class="token operator">-</span><span class="token class-name">Requests</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token class-name">User</span><span class="token operator">-</span><span class="token class-name">Agent</span><span class="token operator">:</span> <span class="token class-name">Mozilla</span><span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token constant">NT</span> <span class="token number">6.1</span><span class="token punctuation">;</span> <span class="token constant">WOW64</span><span class="token punctuation">)</span> <span class="token class-name">AppleWebKit</span><span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span><span class="token constant">KHTML</span><span class="token punctuation">,</span> like <span class="token class-name">Gecko</span><span class="token punctuation">)</span>       <span class="token class-name">Chrome</span><span class="token operator">/</span><span class="token number">55.0</span><span class="token number">.2883</span><span class="token number">.87</span> <span class="token class-name">Safari</span><span class="token operator">/</span><span class="token number">537.36</span>
  <span class="token class-name">Accept</span><span class="token operator">:</span> text<span class="token operator">/</span>html<span class="token punctuation">,</span>application<span class="token operator">/</span>xhtml<span class="token operator">+</span>xml<span class="token punctuation">,</span>application<span class="token operator">/</span>xml<span class="token punctuation">;</span>q<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">,</span>image<span class="token operator">/</span>webp<span class="token punctuation">,</span><span class="token operator">*</span><span class="token comment">/*;q=0.8
  Accept-Encoding: gzip, deflate, sdch, br
  Accept-Language: zh-CN,zh;q=0.8
  Cookie: pgv_pvi=4403687424
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Accept 浏览器支持的类型<br> Accept-Language 浏览器支持的语言<br> Accept-Encoding 浏览器支持的压缩格式<br> Host 请求的主机<br> Connection keep-alive 这个是链接一小段时间</p><h2 id="get响应" tabindex="-1"><a class="header-anchor" href="#get响应" aria-hidden="true">#</a> GET响应</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">200</span> <span class="token constant">OK</span>
<span class="token class-name">Server</span><span class="token operator">:</span> <span class="token class-name">Apache</span><span class="token operator">-</span><span class="token class-name">Coyote</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token class-name">Set</span><span class="token operator">-</span><span class="token class-name">Cookie</span><span class="token operator">:</span> <span class="token constant">JSESSIONID</span><span class="token operator">=</span><span class="token constant">F463F5132A34573215C941893534BF26</span><span class="token punctuation">;</span> <span class="token class-name">Path</span><span class="token operator">=</span><span class="token operator">/</span>empty_project<span class="token punctuation">;</span> <span class="token class-name">HttpOnly</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Type</span><span class="token operator">:</span> text<span class="token operator">/</span>html<span class="token punctuation">;</span>charset<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Length</span><span class="token operator">:</span> <span class="token number">196</span>
<span class="token class-name">Date</span><span class="token operator">:</span> <span class="token class-name">Mon</span><span class="token punctuation">,</span> <span class="token number">02</span> <span class="token class-name">Jan</span> <span class="token number">2017</span> <span class="token number">08</span><span class="token operator">:</span><span class="token number">52</span><span class="token operator">:</span><span class="token number">48</span> <span class="token constant">GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应行 (协议/版本 状态码 状态码解析)</p><p>响应头 （key/value格式）</p><p>空行</p><p>响应正文</p><h2 id="post请求" tabindex="-1"><a class="header-anchor" href="#post请求" aria-hidden="true">#</a> POST请求</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">POST</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>jsp <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token class-name">Host</span><span class="token operator">:</span> localhost<span class="token operator">:</span><span class="token number">8088</span>
<span class="token class-name">Connection</span><span class="token operator">:</span> keep<span class="token operator">-</span>alive
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Length</span><span class="token operator">:</span> <span class="token number">35</span>
<span class="token class-name">Cache</span><span class="token operator">-</span><span class="token class-name">Control</span><span class="token operator">:</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">0</span>
<span class="token class-name">Origin</span><span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8088</span>
<span class="token class-name">Upgrade</span><span class="token operator">-</span><span class="token class-name">Insecure</span><span class="token operator">-</span><span class="token class-name">Requests</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token class-name">User</span><span class="token operator">-</span><span class="token class-name">Agent</span><span class="token operator">:</span> <span class="token class-name">Mozilla</span><span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token constant">NT</span> <span class="token number">6.1</span><span class="token punctuation">;</span> <span class="token constant">WOW64</span><span class="token punctuation">)</span> <span class="token class-name">AppleWebKit</span><span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span><span class="token constant">KHTML</span><span class="token punctuation">,</span> like <span class="token class-name">Gecko</span><span class="token punctuation">)</span> <span class="token class-name">Chrome</span><span class="token operator">/</span><span class="token number">55.0</span><span class="token number">.2883</span><span class="token number">.87</span> <span class="token class-name">Safari</span><span class="token operator">/</span><span class="token number">537.36</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Type</span><span class="token operator">:</span> application<span class="token operator">/</span>x<span class="token operator">-</span>www<span class="token operator">-</span>form<span class="token operator">-</span>urlencoded
<span class="token class-name">Accept</span><span class="token operator">:</span> text<span class="token operator">/</span>html<span class="token punctuation">,</span>application<span class="token operator">/</span>xhtml<span class="token operator">+</span>xml<span class="token punctuation">,</span>application<span class="token operator">/</span>xml<span class="token punctuation">;</span>q<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">,</span>image<span class="token operator">/</span>webp<span class="token punctuation">,</span><span class="token operator">*</span><span class="token comment">/*;q=0.8
Referer: http://localhost:8088/login.html
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.8
Cookie: pgv_pvi=4403687424

username=username&amp;password=password
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Content-Type 使用application/x-www-form-urlencoded</p><p>转化为字节 -- 加上128 -- 转化为16进制 -- 添加%</p><h2 id="post响应" tabindex="-1"><a class="header-anchor" href="#post响应" aria-hidden="true">#</a> POST响应</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">POST</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>jsp <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token class-name">Host</span><span class="token operator">:</span> localhost<span class="token operator">:</span><span class="token number">8088</span>
<span class="token class-name">Connection</span><span class="token operator">:</span> keep<span class="token operator">-</span>alive
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Length</span><span class="token operator">:</span> <span class="token number">252</span>
<span class="token class-name">Cache</span><span class="token operator">-</span><span class="token class-name">Control</span><span class="token operator">:</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">0</span>
<span class="token class-name">Origin</span><span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8088</span>
<span class="token class-name">Upgrade</span><span class="token operator">-</span><span class="token class-name">Insecure</span><span class="token operator">-</span><span class="token class-name">Requests</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token class-name">User</span><span class="token operator">-</span><span class="token class-name">Agent</span><span class="token operator">:</span> <span class="token class-name">Mozilla</span><span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token constant">NT</span> <span class="token number">6.1</span><span class="token punctuation">;</span> <span class="token constant">WOW64</span><span class="token punctuation">)</span> <span class="token class-name">AppleWebKit</span><span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span><span class="token constant">KHTML</span><span class="token punctuation">,</span> like <span class="token class-name">Gecko</span><span class="token punctuation">)</span> <span class="token class-name">Chrome</span><span class="token operator">/</span><span class="token number">55.0</span><span class="token number">.2883</span><span class="token number">.87</span> <span class="token class-name">Safari</span><span class="token operator">/</span><span class="token number">537.36</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Type</span><span class="token operator">:</span> multipart<span class="token operator">/</span>form<span class="token operator">-</span>data<span class="token punctuation">;</span> boundary<span class="token operator">=</span><span class="token operator">--</span><span class="token operator">--</span><span class="token class-name">WebKitFormBoundarySN8ehdkx6tF3Ngiq</span>
<span class="token class-name">Accept</span><span class="token operator">:</span> text<span class="token operator">/</span>html<span class="token punctuation">,</span>application<span class="token operator">/</span>xhtml<span class="token operator">+</span>xml<span class="token punctuation">,</span>application<span class="token operator">/</span>xml<span class="token punctuation">;</span>q<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">,</span>image<span class="token operator">/</span>webp<span class="token punctuation">,</span><span class="token operator">*</span><span class="token comment">/*;q=0.8
Referer: http://localhost:8088/login.html
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.8
Cookie: pgv_pvi=4403687424; JSESSIONID=061657A0C03921CB478ACB889502C93A

------WebKitFormBoundarySN8ehdkx6tF3Ngiq
Content-Disposition: form-data; name=&quot;username&quot;

sdfdsf
------WebKitFormBoundarySN8ehdkx6tF3Ngiq
Content-Disposition: form-data; name=&quot;password&quot;

sdfdsfsdfdsf
------WebKitFormBoundarySN8ehdkx6tF3Ngiq--
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2、w3c表格对比" tabindex="-1"><a class="header-anchor" href="#_2、w3c表格对比" aria-hidden="true">#</a> 2、W3C表格对比</h1><figure><img src="`+r+'" alt="image-20200721091103941" tabindex="0" loading="lazy"><figcaption>image-20200721091103941</figcaption></figure><h2 id="_1-表格对比" tabindex="-1"><a class="header-anchor" href="#_1-表格对比" aria-hidden="true">#</a> （1）表格对比：</h2><p>​ GET 用于获取信息，是无副作用的，是幂等的，且可缓存<br> ​ POST 用于修改服务器上的数据，有副作用，非幂等，不可缓存</p><p>​ 幂等性：是指无论调用多少次都不会有不同结果的一种特性，一般是指HTTP GET的查询方法。</p><h2 id="_2-交互对比" tabindex="-1"><a class="header-anchor" href="#_2-交互对比" aria-hidden="true">#</a> （2）交互对比</h2><p>​ GET产生一个TCP数据包，POST产生两个TCP数据包：</p><p>​ 对于GET方式的请求，游览器会把http header和data一并发送出去，服务器响应200（返回数据）</p><p>​ 对于POST请求。游览器先发送header，服务器响应100 continue，游览器再发送data，服务器响应200 ok（返回数据）3、</p><h1 id="_3、面试问题" tabindex="-1"><a class="header-anchor" href="#_3、面试问题" aria-hidden="true">#</a> 3、面试问题</h1><h2 id="_1-get方法的参数写法是固定的吗" tabindex="-1"><a class="header-anchor" href="#_1-get方法的参数写法是固定的吗" aria-hidden="true">#</a> （1）GET方法的参数写法是固定的吗？</h2><p>​ 一般约定中我们都是把参数写在?后边，用&amp;分割</p><p>​ 但是我们知道，解析报文的过程是通过获取 TCP 数据，用正则等工具从数据中获取 Header 和 Body，从而提取参数。</p><p>​ 比如header请求头中添加token，来验证用户是否登录等权限问题。</p><p>​ 也就是说，我们可以自己约定参数的写法，只要服务端能够解释出来就行，万变不离其宗。</p><h2 id="_2-get-方法的长度限制是怎么回事" tabindex="-1"><a class="header-anchor" href="#_2-get-方法的长度限制是怎么回事" aria-hidden="true">#</a> （2）GET 方法的长度限制是怎么回事？</h2><p>​ 网络上都会提到浏览器地址栏输入的参数是有限的。</p><p>​ 首先说明一点，HTTP 协议没有 Body 和 URL 的长度限制，对 URL 限制的大多是浏览器和服务器的原因。</p><p>​ 浏览器原因就不说了，服务器是因为处理长 URL 要消耗比较多的资源，为了性能和安全（防止恶意构造长 URL 来攻击）考虑，会给 URL 长度加限制。</p><h2 id="_3-post-方法比-get-方法安全" tabindex="-1"><a class="header-anchor" href="#_3-post-方法比-get-方法安全" aria-hidden="true">#</a> （3）POST 方法比 GET 方法安全？</h2><p>​ 有人说POST 比 GET 安全，因为数据在地址栏上不可见。</p><p>​ 然而，从传输的角度来说，他们都是不安全的，因为 HTTP 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文。（个人发现某60和某讯电脑管家，会将GET和POST请求数据包完整的上传到他们的服务器，解析后你提交的信息就会被破解。类似于中间人攻击也会导致泄露，不安全）</p><p>​ 要想安全传输，就只有利用非对称加密，也就是 HTTPS。</p>',41),d={href:"http://www.javanx.cn/20190227/get-post/",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"_4-post-方法会产生两个-tcp-数据包",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-post-方法会产生两个-tcp-数据包","aria-hidden":"true"},"#"),a(" （4）POST 方法会产生两个 TCP 数据包？")],-1),m=s("p",null,"​ 上述文章中提到，post 会将 header 和 body 分开发送，先发送 header，服务端返回 100 状态码再发送 body。",-1),v=s("p",null,"​ HTTP 协议中没有明确说明 POST 会产生两个 TCP 数据包，而且实际测试(Chrome)发现，header 和 body 不会分开发送。",-1),b=s("p",null,"​ 所以，header 和 body 分开发送是部分浏览器或框架的请求方法，不属于 post 必然行为。",-1);function h(g,T){const n=p("ExternalLinkIcon");return o(),t("div",null,[k,s("p",null,[a("参考："),s("a",d,[a("http://www.javanx.cn/20190227/get-post/"),c(n)])]),u,m,v,b])}const f=e(i,[["render",h],["__file","GET与POST区别.html.vue"]]);export{f as default};
