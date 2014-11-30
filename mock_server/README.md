The `mockServer` directory
==========================

This folder contains the dyson node server for dynamic, fake JSON. 

[Dyson](http://webpro.github.io/dyson) allows you to define endpoints at a path and return JSON based on a template object. A full fake server for your application up and running in minutes 

## Overview ##


At a high level, the structure looks roughly like this:

```
clemente/
  |- mockServer/
  |  |- delete/
  |  |  |  <DELETE methods>
  |  |- get/
  |  |  |  <GET methods>
  |  |- post/
  |  |  |  <POST methods>
  |  |- put/
  |  |  |  <PUT methods>
```


## Launch the mock server ##

    dyson [dir]

This starts the services configured in [dir] at localhost:3000.
