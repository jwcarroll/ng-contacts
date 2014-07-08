#Tags

##step-0

Basic initial node.js application using Express and Bootstrap.

##step-1

Simple input bound using **ng-model**

 - Shows angular automatic binding
 - Introduce concept of scope, dirty checking

##step-2

More common directives showing **ng-init** and **ng-repeat** to showcase DOM templates as well as filters.

 - **ng-init** to declare simple array of names
 - **ng-repeat** to show DOM templating
 - Include input in ng-repeat to showcase contextual binding
 - Include search input to show off **filter**
 - Use **ng-if** to show state based updates to UI

##step-3.1

Created a module, and moved data for contacts into controller registered with module

  - Introduce <code>angular.module</code>
  - Create simple controller
    - Shows dependency injection of $scope

##step-3.2

Add simple delete functionality, and introduce 'Controller As' syntax

  - Add ability to delete contact
    - Show **ng-click** for first time
  - Modify controller to get rid of $scope