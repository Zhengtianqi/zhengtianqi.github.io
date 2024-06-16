import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as s,b as e,d as t,e as a,a as l}from"./app-26f2803c.js";const c={},d=l('<p>最近一直听大佬说责任链模式，决定看看到底是什么。本文由翻阅《大话设计模式》得</p><h1 id="一、引言" tabindex="-1"><a class="header-anchor" href="#一、引言" aria-hidden="true">#</a> 一、引言</h1><p>​ 击鼓传花游戏，也称传彩球。中国民间游戏，流行于中国各地。数人、十数人或数十人围成一个圆圈席地而坐，另外一个人背对着人圈以槌击鼓。鼓响时，开始传花，花由一个人的手里传。</p><p>​ 有时候，花束就开始依次传递，鼓声一落，假如花束在某人手中，则该人就得饮酒（多是唱歌、跳舞、说笑话；或回答问题、猜谜、按纸条规定行事等）。</p><p>​ 击鼓传花便是责任链模式的应用。在责任链模式里，很多的对象由每一个对象对其下家的引用而联接起来形成一条链。</p><p>​ 请求在这个链上传递，直到链上的某一个对象决定处理此请求。发出这个请求的客户端并不知道链上的哪一个对象最终处理这个请求，这使得系统可以在不影响客户端的情况下动态地重新组织链和分配责任。</p><p>​ 在这个游戏中，参与游戏的人士具体处理者的对象，击鼓的人士客户端的对象。花代表请求。每个参加游戏的人有两个行为：（1）将花传下去（2）喝酒。击鼓的人不知道最终是哪个人执行了喝酒，但必然是做游戏的人们中的一个。</p><h1 id="二、纯与不纯的责任链模式" tabindex="-1"><a class="header-anchor" href="#二、纯与不纯的责任链模式" aria-hidden="true">#</a> 二、纯与不纯的责任链模式</h1><p>​ 一个纯的责任链模式要求一个具体的处理者对象只能在两个行为中选择一个：一是承担责任，二是把责任推给下家。不答应出现某一个具体处理者对象在承担了一部分责任后又把责任向下传的情况。</p><p>​ 但是在实际的系统里，纯的责任链很难找到；假如坚持责任链不纯便不是责任链模式，那么责任链模式便不会有太大的意义了。</p><h1 id="三、什么情况下使用责任链" tabindex="-1"><a class="header-anchor" href="#三、什么情况下使用责任链" aria-hidden="true">#</a> 三、什么情况下使用责任链</h1><p>（1）系统已经有一个由处理者对象组成的链。这个链可能由复合模式给出。？？</p><p>（2）当有多于一个的处理者对象会处理一个请求，而且在事先并不知道到底由哪一个处理者对象处理一个请求。这个处理者对象是动态确定的。</p><p>（3）当系统想发出一个请求给多个处理者对象中的某一个，但是不明显指定是哪一个处理者对象会处理此请求。</p><p>（4）当处理一个请求的处理者对象集合需要动态地指定时。？？</p><p>​ 光看概念不好理解</p><p>四、责任链模式的长处</p><p>灵活性：允许传给链结构的起点，但不知道最终在哪个节点上处理</p><p>低耦合：发出请求与处理请求的对象之间耦合度降低，允许多个处理着处理最终处理这个命令。</p><p>五、责任链的实践</p><p>​ 一个链可以是一条线，一个树，也可以是一个环。链的拓扑结构可以是单连通的或多连通的，责任链模式并不指定责任链的拓扑结构。但是责任链模式要求在同一个时间里，命令只可以被传给一个下家（或被处理掉）；而不可以传给多于一个下家。”</p><p>笔者其他常见的设计模式：</p>',22),i={href:"https://blog.csdn.net/qq_23034755/article/details/90487984",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/qq_23034755/article/details/90547215",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/qq_23034755/article/details/90705205",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/qq_23034755/article/details/91340383",target:"_blank",rel:"noopener noreferrer"};function b(q,g){const r=p("ExternalLinkIcon");return o(),s("div",null,[d,e("p",null,[t("建造起模式："),e("a",i,[t("https://blog.csdn.net/qq_23034755/article/details/90487984"),a(r)])]),e("p",null,[t("单例模式："),e("a",_,[t("https://blog.csdn.net/qq_23034755/article/details/90547215"),a(r)])]),e("p",null,[t("观察者模式："),e("a",h,[t("https://blog.csdn.net/qq_23034755/article/details/90705205"),a(r)])]),e("p",null,[t("发布订阅模式："),e("a",f,[t("https://blog.csdn.net/qq_23034755/article/details/91340383"),a(r)])])])}const x=n(c,[["render",b],["__file","责任链模式.html.vue"]]);export{x as default};
