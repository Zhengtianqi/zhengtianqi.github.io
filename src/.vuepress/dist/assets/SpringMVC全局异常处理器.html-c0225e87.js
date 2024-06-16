const n=JSON.parse('{"key":"v-7cc91ae3","path":"/posts/spring/SpringMVC%E5%85%A8%E5%B1%80%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E5%99%A8.html","title":"SpringMVC全局异常处理器","lang":"zh-CN","frontmatter":{"title":"SpringMVC全局异常处理器","author":"ztq","tag":["SpringMVC"],"category":["spring"],"date":"2023-04-17T13:47:00.000Z","description":"一、引言 SpringBoot工程中对Controller配置全局异常处理。有些接口在发生异常时，如何对不同类型的接口使用不同的全局异常进行处理呢？ Spring提供了对@ControllerAdvice注解的配置，我们可以通过配置@ControllerAdvice对指定的Exception拦截。 二、@ControllerAdvice注解使用方法 // 第一种 @RestControllerAdvice public class GlobalExceptionHandler {} // 第二种 // basePackages 指定一个或多个包，这些包及其子包下的所有 Controller 都被该 @ControllerAdvice 管理。其中上面两种等价于 basePackages。 // basePackages // @ControllerAdvice(\\"cn.demo.controller\\") // @ControllerAdvice(value = \\"cn.demo.controller\\") @ControllerAdvice(basePackages = {\\"cn.demo.controller\\"}) public class GlobalExceptionHandler {} // 第三种 // basePackageClasses 指定一个或多个 Controller 类，这些类所属的包及其子包下的所有 Controller 都被该 @ControllerAdvice 管理。 @ControllerAdvice(basePackageClasses = {MyController.class}) public class GlobalExceptionHandler {} // 第四种 // assignableTypes：指定一个或多个 Controller 类，这些类被该 @ControllerAdvice 管理。 @ControllerAdvice(assignableTypes = {MyController.class}) public class GlobalExceptionHandler {} // 第五种 // annotations：指定一个或多个注解，被这些注解所标记的 Controller 会被该 @ControllerAdvice 管理。 @ControllerAdvice(annotations = {RestController.class}) public class GlobalExceptionHandler {}","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/spring/SpringMVC%E5%85%A8%E5%B1%80%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"SpringMVC全局异常处理器"}],["meta",{"property":"og:description","content":"一、引言 SpringBoot工程中对Controller配置全局异常处理。有些接口在发生异常时，如何对不同类型的接口使用不同的全局异常进行处理呢？ Spring提供了对@ControllerAdvice注解的配置，我们可以通过配置@ControllerAdvice对指定的Exception拦截。 二、@ControllerAdvice注解使用方法 // 第一种 @RestControllerAdvice public class GlobalExceptionHandler {} // 第二种 // basePackages 指定一个或多个包，这些包及其子包下的所有 Controller 都被该 @ControllerAdvice 管理。其中上面两种等价于 basePackages。 // basePackages // @ControllerAdvice(\\"cn.demo.controller\\") // @ControllerAdvice(value = \\"cn.demo.controller\\") @ControllerAdvice(basePackages = {\\"cn.demo.controller\\"}) public class GlobalExceptionHandler {} // 第三种 // basePackageClasses 指定一个或多个 Controller 类，这些类所属的包及其子包下的所有 Controller 都被该 @ControllerAdvice 管理。 @ControllerAdvice(basePackageClasses = {MyController.class}) public class GlobalExceptionHandler {} // 第四种 // assignableTypes：指定一个或多个 Controller 类，这些类被该 @ControllerAdvice 管理。 @ControllerAdvice(assignableTypes = {MyController.class}) public class GlobalExceptionHandler {} // 第五种 // annotations：指定一个或多个注解，被这些注解所标记的 Controller 会被该 @ControllerAdvice 管理。 @ControllerAdvice(annotations = {RestController.class}) public class GlobalExceptionHandler {}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"SpringMVC"}],["meta",{"property":"article:published_time","content":"2023-04-17T13:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringMVC全局异常处理器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-17T13:47:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"posts/spring/SpringMVC全局异常处理器.md","localizedDate":"2023年4月17日","excerpt":"<h1> 一、引言</h1>\\n<p>SpringBoot工程中对Controller配置全局异常处理。有些接口在发生异常时，如何对不同类型的接口使用不同的全局异常进行处理呢？<br>\\nSpring提供了对@ControllerAdvice注解的配置，我们可以通过配置@ControllerAdvice对指定的Exception拦截。</p>\\n<h1> 二、@ControllerAdvice注解使用方法</h1>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 第一种</span>\\n<span class=\\"token annotation punctuation\\">@RestControllerAdvice</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">GlobalExceptionHandler</span>\\n<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 第二种</span>\\n<span class=\\"token comment\\">// basePackages 指定一个或多个包，这些包及其子包下的所有 Controller 都被该 @ControllerAdvice 管理。其中上面两种等价于 basePackages。</span>\\n<span class=\\"token comment\\">// basePackages</span>\\n<span class=\\"token comment\\">// @ControllerAdvice(\\"cn.demo.controller\\")</span>\\n<span class=\\"token comment\\">// @ControllerAdvice(value = \\"cn.demo.controller\\")</span>\\n<span class=\\"token annotation punctuation\\">@ControllerAdvice</span><span class=\\"token punctuation\\">(</span>basePackages <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"cn.demo.controller\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">GlobalExceptionHandler</span> \\n<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 第三种</span>\\n<span class=\\"token comment\\">// basePackageClasses 指定一个或多个 Controller 类，这些类所属的包及其子包下的所有 Controller 都被该 @ControllerAdvice 管理。</span>\\n<span class=\\"token annotation punctuation\\">@ControllerAdvice</span><span class=\\"token punctuation\\">(</span>basePackageClasses <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token class-name\\">MyController</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">GlobalExceptionHandler</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 第四种</span>\\n<span class=\\"token comment\\">// assignableTypes：指定一个或多个 Controller 类，这些类被该 @ControllerAdvice 管理。</span>\\n<span class=\\"token annotation punctuation\\">@ControllerAdvice</span><span class=\\"token punctuation\\">(</span>assignableTypes <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token class-name\\">MyController</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">GlobalExceptionHandler</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 第五种</span>\\n<span class=\\"token comment\\">// annotations：指定一个或多个注解，被这些注解所标记的 Controller 会被该 @ControllerAdvice 管理。</span>\\n<span class=\\"token annotation punctuation\\">@ControllerAdvice</span><span class=\\"token punctuation\\">(</span>annotations <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token class-name\\">RestController</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">GlobalExceptionHandler</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
