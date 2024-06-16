import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as o,a as r}from"./app-26f2803c.js";const t={},i=r("<p>1、Synchronized</p><p>​ Synchronized是由JVM实现的一种实现互斥同步的一种方式，如果你查看被Synchronized修饰过的程序块编译后的字节码，会发现，被Synchronized修饰过的程序块，在编译前后被编译器生成了monitor enter和monitor exit两个字节码指令。</p><p>​ 这两个指令是什么意思呢?在虚拟机执行到monitor enter指令时，首先要尝试获取对象的锁︰如果这个对象没有锁定，或者当前线程已经拥有了这个对象的锁，把锁的计数器+1;当执行monitorexit指令时将锁计数器-1﹔当计数器为O时，锁就被释放了。如果获取对象失败了，那当前线程就要阻塞等待，直到对象锁被另外一个线程释放为止。</p><p>​ Java中Synchronize通过在对象头设置标记，达到了获取锁和释放锁的目的。</p><p>​ Synchronize是非公平锁。</p><p>2、Synchronized锁对象</p><p>​ “锁”的本质其实是monitorenter和monitorexit字节码指令的一个Reference类型的参数，即要锁定和解锁的对象。我们知道，使用Synchronized可以修饰不同的对象，因此，对应的对象锁可以这么确定。<br> （1）如果 Synchronized 明确指定了锁对象，比如 Synchronized(变量名)、Synchronized(this)等，说明加解锁对象为该对象。<br> （2）如果没有明确指定:<br> 若Synchronized修饰的方法为非静态方法，表示此方法对应的对象为锁对象;<br> 若Synchronized修饰的方法为静态方法，则表示此方法对应的类对象为锁对象。<br> 注意，当一个对象被锁住时，对象里面所有用Synchronized修饰的方法都将产生堵塞，而对象里非 Synchronized修饰的方法可正常被调用，不受锁影响。</p><p>3、Synchronized可重入锁</p><p>​ 可重入性是锁的一个基本要求，是为了解决自己锁死自己的情况。比如下面的伪代码，一个类中的同步方法调用另一个同步方法，假如Synchronized 不支持重入，进入method2方法时当前线程获得锁，method2方法里面执行method1时当前线程又要去尝试获取锁，这时如果不支持重入，它就要等释放，把自己阻塞，导致自己锁死自己。<br> ​ 对Synchronized来说，可重入性是显而易见的，刚才提到，在执行monitor enter指令时，如果这个对象没有锁定，或者当前线程已经拥有了这个对象的锁(而不是已拥有了锁则不能继续获取)，就把锁的计数器+1，其实本质上就通过这种方式实现了可重入性。</p><p>4、JVM对java的原生锁的优化</p><p>​ 在Java 6之前，Monitor的实现完全依赖底层操作系统的互斥锁来实现,也就是我们刚才在问题二中所阐述的获取/释放锁的逻辑。由于Java层面的线程与操作系统的原生线程有映射关系，如果要将一个线程进行阻塞或唤起都需要操作系统的协助，这就需要从用户态切换到内核态来执行，这种切换代价十分昂贵，很耗处理器时间，现代JDK中做了大量的优化。</p><p>​ 一种优化是使用自旋锁，即在把线程进行阻塞操作之前先让线程自旋等待一段时间，可能在等待期间其他线程已经解锁，这时就无需再让线程执行阻塞操作，避免了用户态到内核态的切换。现代JDK中还提供了三种不同的Monitor实现，也就是三种不同的锁: 偏向锁、轻量级锁、重量级锁</p><p>​ 这三种锁使得JDK得以优化Synchronized的运行，当JVM检测到不同的竞争状况时，会自动切换到适合的锁实现，这就是锁的升级、降级。</p><p>​ 当没有竞争出现时，默认会使用偏向锁。JVM会利用CAS操作，在对象头上的Mark Word部分设置线程ID，以表示这个对象偏向于当前线程，所以并不涉及真正的互斥锁，因为在很多应用场景中，大部分对象生命周期中最多会被一个线程锁定，使用偏斜锁可以降低无竞争开销。</p><p>​ 如果有另一线程试图锁定某个被偏斜过的对象，JVM就撤销偏斜锁，切换到轻量级锁实现。</p><p>​ 轻量级锁依赖CAS操作 Mark Word来试图获取锁，如果重试成功，就使用普通的轻量级锁;否则,进—步升级为重量级锁。</p><p>5、Synchronize 和 ReentrantLock实现原理的不同</p><p>Synchronized通过在对象头中设置标记实现了这一目的，是一种JVM原生的锁实现方式，而 ReentrantLock 以及所有的基于Lock接口的实现类，都是通过用一个volitile 修饰的int型变量，并保证每个线程都能拥有对该int的可见性和原子修改，其本质是基于所谓的AQS框架。</p><p>6、AQS框架</p><p>​ AQS(AbstractQueuedSynchronizer类)是一个用来构建锁和同步器的框架,各种Lock包中的锁(常用的有ReentrantLock、ReadWriteLock)，以及其他如Semaphore、CountDownLatch，甚至是早期的FutureTask 等，都是基于AQS来构建。</p><p>（1）AQS内部定义了一个volatile int state变量，表示同步状态：当线程调用lock方法时，如果state=0，说明没有任何线程占有共享资源的锁，可以获得锁并将state=1;如果state=1，则说明有线程目前正在使用共享变量，其他线程必须加入同步队列进行等待。</p><p>（2）</p>",22),p=[i];function c(a,h){return e(),o("div",null,p)}const y=n(t,[["render",c],["__file","并发编程总结.html.vue"]]);export{y as default};
