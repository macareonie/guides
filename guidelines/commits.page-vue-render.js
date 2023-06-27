
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_c('span',{attrs:{"id":"section-organizing-commits"}},[_m(2),_v(" "),_m(3),_v(" "),_c('ul',[_m(4),_v(" "),_m(5),_v(" "),_c('li',[_m(6),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Rationale: Reviewers should be able to review one commit at a time.")])])],1),_v(" "),_c('li',[_m(7),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Rationale: Bigger commits are harder to review.")]),_v(" "),_c('p',[_c('span',{staticClass:"fas fa-quote-left",attrs:{"aria-hidden":"true"}}),_v(" \"Ask a programmer to review 10 lines of code, he'll find 10 issues. Ask him to do 500 lines and he'll say it\nlooks good.\" --["),_c('a',{attrs:{"href":"https://twitter.com/girayozil/status/306836785739210752"}},[_v("source")]),_v("]")])]),_v(" "),_m(8),_v(" "),_m(9)],1),_v(" "),_c('li',[_m(10),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Rationale: Build-breaking commits in the version history hinder the ability to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git bisect")]),_v(" for locating bugs.")])])],1)]),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level4/pull/237"}},[_v("Here")]),_v(" is an example PR of commits that are organized as described above.")])]),_v(" "),_m(11)],1),_v(" "),_c('span',{attrs:{"id":"section-merging-branches"}},[_m(12),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("When merging branch, the aim is to keep the version history neat so that it is easy to do things such as the following:")]),_v(" "),_c('ul',[_c('li',[_v("Find which commit introduced a bug using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git bisect")]),_v(".")]),_v(" "),_c('li',[_v("Undo a specific change by reverting a commit in the history without breaking anything else.")])])]),_v(" "),_m(13),_v(" "),_c('div',{staticClass:"indented-level1"},[_c('panel',{attrs:{"minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-log-in",attrs:{"aria-hidden":"true"}})]),_v(" Guidelines » Working with git » "),_c('strong',[_v("Organizing commits")])])]},proxy:true}])},[_v(" "),_c('div',[_c('h2',{attrs:{"id":"organizing-commits-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"organizing-commits-2"}}),_v("Organizing commits"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#organizing-commits-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Commits in a branch or a PR is said to be "),_c('em',[_v("well-organized")]),_v(" if they have the following qualities:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Each commit contains a single logical change, and this change must stand on its own.")]),_v(" i.e. each commit has a single responsibility, and that responsibility must be fully carried out."),_c('br'),_v("\nFor example, if the commit message says "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Move delete() from Person class to Address class")]),_v(", the commit cannot contain the addition of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete()")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" class only; it should also contain the deletion of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete()")]),_v(" from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" class for it to be a "),_c('em',[_v("complete")]),_v(" implementation what is stated in the commit message.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Each commit has a "),_c('em',[_v("well-written")]),_v(" commit message")]),_v(" i.e., it follows "),_c('a',{attrs:{"href":"/guides/conventions/git.html"}},[_v("these guidelines")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Commits are ordered in a bottom-up fashion")]),_v(", each commit building on top of the previous one towards the end goal of the PR.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Rationale: Reviewers should be able to review one commit at a time.")])])],1),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Ideally, a commit does not modify more than 100 lines of code.")])]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Rationale: Bigger commits are harder to review.")]),_v(" "),_c('p',[_c('span',{staticClass:"fas fa-quote-left",attrs:{"aria-hidden":"true"}}),_v(" \"Ask a programmer to review 10 lines of code, he'll find 10 issues. Ask him to do 500 lines and he'll say it\nlooks good.\" --["),_c('a',{attrs:{"href":"https://twitter.com/girayozil/status/306836785739210752"}},[_v("source")]),_v("]")])]),_v(" "),_c('p',[_v("Commits containing "),_c('em',[_c('em',[_v("mechanical changes")])]),_v(" (e.g. automated refactorings, cut-paste type code movements, file renames, etc.),")]),_v(" "),_c('ul',[_c('li',[_v("should include only one "),_c('em',[_v("mechanical change")]),_v("  per commit e.g., rename a single variable across the code base.")]),_v(" "),_c('li',[_v("should not contain other non-mechanical changes, unless unavoidable.")]),_v(" "),_c('li',[_v("can exceed 100 LoC.")]),_v(" "),_c('li',[_v("should have the description of the change in the commit message (so that the results can be reproduced).")])])],1),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Every commit pass CI.")]),_v(" when you merge a series of commits (without squashing), every commit in your push (not just the last commit) should pass CI.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Rationale: Build-breaking commits in the version history hinder the ability to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git bisect")]),_v(" for locating bugs.")])])],1)]),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level4/pull/237"}},[_v("Here")]),_v(" is an example PR of commits that are organized as described above.")])]),_v(" "),_c('p',[_c('strong',[_v("Refactor commits before pushing.")]),_v(" It is unlikely that you can produce a series of commits that meet all the above criteria in the first try. In such cases, refactor commits until they meet the criteria. "),_c('a',{attrs:{"href":"http://stackoverflow.com/a/1186549"}},[_v("This S/O post")]),_v(" describes how to refactor commits (even easier to do with visual tools such as SourceTree -- see "),_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=mBCJCuU3p7I"}},[_v("this video")]),_v(").")])],1)])],1),_v(" "),_c('p'),_v(" "),_m(14)],1),_c('p'),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#working-with-git"}},[_v("Working with Git‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#organizing-commits"}},[_v("Organizing commits‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#merging-branches"}},[_v("Merging branches‎")])])])],1)])],1),_v(" "),_m(15)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"working-with-git"}},[_c('span',{staticClass:"anchor",attrs:{"id":"working-with-git"}}),_v("Working with Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#working-with-git","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"organizing-commits"}},[_c('span',{staticClass:"anchor",attrs:{"id":"organizing-commits"}}),_v("Organizing commits"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#organizing-commits","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Commits in a branch or a PR is said to be "),_c('em',[_v("well-organized")]),_v(" if they have the following qualities:")])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_c('strong',[_v("Each commit contains a single logical change, and this change must stand on its own.")]),_v(" i.e. each commit has a single responsibility, and that responsibility must be fully carried out."),_c('br'),_v("\nFor example, if the commit message says "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Move delete() from Person class to Address class")]),_v(", the commit cannot contain the addition of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete()")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" class only; it should also contain the deletion of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete()")]),_v(" from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" class for it to be a "),_c('em',[_v("complete")]),_v(" implementation what is stated in the commit message.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_c('strong',[_v("Each commit has a "),_c('em',[_v("well-written")]),_v(" commit message")]),_v(" i.e., it follows "),_c('a',{attrs:{"href":"/guides/conventions/git.html"}},[_v("these guidelines")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Commits are ordered in a bottom-up fashion")]),_v(", each commit building on top of the previous one towards the end goal of the PR.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Ideally, a commit does not modify more than 100 lines of code.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Commits containing "),_c('em',[_c('em',[_v("mechanical changes")])]),_v(" (e.g. automated refactorings, cut-paste type code movements, file renames, etc.),")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("should include only one "),_c('em',[_v("mechanical change")]),_v("  per commit e.g., rename a single variable across the code base.")]),_v(" "),_c('li',[_v("should not contain other non-mechanical changes, unless unavoidable.")]),_v(" "),_c('li',[_v("can exceed 100 LoC.")]),_v(" "),_c('li',[_v("should have the description of the change in the commit message (so that the results can be reproduced).")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Every commit pass CI.")]),_v(" when you merge a series of commits (without squashing), every commit in your push (not just the last commit) should pass CI.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Refactor commits before pushing.")]),_v(" It is unlikely that you can produce a series of commits that meet all the above criteria in the first try. In such cases, refactor commits until they meet the criteria. "),_c('a',{attrs:{"href":"http://stackoverflow.com/a/1186549"}},[_v("This S/O post")]),_v(" describes how to refactor commits (even easier to do with visual tools such as SourceTree -- see "),_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=mBCJCuU3p7I"}},[_v("this video")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"merging-branches"}},[_c('span',{staticClass:"anchor",attrs:{"id":"merging-branches"}}),_v("Merging branches"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#merging-branches","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("The default strategy is to do a "),_c('em',[_v("squash-merge")]),_v(".")]),_v(" This is suitable when the branch tackles one task but multiple commits that are not well-organized (as per the definition of 'well-organized' in the panel below).")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Use a "),_c('em',[_v("merge commit")])]),_v(" if the commits are well-organized, and the branch tackles only one task. In this case the commit message of the merge commit should explain the full task.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Use a "),_c('em',[_v("rebase-merge")])]),_v(" if the commits are well-organized and each commit is an independent task (as opposed to steps or a bigger tasks).")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("In other cases")]),_v(", consider reorganizing/splitting the branch to match one of the above.\n")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v(" on Tue, 27 Jun 2023, 18:12:54 GMT+8]")])])])}
}];
  