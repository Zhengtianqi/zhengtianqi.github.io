import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-26f2803c.js";const t={},e=p(`<h1 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍" aria-hidden="true">#</a> 1、介绍</h1><p>Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数，但在实际应用中，可能需要对更大或者更小的数进行运算和处理。<br> 一般情况下，对于那些不需要准确计算精度的数字，我们可以直接使用Float和Double处理，但是Double.valueOf(String) 和Float.valueOf(String)会丢失精度。所以开发中，如果我们需要精确计算的结果，则必须使用BigDecimal类来操作。<br> BigDecimal所创建的是对象，故我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象。</p><h1 id="_2、常用构造函数" tabindex="-1"><a class="header-anchor" href="#_2、常用构造函数" aria-hidden="true">#</a> 2、常用构造函数</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>
创建一个具有参数所指定整数值的对象
<span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>
创建一个具有参数所指定双精度值的对象
<span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>
创建一个具有参数所指定长整数值的对象
<span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>
创建一个具有参数所指定以字符串表示的数值的对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用问题分析：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> a <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a values is:&quot;</span><span class="token operator">+</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b values is:&quot;</span><span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Output</span><span class="token operator">:</span>
a values is<span class="token operator">:</span><span class="token number">0.1000000000000000055511151231257827021181583404541015625</span>
b values is<span class="token operator">:</span><span class="token number">0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因分析：<br> 1）参数类型为double的构造方法的结果有一定的不可预知性。有人可能认为在Java中写入newBigDecimal(0.1)所创建的BigDecimal正好等于 0.1（非标度值 1，其标度为 1），但是它实际上等于0.1000000000000000055511151231257827021181583404541015625。这是因为0.1无法准确地表示为 double（或者说对于该情况，不能表示为任何有限长度的二进制小数）。这样，传入到构造方法的值不会正好等于 0.1（虽然表面上等于该值）。<br> 2）String 构造方法是完全可预知的：写入 newBigDecimal(“0.1”) 将创建一个 BigDecimal，它正好等于预期的 0.1。因此，比较而言， 通常建议优先使用String构造方法。<br> 3）当double必须用作BigDecimal的源时，请注意，此构造方法提供了一个准确转换；它不提供与以下操作相同的结果：先使用Double.toString(double)方法，然后使用BigDecimal(String)构造方法，将double转换为String。要获取该结果，请使用static valueOf(double)方法。</p><h1 id="_3、bigdecimal常用方法详解" tabindex="-1"><a class="header-anchor" href="#_3、bigdecimal常用方法详解" aria-hidden="true">#</a> 3、BigDecimal常用方法详解</h1><p>常用方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">)</span>
<span class="token class-name">BigDecimal</span>对象中的值相加，返回<span class="token class-name">BigDecimal</span>对象
<span class="token function">subtract</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">)</span>
<span class="token class-name">BigDecimal</span>对象中的值相减，返回<span class="token class-name">BigDecimal</span>对象
<span class="token function">multiply</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">)</span>
<span class="token class-name">BigDecimal</span>对象中的值相乘，返回<span class="token class-name">BigDecimal</span>对象
<span class="token function">divide</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">)</span>
<span class="token class-name">BigDecimal</span>对象中的值相除，返回<span class="token class-name">BigDecimal</span>对象

<span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
将<span class="token class-name">BigDecimal</span>对象中的值转换成字符串
<span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
将<span class="token class-name">BigDecimal</span>对象中的值转换成双精度数
<span class="token function">floatValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
将<span class="token class-name">BigDecimal</span>对象中的值转换成单精度数
<span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
将<span class="token class-name">BigDecimal</span>对象中的值转换成长整数
<span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
将<span class="token class-name">BigDecimal</span>对象中的值转换成整数

