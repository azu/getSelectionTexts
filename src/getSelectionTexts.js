// LICENSE : MIT
"use strict";
function isEmpty(text) {
    return text == null || text.length === 0
}
function reverse(fn) {
    return function (...args) {
        return !fn.apply(null, args);
    }
}
function getTextsFromSelection(selection) {
    var results = [];
    for (var i = 0; i < selection.rangeCount; i++) {
        var range = selection.getRangeAt(i);
        results.push(range.toString());
    }
    return results;
}
function getRangeSelection() {
    var selection = window.getSelection();
    return getTextsFromSelection(selection).filter(reverse(isEmpty));
}
export default getRangeSelection;