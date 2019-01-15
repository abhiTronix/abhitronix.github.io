---
layout: post
title: "Design a Humanoid Brain-3"
subtitle: 'Part-3: Introduction to Matson AI'
author: "abhiTronix"
header-img: "img/brain-bg-3.jpg"
header-mask: 0.2
tags:
  - Humanoid
  - Deep Learning
  - Matson
  - Deep Vision
  - Speech recognition
  - Artificial Intelligence
  
---

Update: 20 December 2018

---

Today, I'm going to discuss my ambitious AI project started back in 2017, an Artificially Intelligent Entity, named **Matson AI**, that still exists on my [*Raspberry Pi*](https://www.raspberrypi.org/). I've been developing it since, but never got any chance to properly document it. So through this post, I'll try to cover briefly different aspects of my AI and will lay down the foundation of building a Humanoid brain. So let's get to it!


# Initial Thoughts and Roadmap:
![](/img/in-post/manav/brain-3-1.jpg)
Well after completing my graduation, I got my first [*Raspberry Pi*](https://www.raspberrypi.org/) on birthday, just for my research. [*Raspberry Pi*](https://www.raspberrypi.org/), as all quite familiar with, At $35 (or less, depending on which model you buy), is one of the world's least expensive and most versatile tiny computers. [*Raspberry Pi*](https://www.raspberrypi.org/)s with 512MB to 1GB of RAM, can be used for a wide variety of helpful projects, from powering homemade robots to serving as home theater PCs. But in my case [*Raspberry Pi*](https://www.raspberrypi.org/) is just more than a tiny computer for fun projects, rather I up-to this time have spent countless hours exploring its endless possibilities by pushing its performance to limit. I have done everything from a server to crypto mining, robotics, and more specifically complex CPU intensive deep learning and vision experiments and projects on my Pi. So basically It's made me familiar with an environment where I test my deep-learning algorithm without a worry, plus huge community support for [*Raspberry Pi*](https://www.raspberrypi.org/) helped me a lot.

### Roadmap:
![](/img/in-post/manav/brain-3-2.jpg)
Well, I started experimenting with basic python algorithms and then move onto more complex algorithms eventually. I wanna give a huge shoutout to Adrian Rosebrock for making me understanding various computer vision applications practically through his articles, you can find them [*here*](https://www.pyimagesearch.com/). While getting involved in various deep-learning and computer vision programs, I came across an awesome project called [*Jasper*](https://jasperproject.github.io/#about) - *i.e. an open source platform for developing always-on, voice-controlled applications and your own virtual voice assistant on [*Raspberry Pi*](https://www.raspberrypi.org/)*. I was amazed by its working through modules which respond to various voice-activated commands and execute them in response. But sadly it is only limited to a few modules with basic limited functionality like turning on music, new, notifications etc. So I decide to fork it and then work on it. The Idea behind creating **Matson** was -- to able to integrate every present-day Deep Learning(*like Character recognition*) and Computer Vision(*like Image Recognition*) algorithms in [*Jasper*](https://jasperproject.github.io/#about) while maintaining its current features so that we implement human brain like capabilities on any existing hardware that requires onboard intelligence involving learning, recognizing, processing and executing complex deliberate responses in real-time.

# Matson: The talking AI
**Matson** is a [*Jasper*](https://jasperproject.github.io/#about) based human alike artificial intelligence which can learn(deep-learning), recognize(see, listen) and respond(talk) in real-time - made exclusively for Internet of Things connected devices (*currently exists on [Raspberry Pi](https://www.raspberrypi.org/)*), created in the first place so as to able to embed it on any existing system/hardware that requires onboard intelligence on the go. **Matson** is *a wrapper around jasper's speech recognition library, providing it with additional artificial intelligence functionality that makes it a hybrid of three major AI domains i.e. Speech Recognition, Deep learning, and Computer Vision all at one place.* An additional layer of algorithms was constructed along with heavy modification in current Jasper library were made to create this flexible(multi-tasking), robust but lightweight([*Raspberry Pi*](https://www.raspberrypi.org/) optimized), yet powerful(multiprocessing) **Matson** AI. 


I also invented first [*OpenCV*](https://opencv.org/) compatible TBB *a.k.a.* [**Threading Building Blocks**](https://www.threadingbuildingblocks.org/) with VFVP3 & NEON support, exclusive for [*Raspberry Pi*](https://www.raspberrypi.org/), more details [*here*](https://github.com/abhiTronix/OpenCV_Raspberry_pi_TBB), ***which enables multi-threading in many [OpenCV](https://opencv.org/) algorithms and achieving significant 3x~5x increase in performance on [Raspberry Pi](https://www.raspberrypi.org/).***

## Applications:
Some of the real-time applications of **Matson** are as follows:
### 1. Real-time Single Object Detection And Classification:
In this I combined two Deep-learning Algorithms in real-time namely:
![](/img/in-post/manav/brain-3-3.png)*Detection-a process of identification.*
![](/img/in-post/manav/brain-3-4.png)*Classification-categorization of the object based on a previously defined classes or types.*  

While both methods are based on discernible properties of the object, classification could take arbitrary boundaries based on the problem domain and independent of detection. Unfortunately, you need hundreds of GBs of RAM to run a super complex supervised machine learning problem. Thankfully, there is something called “Transfer Learning” which enables us to use pre-trained models from other people by making small changes. So by utilizing pre-trained models in my AI and combine it with multiprocessing in python, I was able to achieve a decent rate on my [*Raspberry Pi*](https://www.raspberrypi.org/) as seen in the video below. The [*OpenCV*](https://opencv.org/) is used to retrieve frames
<iframe width="563" height="317" src="https://www.youtube.com/embed/JfbYQujKexA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  


### 2. Real-time Face Detection And Recognition:
Involve hybrid of Deep-learning and Computer-Vision Algorithms in real-time namely:
* **Face detection** - can be regarded as a specific case of object-class detection. Face-detection algorithms focus on the detection of frontal human faces. It is analogous to image detection in which the image of a person is matched bit by bit. Image matches with the image stored in database. Any facial feature changes in the database will invalidate the matching process.
* **Facial recognition** - technology capable of identifying or verifying a person from a digital image or a video frame. It works by comparing selected facial features from the given image with faces within a database. Facial Features can be extracted using an amazing Deep learning library such as [**dlib**](http://dlib.net/). On the Labeled Faces in the Wild (LFW) dataset the [**dlib**](http://dlib.net/)'s network compares to other state-of-the-art methods, reaching 99.38% accuracy.
![](/img/in-post/manav/brain-3-5.jpg)
Face detection is used in biometrics, often as a part of (or together with) a facial recognition system. Given the bounding box, the face obtains by Face detector we can apply [**dlib**](http://dlib.net/)’s facial landmark predictor to obtain 68 salient points used to localize the eyes, eyebrows, nose, mouth, and jawline. Thus based on it, our network quantifies the faces, constructing the 128-d embedding (quantification) for each face. More detailed information can be found [*here*](https://www.pyimagesearch.com/2018/06/18/face-recognition-with-opencv-python-and-deep-learning/). 
![](/img/in-post/manav/brain-3-6.jpg)
It produced the following results:
<iframe width="563" height="317" src="https://www.youtube.com/embed/PRC1KHN59zM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  



### 3. Real-time Hand Gestures Recognition:
![](/img/in-post/manav/brain-3-7.jpg)
* Involve segmentation of foreground object from a cluttered background in real-time. Thus, the entire problem could be solved using 2 simple steps -
* Find and segment the hand region from the video sequence.
* Count the number of fingers from the segmented hand region in the video sequence.
The real-time video is as follows:
<iframe width="563" height="317" src="https://www.youtube.com/embed/M1mzkI9zN2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  



### 4. Real-time Pupil Detection And Tracking:
![](/img/in-post/manav/brain-3-8.png)
In this I utilize [**dlib**](http://dlib.net/)'s face landmark points to estimate the eye region. Then use the contrast caused by the white and dark regions of the eyeball, together with contours, to estimate the center of the pupil. The real-time results are as follows:

<iframe width="563" height="317" src="https://www.youtube.com/embed/kYsCkaqmI9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
  

### 5. Real-time Multiple Objects Detection And Tracking:
![](/img/in-post/manav/brain-3-9.jpg)
To accomplish our multi-object tracking task, we leveraged [*OpenCV*](https://opencv.org/)’s **cv2.MultiTracker_Create** function. This method allows us to instantiate single object trackers (as seen above) and then add them to a class that updates the locations of objects. For more info checkout this blog-post. I'm using Color segmentation to recognize color of balls and then using tracker. The real-time results is as follows:

<iframe width="563" height="317" src="https://www.youtube.com/embed/9kXjFBk_x84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  



# Conclusion:

Hence through this post, we brief explained Matson AI and its applications, thereby laid the foundation that Matson AI is ideal for our Humanoid brain but with some additional modification, so that it can communicate with Arduino in real-time. But that's for the upcoming post, So Stay tuned for more. 

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! So Stay Tuned and Stay Creative ;)*