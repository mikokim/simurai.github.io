montageDefine("25d03be","docs/Rich-Text-Editor.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Rich Text Editor - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs class=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Rich Text Editor<a class=anchor id=Rich-Text-Editor href="#Rich-Text-Editor"></a>\n</h1>\n\n<p>The <code>RichTextEditor</code> component recently debuted in Montage 0.8. This provides a way for the user to enter text that will be transformed to HTML and can have styles applied to it.</p>\n\n<p>At its most basic level, the <code>RichTextEditor</code> is a wrapper around a <code>div</code> element with the HTML5 <code>contentEditable</code> attribute applied. There is no UI by default beyond the <code>div</code> for entering text, but an API is provided to allow you to hook up controls to enable the various styling options.</p>\n\n<h2>Building a basic rich text editor<a class=anchor id=Building-a-basic-rich-text-editor href="#Building-a-basic-rich-text-editor"></a>\n</h2>\n\n<p>Creating a rich text editor with the very basic font and text styling controls can be done trivially with no JavaScript (beyond the JSON serialization) required! Lets make a quick example that allows us to make the text bold, italic and set an underline.</p>\n\n<h3>Adding the markup<a class=anchor id=Adding-the-markup href="#Adding-the-markup"></a>\n</h3>\n\n<p>First of all we need to create a toolbar with buttons for each of the options, and an area to enter the text:\n</p><div class=highlight><pre><span class=nt>&lt;menu</span> <span class=na>type=</span><span class=s>"toolbar"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>class=</span><span class=s>"montage-buttonGroup font-styles"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"bold"</span><span class=nt>&gt;</span>B<span class=nt>&lt;/button&gt;</span>\n        <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"italic"</span><span class=nt>&gt;</span>I<span class=nt>&lt;/button&gt;</span>\n        <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"underline"</span><span class=nt>&gt;</span>U<span class=nt>&lt;/button&gt;</span>        \n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/menu&gt;</span>\n<span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"editor"</span> <span class=na>class=</span><span class=s>"montage-textarea"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;h1&gt;</span>Hello RichText world!<span class=nt>&lt;/h1&gt;</span>\n<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n\n<p>The <code>menu</code> element holds the buttons we will use for styling the text. Montage doesn’t do anything special with this element; I’ve just included it for semantic value.</p>\n\n<p>Inside the menu I’ve included a wrapper <code>div</code> to group together the three text controls. I’ve applied a class to it so that the stylesheet can visually display the buttons as a group.</p>\n\n<p>Each button and the <code>div</code> element below the menu are given their own <code>data-montage-id</code> so we can hook them up to the serialization.</p>\n\n<p>Lets also add a <code>data-auto-package</code> attribute to the Montage script element, so that we don’t need to create a package.json file. As this example has no external dependencies, it is ideal for this:\n</p><div class=highlight><pre><span class=nt>&lt;script</span> <span class=na>src=</span><span class=s>"../montage/montage.js"</span> <span class=err>data-auto-package</span><span class=nt>&gt;&lt;/script&gt;</span>\n</pre></div>\n\n<h3>Hooking the toolbar and the editor to the serialization<a class=anchor id=Hooking-the-toolbar-and-the-editor-to-the-serialization href="#Hooking-the-toolbar-and-the-editor-to-the-serialization"></a>\n</h3>\n\n<p>Now to where the magic really happens. Lets hook up the rich text editor to our <code>div</code> in our serialization code:\n</p><div class=highlight><pre><span class=s2>"editor"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/rich-text-editor/rich-text-editor.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"editor"</span> <span class=p>}</span> <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Now you have a text area that you can type into, but you can’t apply any commands. For that we have to hook up the buttons. Lets try with the bold button first:\n</p><div class=highlight><pre><span class=s2>"bold"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/toggle-button.reel"</span><span class=p>,</span>\n        <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"bold"</span><span class=p>},</span>\n            <span class=nt>"pressedClass"</span><span class=p>:</span> <span class=s2>"active"</span>\n        <span class=p>},</span>\n        <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"pressed"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@editor.bold"</span> <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>This sets the <code>bold</code> element to be a toggle button, and uses the <code>pressedClass</code> property to set a class of <code>active</code> when the button is pressed.</p>\n\n<p>When then set a two way binding between the <code>pressed</code> property and the <code>bold</code> boolean property of the <code>RichTextEditor</code> component. When the pressed property is updated it will change the bold value between <code>true</code> and <code>false</code>, and thus bold or unbold the text. When some text is selected that is already bold, it will update the pressed property of the toggle to set it to true.</p>\n\n<p>That is all there is to it for actions that update a boolean property such as bold, italic, and underline. Lets add the serialization for the other two buttons as well. They work in exactly the same way:\n</p><div class=highlight><pre><span class=s2>"italic"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/toggle-button.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"italic"</span><span class=p>},</span>\n        <span class=nt>"pressedClass"</span><span class=p>:</span> <span class=s2>"active"</span>\n    <span class=p>},</span>\n    <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"pressed"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@editor.italic"</span> <span class=p>}</span> <span class=p>}</span>\n<span class=p>}</span><span class=err>,</span>\n<span class=s2>"underline"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/toggle-button.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"underline"</span><span class=p>},</span>\n        <span class=nt>"pressedClass"</span><span class=p>:</span> <span class=s2>"active"</span>\n    <span class=p>},</span>\n    <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"pressed"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@editor.underline"</span> <span class=p>}</span> <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<h2>Getting a little more advanced<a class=anchor id=Getting-a-little-more-advanced href="#Getting-a-little-more-advanced"></a>\n</h2>\n\n<p>As you’ve just seen, setting boolean properties is a trivial affair. For properties that accept one of a number of predefined values, it becomes a little more complex, but wont be alien to those of you who know how Montage works.</p>\n\n<p>I’ll show you how to set this up by creating three buttons to set the text alignment to either left, right, or center, by updating the <code>justify</code> property.</p>\n\n<p>First of all we need to add the buttons to allow the user to specify the alignment. For this I added an additional button group. I’ve included the <a href="http://fortawesome.github.com/Font-Awesome/">Font Awesome</a> font that was designed to be used with Twitter Bootstrap to display icons for each button:\n</p><div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>class=</span><span class=s>"montage-buttonGroup alignment-styles"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"left"</span><span class=nt>&gt;&lt;i</span> <span class=na>class=</span><span class=s>"icon-align-left"</span> <span class=na>title=</span><span class=s>"left align"</span><span class=nt>&gt;&lt;/i&gt;&lt;/button&gt;</span>\n    <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"center"</span><span class=nt>&gt;&lt;i</span> <span class=na>class=</span><span class=s>"icon-align-center"</span> <span class=na>title=</span><span class=s>"center align"</span><span class=nt>&gt;&lt;/i&gt;&lt;/button&gt;</span>\n    <span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"right"</span><span class=nt>&gt;&lt;i</span> <span class=na>class=</span><span class=s>"icon-align-right"</span> <span class=na>title=</span><span class=s>"right align"</span><span class=nt>&gt;&lt;/i&gt;&lt;/button&gt;</span>        \n<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n\n<h3>Setting up the event listeners and controller<a class=anchor id=Setting-up-the-event-listeners-and-controller href="#Setting-up-the-event-listeners-and-controller"></a>\n</h3>\n\n<p>For this example we will need to add a controller object to the serialization, which will point to our <code>editor</code> object that we defined at the top of the serialization. This will give us access to this object when we need to use it in the controller object that we instantiate later in our JavaScript file.</p>\n\n<p></p><div class=highlight><pre><span class=s2>"controller"</span><span class=err>:</span> <span class=p>{</span>\n        <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"Controller"</span><span class=p>,</span>\n        <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"editor"</span><span class=p>:</span> <span class=p>{</span> <span class=nt>"@"</span><span class=p>:</span> <span class=s2>"editor"</span><span class=p>}</span>\n        <span class=p>}</span>    \n<span class=p>}</span>\n</pre></div>\n\n<p>Now that we have a controller, we need to hook it up to the buttons that will handle the text alignment. All three serialization blocks are the same except the object name and the element they point to, so I’ll just include the serialization for the right button here. You can just repeat it for the other two buttons, editing the relevant values.</p>\n\n<p></p><div class=highlight><pre><span class=s2>"right"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/toggle-button.reel"</span><span class=p>,</span>\n        <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"right"</span><span class=p>},</span>\n            <span class=nt>"preventFocus"</span><span class=p>:</span> <span class=kc>true</span>\n        <span class=p>},</span>\n     <span class=nt>"listeners"</span><span class=p>:</span> <span class=p>[</span>\n       <span class=p>{</span>\n         <span class=nt>"type"</span><span class=p>:</span> <span class=s2>"action"</span><span class=p>,</span>\n         <span class=nt>"listener"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"controller"</span><span class=p>}</span>\n       <span class=p>}</span>\n     <span class=p>]</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Here we’re setting up an <code>action</code> listener, which will be handled via the controller object we just defined. As there is no <code>identifier</code> specified in the listener, the event listener will use the default name, which in this case is <code>handleRightListener</code>. This capitalizes the object name, and prefixes it with <code>handle</code>, and prepends it with <code>Action</code>.</p>\n\n<p>We also need to include a <code>preventFocus</code> property. This stops the button from taking focus away from the selected text in the rich text area. If we allowed the button to steal focus, the alignment style wouldn’t apply as it wouldn’t know what text it should apply the style to.</p>\n\n<h3>Handling the action events in JavaScript<a class=anchor id=Handling-the-action-events-in-JavaScript href="#Handling-the-action-events-in-JavaScript"></a>\n</h3>\n\n<p>Now all the wiring is complete, when a user clicks the button for right alignment, it will fire the <code>handleRightAction</code> event. Lets create a JavaScript file called controller.js. This is the same name as set up in the controller object.</p>\n\n<p>Inside this file we first need to import Montage core, and create and export the <code>Controller</code> object. We also need to define the <code>editor</code> that we specified in our controller object in the serialization:\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/core/core"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>Controller</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Montage</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>editor</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span>\n    <span class=p>}</span>\n<span class=p>})</span>\n</pre></div>\n\n<p>Next we will define the <code>handleRightAction</code> method inside the same object. This sets the <code>editor.justify</code> property to right:\n</p><div class=highlight><pre><span class=nx>handleRightAction</span><span class=o>:</span> <span class=p>{</span>\n    <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n        <span class=k>this</span><span class=p>.</span><span class=nx>editor</span><span class=p>.</span><span class=nx>justify</span> <span class=o>=</span> <span class=s2>"right"</span><span class=p>;</span>\n        <span class=k>this</span><span class=p>.</span><span class=nx>setActive</span><span class=p>(</span><span class=s2>"right"</span><span class=p>);</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>All of the other handlers can be created in the same way. The valid values for the <code>editor.justify</code> property are left, right, center, and full.</p>\n\n<p>As the active state for the left, right and center buttons should be mutually exclusive, I’ve also created an <code>setActive</code> method. This removes focus from the previously active button and adds focus to the currently selected button instead, rather than relying on the button’s inbuilt <code>pressedClass</code> property, like we did for the bold, italic and underline buttons.</p>\n\n<h2>Wrap up<a class=anchor id=Wrap-up href="#Wrap-up"></a>\n</h2>\n\n<p>Armed with this knowledge, you should be able hook up controls for the other <code>RichTextEditor</code> properties yourself. Hopefully this post will inspire you to try out the rich text capabilities in Montage for yourself.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2012 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})