montageDefine("e6f5540","ui/scroller.reel/scroller.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=scroller.css>\n    <script type="text/montage-serialization">{"scrollbars":{"prototype":"ui/scroll-bars.reel","properties":{"element":{"#":"scrollbars"}}},"translateComposer1":{"prototype":"ui/composer/translate-composer","properties":{"component":{"@":"owner"},"minTranslateX":0,"minTranslateY":0,"invertAxis":true},"bindings":{"translateX":{"<->":"@owner.scrollX"},"translateY":{"<->":"@owner.scrollY"},"maxTranslateX":{"<-":"@owner._maxTranslateX"},"maxTranslateY":{"<-":"@owner._maxTranslateY"},"axis":{"<-":"@owner.axis"},"hasMomentum":{"<-":"@owner.hasMomentum"}},"listeners":[{"type":"translateStart","listener":{"@":"owner"}},{"type":"translateEnd","listener":{"@":"owner"}}]},"slot":{"prototype":"ui/slot.reel","properties":{"element":{"#":"content"}},"bindings":{"domContent":{"<-":"@owner.domContent"}}},"owner":{"prototype":"ui/scroller.reel","properties":{"_content":{"#":"content"},"element":{"#":"montage-scroller"},"_scrollBars":{"@":"scrollbars"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-scroller class=montage-Scroller>\n        <div data-montage-id=scrollbars></div>\n        <div data-montage-id=content class=montage-Scroller-content></div>\n    </div>\n</body>\n</html>'})