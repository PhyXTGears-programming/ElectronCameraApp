# First Robotics Competition Camera Dashboard
A dedicated browser-based app for viewing the camera feed from the WPIlib Camera Server on the RoboRIO.

# Building
You can build the most recent version locally, but the latest release is also available as an executable in the Releases tab.
## Windows
This project uses the [yarn](https://yarnpkg.com/en/) package manager to handle all dependencies. Simply run `yarn install` to gather all the dependencies, and run `yarn start` to test the app. To build for distribution, simply run `yarn dist` to build a single binary as well as an application installer.

# Notes
 * The team number used to connect to the robot is hard-coded and can only be changed in the "index.html" file. Simply change the 1720 number in `const TEAM_NUMBER = "1720";` to use your team's number instead. The IP address of the RoboRIO is also assumed to be "10.TE.AM.2" with the camera server being on port 1181.
 * The application currently uses the same width, height, and screen position everytime on startup, and is intended for 1080p screens. This can be adjusted by editing the "main.js" file and modifying the arguments passed to the BrowserWindow object creator.
 * The camera, when connected, is given a HUD with a simple crosshair to improve precision.

## Connection Indicator
Color                       | Meaning
--------------------------- | --------------------------------------
Red                         | Waiting for connection
Green                       | Connected
Flashing Magenta and Yellow | Previously connected, now disconnected
Yellow                      | Previously disconnected, now connected

# License
This project is licensed under the MIT License.

# Acknowledgements
This app wouldn't be possible without the gracious professionalism exhibited by a fellow team at the Indiana Tippecanoe event.  While struggling with latency in the LabView dashboard, this team advised us to use the web browser instead. That contribution evolved into the app provided here.

Sadly, we cannot remember which team sparked this effort with their contribution, and hope to run into them again, and give them the credit they deserve.
