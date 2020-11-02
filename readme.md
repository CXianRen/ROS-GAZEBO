### 推荐学习博客
>中文　https://www.guyuehome.com/category/blog/ros　
>英文　https://github.com/AaronMR/Learning_ROS_for_Robotics_Programming
### 官方资料
>http://wiki.ros.org/roslaunch
>http://wiki.ros.org/ROS/Tutorials


### 安装ros
>bash ./install_ros.sh
### 安装gazebo
>bash ./install_gazebo.sh

### 复制机器人包
>cp -r ./senseedu_robot_description ~/catkin_ws/src
>cd ~/catkin_ws/src && catkin_make
rospack profile

### 运行环境
>source ~/.bashrc
source ~/catkin_ws/devel/setup.bash
roslaunch senseedu_robot_description gazebo_world.launch model:="`rospack find senseedu_robot_description`/urdf/turtlebot3/turtlebot3_waffle_pi.urdf.xacro" wn:="`rospack find senseedu_robot_description`/worlds/_4bar.world"

### 运行遥控器
>export TURTLEBOT3_MODEL=waffle_pi
roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch

### 运行图片查看器
>rqt_image_view

### 查看陀螺仪信息／和编码器信息
> rostopic echo /imu4

### 建立新的地图
>gazebo　建立后保存world文件,复制到senseedu_robot_description/worlds下

>使用senseedu_robot_description/scripts/create_map.py 去生成nbar.world.
:python3 create_map.py >> _nbar.world