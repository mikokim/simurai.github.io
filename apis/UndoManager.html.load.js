montageDefine("87d518c","apis/UndoManager.html",{text:'<!DOCTYPE html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: UndoManager</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"></script>\n    <script src="scripts/prettify/lang-css.js"></script>\n    <script src="scripts/search.js"></script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    UndoManager\n    </h2>\n\n</header>\n\n<article>\n\n        <dl>\n            <dt>Extends</dt>\n            <dd><a href=Montage.html>Montage</a> </dd>\n        </dl>\n\n    <div class=container-overview>\n\n\n\n\n<dt>\n    <h4 class=name id=UndoManager></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Applications that allow end-user operations can use an UndoManager to record\n   information on how to undo those operations.</p>\n<h2>Undoable Operations</h2>\n<p>   To make an operation undoable an application simply adds the inverse of that\n   operation to an UndoManager instance using the <code>add</code> method:</p>\n<p>   <code>undoManager.register(label, operationPromise)</code></p>\n<p>   This means that every undo-able user operation has to have an inverse\n   operation available. For example a calculator might provide a <code>subtract</code>\n   method as the inverse of the <code>add</code> method.</p>\n<p>   An simple example would look something like this:</p>\n<pre><code class=lang-javascript>add: {\n      value: function (number) {\n          this.undoManager.register("Add", Promise.resolve([this.subtract, this, number]));\n          var result = this.total += number;\n          return result;\n      }\n  },\n\nsubtract: {\n      value: function (number) {\n          this.undoManager.register("Subtract", Promise.resolve([this.add, this, number]));\n          var result = this.total -= number;\n          return result;\n      }\n  }</code></pre>\n<p>   Of immediate interest is the actual promise added to the undoManager.\n   <code>Promise.resolve(["Add", this.subtract, this, number])</code></p>\n<p>   The promise provides the final label (optionally), a reference to the function to call,\n   the context for the function to be executed in, and any number of arguments\n   to be passed along when calling the function.</p>\n<p>   In simple cases such as this the promise for the inverse operation\n   can be resolved immediately; this is not necessarily always possible in cases\n   where the operation itself is asynchronous.</p>\n<h2>Basic Undoing and Redoing</h2>\n<p>   After performing <code>calculator.add(42)</code> the undoManager will have an entry\n   on how to undo that addition operation. Each operation added to the\n   undoManager is added on top of a stack. Calling the undoManager\'s <code>undo</code>\n   method will perform the operation on the top of that stack if\n   original operationPromise has been resolved.</p>\n<p>   While performing an undo operation any additions to the undoManager will\n   instead be placed on the redo stack. Conversely, any additions made while\n   performing a redo operation will be placed on the undo stack.</p>\n<p>   When not actively undoing or redoing, the redo stack is cleared whenever a\n   new operation is added; the only way operations end up on the redo stack is\n   through undoing an operation.</p>\n<h2>Asynchronous Considerations</h2>\n<p>   It is possible for a user invoked operation to take some time to complete or\n   details of how to undo the operation may not be known until the operation\n   has completed.</p>\n<p>   In these cases it is important to remember that the undo stack captures user\n   intent, which is considered synchronous. This is why the undoManager accepts\n   promises for the operations but places them on the stack synchronously.</p>\n<p>   Consider the following example:</p>\n<pre><code class=lang-javascript>addRandomNumber: {\n      var deferredUndo,\n          self = this;\n\n      this.undoManager.register("Add Random", deferredUndo.promise);\n\n      return this.randomNumberGeneratorService.next().then(function(rand) {\n          deferredUndo.resolve(["Add " + rand, self.subtract, self, rand];\n          var result = self.total = self.total + number;\n          return result\n      });\n  }</code></pre>\n<p>   Here we see that the undo operation for addRandomNumber is added to the\n   UndoManager before we even know how to undo the operation, indeed it\'s added\n   before the operation has even happened.</p>\n<p>   It is worth noting that the undoManager does not block anything. Users are\n   still free to call <code>add</code>, <code>subtract</code>, <code>addRandomNumber</code> or any\n   other APIs exposed by the calculator, whether the <code>addRandomNumber</code> has\n   resolved or not. It\'s the responsibility of an API provider to handle this\n   scenario as necessary.</p>\n<p>   At this point two things can happen:\n   1) A user could invoke <code>undo</code> after the operation promise\'s resolution.\n   2) A user could invoke <code>undo</code> prior to the operation promise\'s resolution.</p>\n<p>   In the first scenario, things move along much like they did in the first case\n   we described above.</p>\n<p>   In the second scenario, the undoManager puts the unresolved promise into a\n   queue of operations to be performed when possible. Subsequent undo and redo\n   requests are added to this queue.</p>\n<p>   Whenever a promise is resolved the undoManager runs through this queue in\n   order, oldest to newest, and attempts to perform the operation specified,\n   stopping when it encounters an unfulfilled operation promise.</p>\n<p>   This guarantees that promised operations are added in the order as they were\n   performed by the user and are executed, not in the order they are fulfilled,\n   but in the order they are undone or redone.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 45\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Properties</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=canRedo><span class=type-signature></span>canRedo<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Returns true if the redo stack contains any items, otherwise returns false.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 538\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=canUndo><span class=type-signature></span>canUndo<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Returns true if the undo stack contains any items, otherwise returns false.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 528\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=isRedoing><span class=type-signature></span>isRedoing<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Returns <code>true</code> if the UndoManager is in the middle of an redo operation, otherwise returns <code>false</code>.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 459\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=isUndoing><span class=type-signature></span>isUndoing<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Returns <code>true</code> if the UndoManager is in the middle of an undo operation, otherwise returns <code>false</code>.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 449\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=maxUndoCount><span class=type-signature></span>maxUndoCount<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Maximum number of operations allowed in each undo and redo stack\n        Setting this lower than the current count of undo/redo operations will remove\n        the oldest undos/redos as necessary to meet the new limit.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 206\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=redoCount><span class=type-signature></span>redoCount<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The current number of stored redoable operations</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 242\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=redoLabel><span class=type-signature></span>redoLabel<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Contains the label describing the operation on top of the redo stack.\n     End-users are strongly advised to prefix this with a localized "Redo" when\n     presenting the label within an interface.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 569\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=undoCount><span class=type-signature></span>undoCount<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The current number of stored undoable operations</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 231\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=undoLabel><span class=type-signature></span>undoLabel<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Contains the label describing the operation on top of the undo stack.\n        End-users are strongly advised to prefix this with a localized "Undo" when\n        presenting the label within an interface.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 550\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n        </dl>\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=clearRedo><span class=type-signature></span>clearRedo<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Removes all items from the redo stack.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 440\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=clearUndo><span class=type-signature></span>clearUndo<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Removes all items from the undo stack.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 430\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=redo><span class=type-signature></span>redo<span class=signature>()</span><span class=type-signature> → {Promise}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Schedules the next redo operation for invocation as soon as possible</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 498\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>A promise resolving to true when this redo request has been performed</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Promise</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=register><span class=type-signature></span>register<span class=signature>(label, operationPromise)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Adds a new operation to the either the undo or redo stack as appropriate.</p>\n<p>   The operationPromise should be resolved with an array containing:\n       - A label string for the operation (optional)\n       - The function to execute when performing this operation\n       - The object to use as the context when performing the function\n       - Any number of arguments to apply when performing the function</p>\n<h3>Examples</h3>\n<p>   Registering an undo operation with no arguments</p>\n<pre><code class=lang-javascript>undoManager.register("Square", Promise.resolve([calculator.sqrt, calculator]));</code></pre>\n<p>  Registering an undo operation with arguments</p>\n<pre><code class=lang-javascript>undoManager.register("Add", Promise.resolve([calculator.subtract, calculator, number]));</code></pre>\n<p>   Registering an undo operation with a label and arguments</p>\n<pre><code class=lang-javascript>   undoManager.register("Add", Promise.resolve(["Add 5", calculator.subtract, calculator, 5]));</code></pre>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>label</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>string</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>A label to associate with this undo entry.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>operationPromise</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>promise</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>A promise for an undoable operation</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 293\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>a promise for the resolution of the operationPromise</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=undo><span class=type-signature></span>undo<span class=signature>()</span><span class=type-signature> → {Promise}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Schedules the next undo operation for invocation as soon as possible</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/undo-manager.js, line 482\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>A promise resolving to true when this undo request has been performed</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Promise</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input id=index-search type=search placeholder="search for"><details open=open><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})