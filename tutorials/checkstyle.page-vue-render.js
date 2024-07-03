
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Given below are some instructions on how to use Checkstyle for some common project tasks.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('p',[_v("The two config files to add are:")]),_v(" "),_m(5),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("Checkstyle configuration matching "),_c('a',{attrs:{"href":"/guides/conventions/java/intermediate.html"}},[_v("our Java coding standard")]),_v(" can be found in the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/config/checkstyle"}},[_v("AddressBook Level 3 project")]),_v(".")])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("To suppress a rule for a segment of code, you can add in the comment "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("//CHECKSTYLE.OFF: RuleName")]),_v(" at the start of the code segment and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("//CHECKSTYLE.ON: RuleName")]),_v(" at the end of the segment.")])]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('div',{staticClass:"code-block"},[_m(9),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(10),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_c('p',[_v("Given below are the steps to install the Checkstyle-IDEA plugin so that Intellij can alert you about code style problems as you write code.")]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-checkstyle"}},[_v("Using Checkstyle‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#configuring-checkstyle"}},[_v("Configuring Checkstyle‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-checkstyle-with-gradle"}},[_v("Using Checkstyle with Gradle‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-checkstyle-idea-plugin"}},[_v("Using Checkstyle-IDEA plugin‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(24)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-checkstyle"}},[_v("Using Checkstyle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-checkstyle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_v("Checkstyle is a static analysis tool that can check Java code against a set of style rules.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"configuring-checkstyle"}},[_v("Configuring Checkstyle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#configuring-checkstyle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Checkstyle expects configuration files for checkstyle (e.g., files that specify which style rules to follow) to be in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./config/checkstyle/")]),_v(" by convention.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("config/checkstyle/checkstyle.xml")]),_v(":  Contains the set of code style rules to follow.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("config/checkstyle/suppressions.xml")]),_v(": Contains which rules to suppress under in which files.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-checkstyle-with-gradle"}},[_v("Using Checkstyle with Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-checkstyle-with-gradle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"config-prereq"}},[_c('p',[_v("Prerequisite: The two config files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("suppressions.xml")]),_v(" are present (see the "),_c('a',{attrs:{"href":"#configuring-checkstyle"}},[_c('em',[_v("Configuring Checkstyle")]),_v(" section above")]),_v(" for more details on these two files).")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here is an example of relevant lines that should be in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("plugins {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'checkstyle'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// other plugins")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("checkstyle {")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("toolVersion = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'10.2'")])]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("}")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Some relevant Gradle "),_c('em',[_v("tasks")]),_v(" added by the CheckStyle plugin.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyleMain")]),_v(": checks if the main code complies with the style rules")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyleTest")]),_v(": checks if the test code complies with the style rules")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, you can run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew checkstyleMain checkstyleTest")]),_v(" to verify that all your code complies with the style rules.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-checkstyle-idea-plugin"}},[_v("Using Checkstyle-IDEA plugin"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-checkstyle-idea-plugin","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',[_c('p',[_v("Prerequisite: The two config files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("suppressions.xml")]),_v(" are present (see the "),_c('a',{attrs:{"href":"#configuring-checkstyle"}},[_c('em',[_v("Configuring Checkstyle")]),_v(" section above")]),_v(" for more details on these two files).")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Install the Checkstyle-IDEA plugin as follows:")]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" (Windows/Linux), or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IntelliJ IDEA")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Preferences…​")]),_v(" (macOS)")]),_v(" "),_c('li',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Plugins")]),_v(" (on the left slide menu in the dialog that pops up)")]),_v(" "),_c('li',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Marketplace")]),_v(" (on to top center of the same dialog box)")]),_v(" "),_c('li',[_v("Find the plugin.")]),_v(" "),_c('li',[_v("Restart the IDE to complete the installation.")])])]),_v(" "),_c('li',[_c('p',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings…​")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tools")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Checkstyle")])])]),_v(" "),_c('li',[_c('p',[_v("Set "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scan Scope")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Only Java sources (including tests)")]),_v(", so that the plugin will run checkstyle for our test source codes as well")])]),_v(" "),_c('li',[_c('p',[_v("Ensure that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Checkstyle version")]),_v(" is set to the one used by the project."),_c('br'),_v(" "),_c('span',{staticClass:"badge rounded-pill bg-success"},[_c('span',{staticClass:"fas fa-lightbulb",attrs:{"aria-hidden":"true"}})]),_v(" If your project uses Gradle, you can check the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file to find the correct version."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/checkstyle/checkstyle-idea-scan-scope.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/checkstyle/checkstyle-idea-scan-scope.png","alt":"checkstyle idea scan scope"}})])])]),_v(" "),_c('li',[_c('p',[_v("Click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("+")]),_v(" sign under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Configuration File")])])]),_v(" "),_c('li',[_c('p',[_v("Enter an arbitrary description e.g. addressbook")])]),_v(" "),_c('li',[_c('p',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Use a local Checkstyle file")])])]),_v(" "),_c('li',[_c('p',[_v("Use the checkstyle configuration file found at "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("config/checkstyle/checkstyle.xml")])])]),_v(" "),_c('li',[_c('p',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Next")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Finish")])])]),_v(" "),_c('li',[_c('p',[_v("Mark "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Active")]),_v(" for the newly imported check configuration"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/checkstyle/checkstyle-idea-configuration.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/checkstyle/checkstyle-idea-configuration.png","alt":"checkstyle idea configuration"}})])])]),_v(" "),_c('li',[_c('p',[_v("Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")])])]),_v(" "),_c('li',[_c('p',[_v("To verify the plugin is set up correctly, temporarily modify the code to violate a style rule (e.g., add an extra line break before an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{")]),_v(") and run the Checkstyle check using the plugin."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/guides/tutorials/images/checkstyle/runCheckstyle.png","width":"800"}})])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"troubleshooting"}},[_v("Troubleshooting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Problem: When importing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(", Checkstyle-IDEA plugin complains that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("The Checkstyle rules file could not be parsed. …​ The file has been blacklisted for 60s.")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Reason: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(" is written for a particular version, but the plugin was not configured to the correct version.")]),_v(" "),_c('li',[_v("Solution: Ensure that you have selected the correct "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Checkstyle   version")]),_v(" that matches the version in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" and have clicked\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Apply")]),_v(", as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(" is written for Gradle’s checkstyle.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Problem: After setting up "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyle.xml")]),_v(", Checkstyle-IDEA plugin does not seem to highlight the errors / real-time scanning seems broken.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Reason: The plugin may not immediately run after setting it up.")]),_v(" "),_c('li',[_v("Solution: Restart the IDE.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://checkstyle.sourceforge.io/"}},[_v("Checkstyle home page")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/checkstyle_plugin.html"}},[_v("Gradle documentation for the Checkstyle plugin")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v(" on Wed, 3 Jul 2024, 22:43:29 GMT+8]")])])])}
}];
  