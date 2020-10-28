# https://www.cnblogs.com/linuxAndMcu/p/10874789.html

连接（link）标签
标签 	功能
<link> 	连接的可视化、碰撞和惯性属性设置
<visual> 	设置连接的可视化属性
<collision> 设置连接的碰撞计算属性
<inertial> 	设置连接的惯性属性
<geometry> 	输入模型的形状。提供box、cylinder、sphere等形态
<origin> 	设置相对于连接相对坐标系的移动和旋转
<material> 	设置连接的颜色和纹理
<mass> 	    连接重量（单位：kg）的设置

关节（joint）标签
标签 	功能
<joint> 	与连接的关系和关节类型的设置
<parent> 	关节的父连接
<child> 	关节的子连接
<origin> 	将父连接坐标系转换为子连接坐标系
<axis> 	    设置旋转轴
<limit> 	设置关节的速度、力和半径（仅当关节是revolute或prismatic时）

    fiexd：固定关节，不允许运动的特殊关节
    continuous：转动关节，可以绕单轴无线旋转
    revolute：旋转关节，类似于continuous，但旋转角度有限
    prismatic：滑动关节，沿某一轴线移动的关节，带有位置极限
    floating：浮动关节，允许进行平移、旋转运动
    planar：平面关节，允许在平面正交方向上平移或者旋转


transmission标签
<transmission>是与ROS-CONTROL一起运行所必须的标签，它输入关节与舵机之间的命令接口。
标签 	功能
<transmission> 	设置关节和舵机之间的变量
<type> 	        设置力的传递方式的形状
<joint> 	    设置关节信息设置
<hardwareInterface> 	设置硬件接口
<actuator> 	            设置舵机信息
<mechanicalReduction> 	设置舵机与关节之间的齿轮比