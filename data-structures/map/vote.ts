interface Votes {
  id: string
  candidate: string
}

const votes: Votes[] = [
  { id: '114289451', candidate: "Alice" },
  { id: '414249420', candidate: "Bob" },
  { id: '116820394', candidate: "Alice" },
  { id: '478989489', candidate: "Charlie" },
  { id: '172838475', candidate: "Bob" },
  { id: '429393004', candidate: "Alice" }
]

const voteCount = (votes: Votes[]) =>{
  const counting = new Map<string, number>()

  for (const vote of votes){
    const candidate = vote.candidate
    const previousVote = counting.get(candidate) || 0
    counting.set(candidate, previousVote + 1)
  }

  console.log('Vote Count: ')
  for(const [candidate, count] of counting.entries()){
    
    console.log(`${candidate}: ${count}`)
  }

  let winner = ""
  let maxVotes = 0

  for (const [candidate, count] of counting.entries()) {
    if (count > maxVotes) {
      maxVotes = count
      winner = candidate
    }


  }
  
  console.log(`\nThe winner is: ${winner} with ${maxVotes} votes.`);

}

voteCount(votes);

