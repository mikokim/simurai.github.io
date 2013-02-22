montageDefine("25d03be","docs/Spec:-ArrayController.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Spec: ArrayController - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs class=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>ArrayController Editor François Frisch</p>\n\n<p>Index\nIntroduction\nFunctional Description\nAPI\nExamples\nIntegration\nDependencies\nConcerns\n\nIntroduction</p>\n\n<p>The Array Controller is used to manage information about an array such as selection. It makes it possible to temporarily expose a sorted or filtered view of it via the organizedObjects property.</p>\n\n<p>API</p>\n\n<p>Initialization</p>\n\n<p>initWithContent(content)\nArguments: Array\nInitalizes the ArrayController with the specified content. \nBase</p>\n\n<p>content\nType: Array\nDefault: null\nThe content managed by the ArrayController.\nThe array passed in to this function is observed so that modifications are reflected in the organizedObjects automatically if automaticallyOrganizeObjects is true.\norganizedObjects\nType: Array\nDefault: null\nThe filtered and sorted content of the ArrayController.\nSelection</p>\n\n<p>selectedObjects\nType:\nDefault: \nGets or sets the selected objects in the collection.\nselectedContentIndexes\nType:\nDefault: \nGets or sets the indexes of the currently selected items in the content array.\nselectedIndexes\nType:\nDefault: \nGets or sets the indexes of the currently selected items in the organizedObjects array.</p>\n\n<p>TO ADD? selectNext, canSelectNext, selectPrevious, canSelectPrevious\nModifying organizedObjects array</p>\n\n<p>sortFunction\nType: function\nDefault: null\nThe sort function used to organize the array collection.\nfilterFunction\nType: function\nDefault: null\nThe filter function used to organize the array collection.\nstartIndex\nType: number\nDefault: null\nThe filter function used to organize the array collection.\nendIndex\nType: number\nDefault: null\nThe filter function used to organize the array collection.\nChanging Default Behavior</p>\n\n<p>selectObjectsOnAddition\nType: boolean\nDefault: false\nSpecifies whether new objects that are added to the array collection are automatically selected.\nautomaticallyOrganizeObjects\nType: boolean\nDefault: true\nSpecifies whether the ArrayCollection\'s content is automatically organized (true, by default).\nclearFilterFunctionOnAddition\nType: boolean\nDefault: true\nA Boolean that specifies whether the filter function is set to null when new objects that are added to the content.\ndelegate\nType: ArrayController delegate\nDefault: null\nThe ArrayController delegate</p>\n\n<p>Methods\nadd()\nArguments: none\nAdds an item to the content array.\nremove()\nArguments: none\nRemoves the currently selected item or items from the content array.\naddObjects()\nArguments: objects to add\nAdds one or more items to the array controller\'s content array.\nremoveObjects()\nArguments: objects to remove\nRemoves the specified object or objects from the content array.\norganizeObjects()\nArguments: none\nOrganizes the content array using the filter and sort functions, if defined. The result can be accessed via the organizedObjects property.</p>\n\n<p>Delegate Methods\nprop\nType:\nDefault: \ndesc\nTO ADD? \nUse in repetition</p>\n\n<p>Instead of directly using an array in a repetition, one can use an ArrayController. The repetition uses the ArrayController by binding to its organizedObject and selectedOrganizedIndexes properties.\nThis means that any changes in the ArrayController’s organizedObjects are reflected in the repetition and any selections made in the repetition are reflected in the selection APIs of the ArrayController and vice versa. \nDependencies</p>\n\n<p>Remove if unnecessary\nConcerns</p>\n\n<p>Should filter and sort functions be separated out to a subtype of the controller? - to save on payload</p>\n\n<p>have an event dispatched when the selection changes?</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2012 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})