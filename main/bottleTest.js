/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 19:54:04
 * @version $Id$
 */
 function getLyric(totalNumber){
 	var curNumber = totalNumber;
 	var lyric = "";
 	for (; curNumber > 0; curNumber--){
 		if (curNumber == 1){
 			lyric += "1 bottle of beer on the wall, 1 bottle of beer.\n";
 			lyric += "Take one down and pass it around, no more bottles of beer on the wall.\n";
 			continue;
 		}
 		lyric += curNumber + " bottles of beer on the wall, " + curNumber + " bottles of beer.\n";
 		lyric += "Take one down, pass it around, " + (curNumber-1) + " bottles of beer on the wall.\n";
 	}
 	lyric += "No more bottles of beer on the wall, no more bottles of beer.\n";
 	lyric += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
 	return lyric;
}

module.exports=getLyric;


