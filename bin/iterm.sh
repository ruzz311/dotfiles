#iterm is a collection of terminal commands that helps iTerm 2.  These are shortcuts/macros mostly.

#!/bin/bash
if [[ $1 == 'tabname' ]]; then
	echo "renaming current tab: \"" $2 "\"."
	echo -e "\033];" $2 "\007"
elif [[ $1 == 'growl' ]]; then
    echo "growling the message: \"" $2 "\"."
	echo -e $'\e]9;'${2}'\007' ;
else
    echo "command unknown ( \"" $1 "\" )"
fi