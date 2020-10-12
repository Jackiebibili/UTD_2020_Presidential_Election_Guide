# HTML framework for the page setup.

## Usage
DOM functions for paragraph or bullet point insertion into multiple sections including (eligibility, voter registration, early voting, where to vote in person, things to do on the Election Day): 
   ```
   addParagraphInEligibleToVote(str)
   addBulletPointsInEligibleToVote(arr)
   addParagraphInVoteByMail(str)
   addBulletPointsInVoteByMail(arr)
   addParagraphInEarlyVoting(str)
   addBulletPointsInEarlyVoting(arr)
   addParagraphInWhereToVote(str)
   addBulletPointsInWhereToVote(arr)
   addParagraphInElectionDay(str)
   addBulletPointsInElectionDay(arr)
   ```
Place the appropriate function calls in the upLoad() method in the bundle.js in order to save changes on the html page.
