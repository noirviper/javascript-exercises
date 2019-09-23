const caesar = function($char, $shift, $directon) {
 let $char = $char.toLowerCase();
 let $shift = parseInt($shift);
 let $directon = $directon.toLowerCase();
 const range = ["a","b","c","d","e","f",
                "g","h","i","j","k","l",
                "m","n","o","p","q","r",
                "s","t","u","v","w","x",
                "y","z"];

                // take the $char and find index in range
                
                // if shift direction is right ($char + $shift)
                // if result is > 26 (result - 26) = new result

                // if shift direction is left ($char - $shift)
                // if result is < 0 (26 - result) = new result

                // if neither or null direction is right

                // if $shift is null or 0 it is 1


}

module.exports = caesar
