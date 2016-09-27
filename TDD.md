# TDD
test driven development:

- think of a simple feature that you want your code to do
- write a test that checks if that feature works
- run the test and watch it fail (because you havnt written the code yet)
- write the code and make the test pass

## Why do we TDD

 the spec suite indicates the expected behaviour for the piece of code that it tests

 if somebody at a later time changes the code he will be notified when running the tests, if the code doesnt work as initially expected to work


## Structure of a Spec file

Describe indicates the module that we are testing.
Each it call describes a specific test. The block of each it call contains an expect call which recieves a parameter an output from the code that we are testing. And then it calls a matcher to check if that output is what we expect it to be. Ensuring that the code works as expected.
