var games = {}




function playAgain(flag)
    { 
        var flag = true
        var count = 0
        var past = []
        var name = prompt("what is your name?")
        if(!games[name])
        {
            games[name] = {
                prev : new Array(999)
            }
        }
        var x = prompt(`can you guess my number ${name}`)
        
      while(flag == true)
            {
                past[count] = x
                count++

                if(x == 50)
                    {
                        if(games[name].prev.length < count)
                        {
                            alert(`try again for a higher score ${name}, High score ${games[name].prev.length}, previous guesses ${past}, tries ${count}`)
                        }
                        else if(games[name].prev.length == count)
                        {
                            alert(`SO CLOSE! try again for a higher score ${name}, High score ${games[name].prev.length}, previous guesses ${past}, tries ${count}`)
                        }
                        else
                        {
                            games[name].prev= past
                         alert(`New high score ${name}, High score ${games[name].prev.length}, previous guesses ${past}, tries ${count}`)
                         games[name].prev= past
                        }
                        flag = false
                        
                    }
            else if( x < 50)
                {
                    x= prompt(`to low, try higher ${name}, previous guesses ${past}, tries ${count}`, 0)
                }
            else
                {
                    x = prompt(`to high, try lower ${name}, previous guesses ${past}, tries ${count}`, 0)
                }
            }
            
            var choice = prompt("do you want to play again (yes/no)")
            if(choice == "yes")
                {
                playAgain(true)
                }
             
        }

    


playAgain(true)
