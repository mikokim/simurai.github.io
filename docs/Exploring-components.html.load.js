montageDefine("a675c2a","docs/Exploring-components.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Exploring components - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs class=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>One of the great features of Montage is encapsulated components. This means that the structure (html), appearance (css) and behavior (js) are all self-contained in a directory. These directories end with a <code>.reel</code> extension, just like a regular file, to indicate that it is an isolated unit.</p>\n\n<p>Inside the directory from the <a href=Quick-Start.html>Quick Start</a> guide run the minit command to create a new component</p>\n\n<p></p><div class=highlight><pre><span class=nv>$ </span>minit create:component --name name-tag\nname-tag.reel created.\n<span class=nv>$ </span><span class=nb>cd </span>ui/name-tag.reel/\n<span class=nv>$ </span>ls \nname-tag.css   name-tag.html  name-tag.js\n</pre></div>\n\n<p>The first thing to notice is that we put all our components in the <code>ui</code> directory. This convention allows you to use any Montage package and know exactly where the components are.</p>\n\n<p>Lets step through the files, and some of the notable features in each of them.</p>\n\n<h2>HTML<a class=anchor id=HTML href="#HTML"></a>\n</h2>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;link</span> <span class=na>rel=</span><span class=s>"stylesheet"</span> <span class=na>type=</span><span class=s>"text/css"</span> <span class=na>href=</span><span class=s>"name-tag.css"</span><span class=nt>&gt;</span>\n</pre></div>\n\n<p>The CSS is included, just as you would normally.</p>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n<span class=p>{</span>\n    <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"name-tag"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<p>The serialization is where most of the action occurs in a Montage template. We will explore it further in a later tutorial, but here are a few things to note:</p>\n\n<ul>\n<li>the type is set to <code>text/montage-serialization</code>\n</li>\n<li>the serialization is just JSON, with some enforced semantics</li>\n<li>\n<code>owner</code> is a special label in the serialization that refers to the current component. It\'s the equivalent of <code>this</code> in Javascript</li>\n<li>within the serialization you can use <code>{"#": "montage-id"}</code> to refer to elements in the body</li>\n<li>although not shown here, you can also use <code>{"@": "label"}</code> to refer to another object by its label in the serialization</li>\n</ul><p></p><div class=highlight><pre><span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"name-tag"</span> <span class=na>class=</span><span class=s>"NameTag"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n</pre></div>\n\n<p>Each template has one element that contains all the structure for the template. The <code>data-montage-id</code> attribute uniquely identifies elements (<a href="#id">why data-montage-id?</a>). If you look back at the serialization you\'ll notice that we\'re assigning <code>name-tag</code> as this component\'s element.</p>\n\n<h2>CSS<a class=anchor id=CSS href="#CSS"></a>\n</h2>\n\n<p></p><div class=highlight><pre><span class=nc>.NameTag</span> <span class=p>{</span>\n\n<span class=p>}</span>\n</pre></div>\n\n<p>The CSS starts off blank, ready for you to style. Notice that the class name is a CamelCased version of the reel name. This is part of our <a href=Naming-Conventions.html>CSS naming convention</a> that allows us to scope each component\'s CSS so that it doesn\'t "leak out" and accidentally style other components.</p>\n\n<h2>Javascript<a class=anchor id=Javascript href="#Javascript"></a>\n</h2>\n\n<p></p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Component</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/component"</span><span class=p>).</span><span class=nx>Component</span><span class=p>;</span>\n</pre></div>\n\n<p>Montage uses the CommonJS module system, just like Node.js, through <a href="https://github.com/montagejs/mr">Mr</a>.</p>\n\n<p></p><div class=highlight><pre><span class=nx>exports</span><span class=p>.</span><span class=nx>NameTag</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Component</span><span class=p>,</span> <span class=p>{</span>\n\n<span class=p>});</span>\n</pre></div>\n\n<p>The file exports a single object with a CamelCased version of the reel name, which inherits from Component. <code>Montage.create()</code> is a special version of Ecmascript 5\'s <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create">Object.create()</a> that has some extensions that we\'ll explore later.</p>\n\n<p><span id=id><strong>Why data-montage-id?</strong></span> The <code>id</code> attribute seems like an ideal candidate for identifying an element, however there are some issues. We don\'t use <code>id</code> because our components are reusable, and so when they are inserted into a document multiple times there would be multiple elements with the same id, which is invalid HTML5. <strong>Why not remove the id when inserting?</strong> Although you should always use classes to style your document, we don\'t want to prevent ids being used for styling, either for performance or legacy reasons. This means we can\'t use the id attribute. Instead we use a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#custom-data-attribute">custom data- attribute</a>, <code>data-montage-id</code>. When the <a href="https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html">Shadow DOM</a> gets more mature and is implemented it might be possible to revert back to using id, as each template will be isolated in the document.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2012 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})