#! /usr/bin/fish
# Run with: `fish watch.fs`

function latest
  date +%s
end
set PREVIOUS (latest);

# `-m` to monitor a directory for all changes
# ignore the lines input
# tries to prevent running more than 1-per-minute
inotifywait -m -r . | while read -la line;
    set NOW (latest);
    if test $NOW -ne $PREVIOUS;
      docker build -t day2 .;
      set PREVIOUS (latest);
    end;
  end