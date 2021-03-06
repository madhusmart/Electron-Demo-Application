# Electron-Demo-Application

**Clone and run the Desktop application eith simple commands.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**


### To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

Install it by simple command
---

>1 **Install Git** 

---
Installing on Linux
If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the basic package-management tool that comes with your distribution. If you’re on Fedora for example, you can use yum:

    $ sudo yum install git-all
If you’re on a Debian-based distribution like Ubuntu, try apt-get:

    $ sudo apt-get install git-all
    
For more options, there are instructions for installing on several different Unix flavors on the Git website, at http://git-scm.com/download/linux.

---

>2 **Install Nodejs** 

---
###Debian and Ubuntu based Linux distributions

Also including: Linux Mint, Linux Mint Debian Edition (LMDE), elementaryOS and others.

Node.js is available from the NodeSource Debian and Ubuntu binary distributions repository (formerly Chris Lea's Launchpad PPA). Support for this repository, along with its scripts, can be found on GitHub at nodesource/distributions.

**NOTE: If you are using Ubuntu Precise or Debian Wheezy, you might want to read about running Node.js >= 4.x on older distros.**

    $ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    $ sudo apt-get install -y nodejs

Alternatively, for Node.js v6:

    $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    
Optional: install build tools

To compile and install native addons from npm you may also need to install build tools:

    $sudo apt-get install -y build-essential

**NOTE: Git and Nodejs is already install on your computer then Skip 1 and 2 point and continue with Point- 3**



---

>3 **Use this to run project in your local**

---
```bash
# Clone this repository
git clone https://github.com/madhusmart/Electron-Demo-Desktop-Application.git
# Go into the repository
cd Electron-Demo-Desktop-Application
# Install dependencies and run the app
npm install && npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).
