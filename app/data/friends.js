function friends() {
	this.friends = [];
	this.addFriend = function(friend) {
		this.friends.push(friend);
	}
	this.getFriends = function() {
		return this.friends;
	}
	this.getMatch = function(friend) {

		if (this.friends.length < 2) { // if no other possible friends return arg friend
			return friend;
		} 

		var p = this.friends; // populate possible with friends list

		var possible = p.slice(0, -1); // remove user from possible friend list 

		var scores = friend.scores; // get user scores
		var ts = []; // empty array

		for (var key in possible) { // for each possible match
			var fsc = possible[key].scores; // possible friend scores
			var t = 0; // total difference = 0

			for (var k in fsc) { // for each score
 				t += this.getDifference(parseInt(scores[k]), parseInt(fsc[k])); // increment t by the difference
			}

 			ts.push(t); // push total to ts array
		}

 		var num = Math.min(...ts); // get min difference

  		var index = ts.indexOf(num); // get index of min diff num

 		if (index === -1) { // if no index default to 0
 			index = 0;
 		}
 
 		return possible[index]; // return friend
	}
	this.getDifference = function(a,b) {
		return (a > b)? a-b : b-a
	}
}

var friendos = new friends();

module.exports = friendos;