function uponLoad() {
   //addBulletPointsInEarlyVoting(["1st line", "second line"]);
   //addParagraphInEligibleToVote("You must be eligible to vote. You must be eligible to vote. You must be eligible to vote. You must be eligible to vote. You must be eligible to vote. You must be eligible to vote. You must be eligible to vote. ")
}

function addParagraphInEligibleToVote(str) {
   appendInSection("eligible_to_vote", str, "paragraph");
}
function addBulletPointsInEligibleToVote(str) {
   appendInSection("eligible_to_vote", str, "unordered_list");
}
function addParagraphInVoteByMail(str) {
   appendInSection("vote_by_mail", str, "paragraph");
}
function addBulletPointsInVoteByMail(str) {
   appendInSection("vote_by_mail", str, "unordered_list");
}
function addParagraphInEarlyVoting(str) {
   appendInSection("early_voting", str, "paragraph");
}
function addBulletPointsInEarlyVoting(str) {
   appendInSection("early_voting", str, "unordered_list");
}
function addParagraphInWhereToVote(str) {
   appendInSection("where_to_vote", str, "paragraph");
}
function addBulletPointsInWhereToVote(str) {
   appendInSection("where_to_vote", str, "unordered_list");
}
function addParagraphInElectionDay(str) {
   appendInSection("things_to_do", str, "paragraph");
}
function addBulletPointsInElectionDay(str) {
   appendInSection("things_to_do", str, "unordered_list");
}
function appendInSection(sectionId, str, type) {
   if (str.length != 0) {
      var header = document.getElementById(sectionId);
      if (type === "paragraph") {
         //append the str as a paragraph in the section
         header.appendChild(new Element("p", { text: str }));
      } else if (type === "unordered_list") {
         var ul = new Element("ul");
         str.forEach(elem => {
            ul.appendChild(new Element("li", { text: elem }));
         });
         header.appendChild(ul);
      }
   }
}