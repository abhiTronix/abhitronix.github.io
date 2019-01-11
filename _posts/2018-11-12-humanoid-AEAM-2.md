---
layout: post
title: "Advanced Eyes Articulate Mechanism(AEAM)"
subtitle: 'Part-2: Deep Vision integration and Revamping Field of View(FoV)'
author: "abhiTronix"
header-img: "img/AEAM-2-bg.jpg"
header-mask: 0.2
tags:
  - Humanoid
  - Robotics
  - Deep Vision
  - OpenCV
  - Detection
  - Tracking
  - Artificial Intelligence
  
---

Update: 12 November 2018

---

In continuation of my previous post of developing a unique Robotic Advanced Eyes Articulate Mechanism, a hybrid design that can somewhat mimic the natural movement of Human eyes. Today, I'm going to talk about more modification
 made to original design on the way to come up with a final robust design. So let's get to it without wasting time!

# My Thoughts:
![](/img/in-post/manav/AEAM-2-1.jpeg)
> "Do you wonder, How do robots “see”, respond to and learn from their interactions with the world around them?"  

Well, This is the fascinating field of visual intelligence, allows a robot to “*sense*” and “*recognize*” the surrounding environment. It also enables a robot to “learn” from the memory of past experiences by extracting patterns in visual signals.
It involves extracting statistically meaningful patterns in data that support classification, regression, and clustering. Then with the help of studying Computer Vision and Machine Learning together, we could build a recognition algorithm that can learn from data and adapt to new environments.
 So, We will be utilizing dlib, [**OpenCV**](https://github.com/abhiTronix/OpenCV_Raspberry_pi_TBB) and Other awesome Computer Vision & Machine learning and will implement real examples of video stabilization, recognition of 3D objects, coding a classifier for objects in our Humanoid Deep Vision.

# Deep Vision integration:

> “Artificial intelligence is growing up fast, as are robots whose facial expressions can elicit empathy and make your mirror neurons quiver.” —Diane Ackerman

Computer vision is an interdisciplinary scientific field that deals with how computers can be made to gain a  high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do.  


The [**FPV Cameras**](https://www.getfpv.com/fpv/cameras.html) in [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing) eyes will be utilized for providing Vision in our Humanoid. My primary goal is to initially implement & develop a basic Computer Vision example(like Ball Detection & Tracking) algorithm in my [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing) and then move onto more complex machine learning algorithm. This post is inspired by the awesome post by *Adrian Rosebrock*, Check it out [*here*](https://www.pyimagesearch.com/2015/09/14/ball-tracking-with-opencv/) and [*here*](https://www.pyimagesearch.com/2015/09/21/opencv-track-object-movement/).


The [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing)'s Deep Vision is simplified into two stages which are explained briefly as follows:
  * Ball Detection & Tracking:
      * Feature Extraction
      * Localization
      * Classification
      * Direction Finding
  * Control Flow:
    * Processing and Command Generation
    * Transmission
    * Signal generation and Motion
    * Feedback Reception
  

### A. Ball Detection & Tracking:
![](/img/in-post/manav/AEAM-2-2.jpg)
The proposed Ball detection and tracking architecture follow as:
1. **Feature Extraction:** uses color segmentation in a defined color-space to extract features of interesting objects(i.e required colored objects) in the frame. Tip: *Use of blur Filter tends to improve the Color Detection in a noisy image.* 
2. **Localization:** isolates and segments objects in very small and noisy pixel patches by applying thresholding on detected, followed by non-maxima suppression. The extraction of objects in saliency maps together with advanced image enhancement techniques such as bilateral filtering makes the approach feasible for a wide range of outdoor scenarios with unknown backgrounds. Also, A series of erosions and dilations remove any small blobs that will be left on the object mask.
3. **Classification:** is very fast and we compute the minimum enclosing circle of the blob, and then compute the center (x, y)-coordinates (i.e. the “centroids) of the object to be detected.
4. **Direction Finding:** which can be done by computing the deltas i.e difference between the x and y coordinates of the current frame and a frame towards the end of the frame buffer in a series of captured frame queue. 


### B. Control Flow:  
![](/img/in-post/manav/AEAM-2-3.jpg)
The control System acts as **Artificially Intelligent Robot**, where both Robotics and Computer Vision aspects work in harmony to produce desirable results, which can be summarized as follows:
1. **Processing and Command Generation:** In this stage, the Raspberry Pi's python program generate a special set of commands in response to values generated in the previous step, and feedback received from the [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3). These commands are user-defined and hardware specific strings generated in python that a [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3) is able to understand. 
2. **Transmission:** In this stage, Raspberry Pi communicate with [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3) over the Bluetooth channel, where Raspberry Pi's inbuilt Bluetooth communicate with [**HC-05**](https://wiki.eprolabs.com/index.php?title=Bluetooth_Module_HC-05)  Bluetooth module. The [**HC-05**](https://wiki.eprolabs.com/index.php?title=Bluetooth_Module_HC-05)  module then serially transfer te data recieved from Raspberry Pi to the [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3) pins.
3. **Signal generation and Motion:** In response to the serial data received by [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3), it start [**I2C**](https://www.elprocus.com/i2c-bus-protocol-tutorial-interface-applications/)  protocol with [**Adafruit PCA9685 16-Channel Servo Driver**](https://learn.adafruit.com/16-channel-pwm-servo-driver?view=all). The module generates the required PWM signal which makes Servo move. So according to pulse width and time period of the PWM signal, the Servo start to rotate clock/counter-clockwise generating require rotational motion
4. **Feedback Reception:** The [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3) generates a feedback signal in response to the motion, and this feedback is transmitted back to the Raspberry Pi, telling it that motion was successfully executed and [**Arduino**](https://store.arduino.cc/usa/arduino-uno-rev3) is ready to receive another command.  
    And this cycle continues over each frame, that provides real-time performance as seen in the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1efCJBKpQ1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

From this video, We can observe that:
* The Field of View(FoV) is very narrow/limited.
* Low quality video and more false positive detection
* Jitteriness at the output 	

# Reworked Field of View(FoV):
In the initial approach(as discussed above), I narrowed the Field of View(FoV) of AEAM to limit divers kinematics's distortions which are caused by false positive results in the low-quality video received from [**FPV Cameras**](https://www.getfpv.com/fpv/cameras.html). It was a temporary but not practical solution to this problem. So I ran a number of experiments and came up with the following solutions:
* **Switching to more robust color space:** Since I'm using color segmentation to detect the object, the color space is highly affected by the effect of different lighting conditions. So in accordance with various external lightening conditions, I have to decide robust color detection system for my humanoid. A piece of more detailed information on this topic can be found [*here*](https://www.learnopencv.com/color-spaces-in-opencv-cpp-python/).
* **Slowing Rough Swift Servo Motions:** To minimize distortion due to jitteriness caused by sudden servo motion, I replaced my kinematics motion values, with a set of precisely calculated mathematical ones(by trial and error experiments), so that servo can rotate precisely and with minimal speed. It is now able to compensate for any rough X-Y translations into a rather smoother camera translation without blurring out or losing targets. Thus, minimizing the false positive results. 
* **Frame by Frame Calibration:** The idea here was that the features/data of each frame are tracked, stored and calibrated prior to the next frame and this filters out unwanted values.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HTxZ2Rk8wgM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Conclusion: 
As can be seen in the video, the [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing)'s output still quivers while in motion. This can be eliminated by applying Video Stabilization, which is a work in progress. So stay tuned for next post!

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! So Stay Tuned and Stay Creative ;)*
