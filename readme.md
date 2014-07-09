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

##step-3.3

Shows how to create a simple filter that transforms a Date object to a nicer display format

  - Create date filter using moment.js

##step-4.1

Demonstrate pulling contacts from server using $http service

  - Briefly show API code, explain backend is irrelevant
  - Pull in contacts using $http from API
  - Replace client delete with $http delete

##step-4.2

Refactor data access into a service and inject into controller

  - Add service with all abstracted calls to $http
  - Replace direct calls to $http in contact list controller with new service

##step-5.1 (Doesn't exist in repository)

Refactor page into partial view and configure routing

  - Create '/views/partials/contact-list.html' and copy paste snippet from index.html into it
  - Setup route and explain what is going on
  - Replace HTML in index with **<ng-view>** and explain that directives can be elements

##step-5.2 (Direct Checkout)

Add in contact details controller and route to get there

  - Show new route, view and controller
  - Show new menu controller
    - Explain use of **ng-include**
  - Demo add/update functionality

##step-5.3 (Direct Checkout)

Adds in form controller and client side error handling

  - form controller
    - **ng-class** to handle errors
    - **ng-disabled** to enable/disable buttons based on form state