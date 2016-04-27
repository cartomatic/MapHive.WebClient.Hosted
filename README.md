# MapHive.WebClient.Hosted

An example of a MapHive app that:
* can work on its own (in standalone mode) - in this case switching apps means redirecting to a new url
* as well as within an iframe - in this case the app just communicates a need for switching the context, and the host app takes care of handling it

This example provides:
* an overview of how it communicates with a parent (all the stuff accessible through the dummy examples defined in MapHive.WebClient.ExtJs -> mh.dummy.AppLauncher)
* how the events can be passed between host and hosted app, and how they can bubble / drill down; also, how the events can be sent in an 'umbrella mode' when an app hosts some modules in separate iframes
* How to enforce plugging in Azzurra theme, through customised AppLauncher.scss

**Note: This is just an app stub!**
