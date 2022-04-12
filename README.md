
This is a simple task manager application that allows users to list their personal tasks with updating and managing variety of tasks. Users can save different tasks and also can delete them as well. Users will be able to login the app with their social media accounts like facebook.

Technologies Used
React Native
Javascript, Flow
Axios
Modular Component
Composite Component
Social Media Login (Facebook)
MSSQL Server
Dotnet Core API
git
Development Environment
Linux (Ubuntu 20.04)
DotNet Core 3.1
NodeJs
Android SDK
Android Emulator
Running the project
If you want to run the project please proceed with the following instructions,

Setup React Native Environment (Environment Setup Link)
Download the project,
git clone https://github.com/absjabed/react-native-todo.git
cd react-native-todo
Install the dependencies,
yarn install
Start Android Emulator and check if it's available with adb devices
In separate terminal Run following command for (Metro Bundler),
npx react-native start
To run the project in the emulator,
npx react-native run-android
If running fails follow the instruction below,
# for linux

cd android
./gradlew clean

# for windows 
gradlew clean

# again run
npx react-native run-android
To run the tests,
yarn test
If snapshot test fails for no reason, update snapshots with below command,
yarn test -u 
Building the release apk using containerization (Docker)
If you have docker installed and have internet connect please follow the steps to build release,

Clone the project
git clone https://github.com/absjabed/react-native-todo.git
cd react-native-todo
Run the following command to build the project,
docker run -it --rm -v $PWD:/app -w /app reactnativecommunity/react-native-android /bin/bash -c "yarn install && cd /app/android && ./gradlew assembleRelease"
Find your apk file in the following location of your current directory (react-native-todo)
react-native-todo/android/app/build/outputs/apk/release/apk-release.apk
Building the release apk (Manually)
If you want to build the release apk please proceed with the following instructions,

Download the project,
git clone https://github.com/absjabed/react-native-todo.git
cd react-native-todo
To install the yarn dependencies,
yarn install
To clean the previous gradle build,
cd android

# for linux
./gradlew clean

# for windows
gradlew clean
To build the release apk
./gradlew assembleRelease
If you want to build release apk with Emulator Connected
npx react-native run-android --variant=release
Finally, find the apk in the following locaiton,
react-native-todo/android/app/build/outputs/apk/release/apk-release.apk
Application Demo
Application Video
To see a live demo please visit: App-Video-Link

App Screenshots (with usecases)
