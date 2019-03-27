---
layout: post
title: "Advanced Eyes Articulate Mechanism(AEAM)-3"
subtitle: 'Part-3: Video Stabilization Implementation'
author: "abhiTronix"
header-img: "img/AEAM-3-bg.jpg"
header-mask: 0.2
tags:
  - Humanoid
  - Deep Vision
  - OpenCV
  - AEAM
  - Stabilization
  - Artificial Intelligence
  
---

Update: 30 November 2018

---

This is the final post of [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing) and Today I'm going to discuss the video stabilization methods that I implemented in my [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing) Design to eliminate various jitters and distortions. These methods are implemented from scratch by utilizing OpenCV only. So let's begin!

# Video Stabilization:

> “Artificial intelligence is growing up fast, as are robots whose facial expressions can elicit empathy and make your mirror neurons quiver.” —Diane Ackerman

### A Brief Insight:

<iframe width="480" height="360" src="https://www.youtube.com/embed/ATOrwKoREuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p align="center" style="font-size: 13px; font-style:bold;">YouTube State of the Art Stabilizer</p>

Video stabilization refers to a family of methods used to reduce the blurring & distortion associated with the motion of the camera. In other words, it compensates for any angular movement, equivalent to yaw, pitch, roll, and x and y translations of the camera. A related problem common in videos shot from mobile phones. The camera sensors in these phones contain what is known as an electronic rolling shutter. When taking a picture with a rolling shutter camera, the image is not captured instantaneously. Instead, the camera captures the image one row of pixels at a time, with a small delay when going from one row to the next. Consequently, if the camera moves during capture, it will cause image distortions ranging from shear in the case of low-frequency motions (for instance an image captured from a drone) to wobbly distortions in the case of high-frequency perturbations (think of a person walking while recording video). These distortions are especially noticeable in videos where the camera shake is independent across frames. The ability to locate, identify, track and stabilize objects at different poses and backgrounds is important in many real-time video applications. Object detection, tracking, alignment, and stabilization have been a research area of great interest in computer vision and pattern recognition due to the challenging nature of some slightly different objects such as faces, where algorithms should be precise enough to identify, track and focus one individual from the rest.

### Different Approaches to Video Stabilization:
Video Stabilization include mechanical, optical and digital stabilization methods to stabilize video. These are discussed briefly below:

- **Mechanical Video Stabilization:** Mechanical image stabilization systems using the vibration feedback of the camera which is detected via special sensors like gyros accelerometers etc. In these methods, accelerometer and gyros sensors are used for motion detection and then the camera is moved against the movement.
![](/img/in-post/manav/AEAM-3-9.jpg)*Camera with Mechanical Stabilizer*
- **Optical Video Stabilization:** In this method, instead of moving the whole camera just the pieces of the lens glass move, which is the most effective one and employs a moveable lens assembly that variably adjusts the path length of the light as it travels through the camera’s lens system. The angle and speed of the camera shake are detected through gyro sensors.According to the movement direction of the entire lens, the select lens elements should be moved so the image passing through the lens can be steady and sharp when it hits the imaging sensor. Due to the downward movement of the camera the center of the image moves downward on the focal plane. Shifting the optical Image Stabilizer lens group downward, the light rays are refracted so that the image center returns to the center of the focal plane as shown below:
![](/img/in-post/manav/AEAM-3-0.jpg)*Optical Image Stabilizer*
- **Digital Video Stabilization:** In this method, algorithms contains three main steps including motion estimation, motion smoothing, and image composition. The transformation parameters between two consecutive frames are derived in the first stage. The second stage filters out the unwanted motion and in the last stage the stabilized video will be reconstructed.


### My Approach:
A few days back, I experienced high-frequency jitteriness at the output of my [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing)'s Output. The vibrations due to motion in the cameras/Servos/platform that was causing tracked features to get lost on the way and thus resulting in false-positive movement of eyes. I considered using the Digital Video Stabilization technique(discussed above) for our purpose. Even though there is commercial software(like [Sony Vegas Pro](https://www.vegascreativesoftware.com/)) available that could stabilize the image, but due to limited space, low memory, real-time, and open-source considerations, I utilized my favorite OpenCV Computer Vision library for this purpose. 

