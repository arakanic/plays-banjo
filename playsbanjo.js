// Only people whose names begin with the letter "r" get to play the banjo!
// This function returns a string declaring who plays the banjo and who does not.

function areYouPlayingBanjo(name) {
    return name + 
            (name[0].toLowerCase() == 'r' ?
            ' plays' : ' does not play')
                + " banjo"
  }  