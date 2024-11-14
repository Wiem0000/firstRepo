$(document).ready(function() {
    var currentPlayer = "X"
    var arraycell = ["", "", "", "", "", "", "", "", ""]
    var player1Name = "", player2Name = ""
    var score1 = 0, score2 = 0

    $("#player1").on("input", function() {
        player1Name=$(this).val() 
    })

    $("#player2").on("input", function() {
        player2Name=$(this).val() 
    })

    $(".cell").click(function() {
        var i=$(this).data("index")
        console.log($(this).data("index"))
        

        if (arraycell[i]!== "") {
            return 
        }
        arraycell[i]= currentPlayer
        $(this).text(currentPlayer).addClass(currentPlayer)

        if (checkWinner()) {
            if (currentPlayer === "X") {
                score1=score1+1
                alert(player1Name + " wins!");
                $("#score1").text(score1);
            } else {
                score2=score2+1
                alert(player2Name + " wins!");
                $("#score2").text(score2);
            }
            resetBoard()
        } else {
            var draw = true
            for (let i = 0; i < arraycell.length; i++) {
                if (arraycell[i] === "") {
                    draw = false
                }
            }
            if (draw) {
                alert("It's a draw!")
                resetBoard()
            }
        } 
    {
            // Switch player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });

    // Check winner
    function checkWinner() {
        var arraywinner=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] ]

        return arraywinner.some(function(res) {
            var a=res[0]
            var b=res[1]
            var c=res[2]
            return arraycell[a] && arraycell[a]===arraycell[b] && arraycell[a]===arraycell[c]
        });
    }

    ////// Reset the board
    function resetBoard() {
        arraycell = ["", "", "", "", "", "", "", "", ""];
        $(".cell").text("").removeClass("X O");
        currentPlayer = "X"
    }
})
