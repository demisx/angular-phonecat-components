The entire app UI is organized around the concept of `states`. 

* A state corresponds to a "place" in the application in terms of the overall UI and 
navigation. 
* A state describes (via the controller / template and view properties) 
what the UI looks like and does at that place. 
* UI can transition from one state to another when certain event is triggered
* Application can be in only one state at a time (a.k.a current state), but 
child state still activates its parents
