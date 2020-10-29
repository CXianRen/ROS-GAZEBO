# 推荐学习博客
中文　https://www.guyuehome.com/category/blog/ros　
英文　https://github.com/AaronMR/Learning_ROS_for_Robotics_Programming
# 官方资料
http://wiki.ros.org/roslaunch
http://wiki.ros.org/ROS/Tutorials


# 安装ros
bash ./install_ros.sh
# 安装gazebo
bash ./install_gazebo.sh

# RUN
roslaunch senseedu_robot_description gazebo_world.launch model:="`rospack find senseedu_robot_description`/urdf/turtlebot3/turtlebot3_waffle_pi.urdf.xacro" wn:="`rospack find senseedu_robot_description`/worlds/myworld.world"
