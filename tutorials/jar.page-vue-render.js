
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("With Gradle")]},proxy:true}])},[_v(" "),_c('p',[_v("If you are using "),_c('a',{attrs:{"href":"/guides/tutorials/gradle.html"}},[_v("Gradle")]),_v(" in your project, you can use the "),_c('a',{attrs:{"href":"https://imperceptiblethoughts.com/shadow/"}},[_v("Shadow")]),_v(" Gradle plugin to package an application into an executable JAR file. It is particularly useful if you wish to creat a "),_c('em',[_v("fat")]),_v(" JAR file.")]),_v(" "),_c('p',[_v("To use the Shadow plugin, first ensure the following plugins are listed in your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("plugins {\n")]),_c('span',[_v("  id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'java'")]),_v("\n")]),_c('span',[_v("  id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'com.github.johnrengelman.shadow'")]),_v(" version "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'7.1.2'")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// other plugins")]),_v("\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_v("Second, ensure the following property is configured correctly, so that Shadow know which class is the entry point to the application:")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("mainClassName = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'seedu.duke.Main'")]),_v("\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_v("The task "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("shadowJar")])]),_v(" (e.g., running the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew shadowJar")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew clean shadowJar")]),_v(") creates a JAR file with the name in the format of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{archiveBaseName}-{archiveVersion}.jar")]),_v(" and puts it in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("builds/libs")]),_v(" folder. This output file name/location can be tweaked further using the properties "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationDir")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archiveBaseName")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archiveVersion")]),_v(" in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file. e.g.,")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("shadowJar {\n")]),_c('span',[_v("    archiveFileName = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'duke.jar'")]),_v("\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})]),_v(" If you are using JavaFX, see the panel below to find what else you need to add to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" to pack JavaFX libraries into the generated JAR file.")]),_v(" "),_c('div',{staticClass:"indented-level1"},[_c('panel',{attrs:{"minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-log-in",attrs:{"aria-hidden":"true"}})]),_v(" Tutorials → JavaFX Tutorial Part 1 → If you are using Gradle")])]},proxy:true}])},[_v(" "),_c('div',[_c('p',[_v("Update your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" to include the following lines:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("repositories {\n")]),_c('span',[_v("    mavenCentral()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("dependencies {\n")]),_c('span',[_v("    String javaFxVersion = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'17.0.7'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])],1),_v(" "),_c('p')]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("With Intellij IDEA")]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-facetime-video",attrs:{"aria-hidden":"true"}})]),_v(" Creating a JAR file in Intellij")]),_v(" - A video by Artur Spirin:")]),_v(" "),_c('div',{staticClass:"block-embed block-embed-service-youtube",staticStyle:{"position":"relative","padding-bottom":"60.9375%"}},[_c('iframe',{attrs:{"type":"text/html","src":"//www.youtube.com/embed/3Xo6zSBgdgk","frameborder":"0","webkitallowfullscreen":"","mozallowfullscreen":"","allowfullscreen":""}})]),_v(" "),_c('p',[_c('strong',[_v("If your app uses third-party libraries")]),_v(", you are recommended to create a fat JAR file using Gradle instead.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Although JUnit is a third-party library, you need not package it into a fat JAR file because JUnit is used only in the test code, not in the application code.")]),_v(" "),_c('p',[_v("But if you use JavaFX, you need to package the JavaFX libraries into a fat JAR file.")])])],1)],1),_v(" "),_m(11),_v(" "),_m(12),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#working-with-jar-files"}},[_v("Working with JAR files‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-jar-files"}},[_v("Running JAR files‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#fat-jar-files"}},[_v("Fat JAR files‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#creating-jar-files"}},[_v("Creating JAR files‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(13)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"working-with-jar-files"}},[_v("Working with JAR files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#working-with-jar-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_v("Java applications are typically delivered as JAR (short for "),_c('em',[_v("Java Archive")]),_v(") files.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"running-jar-files"}},[_v("Running JAR files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-jar-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Not all JAR files are "),_c('em',[_v("executable")]),_v(". Some may be just a library that you use in your own application.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("While some executable JAR files can be launched simply by double-clicking, the fool-proof way to run a jar file is to\nuse the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar")]),_v(". For example, if the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("foo.jar")]),_v(" is in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("C:\\projects")]),_v(" folder, you can do the following:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("open a terminal.")]),_v(" "),_c('li',[_v("navigate to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("C:\\projects")]),_v(" folder using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd C:\\projects")]),_v(")")]),_v(" "),_c('li',[_v("run the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar foo.jar")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Would like to try the above yourself?")]),_v(" Download the Collate-TUI.jar from "),_c('a',{attrs:{"href":"https://se-edu.github.io/collate/"}},[_v("https://se-edu.github.io/collate/")]),_v(" and run it using the command"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar Collate-TUI.jar")]),_v(" command. The JAR file's usage is given "),_c('a',{attrs:{"href":"https://se-education.org/collate/docs/User-Guide.html#using-the-text-ui"}},[_v("here")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"fat-jar-files"}},[_v("Fat JAR files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#fat-jar-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',[_c('p',[_c('strong',[_v("A normal JAR file contains only the classes and resources that you created for your app.")]),_v(" If you app has "),_c('em',[_v("dependencies")]),_v(" (i.e., third party libraries that your app depends on), the JAR file will not work unless the person running the JAR file also has those dependencies in their computer. This is not ideal.")]),_v(" "),_c('p',[_c('strong',[_v("A "),_c('em',[_v("fat")]),_v(" JAR (aka "),_c('em',[_v("uber")]),_v(" JAR) file solves the above problem by including all the dependencies inside the JAR file")]),_v(" itself "),_c('span',{staticClass:"dimmed"},[_v("(which makes the JAR file bigger than usual, hence the term "),_c('em',[_v("fat")]),_v(")")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"creating-jar-files"}},[_v("Creating JAR files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-jar-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html"}},[_v("Oracle's tutorial on JAR files")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://plugins.gradle.org/plugin/com.github.johnrengelman.shadow"}},[_v("Gradle documentation for the Shadow plugin")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://imperceptiblethoughts.com/shadow/introduction/"}},[_v("Shadow plugin homepage")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v(" on Mon, 22 Jul 2024, 0:25:26 GMT+8]")])])])}
}];
  