const t=JSON.parse('{"key":"v-690c877f","path":"/posts/database/HDFS-shell%E6%93%8D%E4%BD%9C%EF%BC%882%EF%BC%89.html","title":"HBASE shell操作（2）","lang":"zh-CN","frontmatter":{"title":"HBASE shell操作（2）","author":"郑天祺","tag":["hadoop"],"category":["大数据"],"date":"2020-12-06T12:02:00.000Z","description":"a.创建学生成绩表，结果如下。 Rowkey：id 列族：info和course，course包括3个版本数据 b.插入数据 数据包括 学生学号 Info course name age sex address Chinese math english 95001 Jom 20 男 山东省济南市 80 85 89 95002 Tom 19 男 山东省济南市 55，60 80 71 95003 Lily 20 女 北京市 65","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/posts/database/HDFS-shell%E6%93%8D%E4%BD%9C%EF%BC%882%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"HBASE shell操作（2）"}],["meta",{"property":"og:description","content":"a.创建学生成绩表，结果如下。 Rowkey：id 列族：info和course，course包括3个版本数据 b.插入数据 数据包括 学生学号 Info course name age sex address Chinese math english 95001 Jom 20 男 山东省济南市 80 85 89 95002 Tom 19 男 山东省济南市 55，60 80 71 95003 Lily 20 女 北京市 65"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:16:38.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"hadoop"}],["meta",{"property":"article:published_time","content":"2020-12-06T12:02:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HBASE shell操作（2）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-06T12:02:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1718543798000,"updatedTime":1718543798000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":511},"filePathRelative":"posts/database/HDFS-shell操作（2）.md","localizedDate":"2020年12月6日","excerpt":"<p>a.创建学生成绩表，结果如下。</p>\\n<p>Rowkey：id</p>\\n<p>列族：info和course，course包括3个版本数据</p>\\n<p>b.插入数据</p>\\n<p>数据包括</p>\\n<table>\\n<thead>\\n<tr>\\n<th>学生学号</th>\\n<th>Info</th>\\n<th>course</th>\\n<th></th>\\n<th></th>\\n<th></th>\\n<th></th>\\n<th></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td></td>\\n<td>name</td>\\n<td>age</td>\\n<td>sex</td>\\n<td>address</td>\\n<td>Chinese</td>\\n<td>math</td>\\n<td>english</td>\\n</tr>\\n<tr>\\n<td>95001</td>\\n<td>Jom</td>\\n<td>20</td>\\n<td>男</td>\\n<td>山东省济南市</td>\\n<td>80</td>\\n<td>85</td>\\n<td>89</td>\\n</tr>\\n<tr>\\n<td>95002</td>\\n<td>Tom</td>\\n<td>19</td>\\n<td>男</td>\\n<td>山东省济南市</td>\\n<td>55，60</td>\\n<td>80</td>\\n<td>71</td>\\n</tr>\\n<tr>\\n<td>95003</td>\\n<td>Lily</td>\\n<td>20</td>\\n<td>女</td>\\n<td>北京市</td>\\n<td></td>\\n<td>65</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
