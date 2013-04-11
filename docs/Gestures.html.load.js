montageDefine("87d518c","docs/Gestures.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Gestures - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Gestures<a class=anchor id=Gestures href="#Gestures"></a>\n</h1>\n\n<p>Montage provides a composer API for supporting commonly used gestures. Typically DOM events are device specific such as click or touch events. The Composer API abstracts these into higher order events such as press, so that you can focus on handling a specific action rather than the multiple ways that action could be carried out. Montage currently supports press, long press, and swipe gestures. More will be added as Montage matures.</p>\n\n<h2>Press composer<a class=anchor id=Press-composer href="#Press-composer"></a>\n</h2>\n\n<p>The Press Composer handles both press and long press gestures. These abstract mouse clicks and touch events into a common event. The events that are handled include:</p>\n\n<h3>pressStart<a class=anchor id=pressStart href="#pressStart"></a>\n</h3>\n\n<p>This is the event that is dispatched when the mousedown or touchstart events are fired.</p>\n\n<h3>press<a class=anchor id=press href="#press"></a>\n</h3>\n\n<p>After the pressStart event is fired, the press event will fire when releasing the mouse button (mouseup event) or lifting your finger (touchend event). This will also fire when a longPress event is fired, so can be cancelled with a pressCancel event.</p>\n\n<h3>longPress<a class=anchor id=longPress href="#longPress"></a>\n</h3>\n\n<p>A press gesture becomes a longPress gesture when it is active for longer than the specified longPressTimeout duration. To avoid a press event firing after a longPress event, it should be cancelled in the longPressHandler by calling the cancelPress() method.</p>\n\n<h3>pressCancel<a class=anchor id=pressCancel href="#pressCancel"></a>\n</h3>\n\n<p>The pressCancel event is fired when the press event is cancelled. This can either be because it was manually cancelled by the developer by calling <code>cancelPress()</code>, another element claims the pointer, or is automatically cancelled due to:</p>\n\n<ul>\n<li>the browser firing the touch cancel event</li>\n<li>the user cancels the event by moving away from the element when the mouseup event fires due to releasing the mouse button</li>\n</ul><h3>Using press and long press gestures<a class=anchor id=Using-press-and-long-press-gestures href="#Using-press-and-long-press-gestures"></a>\n</h3>\n\n<p>If you are familiar with how events are handled using Montage, you will be right at home using gestures. We will create a very simple example that handles a press event, changing the colour and text of the element, and shows a JavaScript alert when a longPress event is fired.</p>\n\n<h3>Setting up your composers<a class=anchor id=Setting-up-your-composers href="#Setting-up-your-composers"></a>\n</h3>\n\n<p>As with anything in Montage, you first have import the module into your Javascript file. Both press and long press functionality can be found in the press-composer:\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/core/core"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Component</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/component"</span><span class=p>).</span><span class=nx>Component</span><span class=p>,</span>\n    <span class=nx>PressComposer</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/composer/press-composer"</span><span class=p>).</span><span class=nx>PressComposer</span><span class=p>;</span>\n</pre></div>\n\n<p>You then have to create and add the PressComposer:\n</p><div class=highlight><pre><span class=nx>exports</span><span class=p>.</span><span class=nx>PressExample</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Component</span><span class=p>,</span> <span class=p>{</span>\n     <span class=nx>didCreate</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>_pressComposer</span> <span class=o>=</span> <span class=nx>PressComposer</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>addComposer</span><span class=p>(</span><span class=k>this</span><span class=p>.</span><span class=nx>_pressComposer</span><span class=p>);</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<h3>Handle the events<a class=anchor id=Handle-the-events href="#Handle-the-events"></a>\n</h3>\n\n<p>Once we have a press composer we can add the events we want to listen to. In this case both the press and longPress events:\n</p><div class=highlight><pre><span class=nx>prepareForActivationEvents</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>_pressComposer</span><span class=p>.</span><span class=nx>addEventListener</span><span class=p>(</span><span class=s2>"press"</span><span class=p>,</span> <span class=k>this</span><span class=p>,</span> <span class=kc>false</span><span class=p>);</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>_pressComposer</span><span class=p>.</span><span class=nx>addEventListener</span><span class=p>(</span><span class=s2>"longPress"</span><span class=p>,</span> <span class=k>this</span><span class=p>,</span> <span class=kc>false</span><span class=p>);</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n</pre></div>\n\n<p>Finally we need to handle this events in the regular Montage way by implementing a method that prefixes the event name with “handle”.</p>\n\n<p>For the press event, we add an additional class to the element so that we can style it differently after the user presses the button, and change the text using innerHTML:\n</p><div class=highlight><pre><span class=nx>handlePress</span><span class=o>:</span> <span class=p>{</span>\n    <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n        <span class=k>this</span><span class=p>.</span><span class=nx>element</span><span class=p>.</span><span class=nx>classList</span><span class=p>.</span><span class=nx>toggle</span><span class=p>(</span><span class=s2>"press-active"</span><span class=p>);</span>\n        <span class=k>if</span> <span class=p>(</span><span class=k>this</span><span class=p>.</span><span class=nx>element</span><span class=p>.</span><span class=nx>classList</span><span class=p>.</span><span class=nx>contains</span><span class=p>(</span><span class=s2>"press-active"</span><span class=p>))</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>element</span><span class=p>.</span><span class=nx>innerHTML</span> <span class=o>=</span> <span class=s2>"I’m active!"</span><span class=p>;</span>\n        <span class=p>}</span> <span class=k>else</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>element</span><span class=p>.</span><span class=nx>innerHTML</span> <span class=o>=</span> <span class=s2>"Now deactivated"</span><span class=p>;</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>For the longPress event we create a JavaScript alert, and also cancel the press event:\n</p><div class=highlight><pre><span class=nx>handleLongPress</span><span class=o>:</span> <span class=p>{</span>\n    <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n        <span class=k>this</span><span class=p>.</span><span class=nx>_pressComposer</span><span class=p>.</span><span class=nx>cancelPress</span><span class=p>();</span>\n        <span class=nx>alert</span><span class=p>(</span><span class=s2>"Long press event fired. Handle this in a graceful way in a real app"</span><span class=p>);</span>\n   <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>In a real world app you may do something like creating a context menu with a number of items for the user to select.</p>\n\n<h3>Hooking everything up<a class=anchor id=Hooking-everything-up href="#Hooking-everything-up"></a>\n</h3>\n\n<p>The only thing left is to hook the JavaScript up to some HTML using the Montage serialization, and add the styles using CSS:</p>\n\n<p>HTML:\n</p><div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"pressme"</span> <span class=na>class=</span><span class=s>"press-target"</span><span class=nt>&gt;</span>Click or long click me!<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n\n<p>Serialization:\n</p><div class=highlight><pre><span class=p>{</span>\n    <span class=nt>"pressExample"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"PressExample"</span><span class=p>,</span>\n        <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"pressme"</span><span class=p>},</span>\n            <span class=nt>"hasTemplate"</span><span class=p>:</span> <span class=kc>false</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>If you click or touch the element for a short time the press composer will fire. If you keep the button pressed or your finger down the longPress event will fire.</p>\n\n<h2>Swipe Composer<a class=anchor id=Swipe-Composer href="#Swipe-Composer"></a>\n</h2>\n\n<p>Montage currently supports swipe gestures only for touch screen enabled devices, excluding desktop platforms. The spec and implementation of the Swipe composer is currently being updated for a future release of Montage.</p>\n\n<p>I hope this served as a useful introduction to composers and gestures in Montage. If you have any questions or comments we’d love to hear from you!</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})