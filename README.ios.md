## The Problem

A special event to taste and rate new LaCroix flavors is happening. Attendees
have been asked to rank the new flavors from most to least favorite.

We want you to create an iOS application that will determine what new
flavors are performing best.

### Input/Output

The input will be plain text. Your solution should fetch and parse the data
from [https://raw.githubusercontent.com/substantial-candidates/public/master/lacroix/sample-input.txt](https://raw.githubusercontent.com/substantial-candidates/public/master/lacroix/sample-input.txt). Your solution should output the correct result as text
on the screen of an iOS simulator.

The input contains results from three attendees. Each line has the flavor and
the rank from 1 to 5. See `sample-input.txt` for details. The output should be
ordered from most to least preferred.

Your output should _exactly match_ the contents of `expected-output.txt`.

You can expect that the input will be well-formed. There is no need to add
special handling for malformed input files.

### The Rules

5 points should be given to an attendee's favorite flavor, 3 points to their
second favorite, 2 points to their third favorite, 1 point to their
fourth favorite and 0 points to their fifth favorite.

Nothing beats genuine flavor (or lack thereof), but if two flavors are ranked
equally then our marketing department would prefer us to choose the flavor with
the shorter name for increased tweetability.

### Guidelines

This should be implemented in Swift (preferred) or Objective-C.

Your solution should be able to be built and run in the latest Release
(non-Preview, Alpha or Beta) version of XCode. Please include appropriate scripts
and instructions for running your application and your tests.

Your solution should target the latest version of iOS. It is not necessary to
support older versions.

If you use other libraries installed via a package manager, it is not necessary
to commit the installed packages, but do ensure the packages will install and build.

We write automated tests and we would like you to do so as well.

We appreciate well factored, object-oriented or functional designs.

Please document any steps necessary to run your solution and your tests.
