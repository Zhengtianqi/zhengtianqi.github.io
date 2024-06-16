export const data = JSON.parse("{\"key\":\"v-e6bf3f22\",\"path\":\"/posts/java/%E6%B1%A0%E5%8C%96%E4%B9%8B%E7%BA%BF%E7%A8%8B%E6%B1%A0.html\",\"title\":\"池化之线程池\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"池化之线程池\",\"author\":\"郑天祺\",\"tag\":[\"java\",\"多线程\"],\"category\":[\"java基础\"],\"date\":\"2019-09-01T10:14:00.000Z\",\"description\":\"java中池化技术是提前保存大量的资源，以备不时之需以及重复使用。 1、池化技术 Tips：不是深度学习中的卷积和赤化 在实际应用当做，分配内存、创建进程、线程都会设计到一些系统调用，系统调用需要导致程序从用户态切换到内核态，是非常耗时的操作。因此，当程序中需要频繁的进行内存申请释放，进程、线程创建销毁等操作时，通常会使用内存池、进程池、线程池技术来提升程序的性能。 进程池、线程池：先启动若干数量的线程，并让这些线程都处于睡眠状态，当需要一个开辟一个线程去做具体的工作时，就会唤醒线程池中的某一个睡眠线程，让它去做具体工作，当工作完成后，线程又处于睡眠状态，而不是将线程销毁。当线程数达到一定数量时，可以在队列中等待。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/posts/java/%E6%B1%A0%E5%8C%96%E4%B9%8B%E7%BA%BF%E7%A8%8B%E6%B1%A0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"池化之线程池\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"java中池化技术是提前保存大量的资源，以备不时之需以及重复使用。 1、池化技术 Tips：不是深度学习中的卷积和赤化 在实际应用当做，分配内存、创建进程、线程都会设计到一些系统调用，系统调用需要导致程序从用户态切换到内核态，是非常耗时的操作。因此，当程序中需要频繁的进行内存申请释放，进程、线程创建销毁等操作时，通常会使用内存池、进程池、线程池技术来提升程序的性能。 进程池、线程池：先启动若干数量的线程，并让这些线程都处于睡眠状态，当需要一个开辟一个线程去做具体的工作时，就会唤醒线程池中的某一个睡眠线程，让它去做具体工作，当工作完成后，线程又处于睡眠状态，而不是将线程销毁。当线程数达到一定数量时，可以在队列中等待。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"java\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"多线程\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-09-01T10:14:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-16T13:16:38.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"池化之线程池\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-09-01T10:14:00.000Z\\\",\\\"dateModified\\\":\\\"2024-06-16T13:16:38.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1、池化技术\",\"slug\":\"_1、池化技术\",\"link\":\"#_1、池化技术\",\"children\":[]},{\"level\":2,\"title\":\"2、线程池好处\",\"slug\":\"_2、线程池好处\",\"link\":\"#_2、线程池好处\",\"children\":[]},{\"level\":2,\"title\":\"3、线程池工作流程\",\"slug\":\"_3、线程池工作流程\",\"link\":\"#_3、线程池工作流程\",\"children\":[]},{\"level\":2,\"title\":\"4、线程池的创建\",\"slug\":\"_4、线程池的创建\",\"link\":\"#_4、线程池的创建\",\"children\":[{\"level\":3,\"title\":\"1.corePoolSize：\",\"slug\":\"_1-corepoolsize\",\"link\":\"#_1-corepoolsize\",\"children\":[]},{\"level\":3,\"title\":\"2.maximumPoolSize：\",\"slug\":\"_2-maximumpoolsize\",\"link\":\"#_2-maximumpoolsize\",\"children\":[]},{\"level\":3,\"title\":\"3.keepAliveTime：\",\"slug\":\"_3-keepalivetime\",\"link\":\"#_3-keepalivetime\",\"children\":[]},{\"level\":3,\"title\":\"4.unit：\",\"slug\":\"_4-unit\",\"link\":\"#_4-unit\",\"children\":[]},{\"level\":3,\"title\":\"5.workQueue：\",\"slug\":\"_5-workqueue\",\"link\":\"#_5-workqueue\",\"children\":[]},{\"level\":3,\"title\":\"6.threadFactory：\",\"slug\":\"_6-threadfactory\",\"link\":\"#_6-threadfactory\",\"children\":[]},{\"level\":3,\"title\":\"7.handler：\",\"slug\":\"_7-handler\",\"link\":\"#_7-handler\",\"children\":[]}]},{\"level\":2,\"title\":\"5、向线程池提交任务\",\"slug\":\"_5、向线程池提交任务\",\"link\":\"#_5、向线程池提交任务\",\"children\":[]},{\"level\":2,\"title\":\"6、线程池的关闭\",\"slug\":\"_6、线程池的关闭\",\"link\":\"#_6、线程池的关闭\",\"children\":[{\"level\":3,\"title\":\"（1）正常关闭\",\"slug\":\"_1-正常关闭\",\"link\":\"#_1-正常关闭\",\"children\":[]},{\"level\":3,\"title\":\"（2）中断异常处理\",\"slug\":\"_2-中断异常处理\",\"link\":\"#_2-中断异常处理\",\"children\":[]},{\"level\":3,\"title\":\"（3）库代码中断异常处理\",\"slug\":\"_3-库代码中断异常处理\",\"link\":\"#_3-库代码中断异常处理\",\"children\":[]},{\"level\":3,\"title\":\"（4）检查中断状态\",\"slug\":\"_4-检查中断状态\",\"link\":\"#_4-检查中断状态\",\"children\":[]},{\"level\":3,\"title\":\"（5）线程内有迭代逻辑时的中断处理参考代码模板\",\"slug\":\"_5-线程内有迭代逻辑时的中断处理参考代码模板\",\"link\":\"#_5-线程内有迭代逻辑时的中断处理参考代码模板\",\"children\":[]}]},{\"level\":2,\"title\":\"7、线程池如何配置合理\",\"slug\":\"_7、线程池如何配置合理\",\"link\":\"#_7、线程池如何配置合理\",\"children\":[]},{\"level\":2,\"title\":\"8、JDK线程示例\",\"slug\":\"_8、jdk线程示例\",\"link\":\"#_8、jdk线程示例\",\"children\":[{\"level\":3,\"title\":\"（0）FixedThreadPool\",\"slug\":\"_0-fixedthreadpool\",\"link\":\"#_0-fixedthreadpool\",\"children\":[]},{\"level\":3,\"title\":\"（1）SingleThreadExecutor\",\"slug\":\"_1-singlethreadexecutor\",\"link\":\"#_1-singlethreadexecutor\",\"children\":[]},{\"level\":3,\"title\":\"（2）CachedThreadPool\",\"slug\":\"_2-cachedthreadpool\",\"link\":\"#_2-cachedthreadpool\",\"children\":[]},{\"level\":3,\"title\":\"（3）创建定时任务\",\"slug\":\"_3-创建定时任务\",\"link\":\"#_3-创建定时任务\",\"children\":[]}]},{\"level\":2,\"title\":\"9、建议\",\"slug\":\"_9、建议\",\"link\":\"#_9、建议\",\"children\":[{\"level\":3,\"title\":\"CountDownLatch实现所有线程达到某一个目标后，再继续进行下一步工作\",\"slug\":\"countdownlatch实现所有线程达到某一个目标后-再继续进行下一步工作\",\"link\":\"#countdownlatch实现所有线程达到某一个目标后-再继续进行下一步工作\",\"children\":[]},{\"level\":3,\"title\":\"采用Lock加锁在finally块中释放锁，保证不论是否抛出异常锁一定会被释放：\",\"slug\":\"采用lock加锁在finally块中释放锁-保证不论是否抛出异常锁一定会被释放\",\"link\":\"#采用lock加锁在finally块中释放锁-保证不论是否抛出异常锁一定会被释放\",\"children\":[]},{\"level\":3,\"title\":\"方式一：\",\"slug\":\"方式一\",\"link\":\"#方式一\",\"children\":[]},{\"level\":3,\"title\":\"方式二：直接调用ThreadPoolTaskExecutor\",\"slug\":\"方式二-直接调用threadpooltaskexecutor\",\"link\":\"#方式二-直接调用threadpooltaskexecutor\",\"children\":[]}]}],\"git\":{\"createdTime\":1718543798000,\"updatedTime\":1718543798000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":12.1,\"words\":3631},\"filePathRelative\":\"posts/java/池化之线程池.md\",\"localizedDate\":\"2019年9月1日\",\"excerpt\":\"<p>java中池化技术是提前保存大量的资源，以备不时之需以及重复使用。</p>\\n<h2> 1、池化技术</h2>\\n<p>Tips：不是深度学习中的卷积和赤化</p>\\n<p>在实际应用当做，分配内存、创建进程、线程都会设计到一些系统调用，系统调用需要导致程序从用户态切换到内核态，是非常耗时的操作。因此，当程序中需要频繁的进行内存申请释放，进程、线程创建销毁等操作时，通常会使用内存池、进程池、线程池技术来提升程序的性能。</p>\\n<p>进程池、线程池：先启动若干数量的线程，并让这些线程都处于睡眠状态，当需要一个开辟一个线程去做具体的工作时，就会唤醒线程池中的某一个睡眠线程，让它去做具体工作，当工作完成后，线程又处于睡眠状态，而不是将线程销毁。当线程数达到一定数量时，可以在队列中等待。</p>\",\"autoDesc\":true}")
