/**
 * Created by Sameera Madhushan on 9/7/2017.
 */


                // Draggable

// $( function() {
//     $( ".blackpawn" ).draggable();
//     $( ".whitepawn" ).draggable();
//     $( ".white-icon" ).draggable();
//     $( ".black-icon" ).draggable();
// } );


                // Color-word


var colors = ['darkblue','brown','gray','lightgray'];
var i=0;

function animateText(){
    $("#heading,#heading-2").css("color",colors[i]);
    i++;
    if (i === colors.length){
        i = 0;
    }
}
setInterval(animateText,900);


///////////////////////////////////////////////////////////

$("#hidden-button").hover(function () {
    console.log("anjeanvkj");
    $("#hidden-button").css("opacity","1")
    $("#hbutton").css("opacity","1");
});


                // ChessIcon-ajust White-Icon


var wpawn1 = document.getElementById("white-pawn-1");
var whitepawn1 = document.getElementById("main-2");
$(function () {
    wpawn1.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn1.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn1.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn2 = document.getElementById("white-pawn-2");
var whitepawn2 = document.getElementById("main-2");
$(function () {
    wpawn2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn2.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn3 = document.getElementById("white-pawn-3");
var whitepawn3 = document.getElementById("main-2");
$(function () {
    wpawn3.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn3.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn3.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn4 = document.getElementById("white-pawn-4");
var whitepawn4 = document.getElementById("main-2");
$(function () {
    wpawn4.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn4.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn4.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn5 = document.getElementById("white-pawn-5");
var whitepawn5 = document.getElementById("main-2");
$(function () {
    wpawn5.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn5.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn5.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn6 = document.getElementById("white-pawn-6");
var whitepawn6 = document.getElementById("main-2");
$(function () {
    wpawn6.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn6.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn6.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn7 = document.getElementById("white-pawn-7");
var whitepawn7 = document.getElementById("main-2");
$(function () {
    wpawn7.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn7.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn7.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wpawn8 = document.getElementById("white-pawn-8");
var whitepawn8 = document.getElementById("main-2");
$(function () {
    wpawn8.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitepawn8.ondragover = function(event) {
        event.preventDefault();
    };

    whitepawn8.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wrook = document.getElementById("white-rook");
var whiterook = document.getElementById("main-2");
$(function () {
    wrook.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whiterook.ondragover = function(event) {
        event.preventDefault();
    };

    whiterook.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wknight = document.getElementById("white-knight");
var whiteknight = document.getElementById("main-2");
$(function () {
    wknight.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whiteknight.ondragover = function(event) {
        event.preventDefault();
    };

    whiteknight.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wbishop = document.getElementById("white-bishop");
var whitebishop = document.getElementById("main-2");
$(function () {
    wbishop.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitebishop.ondragover = function(event) {
        event.preventDefault();
    };

    whitebishop.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wqueen = document.getElementById("white-queen");
var whitequeen = document.getElementById("main-2");
$(function () {
    wqueen.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitequeen.ondragover = function(event) {
        event.preventDefault();
    };

    whitequeen.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wking = document.getElementById("white-king");
var whiteking = document.getElementById("main-2");
$(function () {
    wking.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whiteking.ondragover = function(event) {
        event.preventDefault();
    };

    whiteking.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wbishop2 = document.getElementById("white-bishop-2");
var whitebishop2 = document.getElementById("main-2");
$(function () {
    wbishop2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whitebishop2.ondragover = function(event) {
        event.preventDefault();
    };

    whitebishop2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wnight2 = document.getElementById("white-knight-2");
var whiteknight2 = document.getElementById("main-2");
$(function () {
    wnight2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whiteknight2.ondragover = function(event) {
        event.preventDefault();
    };

    whiteknight2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var wrook2 = document.getElementById("white-rook-2");
var whiterook2 = document.getElementById("main-2");
$(function () {
    wrook2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    whiterook2.ondragover = function(event) {
        event.preventDefault();
    };

    whiterook2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});





                    // Black-Icon







var bpawn1 = document.getElementById("black-pawn-1");
var blackpawn1 = document.getElementById("main-2");
$(function () {
    bpawn1.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn1.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn1.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn2 = document.getElementById("black-pawn-2");
var blackpawn2 = document.getElementById("main-2");
$(function () {
    bpawn2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn2.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn3 = document.getElementById("black-pawn-3");
var blackpawn3 = document.getElementById("main-2");
$(function () {
    bpawn3.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn3.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn3.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn4 = document.getElementById("black-pawn-4");
var blackpawn4 = document.getElementById("main-2");
$(function () {
    bpawn4.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn4.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn4.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn5 = document.getElementById("black-pawn-5");
var blackpawn5 = document.getElementById("main-2");
$(function () {
    bpawn5.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn5.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn5.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn6 = document.getElementById("black-pawn-6");
var blackpawn6 = document.getElementById("main-2");
$(function () {
    bpawn6.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn6.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn6.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn7 = document.getElementById("black-pawn-7");
var blackpawn7 = document.getElementById("main-2");
$(function () {
    bpawn7.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn7.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn7.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bpawn8 = document.getElementById("black-pawn-8");
var blackpawn8 = document.getElementById("main-2");
$(function () {
    bpawn8.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackpawn8.ondragover = function(event) {
        event.preventDefault();
    };

    blackpawn8.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var brook = document.getElementById("black-rook");
var blackrook = document.getElementById("main-2");
$(function () {
    brook.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackrook.ondragover = function(event) {
        event.preventDefault();
    };

    blackrook.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bknight = document.getElementById("black-knight");
var blackknight = document.getElementById("main-2");
$(function () {
    bknight.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackknight.ondragover = function(event) {
        event.preventDefault();
    };

    blackknight.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bbishop = document.getElementById("black-bishop");
var blackbishop = document.getElementById("main-2");
$(function () {
    bbishop.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackbishop.ondragover = function(event) {
        event.preventDefault();
    };

    blackbishop.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bqueen = document.getElementById("black-queen");
var blackqueen = document.getElementById("main-2");
$(function () {
    bqueen.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackqueen.ondragover = function(event) {
        event.preventDefault();
    };

    blackqueen.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bking = document.getElementById("black-king");
var blackking = document.getElementById("main-2");
$(function () {
    bking.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackking.ondragover = function(event) {
        event.preventDefault();
    };

    blackking.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bbishop2 = document.getElementById("black-bishop-2");
var blackbishop2 = document.getElementById("main-2");
$(function () {
    bbishop2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackbishop2.ondragover = function(event) {
        event.preventDefault();
    };

    blackbishop2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var bnight2 = document.getElementById("black-knight-2");
var blackknight2 = document.getElementById("main-2");
$(function () {
    bnight2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };

    blackknight2.ondragover = function(event) {
        event.preventDefault();
    };

    whiteknight2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

var brook2 = document.getElementById("black-rook-2");
var blackrook2 = document.getElementById("main-2");
$(function () {
    brook2.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);

    };

    blackrook2.ondragover = function(event) {
        event.preventDefault();
    };

    blackrook2.ondrop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    };

});

$("#rotate").click(function () {
    console.log("1542");
    $("#main-2").css("transform","rotate(180deg)");
    $("#main-2").css("transition-duration","3s");
    // $("#main-2").css("transform","rotateX(10deg)");
});


 // var blackQueen = null;
// var whiteQueen = null;
//
// var blackKing = null;
// var whiteKing = null;
//
// var selectedPiece = null;
// var previousMovedPiece = null;
//
//
// $(document).on("click", function (event) {
//     var x = event.pageX;
//     var y = event.pageY;
//
//     var clickedElement = document.elementFromPoint(x, y);
//     var id = $(clickedElement).attr('id');
//
//     if (id !== undefined && id.includes("cell")) { //if clicked an empty cell
//         if (selectedPiece !== null && selectedPiece.id !== id) { //if one piece selected & then select other cell
//             refreshCells(selectedPiece);
//         }
//         move(selectedPiece, clickedElement); //if previously selected a piece and now select a cell then selected piece move to selected cell
//
//     } else if (id !== undefined && id.includes("p")) { //if clicked a piece
//         if (selectedPiece !== null && selectedPiece.id !== id) { //if one piece selected & then select other piece
//             refreshCells(selectedPiece);
//         }
//         calculatePos(id);
//         killOppositePiece(selectedPiece, clickedElement);
//
//     }
//     //console.log(clickedElement);
//    // console.log(id);
// });
//
// function calculatePos(pieceId) {
//     var cellID = $("#" + pieceId).parent('div').attr('id');
//
//     if (previousMovedPiece !== null && pieceId.includes(previousMovedPiece.type)) {
//         return;
//     }
//
//     if (pieceId.includes("pawn")) {
//         if (pieceId.includes("black")) {
//             var pawn = createNewBlackPawn(pieceId, cellID);
//             calculatePathAhead(pawn);
//
//         } else if (pieceId.includes("white")) {
//             var pawn = createNewWhitePawn(pieceId, cellID);
//             calculatePathAhead(pawn);
//         }
//
//     } else if (pieceId.includes("castle")) {
//         if (pieceId.includes("black")) {
//             var castle = createNewBlackCastle(pieceId, cellID);
//             calculatePathTop(castle);
//
//         } else if (pieceId.includes("white")) {
//             var castle = createNewWhiteCastle(pieceId, cellID);
//             calculatePathTop(castle);
//         }
//
//     } else if (pieceId.includes("knight")) {
//         if (pieceId.includes("black")) {
//             var knight = createNewBlackKnight(pieceId, cellID);
//             calculatePathTopLeft(knight);
//
//         } else if (pieceId.includes("white")) {
//             var knight = createNewWhiteKnight(pieceId, cellID);
//             calculatePathTopLeft(knight);
//         }
//
//     } else if (pieceId.includes("bishop")) {
//         if (pieceId.includes("black")) {
//             var bishop = createNewBlackBishop(pieceId, cellID);//Factory Methods
//             calculatePathTopLeft(bishop);
//
//         } else if (pieceId.includes("white")) {
//             var bishop = createNewWhiteBishop(pieceId, cellID);//Factory Methods
//             calculatePathTopLeft(bishop);
//         }
//
//     } else if (pieceId.includes("queen")) {
//         if (pieceId.includes("black")) {
//             var queen = createNewBlackQueen(pieceId, cellID);
//             calculatePathTop(queen);
//             calculatePathTopLeft(queen);
//
//         } else if (pieceId.includes("white")) {
//             var queen = createNewWhiteQueen(pieceId, cellID);
//             calculatePathTop(queen);
//             calculatePathTopLeft(queen);
//         }
//
//     } else if (pieceId.includes("king")) {
//         if (pieceId.includes("black")) {
//             var king = createNewBlackKing(pieceId, cellID);
//             calculatePathTop(king);
//             calculatePathTopLeft(king);
//
//         } else if (pieceId.includes("white")) {
//             var king = createNewWhiteKing(pieceId, cellID);
//             calculatePathTop(king);
//             calculatePathTopLeft(king);
//         }
//     }
// }
//
//
// /**-----------------------Piece Object-----------------------**/
// function Piece(id, type, currentPosition) {
//     this.id = id;
//     this.type = type;
//     this.currentPosition = currentPosition;
//
//     this.isFirstMove = true;
//     this.positionsToBeMoved = [];
//     this.obstaclesCanBeKilled = [];
// }
//
// //Pawn
// function calculatePathAhead(obj) {
//     selectedPiece = obj;
//     colorPawnKillCell(obj);
//     if (obj.type === "white") {
//         var offset = $("#" + obj.currentPosition).offset();
//         var x = offset.left;
//         var y = offset.top - 65;
//
//         var nextCell = document.elementFromPoint(x, y);
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             if (obj.isFirstMove) {
//                 y -= 65;
//                 nextCell = document.elementFromPoint(x, y);
//                 if (!isObstaclesFound(obj, nextCell)) {
//                     colorCells(obj, nextCell);
//                 }
//             }
//         }
//
//     } else if (obj.type === "black") {
//         var offset = $("#" + obj.currentPosition).offset();
//         var x = offset.left;
//         var y = offset.top + 65;
//
//         var nextCell = document.elementFromPoint(x, y);
//
//
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             if (obj.isFirstMove) {
//                 y += 65;
//                 nextCell = document.elementFromPoint(x, y);
//                 if (!isObstaclesFound(obj, nextCell)) {
//                     colorCells(obj, nextCell);
//                 }
//             }
//         }
//     }
// }
//
// //bishop, queen, king and Knight
// function calculatePathTopLeft(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left - 65;
//     var y = offset.top - 65;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else if (obj.id.includes("bishop") || obj.id.includes("queen")) {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left - 65;
//             y = offset.top - 65;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     } else if (obj.id.includes("knight")) {
//         var nextCell1 = document.elementFromPoint(x - 65, y);
//         var nextCell2 = document.elementFromPoint(x, y - 65);
//         if (!isObstaclesFound(obj, nextCell1)) {
//             colorCells(obj, nextCell1);
//         }
//         if (!isObstaclesFound(obj, nextCell2)) {
//             colorCells(obj, nextCell2);
//         }
//     }
//     calculatePathTopRight(obj);
//
// }
//
// function calculatePathTopRight(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left + 65;
//     var y = offset.top - 65;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else if (obj.id.includes("bishop") || obj.id.includes("queen")) {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left + 65;
//             y = offset.top - 65;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     } else if (obj.id.includes("knight")) {
//         var nextCell1 = document.elementFromPoint(x + 65, y);
//         var nextCell2 = document.elementFromPoint(x, y - 65);
//         if (!isObstaclesFound(obj, nextCell1)) {
//             colorCells(obj, nextCell1);
//         }
//         if (!isObstaclesFound(obj, nextCell2)) {
//             colorCells(obj, nextCell2);
//         }
//     }
//     calculatePathBottomLeft(obj);
//
// }
//
// function calculatePathBottomLeft(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left - 65;
//     var y = offset.top + 65;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else if (obj.id.includes("bishop") || obj.id.includes("queen")) {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left - 65;
//             y = offset.top + 65;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     } else if (obj.id.includes("knight")) {
//         var nextCell1 = document.elementFromPoint(x - 65, y);
//         var nextCell2 = document.elementFromPoint(x, y + 65);
//         if (!isObstaclesFound(obj, nextCell1)) {
//             colorCells(obj, nextCell1);
//         }
//         if (!isObstaclesFound(obj, nextCell2)) {
//             colorCells(obj, nextCell2);
//         }
//     }
//
//     calculatePathBottomRight(obj);
// }
//
// function calculatePathBottomRight(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left + 65;
//     var y = offset.top + 65;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else if (obj.id.includes("bishop") || obj.id.includes("queen")) {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left + 65;
//             y = offset.top + 65;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     } else if (obj.id.includes("knight")) {
//         var nextCell1 = document.elementFromPoint(x + 65, y);
//         var nextCell2 = document.elementFromPoint(x, y + 65);
//         if (!isObstaclesFound(obj, nextCell1)) {
//             colorCells(obj, nextCell1);
//         }
//         if (!isObstaclesFound(obj, nextCell2)) {
//             colorCells(obj, nextCell2);
//         }
//     }
//
// }
//
// //for castle queen and king
// function calculatePathTop(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left;
//     var y = offset.top - 65;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left;
//             y = offset.top - 65;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     }
//     calculatePathRight(obj);
// }
//
// function calculatePathRight(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left + 65;
//     var y = offset.top;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left + 65;
//             y = offset.top;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     }
//     calculatePathLeft(obj);
//
// }
//
// function calculatePathLeft(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left - 65;
//     var y = offset.top;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left - 65;
//             y = offset.top;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     }
//     calculatePathBottom(obj);
// }
//
// function calculatePathBottom(obj) {
//     selectedPiece = obj;
//     var offset = $("#" + obj.currentPosition).offset();
//     var x = offset.left;
//     var y = offset.top + 65;
//
//     var nextCell = document.elementFromPoint(x, y);
//
//     if (obj.id.includes("king")) {
//         if (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//         }
//     } else {
//         while (!isObstaclesFound(obj, nextCell)) {
//             colorCells(obj, nextCell);
//             offset = $(nextCell).offset();
//             x = offset.left;
//             y = offset.top + 65;
//             nextCell = document.elementFromPoint(x, y);
//         }
//     }
// }
//
// /**All pieces**/
// function move(obj, cell) {
//
//     for (var i = 0; i < obj.positionsToBeMoved.length; i++) {
//         if (obj.positionsToBeMoved[i] === cell) {
//             $("#" + obj.id).appendTo(cell);
//             refreshCells(obj);
//             obj.currentPosition = $(cell).attr('id');
//             previousMovedPiece = obj;
//             obj.isFirstMove = false;
//         }
//     }
//     obj.positionsToBeMoved = [];
// }
//
// function killOppositePiece(obj, clickedPiece) {
//     //clickedPiece is opposite side piece can be killed
//     //obstaclesCanBeKilled has pieces of opposite side that can be killed by bishop
//     var cell = $(clickedPiece).parent('div');
//     for (var i = 0; i < obj.obstaclesCanBeKilled.length; i++) {
//         if ($(clickedPiece).attr('id') === obj.obstaclesCanBeKilled[i].attr('id')) {
//             $(clickedPiece).remove();
//             $("#" + obj.id).appendTo(cell);
//             refreshCells(obj);
//             obj.currentPosition = $(cell).attr('id');
//             previousMovedPiece = obj;
//         }
//     }
// }
//
// function colorCells(obj, elem) {
//     obj.positionsToBeMoved.push(elem);
//     $(elem).addClass("color-path");
//     $("html").removeClass("color-path");
// }
//
// function colorKillCell(cell) {
//     $(cell).addClass("color-path");
// }
//
// function colorPawnKillCell(obj) {
//     var cell1;
//     var cell2;
//     var offset = $("#" + obj.currentPosition).offset();
//
//     if (obj.type === "white") {
//         cell1 = document.elementFromPoint(offset.left - 65, offset.top - 65);
//         cell2 = document.elementFromPoint(offset.left + 65, offset.top - 65);
//     } else if (obj.type === "black") {
//         cell1 = document.elementFromPoint(offset.left - 65, offset.top + 65);
//         cell2 = document.elementFromPoint(offset.left + 65, offset.top + 65);
//     }
//
//     var kill1 = $(cell1).children('span').attr('id');
//     var kill2 = $(cell2).children('span').attr('id');
//
//     if (kill1 !== undefined && !kill1.includes(obj.type)) {
//         obj.obstaclesCanBeKilled.push($(cell1).children('span'));
//         colorKillCell(cell1);
//     }
//     if (kill2 !== undefined && !kill2.includes(obj.type)) {
//         obj.obstaclesCanBeKilled.push($(cell2).children('span'));
//         colorKillCell(cell2);
//     }
// }
//
// function refreshCells(obj) {
//     for (var i = 0; i < obj.positionsToBeMoved.length; i++) {
//         $(obj.positionsToBeMoved[i]).removeClass("color-path");
//     }
//
//     for (var i = 0; i < obj.obstaclesCanBeKilled.length; i++) {
//         $(obj.obstaclesCanBeKilled[i]).parents('div').removeClass("color-path");
//     }
// }
//
// function isObstaclesFound(obj, nextCell) {
//     var child = $(nextCell).children('span');
//     if (obj.id.includes("pawn")) { //if the object is a pawn
//         if (child.attr('id') === undefined) {
//             return false;
//         }
//         return true;
//     }
//     //rest of other objects
//     if (child.attr('id') === undefined) {
//         var id = $(nextCell).attr('id');
//         if (id !== undefined && id.includes("cell")) {
//             return false;
//         }
//     } else {
//         if (!child.attr('id').includes(obj.type)) {
//             obj.obstaclesCanBeKilled.push(child);
//             colorKillCell(nextCell);
//         }
//     }
//     return true;
// }
//
// function createNewWhiteKing(pieceId, cellID) {
//     if (whiteKing === null) {
//         whiteKing = new Piece(pieceId, "white", cellID);
//     }
//     return whiteKing;
// }
//
// function createNewBlackKing(pieceId, cellID) {
//     if (blackKing === null) {
//         blackKing = new Piece(pieceId, "black", cellID);
//     }
//     return blackKing;
// }
//
// /**
//  *
//  Queen Factory
//  */
//
// function createNewWhiteQueen(pieceId, cellID) {
//     if (whiteQueen === null) {
//         whiteQueen = new Piece(pieceId, "white", cellID);
//     }
//     return whiteQueen;
// }
//
// function createNewBlackQueen(pieceId, cellID) {
//     if (blackQueen === null) {
//         blackQueen = new Piece(pieceId, "black", cellID);
//     }
//     return blackQueen;
// }
//
// /**
//  *
//  Castle Factory
//  */
//
// function createNewWhiteCastle(pieceId, cellID) {
//     for (var i = 0; i < arrMovedWhiteCastleList.length; i++) {
//         var castle = arrMovedWhiteCastleList[i];
//
//         if (castle.id === pieceId) {
//             return castle;
//         }
//     }
//
//     castle = new Piece(pieceId, "white", cellID);
//     arrMovedWhiteCastleList.push(castle);
//     return castle;
// }
//
// function createNewBlackCastle(pieceId, cellID) {
//     for (var i = 0; i < arrMovedBlackCastleList.length; i++) {
//         var castle = arrMovedBlackCastleList[i];
//
//         if (castle.id === pieceId) {
//             return castle;
//         }
//     }
//
//     castle = new Piece(pieceId, "black", cellID);
//     arrMovedBlackCastleList.push(castle);
//     return castle;
// }
//
//
// /**
//  *
//  Bishop Factory
//  */
// function createNewBlackBishop(pieceId, cellID) {
//
//     for (var i = 0; i < arrMovedBlackBishopList.length; i++) {
//         var bishop = arrMovedBlackBishopList[i];
//
//         if (bishop.id === pieceId) {
//             return bishop;
//         }
//     }
//
//     bishop = new Piece(pieceId, "black", cellID);
//     arrMovedBlackBishopList.push(bishop);
//     return bishop;
// }
//
// function createNewWhiteBishop(pieceId, cellID) {
//
//     for (var i = 0; i < arrMovedWhiteBishopList.length; i++) {
//         var bishop = arrMovedWhiteBishopList[i];
//
//         if (bishop.id === pieceId) {
//             return bishop;
//         }
//     }
//
//     bishop = new Piece(pieceId, "white", cellID);
//     arrMovedWhiteBishopList.push(bishop);
//     return bishop;
// }
//
// /**
//  *
//  Pawn Factory
//  */
//
// function createNewBlackPawn(pieceId, cellID) {
//     for (var i = 0; i < arrMovedBlackPawnList.length; i++) {
//         var pawn = arrMovedBlackPawnList[i];
//         if (pawn.id === pieceId) {
//             return pawn;
//         }
//     }
//     pawn = new Piece(pieceId, "black", cellID);
//     arrMovedBlackPawnList.push(pawn);
//     return pawn;
// }
//
// function createNewWhitePawn(pieceId, cellID) {
//     for (var i = 0; i < arrMovedWhitePawnList.length; i++) {
//         var pawn = arrMovedWhitePawnList[i];
//         if (pawn.id === pieceId) {
//             return pawn;
//         }
//     }
//     pawn = new Piece(pieceId, "white", cellID);
//     arrMovedWhitePawnList.push(pawn);
//     return pawn;
// }
//
// /**
//  *
//  Knight Factory
//  */
//
// function createNewBlackKnight(pieceId, cellID) {
//     for (var i = 0; i < arrMovedBlackKnightList.length; i++) {
//         var knight = arrMovedBlackKnightList[i];
//
//         if (knight.id === pieceId) {
//             return knight;
//         }
//     }
//     knight = new Piece(pieceId, "black", cellID);
//     arrMovedBlackKnightList.push(knight);
//     return knight;
// }
//
// function createNewWhiteKnight(pieceId, cellID) {
//     for (var i = 0; i < arrMovedWhiteKnightList.length; i++) {
//         var knight = arrMovedWhiteKnightList[i];
//         if (knight.id === pieceId) {
//             return knight;
//         }
//     }
//     knight = new Piece(pieceId, "white", cellID);
//     arrMo
