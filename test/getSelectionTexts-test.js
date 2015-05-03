// LICENSE : MIT
"use strict";
var assert = require("power-assert");
var getSelectionTexts = require("../lib/getSelectionTexts");
describe("getSelectionTexts", function () {
    var fixtureDiv;
    afterEach(function () {
        if (fixtureDiv) {
            // clean up...
            document.body.removeChild(fixtureDiv);
            fixtureDiv = null;
        }
    });

    it("should return Array", function () {
        assert.ok(getSelectionTexts() instanceof Array);
    });
    context("when UA not support DOM Range", function () {
        it("should return Array", function () {
            assert.ok(getSelectionTexts() instanceof Array);
        });
    });
    context("when UI select a text", function () {
        var text;
        beforeEach(function () {
            text = "Hello world";
            fixtureDiv = document.createElement('div');
            fixtureDiv.innerHTML = '<b>' + text + '</b>';
            document.body.appendChild(fixtureDiv);
            var b = fixtureDiv.firstChild;
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNode(b);
            selection.addRange(range);
        });
        it("should return Array that contain the text", function () {
            assert.ok(getSelectionTexts() instanceof Array);
            assert.equal(getSelectionTexts().length, 1);
            var selectedText = getSelectionTexts()[0];
            assert.deepEqual(selectedText, text);
        });
    });
    context("when UI select multiple range", function () {
        var textA, textB;
        beforeEach(function () {
            textA = "Hello";
            textB = "world";
            fixtureDiv = document.createElement('div');
            fixtureDiv.innerHTML = '<p>' + textA + '</p><hr>' + '<p>' + textB + '</p>';
            document.body.appendChild(fixtureDiv);
            var bA = fixtureDiv.firstChild;
            var bB = fixtureDiv.lastChild;
            var selection = window.getSelection();
            var rangeA = document.createRange();
            rangeA.selectNode(bA);
            var rangeB = document.createRange();
            rangeB.selectNode(bB);
            selection.addRange(rangeA);
            selection.addRange(rangeB);
        });
        it("should return Array that contain the text", function () {
            var selectionTexts = getSelectionTexts();
            assert.ok(selectionTexts instanceof Array);
            assert.equal(selectionTexts.length, 2);
            assert.deepEqual(selectionTexts[0], textA);
            assert.deepEqual(selectionTexts[1], textB);
        });
    });
});