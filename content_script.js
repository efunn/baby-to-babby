walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  v = v.replace(/(B|b)aby/gi, function(match, p1, offset, string) {
        // b = b
        b = String.fromCharCode(p1.charCodeAt(0));
        return b + "abby";
  });

  v = v.replace(/(B|b)abies/gi, function(match, p1, offset, string) {
        // b = b
        b = String.fromCharCode(p1.charCodeAt(0));
        return b + "abbies";
  });
	textNode.nodeValue = v;
}

