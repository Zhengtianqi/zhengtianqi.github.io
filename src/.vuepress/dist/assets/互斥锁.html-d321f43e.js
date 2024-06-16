import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-26f2803c.js";const t={},e=p(`<h2 id="_1、关于-互斥-和-同步-的概念" tabindex="-1"><a class="header-anchor" href="#_1、关于-互斥-和-同步-的概念" aria-hidden="true">#</a> 1、关于“互斥”和“同步”的概念</h2><p>互斥 : 就是线程A访问了一组数据，线程BCD就不能同时访问这些数据，直到A停止访问了<br> 同步 : 就是ABCD这些线程要约定一个执行的协调顺序，比如D要执行，B和C必须都得做完，而B和C要开始，A必须先得做完。</p><p>互斥 ：就是不同线程通过竞争进入临界区（共享的数据和硬件资源），为了防止访问冲突，在有限的时间内只允许其中之一独占性的使用共享资源。如不允许同时写</p><p>同步 ：关系则是多个线程彼此合作，通过一定的逻辑关系来共同完成一个任务。一般来说，同步关系中往往包含互斥，同时对临界区的资源会按照某种逻辑顺序进行访问。如先生产后使用</p><p>总的来说，两者的区别就是：</p><p>互斥是通过竞争对资源的独占使用，彼此之间不需要知道对方的存在，执行顺序是一个乱序。</p><p>同步是协调多个相互关联线程合作完synchronized不同用法锁对象说明</p><h2 id="_2、java中synchronized和lock是互斥锁" tabindex="-1"><a class="header-anchor" href="#_2、java中synchronized和lock是互斥锁" aria-hidden="true">#</a> 2、JAVA中synchronized和Lock是互斥锁</h2><p>修饰在静态方法上，锁对象是当前类的Class对象<br> 修饰在实例方法上，锁对象是当前实例对象<br> 同步块中，锁对象是synchronized括号后面的对象成任务，彼此之间知道对方存在，执行顺序往往是有序的。</p><h2 id="_3、synchronized的用法" tabindex="-1"><a class="header-anchor" href="#_3、synchronized的用法" aria-hidden="true">#</a> 3、synchronized的用法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/** 如下demo的4个方法展示了不同使用方法下锁对象 **/</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token constant">LOCK</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">s1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;类同步方法，锁对象是当前Class对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">s2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;实例同步方法，锁对象是当前对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">s3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token constant">LOCK</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;同步块，锁对象是LOCK对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">s4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">SynchronizedDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;同步块，锁对象和静态同步方法的锁对象一样都是当前Class对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","互斥锁.html.vue"]]);export{k as default};
