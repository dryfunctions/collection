Sample CF funtion Project

You this project to develop new functions

Structure of the `cd` project

For simple project which they not depend on the any other functions
For simple project refer `sum` example

```
main.js
testdata.csv
def.json
doc.md
```

For little complex project where function depends on other functions
this project is example

```
main.js
testdata.csv
def.json
doc.md
package.json <--- this file is added to import other functions
cf.config.json <-- this files is added define the function usage in current project
```

Please not this after you create a project using this template. 
You have to publish your function to either public repo or private repo.
And you can upload your project source code to Github. So others can improve your function. However, Raising PR to your Gihub project will not update the function in `cf` servers.
That improvement has to be published to `cf`
Then that function will be updated globally. 
Only if all the existing test cases are passed and no change in the def.json file.
And has improvement in time complexity

### Testing 

Aditionally any one can submit updates testdata.csv for update test cases this will help you the function robust.