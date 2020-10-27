#/bin/bash -e 
sudo sh -c 'echo "deb  http://packages.osrfoundation.org/gazebo/ubuntu-stable `lsb_release -cs` main" > /etc/apt/sources.list.d/gazebo-stable.list'
wget http://packages.osrfoundation.org/gazebo.key -O - | sudo apt-key add -
sudo apt-get update
sudo apt-get install -y  gazebo9 
sudo apt-get install -y  libgazebo9-dev