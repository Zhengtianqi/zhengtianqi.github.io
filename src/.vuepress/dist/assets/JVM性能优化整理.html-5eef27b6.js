import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-26f2803c.js";const o={},r=e("<p>1、类加载过程</p><p>​ Java语言是一种具有动态性的解释型语言，类(Class)只有被加载到JVM后才能运行。当运行指定程序时，JVM会将编译生成的.class文件按照需求和一定的规则加载到内存中，并组织成为一个完整的Java应用程序。</p><p>​ 这个加载过程是由类加载器完成，具体来说，就是由ClassLoader和它的子类来实现的。类加载器本身也是一个类，其实质是把类文件从硬盘读取到内存中。</p><p>​ 类的加载方式分为隐式加载和显示加载。隐式加载指的是程序在使用new等方式创建对象时，会隐式地调用类的加载器把对应的类加载到JVM中。显示加载指的是通过直接调用class.forName()方法来把所需的类加载到JVM中。</p><p>7个阶段：加载-验证-准备-解析-初始化-使用-卸载</p><p>（1）加载</p><p>加载是类加载的第一个过程，在这个阶段，将完成一下三件事情:</p><p>​ 通过一个类的全限定名获取该类的二进制流。</p><p>​ 将该二进制流中的静态存储结构转化为方法去运行时数据结构。</p><p>​ 在内存中生成该类的Class 对象，作为该类的数据访问入口。</p><p>（2）验证</p><p>验证的目的是为了确保Class 文件的字节流中的信息不回危害到虚拟机.在该阶段主要完成以下四钟验证:<br> 文件格式验证∶验证字节流是否符合Class文件的规范，如主次版本号是否在当前虚拟机范围内，常量池中的常量是否有不被支持的类型.</p><p>​ 元数据验证∶对字节码描述的信息进行语义分析，如这个类是否有父类，是否集成了不被继承的类等。<br> ​ 字节码验证∶是整个验证过程中最复杂的一个阶段，通过验证数据流和控制流的分析，确定程序语义是否正确，主要针对方法体的验证。如∶方法中的类型转换是否正确，跳转指令是否正确等。</p><p>​ 符号引用验证∶这个动作在后面的解析过程中发生，主要是为了确保解析动作能正确执行。</p><p>（3）解析</p><p>​ 该阶段主要完成符号引用到直接引用的转换动作。解析动作并不一定在初始化动作完成之前，也有可能在初始化之后。</p><p>（4）初始化</p><p>​ 初始化时类加载的最后一步，前面的类加载过程，除了在加载阶段用户应用程序可以通过自定义类加载器参与之外，其余动作完全由虚拟机主导和控制。到了初始化阶段，才真正开始执行类中的定义的java程序代码。</p><p>（6）使用</p><p>（7）卸载</p><p>2、GC对象的判定方法</p><p>（1）引用计数法</p><p>​ 引用对象时，计数器+1；引用失效时，计数器-1。无法解决循环引用问题。</p><p>（2）可达性算法（引用链法）</p><p>该算法的思想是: 从一个被称为GC Roots的对象开始向下搜索，如果一个对象到GC Roots没有任何引用链相连时，则说明此对象不可用。（有向图进行管理）</p><p>在Java中可以作为GC Roots 的对象有以下几种:</p><p>虚拟机栈中引用的对象、方法区类静态属性引用的对象、方法区常量池引用的对象、本地方法栈JNI引用的对象</p><p>3、java内存泄露</p><p>​ 所谓内存泄露就是指一个不再被程序使用的对象或变量一直被占据在内存中。Java中有垃圾回收机制，它可以保证一对象不再被引用的时候，即对象变成了孤儿的时候，对象将自动被垃圾回收器从内存中清除掉。</p><p>​ 由于Java使用有向图的方式进行垃圾回收管理,可以消除引用循环的问题，例如有两个对象，相互引用，只要它们和根进程不可达的，那么GC也是可以回收它们的。</p><p>​ Java 中的内存泄露的情况:长生命周期的对象持有短生命周期对象的引用就很可能发生内存泄露，尽管短生命周期对象已经不再需要，但是因为长生命周期对象持有它的引用而导致不能被回收，这就是Java中内存泄露的发生场景。</p><p>​ 通俗地说，就是程序员可能创建了一个对象，以后一直不再使用这个对象，这个对象却一直被引用，即这个对象无用但是却无法被垃圾回收器回收的，这就是java中可能出现内存泄露的情况，例如，缓存系统，我们加载了一个对象放在缓存中(例如放在一个全局map对象中)，然后一直不再使用它，这个对象一直被缓存引用，但却不再被使用。。</p><p>​ 检查Java中的内存泄露，一定要让程序将各种分支情况都完整执行到程序结束，然后看某个对象是否被使用过，如果没有，则才能判定这个对象属于内存泄露。</p><p>​ 如果对象的引用被置为null，垃圾收集器是否会立即释放对象占用的内存?不会，在下一个垃圾回收周期中，这个对象将是可被回收的。</p><p>4、深拷贝和浅拷贝</p><p>​ 浅拷贝就是对对象中的数据成员进行简单赋值，如果存在动态成员或者指针就会报错。<br> ​ 深拷贝就是对对象中存在的动态成员或指针重新开辟内存空间。</p><p>5、类加载器</p><p>实现通过类的权限定名获取该类的二进制字节流的代码块叫做类加载器。主要有一下四种类加载器:<br> （1）启动类加载器(BootstrapClassLoader)用来加载Java核心类库，无法被Java程序直接引用。<br> （2）扩展类加载器(extensions class loader):它用来加载Java 的扩展库。Java虚拟机的实现会提供一个扩展库目录。该类加载器在此目录里面查找并加载Java类。</p><p>​ （3）系统类加载器(system class loader):它根据Java应用的类路径<br> (CLASSPATH)来加载Java类。一般来说,Java应用的类都是由它来完成加载的。可以通过ClassLoader.getSystemClassLoader()来获取它。<br> ​ （4）用户自定义类加载器，通过继承 java.lang.ClassLoader类的方式实现。</p><p>6、类加载器双亲委派模型</p><p>​ 当一个类收到了类加载请求时，不会自己先去加载这个类，而是将其委派给父类，由父类去加载，如果此时父类不能加载，反馈给子类，由子类去完成类的加载。</p>",41),t=[r];function l(J,v){return a(),s("div",null,t)}const n=p(o,[["render",l],["__file","JVM性能优化整理.html.vue"]]);export{n as default};
