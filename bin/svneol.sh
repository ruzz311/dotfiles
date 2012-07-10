#!/bin/bash
if [[ $1 == 'status' ]]; then
    svn "$@" | grep -v '^\?.*\(\.vimbackup\|\.sorting\)';
elif [[ $1 == 'diff' ]]; then
    svn "$@" --diff-cmd diff -x "-u --strip-trailing-cr";
else
    svn "$@";
fi