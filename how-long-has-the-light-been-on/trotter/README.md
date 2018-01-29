# Lights

## Implementation

Converts the inputs to a Set of "hours on", then returns its length.

- [src/Lights.hs](src/Lights.hs) contains the "business logic"
- [app/Main.hs](app/Main.hs) contains the code to read `stdin` as a string and print the final number of "hours on"

## Running the code

> Requires [Stack](https://haskell-lang.org/get-started) (`brew install haskell-stack`)

```sh
# setup, only if stack has never been used on this machine
stack setup

# build
stack build

# run once against current clipboard (`pbpaste` is a macOS command)
pbpaste | stack exec lights-exe

# run all test input (pipes each file into lights-exe)
for f in $(find sample-inputs -type f | sort); do
  echo "> $f:"
  cat $f | stack exec lights-exe
  echo ""
done
```# lights
