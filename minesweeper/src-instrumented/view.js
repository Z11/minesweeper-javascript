/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['view.js']) {
  _$jscoverage['view.js'] = [];
  _$jscoverage['view.js'][4] = 0;
  _$jscoverage['view.js'][7] = 0;
  _$jscoverage['view.js'][8] = 0;
  _$jscoverage['view.js'][11] = 0;
  _$jscoverage['view.js'][12] = 0;
  _$jscoverage['view.js'][14] = 0;
  _$jscoverage['view.js'][19] = 0;
  _$jscoverage['view.js'][24] = 0;
  _$jscoverage['view.js'][25] = 0;
  _$jscoverage['view.js'][26] = 0;
  _$jscoverage['view.js'][27] = 0;
  _$jscoverage['view.js'][29] = 0;
  _$jscoverage['view.js'][30] = 0;
  _$jscoverage['view.js'][31] = 0;
  _$jscoverage['view.js'][32] = 0;
  _$jscoverage['view.js'][33] = 0;
  _$jscoverage['view.js'][35] = 0;
  _$jscoverage['view.js'][36] = 0;
  _$jscoverage['view.js'][37] = 0;
  _$jscoverage['view.js'][38] = 0;
  _$jscoverage['view.js'][39] = 0;
  _$jscoverage['view.js'][41] = 0;
  _$jscoverage['view.js'][42] = 0;
  _$jscoverage['view.js'][43] = 0;
  _$jscoverage['view.js'][44] = 0;
  _$jscoverage['view.js'][46] = 0;
  _$jscoverage['view.js'][52] = 0;
  _$jscoverage['view.js'][54] = 0;
  _$jscoverage['view.js'][55] = 0;
  _$jscoverage['view.js'][56] = 0;
  _$jscoverage['view.js'][57] = 0;
  _$jscoverage['view.js'][59] = 0;
  _$jscoverage['view.js'][60] = 0;
  _$jscoverage['view.js'][61] = 0;
  _$jscoverage['view.js'][62] = 0;
  _$jscoverage['view.js'][64] = 0;
  _$jscoverage['view.js'][65] = 0;
  _$jscoverage['view.js'][66] = 0;
  _$jscoverage['view.js'][67] = 0;
  _$jscoverage['view.js'][69] = 0;
  _$jscoverage['view.js'][71] = 0;
  _$jscoverage['view.js'][76] = 0;
  _$jscoverage['view.js'][77] = 0;
  _$jscoverage['view.js'][78] = 0;
  _$jscoverage['view.js'][81] = 0;
  _$jscoverage['view.js'][82] = 0;
  _$jscoverage['view.js'][83] = 0;
  _$jscoverage['view.js'][84] = 0;
  _$jscoverage['view.js'][85] = 0;
  _$jscoverage['view.js'][86] = 0;
  _$jscoverage['view.js'][88] = 0;
  _$jscoverage['view.js'][89] = 0;
  _$jscoverage['view.js'][90] = 0;
  _$jscoverage['view.js'][91] = 0;
  _$jscoverage['view.js'][92] = 0;
  _$jscoverage['view.js'][94] = 0;
  _$jscoverage['view.js'][95] = 0;
  _$jscoverage['view.js'][98] = 0;
  _$jscoverage['view.js'][99] = 0;
  _$jscoverage['view.js'][100] = 0;
  _$jscoverage['view.js'][102] = 0;
  _$jscoverage['view.js'][103] = 0;
  _$jscoverage['view.js'][105] = 0;
  _$jscoverage['view.js'][107] = 0;
  _$jscoverage['view.js'][110] = 0;
  _$jscoverage['view.js'][111] = 0;
  _$jscoverage['view.js'][113] = 0;
  _$jscoverage['view.js'][116] = 0;
  _$jscoverage['view.js'][117] = 0;
  _$jscoverage['view.js'][118] = 0;
  _$jscoverage['view.js'][121] = 0;
  _$jscoverage['view.js'][122] = 0;
  _$jscoverage['view.js'][126] = 0;
  _$jscoverage['view.js'][133] = 0;
  _$jscoverage['view.js'][136] = 0;
}
_$jscoverage['view.js'][4]++;
"use strict";
_$jscoverage['view.js'][7]++;
if (exports === undefined || exports === null) {
  _$jscoverage['view.js'][8]++;
  var exports = {};
}
_$jscoverage['view.js'][11]++;
exports.View = (function () {
  _$jscoverage['view.js'][12]++;
  var mouse = {};
  _$jscoverage['view.js'][14]++;
  var CellImageDimensions = {width: 30, height: 30};
  _$jscoverage['view.js'][19]++;
  var STATE = {EXPOSED: 0, FLAGGED: 1};
  _$jscoverage['view.js'][24]++;
  var minesweeper = new exports.Minesweeper();
  _$jscoverage['view.js'][25]++;
  var score = 0;
  _$jscoverage['view.js'][26]++;
  minesweeper.placeNumMines(10);
  _$jscoverage['view.js'][27]++;
  var canvas2d;
  _$jscoverage['view.js'][29]++;
  var boxImage = new Image();
  _$jscoverage['view.js'][30]++;
  var numImage = new Image();
  _$jscoverage['view.js'][31]++;
  var zeroImage = new Image();
  _$jscoverage['view.js'][32]++;
  var bombImage = new Image();
  _$jscoverage['view.js'][33]++;
  var flagImage = new Image();
  _$jscoverage['view.js'][35]++;
  boxImage.src = "img/box.png";
  _$jscoverage['view.js'][36]++;
  numImage.src = "img/num.png";
  _$jscoverage['view.js'][37]++;
  zeroImage.src = "img/zero.png";
  _$jscoverage['view.js'][38]++;
  bombImage.src = "img/mine.png";
  _$jscoverage['view.js'][39]++;
  flagImage.src = "img/flag.png";
  _$jscoverage['view.js'][41]++;
  window.onload = (function () {
  _$jscoverage['view.js'][42]++;
  var canvas = document.getElementById("canvas");
  _$jscoverage['view.js'][43]++;
  canvas.width = 400;
  _$jscoverage['view.js'][44]++;
  canvas.height = 400;
  _$jscoverage['view.js'][46]++;
  canvas2d = canvas.getContext("2d");
});
  _$jscoverage['view.js'][52]++;
  window.onclick = (function (e, rightClick) {
  _$jscoverage['view.js'][54]++;
  mouse.x = e.pageX;
  _$jscoverage['view.js'][55]++;
  mouse.y = e.pageY;
  _$jscoverage['view.js'][56]++;
  var row;
  _$jscoverage['view.js'][57]++;
  var col;
  _$jscoverage['view.js'][59]++;
  var inBounds = Math.floor(mouse.x / CellImageDimensions.width) < minesweeper.SIZE && Math.floor(mouse.y / CellImageDimensions.height) < minesweeper.SIZE && mouse.x >= 0 && mouse.y >= 0;
  _$jscoverage['view.js'][60]++;
  if (inBounds) {
    _$jscoverage['view.js'][61]++;
    row = Math.floor(mouse.x / CellImageDimensions.width);
    _$jscoverage['view.js'][62]++;
    col = Math.floor(mouse.y / CellImageDimensions.height);
    _$jscoverage['view.js'][64]++;
    if (! rightClick) {
      _$jscoverage['view.js'][65]++;
      minesweeper.exposeCell(row, col);
      _$jscoverage['view.js'][66]++;
      if (minesweeper.findNumAdjacentMines(row, col) === 0) {
        _$jscoverage['view.js'][67]++;
        minesweeper.exposeAdjacentUnminedCells(row, col);
      }
      _$jscoverage['view.js'][69]++;
      score = minesweeper.isGameOver()? score: minesweeper.getScore();
    }
    else {
      _$jscoverage['view.js'][71]++;
      minesweeper.toggleFlagCell(row, col);
    }
  }
});
  _$jscoverage['view.js'][76]++;
  window.oncontextmenu = (function (e) {
  _$jscoverage['view.js'][77]++;
  window.onclick(e, true);
  _$jscoverage['view.js'][78]++;
  return false;
});
  _$jscoverage['view.js'][81]++;
  function drawCanvas() {
    _$jscoverage['view.js'][82]++;
    var boardState = minesweeper.getBoardState();
    _$jscoverage['view.js'][83]++;
    var mined = minesweeper.getMinedPositions();
    _$jscoverage['view.js'][84]++;
    canvas2d.clearRect(0, 0, 400, 400);
    _$jscoverage['view.js'][85]++;
    canvas2d.fillStyle = "black";
    _$jscoverage['view.js'][86]++;
    canvas2d.font = "bold 20px Helvetica Neue";
    _$jscoverage['view.js'][88]++;
    for (var i = 0; i < minesweeper.SIZE; i++) {
      _$jscoverage['view.js'][89]++;
      for (var j = 0; j < minesweeper.SIZE; j++) {
        _$jscoverage['view.js'][90]++;
        canvas2d.clearRect(0, 330, 400, 280);
        _$jscoverage['view.js'][91]++;
        var xCoord = j * CellImageDimensions.width;
        _$jscoverage['view.js'][92]++;
        var yCoord = i * CellImageDimensions.height;
        _$jscoverage['view.js'][94]++;
        if (boardState[j][i] === "") {
          _$jscoverage['view.js'][95]++;
          canvas2d.drawImage(boxImage, xCoord, yCoord);
        }
        _$jscoverage['view.js'][98]++;
        if (boardState[j][i] === STATE.EXPOSED) {
          _$jscoverage['view.js'][99]++;
          if (mined[j][i]) {
            _$jscoverage['view.js'][100]++;
            canvas2d.drawImage(bombImage, xCoord, yCoord);
          }
          else {
            _$jscoverage['view.js'][102]++;
            if (minesweeper.findNumAdjacentMines(j, i) === 0) {
              _$jscoverage['view.js'][103]++;
              canvas2d.drawImage(zeroImage, xCoord, yCoord);
            }
            else {
              _$jscoverage['view.js'][105]++;
              canvas2d.drawImage(numImage, xCoord, yCoord);
              _$jscoverage['view.js'][107]++;
              canvas2d.fillText(minesweeper.findNumAdjacentMines(j, i), j * CellImageDimensions.width + 10, i * CellImageDimensions.height + 21);
            }
          }
        }
        else {
          _$jscoverage['view.js'][110]++;
          if (boardState[j][i] === STATE.FLAGGED) {
            _$jscoverage['view.js'][111]++;
            canvas2d.drawImage(flagImage, xCoord, yCoord);
          }
          else {
            _$jscoverage['view.js'][113]++;
            canvas2d.drawImage(boxImage, xCoord, yCoord);
          }
        }
        _$jscoverage['view.js'][116]++;
        if (minesweeper.isGameOver()) {
          _$jscoverage['view.js'][117]++;
          boardState[j][i] = STATE.EXPOSED;
          _$jscoverage['view.js'][118]++;
          canvas2d.fillText("YOU LOSE", 10, 350);
        }
        _$jscoverage['view.js'][121]++;
        if (minesweeper.isGameWon()) {
          _$jscoverage['view.js'][122]++;
          canvas2d.fillText("YOU WIN", 10, 350);
        }
        _$jscoverage['view.js'][126]++;
        canvas2d.fillText("Score: " + score, 220, 350);
}
}
}
  _$jscoverage['view.js'][133]++;
  setInterval(drawCanvas, 20);
});
_$jscoverage['view.js'][136]++;
var view = new exports.View();
_$jscoverage['view.js'].source = ["//  ~5% of code code in view.js (converting x/y coordinates to row/col) inspired by:","//  https://www.youtube.com/watch?v=fqzaxdiRZS4","","\"use strict\";","","","if(exports === undefined || exports === null) {","  var exports = {};","}","","exports.View = function() {","  var mouse = {};","","  var CellImageDimensions = {","    width: 30,","    height: 30","  };","","  var STATE = {","    EXPOSED: 0,","    FLAGGED: 1","  };","","  var minesweeper = new exports.Minesweeper();","  var score = 0;","  minesweeper.placeNumMines(10);","  var canvas2d;","","  var boxImage = new Image();","  var numImage = new Image();","  var zeroImage = new Image();","  var bombImage = new Image();","  var flagImage = new Image();","","  boxImage.src = \"img/box.png\";","  numImage.src = \"img/num.png\";","  zeroImage.src = \"img/zero.png\";","  bombImage.src = \"img/mine.png\";","  flagImage.src = \"img/flag.png\";","","  window.onload = function() {","    var canvas = document.getElementById(\"canvas\");","    canvas.width = 400;","    canvas.height = 400;","","    canvas2d = canvas.getContext(\"2d\");","","","  };","","","  window.onclick = function(e, rightClick) {","","    mouse.x = e.pageX;","    mouse.y = e.pageY;","    var row;","    var col;","","    var inBounds = Math.floor(mouse.x / CellImageDimensions.width) &lt; minesweeper.SIZE &amp;&amp; Math.floor(mouse.y / CellImageDimensions.height) &lt; minesweeper.SIZE &amp;&amp; mouse.x &gt;= 0 &amp;&amp; mouse.y &gt;= 0;","    if(inBounds) {","      row = Math.floor(mouse.x / CellImageDimensions.width);","      col = Math.floor(mouse.y / CellImageDimensions.height);","","      if(!rightClick) {","        minesweeper.exposeCell(row, col);","        if(minesweeper.findNumAdjacentMines(row, col) === 0) {","          minesweeper.exposeAdjacentUnminedCells(row, col);","        }","        score = minesweeper.isGameOver() ? score : minesweeper.getScore();","      } else {","        minesweeper.toggleFlagCell(row, col);","      }","    }","  };","","  window.oncontextmenu = function(e) {","    window.onclick(e, true);","    return false;","  };","","  function drawCanvas() {","    var boardState = minesweeper.getBoardState();","    var mined = minesweeper.getMinedPositions();","    canvas2d.clearRect(0, 0, 400, 400);","    canvas2d.fillStyle = \"black\";","    canvas2d.font = \"bold 20px Helvetica Neue\";","","    for(var i = 0; i &lt; minesweeper.SIZE; i++) {","      for(var j = 0; j &lt; minesweeper.SIZE; j++) {","        canvas2d.clearRect(0, 330, 400, 280);","        var xCoord = j * CellImageDimensions.width;","        var yCoord = i * CellImageDimensions.height;","","        if(boardState[j][i] === \"\") {","          canvas2d.drawImage(boxImage, xCoord, yCoord);","        }","","        if(boardState[j][i] === STATE.EXPOSED) {","          if(mined[j][i]) {","            canvas2d.drawImage(bombImage, xCoord, yCoord);","          } else {","            if(minesweeper.findNumAdjacentMines(j, i) === 0) {","              canvas2d.drawImage(zeroImage, xCoord, yCoord);","            } else {","              canvas2d.drawImage(numImage, xCoord, yCoord);","","              canvas2d.fillText(minesweeper.findNumAdjacentMines(j, i), j * CellImageDimensions.width + 10, i * CellImageDimensions.height + 21);","            }","          }","        } else if(boardState[j][i] === STATE.FLAGGED) {","          canvas2d.drawImage(flagImage, xCoord, yCoord);","        } else {","          canvas2d.drawImage(boxImage, xCoord, yCoord);","        }","","        if(minesweeper.isGameOver()) {","          boardState[j][i] = STATE.EXPOSED;","          canvas2d.fillText(\"YOU LOSE\", 10, 350);","        }","","        if(minesweeper.isGameWon()) {","          canvas2d.fillText(\"YOU WIN\", 10, 350);","        }","","","        canvas2d.fillText(\"Score: \" + score, 220, 350);","","","      }","    }","  }","","  setInterval(drawCanvas, 20);","};","","var view = new exports.View();"];