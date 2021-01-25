// Like:
var NumberLike = 0;
function LikeCounter() {
    NumberLike = NumberLike + 1;
    var IdLikeCounter = document.getElementById("idNumberOfLike");
    IdLikeCounter.innerHTML = "<div class='badge badge-primary text-wrap'>" + NumberLike + "</div>";
}

// Dislike:
var NumberDislike = 0;
function DisLikeCounter() {
    NumberDislike = NumberDislike + 1;
    var IdDislikeCounter = document.getElementById("idNumberOfDislike");
    IdDislikeCounter.innerHTML = "<div class='badge badge-primary text-wrap'>" + NumberDislike + "</div>";
}

// Comment:
var NumberComment = 0;
function CommentCounter() {
    NumberComment = NumberComment + 1;
    var IdCommentCounter = document.getElementById("idNumberOfComment");
    IdCommentCounter.innerHTML = "<div class='badge badge-primary text-wrap'>" + NumberComment + "</div>";
}