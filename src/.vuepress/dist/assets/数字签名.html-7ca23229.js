import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as t,b as a,d as c,e as l,a as s}from"./app-26f2803c.js";const r={},i=s(`<h1 id="一、数字签名概念" tabindex="-1"><a class="header-anchor" href="#一、数字签名概念" aria-hidden="true">#</a> 一、数字签名概念</h1><p>​ 数字签名技术是消息传递进行加密获得的签名。如HTTP请求时将请求体加密。数字签名可以用于证实数字内容的完整性和来源。常见的数字签名算法：<strong>椭圆曲线数字签名算法</strong>。。。</p><h1 id="二、数字签名的流程" tabindex="-1"><a class="header-anchor" href="#二、数字签名的流程" aria-hidden="true">#</a> 二、数字签名的流程</h1><h2 id="_1-椭圆曲线数字签名算法" tabindex="-1"><a class="header-anchor" href="#_1-椭圆曲线数字签名算法" aria-hidden="true">#</a> （1）椭圆曲线数字签名算法:</h2><h3 id="生成数字签名" tabindex="-1"><a class="header-anchor" href="#生成数字签名" aria-hidden="true">#</a> 生成数字签名</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>获取消息m的数字摘要<span class="token class-name">Hm</span> 即 <span class="token class-name">Hm</span> <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
使用<span class="token constant">RFC6979</span>协议，通过私钥pk和m生成确定随机数k<span class="token punctuation">;</span>
计算<span class="token class-name">R</span> <span class="token operator">=</span> k <span class="token operator">*</span> <span class="token class-name">G</span>，其中<span class="token class-name">R</span>为曲线上的一点，取其横坐标r作为数字签名的一部分，然后计算s，即s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Hm</span> <span class="token operator">+</span> r <span class="token operator">*</span> pk<span class="token punctuation">)</span> <span class="token operator">/</span> k<span class="token punctuation">;</span>
得到消息m的数字签名为<span class="token class-name">Sig</span> <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span>r<span class="token punctuation">,</span> s<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证数字签名" tabindex="-1"><a class="header-anchor" href="#验证数字签名" aria-hidden="true">#</a> 验证数字签名</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>根据<span class="token class-name">Sig</span>，使用对应的公钥<span class="token class-name">P</span>验证其签名<span class="token punctuation">;</span>
判断等式s <span class="token operator">*</span> <span class="token class-name">R</span> <span class="token operator">=</span> <span class="token class-name">Hm</span> <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">+</span> r <span class="token operator">*</span> <span class="token class-name">P</span>是否成立，成立则通过验证
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证方法解释" tabindex="-1"><a class="header-anchor" href="#验证方法解释" aria-hidden="true">#</a> 验证方法解释</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>由椭圆公式：r 得到 <span class="token class-name">R</span> <span class="token punctuation">;</span>
因为：s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Hm</span> <span class="token operator">+</span> r <span class="token operator">*</span> pk<span class="token punctuation">)</span> <span class="token operator">/</span> k 得到 s <span class="token operator">*</span> k <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Hm</span> <span class="token operator">+</span> r <span class="token operator">*</span> pk<span class="token punctuation">)</span><span class="token punctuation">;</span>
又因为：<span class="token class-name">P</span> <span class="token operator">=</span> pk <span class="token operator">*</span> <span class="token class-name">G</span><span class="token punctuation">;</span>
所以：s <span class="token operator">*</span> <span class="token punctuation">(</span>k <span class="token operator">*</span> <span class="token class-name">G</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token class-name">Hm</span> <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">+</span> r <span class="token operator">*</span> <span class="token punctuation">(</span>pk <span class="token operator">*</span> <span class="token class-name">G</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
推出 s <span class="token operator">*</span> <span class="token class-name">R</span> <span class="token operator">=</span> <span class="token class-name">Hm</span> <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">+</span> r <span class="token operator">*</span> <span class="token class-name">P</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原理解释" tabindex="-1"><a class="header-anchor" href="#原理解释" aria-hidden="true">#</a> 原理解释：</h3>`,11),k={href:"https://www.cnblogs.com/wsonepiece/p/3977021.html",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="_2-schnorr数字签名算法" tabindex="-1"><a class="header-anchor" href="#_2-schnorr数字签名算法" aria-hidden="true">#</a> （2）Schnorr数字签名算法</h2><h3 id="生成数字签名-1" tabindex="-1"><a class="header-anchor" href="#生成数字签名-1" aria-hidden="true">#</a> 生成数字签名</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>计算消息m的数字摘要<span class="token operator">:</span> <span class="token class-name">Hm</span> <span class="token operator">=</span> <span class="token class-name">H</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
生成确定性随机数k，计算 <span class="token class-name">R</span> <span class="token operator">=</span> k <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token punctuation">,</span> 取<span class="token class-name">R</span>的横坐标 r 作为签名的一部分
计算签名另一部分：s <span class="token operator">=</span> k <span class="token operator">+</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token class-name">P</span> <span class="token operator">||</span> <span class="token class-name">R</span> <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token operator">*</span> pk
得到数字签名 <span class="token class-name">Sig</span> <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span>r <span class="token punctuation">,</span> s<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证数字签名-1" tabindex="-1"><a class="header-anchor" href="#验证数字签名-1" aria-hidden="true">#</a> 验证数字签名</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>利用公钥<span class="token class-name">P</span>验证其签名
s <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">=</span> <span class="token class-name">R</span> <span class="token operator">+</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token class-name">P</span> <span class="token operator">||</span> <span class="token class-name">R</span> <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">P</span> 是否成立，成立则通过验证
多个签名：
<span class="token punctuation">(</span>s1 <span class="token operator">+</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">+</span> <span class="token constant">S50</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">=</span> <span class="token constant">R1</span> <span class="token operator">+</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">+</span> <span class="token constant">R50</span> <span class="token operator">+</span> h1 <span class="token operator">*</span> <span class="token constant">P1</span> <span class="token operator">+</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> h50 <span class="token operator">*</span> <span class="token constant">P50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证方法解释-1" tabindex="-1"><a class="header-anchor" href="#验证方法解释-1" aria-hidden="true">#</a> 验证方法解释</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>因为：s <span class="token operator">=</span> k <span class="token operator">+</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token class-name">P</span> <span class="token operator">||</span> <span class="token class-name">R</span> <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token operator">*</span> pk <span class="token punctuation">;</span>
又因为：<span class="token class-name">P</span> <span class="token operator">=</span> pk <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token punctuation">;</span>
所以：s <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">=</span> k <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">+</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token class-name">P</span> <span class="token operator">||</span> <span class="token class-name">R</span> <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>pk <span class="token operator">*</span> <span class="token class-name">G</span><span class="token punctuation">)</span> 
所以：s <span class="token operator">*</span> <span class="token class-name">G</span> <span class="token operator">=</span> <span class="token class-name">R</span> <span class="token operator">+</span> h <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token class-name">P</span> <span class="token operator">||</span> <span class="token class-name">R</span> <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">P</span>
由r 得到 <span class="token class-name">R</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(m,h){const n=p("ExternalLinkIcon");return o(),t("div",null,[i,a("p",null,[a("a",k,[c("https://www.cnblogs.com/wsonepiece/p/3977021.html"),l(n)])]),u])}const g=e(r,[["render",d],["__file","数字签名.html.vue"]]);export{g as default};