### Resource Gathering:
So, In order to implement Video Stabilization in OpenCV, I studied & experimented various methods published in various research papers and selected two of them for benchmarking, Since they're more OpenCV friendly and properly documented, the rest of them. Those methods are followed:
1. Video Stabilization Using Point Feature Matching - [Research Paper](https://www.researchgate.net/publication/321589788_Video_Stabilization_Using_Point_Feature_Matching)
2. MeshFlow Controlled based Video Stabilization - [Research Paper](https://link.springer.com/chapter/10.1007/978-3-319-46466-4_48)  

The first method is already been implemented in Matlab [here](https://www.mathworks.com/help/vision/examples/video-stabilization-using-point-feature-matching.html) and C++ [here](http://nghiaho.com/?p=2093). But unfortunately, there was no source code available for the second method, neither I know any. So I re-implemented both these methods in python. *Wonder why python?*, well, python provides some of the best Extensive Support Libraries, and is suitable for any cross-integration with any other programming language. A summarized explanation of both method is discussed below with suitable examples:  

### 1. Video Stabilization Using Point Feature Matching:

<iframe width="560" height="315" src="https://www.youtube.com/embed/lLuQhXBtS7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p align="center" style="font-size: 13px; font-style:bold;">Video Stabilization Using Point Feature Matching in OpenCV(Video)</p>

This method tracks the salient feature array of frames and uses this as an anchor point to cancel out all perturbations relative to it. The original method works for the fixed length video only and not with real-time feed. So I modified this method to work with the real-time output of my AEAM. The modified algorithm works as follows:
![](/img/in-post/manav/AEAM-3.png)*Video Stabilization algorithm*
1. Find the affine transformation from previous to current frame using optical flow for a set of frames(*collected in a Frame queue*). The transformation only consists of three parameters: dx(*deviation in x-direction*), dy(*deviation in y-direction*), da(*deviation in angle*).
![](/img/in-post/manav/AEAM-3-0.png)*Feature Points in Frame A and B*
2. Accumulate these transformations to estimate trajectory for x, y, angle for the given queue.
![](/img/in-post/manav/AEAM-3-1.png)*Correspondences Between Frames A and B*
3. Smooth out the trajectory using a *Sliding Average Window*. The larger the value of Sliding Average Window, more stable will be the output, but will be less reactive to sudden panning. 
4. Create a new transformation such that, it is the sum of the current frame's transformation and difference of estimated smoothed trajectory and original trajectory. 
![](/img/in-post/manav/AEAM-3-2.png)*New transformation applied*
5. Apply this new transformation to the current frames(*warping*) and save current frame and its transformation in the frame queue and this cycle repeats.

#### Result:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hwlbixEG0Rg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p align="center" style="font-size: 13px; font-style:bold;">Video Stabilization Using Point Feature Matching in OpenCV(Real-Time)</p>

Hence from the resultant stabilized video is as above, depicting the successful implementation of this method in both recorded Video and Real-time application. The graphs shown at the end, in the video is as follows:
![](/img/in-post/manav/AEAM-3-3.png)
- Delta Pixels- Original trajectory vs Smoothed trajectory *w.r.t* Frames.
- Transformations(Delta angle,dx,dy) - Newer Smoothed Transformation vs Original Transformations w.r.t Frames.



#### Cons and Pros:
After observing this method's performance with different videos and live feed, I reached the following conclusions:
* Pros:
  * This method provides exceptionally good stability against low-frequency jitteriness(*slower vibrations*).
  * This method can process in real-time and thus ideal for real-time applications.
  * This method has low memory consumption thereby ideal for Embedded devices(*like Raspberry Pi*).
  * This method is good against zooming(scaling) jitter in the video.
* Cons:
  * This method performed poorly against high-frequency perturbations.
  * This method is also not good with Rolling Shutter distortions.

---

# 2. MeshFlow Controlled Video Stabilization:  

This method purposes an efficient video denoising approach that produces stabilized videos by utilizing the recently proposed meshflow motion model for the camera motion compensation. The meshflow is a spatially-smooth sparse motion field with motion vectors located at the mesh vertexes. The model is very effective and efficient for the purpose of the multi-frames denoising due to its internal characteristics such as the lightweight, the nonparametric form, and the spatially-variant motion representation. Specifically, the meshflows are estimated between adjacent frames, which are used to align frames within a sliding time window. A denoised frame is generated by fusing of several registered frames in a spatial and temporal manner with outlier rejections. This method is implemented for multi-core CPU's with high RAM availability and therefore not suitable for Low Memory Raspberry Pis, also implementation was quite a challenging as no sample source-code was available to work with. 

#### Meshflow model:
![](/img/in-post/manav/AEAM-3-5.png)*Meshflow model*
The MeshFlow is a spatial smooth sparse motion field with motion vectors only at the mesh vertexes. The MeshFlow is produced by assigning each vertex a unique motion vector via two [median filters](https://en.wikipedia.org/wiki/Median_filter). The path smoothing is conducted on the vertex profiles, which are motion vectors collected at the same vertex location in the MeshFlow over time. The profiles are smoothed adaptively by a novel smoothing technique, namely the Predicted Adaptive Path Smoothing (*PAPS*), which only uses motions from the past. It is calculated by the following methods:

* Features Extraction: involve [FAST](https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_feature2d/py_fast/py_fast.html)(*Used in our case*) frame feature detector and track them by [KLT](https://docs.opencv.org/3.3.1/d7/d8b/tutorial_py_lucas_kanade.html)(*Optical Flow*) to the adjacent frame.
* Motion Propagation: Each matched pair of features yields a motion vector, *i.e.* calculates motions between a current frame and its previous
frame. Mesh Flow only operate on a sparse regular grid of vertex profiles, such that the expensive optical flow can be replaced with cheap feature matches. For one thing, they are similar because they both encode strong spatial smoothness. For another, they are different as one is dense and the other is sparse. Moreover, the motion estimation methods are totally different. Next, we show an estimation of spacial coherent motions at mesh vertexes.
![](/img/in-post/manav/AEAM-3-6.png)
![](/img/in-post/manav/AEAM-3-7.png)*Median Filters f1 & f2*

- **Median Filters:** Each mesh vertex should only have one unique motion vector, which is picked from the motion candidates at each vertex by a median filter. Another median filter is applied spatially to reject motion outliers caused by mismatched features and dynamic objects.
- **Motions Accumulation:** In this approach, the pixel profile collects motion vectors at a fixed spatial location along the time. The motions at the pixel-profile is a very good approximation of the corresponding motion track.
![](/img/in-post/manav/AEAM-3-8.png)*Predicted Adaptive Path Smoothing (PAPS)*

- **Predicted Adaptive Path Smoothing (*PAPS*):** A vertex profile represents the motion of its neighboring image regions. MeshFlow can smooth all the vertex profiles for the smoothed motions. It begins by describing an offline filter, and then extend it for online smoothing.

#### Meshflow Denoising:
Typically, there are two challenges with respect to practical  video denoising, *i.e.*, the camera motion compensation and the handling of outliers during the temporal pixels fusing. The former refers to the image registration between adjacent video frames. As the camera is not stationary during the capturing, accurate motion estimations can increase the performance of various applications, such as the HDR, the video deblurring and the video stabilization. The latter can suppress the artifacts (*e.g.*, ghosting) introduced by misalignments, which may be caused by various reasons, including
dynamic objects, occlusions and insufficient descriptions of the motion model (e.g., a single homography). 



The denoising(*stabilizing*) process can be generalized as follows:
![](/img/in-post/manav/AEAM-3-4.jpg)*MeshFlow Controlled Predicted Adaptive Path (PAPs) based Video Stabilization*
* For a given input noisy video, we estimate the meshflow(discussed above) between adjacent frames.
* To denoise a frame, we move a temporal window along the video with a set of frames(radius). 
* Frames within the window are warped towards the central frame according to the estimated motions by the meshflow. 
* With all the frames aligned to the central frame within the local window, we fuse them to denoise the central frame. The fusing includes the identification of outlier pixels and its rejection(fitting a global homography model by [RANSAC](https://en.wikipedia.org/wiki/Random_sample_consensus)). 
* The window is moved forward by one frame at each time and the video is denoised frame by frame and this cycle continues.

#### Result:
<iframe width="560" height="315" src="https://www.youtube.com/embed/38yuHg_DSuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p align="center" style="font-size: 13px; font-style:bold;">MeshFlow Controlled Video Stabilization in OpenCV</p>


Hence as demonstrated in the video, a solution to correct the rolling shutter distortions and stabilize wobbly distortions in the case of High-Frequency perturbations is implemented successfully and the **performance is comparable to [YouTube's State-of-the-art Algorithm](https://ai.googleblog.com/2012/05/video-stabilization-on-youtube.html)**.

#### Cons and Pros:
Through a number of precisely calculated experiments, I concluded:
* Pros:
  * This method provide excellent stability against high-frequency perturbations and Rolling Shutter distortions.
  * This method performed exceptionally well against low-quality video footage
  * This method highly robust to the different type of camera motions and scene types.
  * This method can possibly outperform or produce comparable results against any existing commercial stabilizer software in the market in term of quality.
* Cons:
  * This method requires very high computational power to work therefore non-ideal for the raspberry pi.
  * This method is also non-ideal for real-time performance

### Conclusion: 
Through these experimental methods, I recreated two Video Stabilizer algorithms from scratch in OpenCV, that demonstrate a solution to correct the rolling shutter distortions in videos recorded by hand-held devices(as shown in the video) & robotics (such as in Quadcopter, UAVs) etc. Both have their pros and cons, therefore can be used to stabilize videos([**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing) output in my case) and thus finally we are able to create a robust [**AEAM**](https://abhitronix.github.io/2018/10/25/humanoid-AEAM-1/#designing) Design.

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! So Stay Tuned and Stay Creative ;)*