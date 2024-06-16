export const data = JSON.parse("{\"key\":\"v-51b48361\",\"path\":\"/posts/java/Future%E4%BD%BF%E7%94%A8.html\",\"title\":\"Future使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Future使用\",\"author\":\"郑天祺\",\"tag\":[\"java\"],\"category\":[\"java基础\"],\"date\":\"2023-09-23T10:15:00.000Z\",\"description\":\"所谓异步调用其实就是实现一个可无需等待被调用函数的返回值而让操作继续运行的方法。 在 Java 语言中，简单的讲就是另启一个线程来完成调用中的部分计算，使调用继续运行或返回，而不需要等待计算结果。但调用者仍需要取线程的计算结果。 一、 Future 是什么 作用 future 可以用于异步获取多线程任务结果 , Callable 用于产生结果，Future 用于获取结果 流程 当 Future 进行 submit 开始 , 业务处理已经在多线程中开始 , 而 Get 即从多线程中获取数据 当 Get 获取时业务还未处理完 , 当前线程会阻塞 , 直到业务处理完成 . 所以需要注意 future 的任务安排 使用 future 会有以下效果：\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/java/Future%E4%BD%BF%E7%94%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Future使用\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"所谓异步调用其实就是实现一个可无需等待被调用函数的返回值而让操作继续运行的方法。 在 Java 语言中，简单的讲就是另启一个线程来完成调用中的部分计算，使调用继续运行或返回，而不需要等待计算结果。但调用者仍需要取线程的计算结果。 一、 Future 是什么 作用 future 可以用于异步获取多线程任务结果 , Callable 用于产生结果，Future 用于获取结果 流程 当 Future 进行 submit 开始 , 业务处理已经在多线程中开始 , 而 Get 即从多线程中获取数据 当 Get 获取时业务还未处理完 , 当前线程会阻塞 , 直到业务处理完成 . 所以需要注意 future 的任务安排 使用 future 会有以下效果：\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"java\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-09-23T10:15:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Future使用\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-09-23T10:15:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":2,\"title\":\"流程\",\"slug\":\"流程\",\"link\":\"#流程\",\"children\":[]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":5.9,\"words\":1769},\"filePathRelative\":\"posts/java/Future使用.md\",\"localizedDate\":\"2023年9月23日\",\"excerpt\":\"<p>所谓异步调用其实就是实现一个可无需等待被调用函数的返回值而让操作继续运行的方法。<br>\\n在 Java 语言中，简单的讲就是另启一个线程来完成调用中的部分计算，使调用继续运行或返回，而不需要等待计算结果。但调用者仍需要取线程的计算结果。</p>\\n<h1> 一、 Future 是什么</h1>\\n<h2> 作用</h2>\\n<p>future 可以用于异步获取多线程任务结果 , Callable 用于产生结果，Future 用于获取结果</p>\\n<h2> 流程</h2>\\n<p>当 Future 进行 submit 开始 , 业务处理已经在多线程中开始 , 而 Get 即从多线程中获取数据<br>\\n当 Get 获取时业务还未处理完 ,  当前线程会阻塞 , 直到业务处理完成 . 所以需要注意 future 的任务安排<br>\\n使用 future 会有以下效果：</p>\",\"autoDesc\":true}")