<span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
比较大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>java中对<span class="token class-name">BigDecimal</span>比较大小一般用的是bigdemical的compareTo方法
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
返回结果分析：
a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>表示<span class="token class-name">A</span>小于<span class="token class-name">B</span>；
a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>表示<span class="token class-name">A</span>等于<span class="token class-name">B</span>；
a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>表示<span class="token class-name">A</span>大于<span class="token class-name">B</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4、bigdecimal格式化" tabindex="-1"><a class="header-anchor" href="#_4、bigdecimal格式化" aria-hidden="true">#</a> 4、BigDecimal格式化</h1><p>由于NumberFormat类的format()方法可以使用BigDecimal对象作为其参数，可以利用BigDecimal对超出16位有效数字的货币值，百分值，以及一般数值进行格式化控制。<br> 以利用BigDecimal对货币和百分比格式化为例。首先，创建BigDecimal对象，进行BigDecimal的算术运算后，分别建立对货币和百分比格式化的引用，最后利用BigDecimal对象作为format()方法的参数，输出其格式化的货币值和百分比。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">NumberFormat</span> currency <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getCurrencyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//建立货币格式化引用</span>
        <span class="token class-name">NumberFormat</span> percent <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getPercentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//建立百分比格式化引用</span>
        percent<span class="token punctuation">.</span><span class="token function">setMaximumFractionDigits</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//百分比小数点最多3位</span>

        <span class="token class-name">BigDecimal</span> loanAmount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1000.48&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//贷款金额</span>
        <span class="token class-name">BigDecimal</span> interestRate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.008&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//利率</span>
        <span class="token class-name">BigDecimal</span> interest <span class="token operator">=</span> loanAmount<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>interestRate<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//相乘</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;贷款金额:\\t&quot;</span> <span class="token operator">+</span> currency<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>loanAmount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;利率:\\t&quot;</span> <span class="token operator">+</span> percent<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>interestRate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;利息:\\t&quot;</span> <span class="token operator">+</span> currency<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>interest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token class-name">Output</span><span class="token operator">:</span>
贷款金额<span class="token operator">:</span>	￥<span class="token number">1</span><span class="token punctuation">,</span><span class="token number">000.48</span>
利率<span class="token operator">:</span>	<span class="token number">0.8</span><span class="token operator">%</span>
利息<span class="token operator">:</span>	￥<span class="token number">8.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BigDecimal格式化保留2为小数，不足则补0：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NumberFormat</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;3.435&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.006&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.206&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@desc</span> 1.0~1之间的BigDecimal小数，格式化后失去前面的0,则前面直接加上0。
   * 2.传入的参数等于0，则直接返回字符串&quot;0.00&quot;
   * 3.大于1的小数，直接格式化返回字符串
   * <span class="token keyword">@param</span> <span class="token parameter">obj</span>传入的小数
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">DecimalFormat</span> df <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token string">&quot;#.00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;0.00&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>obj<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token operator">+</span>df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Output</span><span class="token operator">:</span>
<span class="token number">3.44</span>
<span class="token number">0.00</span>
<span class="token number">0.00</span>
<span class="token number">0.00</span>
<span class="token number">0.01</span>
<span class="token number">0.21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5、bigdecimal常见异常" tabindex="-1"><a class="header-anchor" href="#_5、bigdecimal常见异常" aria-hidden="true">#</a> 5、BigDecimal常见异常</h1><p>除法的时候出现异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>ArithmeticException</span><span class="token operator">:</span> <span class="token class-name">Non</span><span class="token operator">-</span>terminating decimal expansion<span class="token punctuation">;</span> no exact representable decimal result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原因分析:<br> 通过BigDecimal的divide方法进行除法时当不整除，出现无限循环小数时，就会抛异常：java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.<br> 解决方法：<br> divide方法设置精确的小数点，如：divide(xxxxx,2)</p><h1 id="_6、bigdecimal总结" tabindex="-1"><a class="header-anchor" href="#_6、bigdecimal总结" aria-hidden="true">#</a> 6、BigDecimal总结</h1><p>在需要精确的小数计算时再使用BigDecimal，BigDecimal的性能比double和float差，在处理庞大，复杂的运算时尤为明显。故一般精度的计算没必要使用BigDecimal。<br> 尽量使用参数类型为String的构造函数。<br> BigDecimal都是不可变的（immutable）的， 在进行每一次四则运算时，都会产生一个新的对象 ，所以在做加减乘除运算时要记得要保存操作后的值。</p>`,22),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","BigDecimal.html.vue"]]);export{r as default};
