montageDefine("97a1729","ui/text-slider.reel/text-slider.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <title>TextSlider</title>\n    <link rel=stylesheet href=text-slider.css>\n\n    <script type="text/montage-serialization">{"value":{"prototype":"ui/dynamic-text.reel","properties":{"element":{"#":"value"}},"bindings":{"value":{"<-":"@owner.convertedValue"}}},"units":{"prototype":"ui/dynamic-text.reel","properties":{"element":{"#":"units"}},"bindings":{"value":{"<-":"@owner.unit"}}},"translateComposer":{"prototype":"ui/composer/translate-composer","properties":{"component":{"@":"owner"},"hasMomentum":false,"invertYAxis":true,"allowFloats":true,"startTranslateSpeed":1},"bindings":{"minTranslateX":{"<-":"@owner.minValue"},"minTranslateY":{"<-":"@owner.minValue"},"maxTranslateX":{"<-":"@owner.maxValue"},"maxTranslateY":{"<-":"@owner.maxValue"}},"listeners":[{"type":"translateStart","listener":{"@":"owner"}},{"type":"translate","listener":{"@":"owner"}},{"type":"translateEnd","listener":{"@":"owner"}}]},"pressComposer":{"prototype":"ui/composer/press-composer","properties":{"component":{"@":"owner"},"delegate":{"@":"owner"}},"listeners":[{"type":"press","listener":{"@":"owner"}}]},"numberConverter":{"prototype":"core/converter/number-converter"},"owner":{"prototype":"ui/dynamic-text.reel","properties":{"element":{"#":"text-slider"},"_inputElement":{"#":"input"},"_pressComposer":{"@":"pressComposer"},"_translateComposer":{"@":"translateComposer"}}}}</script>\n</head>\n<body>\n    <span data-montage-id=text-slider class=montage-TextSlider tabindex=0>\n        <input data-montage-id=input class=montage-TextSlider-input>\n        <span data-montage-id=value class=montage-TextSlider-value></span>\n        <span data-montage-id=units class=montage-TextSlider-label></span>\n    </span>\n</body>\n</html>'})