montageDefine("87d518c","docs/Data-binding.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Data binding - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Data binding<a class=anchor id=Data-binding href="#Data-binding"></a>\n</h1>\n\n<p>Data binding lets you easily associate the value of a property of one object to a property in another object. Data binding relies on the property change observer feature in Montage When the value oThe object that defines the binding is called the source object, and the object to which it binds is called the bound object. When the value of the property changes on the bound object, the new value is assigned to the corresponding property in the source object.</p>\n\n<p><img src="http://montagejs.org/docs/img/databinding.png" alt="Montage Data Binding"></p>\n\n<p>You establish a data binding using the Object.defineBinding() method, or by adding a “bindings” property to an object in a serialization. Each data binding requires a source object and property path, and a bound object and property path. You can configure a data binding in the following ways:</p>\n\n<h3>One-way or bi-directional<a class=anchor id=One-way-or-bi-directional href="#One-way-or-bi-directional"></a>\n</h3>\n\n<p>By default, bindings are “bi-directional”, meaning that changes to property (in either object are pushed to the other. You can override this behavior when you define the binding.</p>\n\n<h3>Converters<a class=anchor id=Converters href="#Converters"></a>\n</h3>\n\n<p>Each binding descriptor may specify a converter object that sits between the source and bound objects. A converter implements two methods (<code>convert()</code> and <code>revert()</code>) that are invoked automatically when a data binding executes, but before the new property value assignments are made.</p>\n\n<h3>Deferred execution<a class=anchor id=Deferred-execution href="#Deferred-execution"></a>\n</h3>\n\n<p>By default, when the value of a bound property changes, the new value is immediately pushed to the corresponding property in the source object (and visa-versa for bi-directional bindings). You can configure a data binding to defer “executing” its bindings until you explicitly request it.</p>\n\n<p>Some examples of data binding:</p>\n\n<ul>\n<li>Bind the <code>checked</code> property of a Checkbox component to the <code>enabled</code> property of a Button component. When the Checkbox is checked, the button is enabled, and vice versa.</li>\n<li>Bind an <code>ArrayCollection</code> object to a Repetition or Flow component’s <code>contentController</code> property.</li>\n<li>Bind an Image component’s <code>src</code> property to a user-provided value.</li>\n</ul><h2>Relationship to property change observing<a class=anchor id=Relationship-to-property-change-observing href="#Relationship-to-property-change-observing"></a>\n</h2>\n\n<p>Data binding depends on the Property change observing feature in Montage. In short, this feature lets you register an event listener on an array or a property of an object. When the observed property changes, or the target array is modified, a callback method is invoked allowing the application to respond. Data binding is, in fact, a system of managed, configurable, special purpose property change observers.</p>\n\n<h2>Creating data bindings<a class=anchor id=Creating-data-bindings href="#Creating-data-bindings"></a>\n</h2>\n\n<p>You can define a data binding between any two Montage objects or components. To create a binding you can use the <code>Object.defineBinding()</code> method, or declaratively create one as part of a template’s serialization.</p>\n\n<h2>Creating data bindings with Object.defineBinding()<a class=anchor id="Creating-data-bindings-with-Object.defineBinding()" href="#Creating-data-bindings-with-Object.defineBinding()"></a>\n</h2>\n\n<p>You use the Object.defineBinding() method to create a data binding between two objects. The method has the following signature:</p>\n\n<p><code>Object.defineBinding(sourceObject, propertyPath, bindingDescriptor)</code></p>\n\n<p>The first parameter, <code>sourceObject</code>, is a reference to the object on which the binding is defined. The second parameter, <code>propertyPath</code>, is a string that specifies the key path to the bound property on the source object. The third parameter, <code>bindingDescriptor</code>, is an object that contains the following properties:</p>\n\n<ul>\n<li>\n<code>boundObject</code> (Object reference) Reference to the bound object</li>\n<li>\n<code>boundObjectPropertyPath</code> (String) The key path to the bound property in the bound object</li>\n<li>\n<code>deferred</code> (Boolean) Boolean | If <code>true</code>, the binding does not immediate execute (that is, push new values to their destinations) when an observed property value changes. Default is <code>false</code>, meaning bindings execute immediately by default.</li>\n<li>\n<code>oneway</code> (Boolean) If <code>true</code>, changes to the source object’s property are not pushed to the bound object. Default is <code>false</code>, meaning that bindings are two-way by default.</li>\n</ul><p>The following code example creates a binding between the <code>enabled</code> property of a Button component and the <code>checked</code> property of a Checkbox component. This means that when the checkbox is not checked, the button will be disabled, and vice versa.</p>\n\n<p></p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Button</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/button.reel"</span><span class=p>).</span><span class=nx>Button</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Checkbox</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/checkbox.reel"</span><span class=p>).</span><span class=nx>Checkbox</span><span class=p>;</span>\n\n<span class=kd>var</span> <span class=nx>btn</span> <span class=o>=</span> <span class=nx>Button</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=kd>var</span> <span class=nx>cb2</span> <span class=o>=</span> <span class=nx>Checkbox</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=nx>btn</span><span class=p>.</span><span class=nx>element</span> <span class=o>=</span> <span class=nb>document</span><span class=p>.</span><span class=nx>getElementById</span><span class=p>(</span><span class=s2>"button"</span><span class=p>);</span>\n<span class=nx>cb2</span><span class=p>.</span><span class=nx>element</span> <span class=o>=</span> <span class=nb>document</span><span class=p>.</span><span class=nx>getElementById</span><span class=p>(</span><span class=s2>"checkbox"</span><span class=p>);</span>\n\n<span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>btn</span><span class=p>,</span> <span class=s2>"enabled"</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>cb2</span><span class=p>,</span>\n    <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"checked"</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>To prevent the binding from executing immediately when the observed property value changes, add a <code>deferred</code> property to the binding descriptor object whose value is “false”.</p>\n\n<p></p><div class=highlight><pre><span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>btn</span><span class=p>,</span> <span class=s2>"enabled"</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>cb2</span><span class=p>,</span>\n    <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"checked"</span><span class=p>,</span>\n    <span class=nx>deferred</span><span class=o>:</span> <span class=kc>true</span>\n<span class=p>});</span>\n</pre></div>\n\n<h2>Creating data bindings in a serialization<a class=anchor id=Creating-data-bindings-in-a-serialization href="#Creating-data-bindings-in-a-serialization"></a>\n</h2>\n\n<p>Each serialized object in a serialization may specify a “bindings” property, which is an object that defines the bindings for that object. One advantage to define bindings in a serialization is the binding shorthand syntax, which lets you quickly and easily define bindings.</p>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;</span>Data binding test<span class=nt>&lt;/title&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../../montage.js"</span> <span class=na>data-auto-package</span><span class=nt>&gt;&lt;/script&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>\n        <span class=s2>"btn"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/button.reel/button[Button]"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"button"</span><span class=p>}</span>\n            <span class=p>},</span>\n            <span class=s2>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"enabled"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"&lt;-"</span> <span class=o>:</span> <span class=s2>"@checkbox.checked"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>},</span>\n\n        <span class=s2>"checkbox"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/checkbox.reel/checkbox[Checkbox]"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"checkbox"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"button"</span> <span class=na>id=</span><span class=s>"button"</span> <span class=na>name=</span><span class=s>""</span> <span class=na>value=</span><span class=s>"Button"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"checkbox"</span> <span class=na>id=</span><span class=s>"checkbox"</span> <span class=na>name=</span><span class=s>""</span> <span class=na>value=</span><span class=s>"Checkbox"</span><span class=nt>&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h2>Data binding serialization shorthand syntax<a class=anchor id=Data-binding-serialization-shorthand-syntax href="#Data-binding-serialization-shorthand-syntax"></a>\n</h2>\n\n<p>Montage provides a shorthand syntax when declaring data bindings in a serialization. An arrow symbol that indicates the source of the binding and whether its one-way or two-way. The symbol can take one of the following forms:</p>\n\n<ul>\n<li>\n<code>&lt;-</code> — One-way data binding, bound object on right</li>\n<li>\n<code>-&gt;</code> — One-way data binding, bound object on left</li>\n<li>\n<code>&lt;&lt;-&gt;</code> — Two-way data binding, bound object on right</li>\n<li>\n<code>&lt;-&gt;&gt;</code> — Two-way data binding, bound object on left</li>\n</ul><p>The <code>boundObject</code> and <code>boundObjectPropertyPath</code> properties of <code>defineBinding()</code> API are combined into a single string form. The syntax takes the following general form:</p>\n\n<p><code>"boundProperty": {"direction-symbol": "@objectReference.key.path"}</code></p>\n\n<p>To demonstrate consider an application whose serialization contains a Textfield component and a Slider component. To create a one-way binding between the Slider’s <code>value</code> property and the Textfield’s <code>value</code> property using the short-hand syntax:\n</p><div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"inputText"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"textfield"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-"</span><span class=p>:</span> <span class=s2>"@slider.value"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"slider"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"slider"</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>This means that changes to <code>slider.value</code> will be pushed to the Textfield. In code, this would be written as follows, assuming <code>inputText</code> is a Textfield instance and <code>slider</code> is a Slider \ninstance.\n</p><div class=highlight><pre><span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>inputText</span><span class=p>,</span> <span class=s2>"value"</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>slider</span><span class=p>,</span>\n    <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"value"</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>To define a one-way binding in the opposite direction (from the Textfield to the Slider), simply reverse the direction of the arrow symbol:\n</p><div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"inputText"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"textfield"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"-&gt;"</span><span class=p>:</span> <span class=s2>"@slider.value"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"slider"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"slider"</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>In code this would be written as follows:\n</p><div class=highlight><pre><span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>slider</span><span class=p>,</span> <span class=s2>"value"</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>textField</span><span class=p>,</span>\n    <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"value"</span>\n<span class=p>});</span>\n</pre></div>\nOr, equivalently, you can define the binding on the Slider object instead:\n<div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"inputText"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"textfield"</span>\n    <span class=p>},</span>\n   <span class=nt>"slider"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"slider"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-"</span><span class=p>:</span> <span class=s2>"@inputText.value"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>To create a two-way binding between the object’s properties, with Textfield as the source, you add a single arrow pointing to @slider.value, and a double arrow pointing in the opposite direction:\n</p><div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"inputText"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"textfield"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@slider.value"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>},</span>\n   <span class=nt>"slider"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"slider"</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Which is equivalent to the following code:\n</p><div class=highlight><pre><span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>inputText</span><span class=p>,</span> <span class=s2>"value"</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>slider</span><span class=p>,</span>\n    <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"value"</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>To create a two-way binding with Slider as the binding source, you add a single arrow pointing to the left, and a double arrow pointing to the right:\n</p><div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"inputText"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"textfield"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-&gt;&gt;"</span><span class=p>:</span> <span class=s2>"@slider.value"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Or, equivalently, you can declare the binding on the slider and reverse the direction of the arrow:\n</p><div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"slider"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"slider"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@slider.value"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>In long-form syntax, you would declare the following:\n</p><div class=highlight><pre><span class=p>{</span>\n   <span class=nt>"slider"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"slider"</span><span class=p>,</span>\n       <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n          <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span>\n              <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"inputText"</span><span class=p>},</span>\n              <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"value"</span>\n          <span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<h2>One-way and two-way bindings<a class=anchor id=One-way-and-two-way-bindings href="#One-way-and-two-way-bindings"></a>\n</h2>\n\n<p>By default, all data bindings are two-way. This means when the value of the observed property changes in either the source or the bound object, the new value is assigned to the corresponding property in the other object. In a one-way data binding, only changes to the property on the bound object are observed, not changes to source object. To make a data binding one-way you set the <code>oneway</code> property on the binding descriptor object to <code>true</code>.</p>\n\n<p><img src="http://montagejs.org/docs/img/databinding.png" alt="Montage Data Binding"></p>\n\n<p>To demonstrate, below is a simple Montage object that defines a single property, <code>name</code>.\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Person</span> <span class=o>=</span> <span class=nx>exports</span><span class=p>.</span><span class=nx>Person</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Montage</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>name</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span><span class=p>,</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>We create two instances of the Person object and define a binding between their <code>name</code> properties:\n</p><div class=highlight><pre><span class=c1>// Create two instances of Person</span>\n<span class=kd>var</span> <span class=nx>p1</span> <span class=o>=</span> <span class=nx>Person</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=kd>var</span> <span class=nx>p2</span> <span class=o>=</span> <span class=nx>Person</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=c1>// Define a binding between p1.name and p2.name</span>\n<span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>p1</span><span class=p>,</span> <span class=s2>"name"</span><span class=p>,</span> <span class=p>{</span>\n  <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>p2</span><span class=p>,</span>\n  <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"name"</span><span class=p>,</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>If you assign a value to <code>name</code> on either the <code>p1</code> or <code>p2</code> instances, then the value on the other object changes accordingly:\n</p><div class=highlight><pre><span class=nx>p1</span><span class=p>.</span><span class=nx>name</span> <span class=o>=</span> <span class=s2>"Abe"</span><span class=p>;</span>\n<span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"p2.name is now: "</span> <span class=o>+</span> <span class=nx>p2</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n<span class=c1>// console says: "p2.name is now: Abe"</span>\n</pre></div>\n<div class=highlight><pre><span class=nx>p2</span><span class=p>.</span><span class=nx>name</span> <span class=o>=</span> <span class=s2>"Betty"</span><span class=p>;</span>\n<span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"p1.name is now: "</span> <span class=o>+</span> <span class=nx>p1</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n<span class=c1>// console says: "p1.name is now: Betty"</span>\n</pre></div>\n\n<p>If you set <code>oneway</code> in the <code>defineBinding()</code> call to <code>true</code>, then changes to <code>p2</code> will cause the binding to execute, but not changes to <code>p1</code>.</p>\n\n<p></p><div class=highlight><pre><span class=c1>// Create two Person instances:</span>\n<span class=kd>var</span> <span class=nx>p1</span> <span class=o>=</span> <span class=nx>Person</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=kd>var</span> <span class=nx>p2</span> <span class=o>=</span> <span class=nx>Person</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=nx>p1</span><span class=p>.</span><span class=nx>name</span> <span class=o>=</span> <span class=s2>"Harry"</span><span class=p>;</span>\n<span class=nx>p2</span><span class=p>.</span><span class=nx>name</span> <span class=o>=</span> <span class=s2>"Kate"</span>\n<span class=c1>// Define a oneway binding between p1.name and p2.name</span>\n<span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>p1</span><span class=p>,</span> <span class=s2>"name"</span><span class=p>,</span> <span class=p>{</span>\n   <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>p2</span><span class=p>,</span>\n   <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"name"</span><span class=p>,</span>\n   <span class=nx>oneway</span><span class=o>:</span> <span class=kc>true</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>Any changes to <code>p1.name</code> does not update <code>p2.name</code>, but changes to <code>p2.name</code> does update <code>p1.name</code>.</p>\n\n<p></p><div class=highlight><pre><span class=nx>p1</span><span class=p>.</span><span class=nx>name</span> <span class=o>=</span> <span class=s2>"Thomas"</span><span class=p>;</span>\n<span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"p2.name is now: "</span> <span class=o>+</span> <span class=nx>p2</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n<span class=c1>// "p2.name is now: Kate". No change to p2 in oneway data binding.</span>\n<span class=c1>// Change p2.name</span>\n<span class=nx>p2</span><span class=p>.</span><span class=nx>name</span> <span class=o>=</span> <span class=s2>"Eleanor"</span><span class=p>;</span>\n<span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"p1.name is now: "</span> <span class=o>+</span> <span class=nx>p1</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n<span class=c1>// "p1.name is now: Eleanor"</span>\n</pre></div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})