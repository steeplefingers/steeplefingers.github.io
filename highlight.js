javascript:
var element = document.evaluate('//strong', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
if (element != null) 
{
	var a = element.getAttribute('style');
	if (a != null) {
		var n = a.concat('; border:2px dashed #ff0000;');
		element.setAttribute('style', n);
	} else {
		element.setAttribute('style', 'border:2px dashed #ff0000;');
	}
}
