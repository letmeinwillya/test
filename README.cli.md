## The Problem

A special event to taste and rate new LaCroix flavors is happening. Attendees
have been asked to rank the new flavors from most to least favorite.

We want you to create a command-line application that will determine what new
flavors are performing best.

### Input/Output

The input and output will be text. Your solution should parse the provided
`sample-input.txt` file via **stdin** (pipe or redirect) or by parsing a file **passed
by name** on the command line. Your solution should output the correct result via
stdout to the console.

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

This should be implemented in a language with which you are familiar. We would
prefer that you use Javascript, Typescript, Ruby, Elixir, Python, Swift, or
Kotlin, if you are comfortable doing so. If none of these are comfortable,
please choose a language that is both comfortable for you and suited to the
task.

Your solution should be able to be run (and if applicable, built) from the
command line. Please include appropriate scripts and instructions for running
your application and your tests.

If you use other libraries installed by a common package manager
(RubyGems/Bundler, npm, pip, Gradle), it is not necessary to commit the
installed packages.

We write automated tests and we would like you to do so as well.

We appreciate well factored, object-oriented or functional designs.

Please document any steps necessary to run your solution and your tests.

### Platform Support

This will be run in a unix-ish environment (OS X). If you choose to use a
compiled language, please keep this in mind. (Dependency on Xcode is
acceptable for Swift/Objective-C solutions) Please use platform-agnostic
constructs where possible (line-endings and file-path-separators are two
problematic areas).
