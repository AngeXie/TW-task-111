/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 19:53:26
 * @version $Id$
 */
 var getLyricTest = require("../main/bottleTest.js");

 describe('bottleLyric', function(){
 	it('when have 0 bottle beer', function(){
 		expect(getLyricTest(0)).toEqual(
 			"No more bottles of beer on the wall, no more bottles of beer.\n"+
 			"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
 	});

 	it('when have 1 bottle beer', function(){
 		expect(getLyricTest(1)).toEqual(
 			"1 bottle of beer on the wall, 1 bottle of beer.\n"+
 			"Take one down and pass it around, no more bottles of beer on the wall.\n"+
 			"No more bottles of beer on the wall, no more bottles of beer.\n"+
 			"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
 	})

 	it('when have 2 bottle beer', function(){
 		expect(getLyricTest(2)).toEqual(
 			"2 bottles of beer on the wall, 2 bottles of beer.\n"+
 			"Take one down, pass it around, 1 bottles of beer on the wall.\n"+
 			"1 bottle of beer on the wall, 1 bottle of beer.\n"+
 			"Take one down and pass it around, no more bottles of beer on the wall.\n"+
 			"No more bottles of beer on the wall, no more bottles of beer.\n"+
 			"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
 	})

 	it('when have 3 bottle beer', function(){
 		expect(getLyricTest(3)).toEqual(
 			"3 bottles of beer on the wall, 3 bottles of beer.\n"+
 			"Take one down, pass it around, 2 bottles of beer on the wall.\n"+
 			"2 bottles of beer on the wall, 2 bottles of beer.\n"+
 			"Take one down, pass it around, 1 bottles of beer on the wall.\n"+
 			"1 bottle of beer on the wall, 1 bottle of beer.\n"+
 			"Take one down and pass it around, no more bottles of beer on the wall.\n"+
 			"No more bottles of beer on the wall, no more bottles of beer.\n"+
 			"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
 	})
 });

