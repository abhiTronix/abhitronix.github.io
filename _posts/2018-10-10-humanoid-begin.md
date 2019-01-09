---
layout: post
title: "Building a Human-Sized Artificially Intelligent Humanoid"
subtitle: 'Initial Thoughts and Roadmapping'
author: "abhiTronix"
header-img: "img/humanoid-bg.jpg"
header-mask: 0.2
tags:
  - Humanoid
  - Robotics
  - Matson
  - Deep Vision
  - Artificial Intelligence
---

Update: 10 October 2018

---
> “*It's going to be interesting to see how society deals with artificial intelligence, but it will definitely be cool.*” — Colin Angle

![](/img/in-post/manav/humanoid.jpg)

Today, I'm starting my dream project "A Human-Sized Artificially Intelligent Humanoid". After messing with Deep Vision/Learning and Robotics projects for over the year, now is the time to step up and apply them. I'll be tackling each problem step by step until my research in this field is completed. So, let's do it!!!

# My Thoughts:
> So, the question is "What's the Difference Between Robotics and Artificial Intelligence?" and "What types of robots are suitable for our Humanoid Project?"  
Let's answer:

Robotics: Robotics is a branch of technology which deals with robots. Robots are programmable machines which are usually able to carry out a series of actions autonomously, or semi-autonomously.
In my opinion, there are three important factors which constitute a robot:
- Robots interact with the physical world via sensors and actuators.
- Robots are programmable.
- Robots usually can be autonomous or semi-autonomous.
Robots are "usually" autonomous because some robots aren't, Telerobots(a branch of robotics), for example, is entirely controlled by a human operator. Some people say that a robot must be able to "think" and make decisions. However, there is no standard definition of "robot thinking." Requiring a robot to "think" suggests that it has some level of artificial intelligence. However you choose to define a robot, robotics involves designing, building and programming physical robots. Only a small part of it involves artificial intelligence.

Artificial Intelligence: Artificial intelligence(AI) involves developing computer programs to complete tasks which would otherwise require human intelligence. 
- AI algorithms can tackle learning, perception, problem-solving, language-understanding and/or logical reasoning.
- AI is used in many ways in the modern world. For example, AI algorithms are used in Google searches, Amazon's recommendation engine, and SatNav route finders. 
- AI can be used to control robots, but the AI algorithms are only part of the larger robotic system, which also includes sensors, actuators, and non-AI programming. 
The key aspect that differentiates AI from more conventional programming is the word "intelligence." Non-AI programs simply carry out a defined sequence of instructions. AI programs mimic some level of human intelligence.

![](/img/in-post/manav/humanoid-ven.jpg)

Then comes Artificially Intelligent Robots:
Artificially intelligent robots are the hybrid between robotics and AI. These are robots which are controlled by AI programs. Up until quite recently, all industrial robots could only be programmed to carry out a repetitive series of movements. As we have discussed, repetitive movements do not require artificial intelligence.
Non-intelligent robots are quite limited in their functionality. AI algorithms allow the robot to perform more complex tasks. Thereby, making them perfect for developing our Humanoid.

  

# My Roadmap:

> “*A year spent in artificial intelligence is enough to make one believe in God.*” — Alan Perlis

After going through various research papers and resources available on the internet, There has been already a lot of research already been done on lower body parts and less research has been done on more complex parts such as brain, mouth, and eyes. So, I decided to mainly focus on these areas first and then extend to further parts of the body. 

### Information Available:
After done researching, I reached the following conclusion:
- Usually, humanoids or any other intelligent robot uses easy to work with ROS platform. ROS stands for Robot Operating System is robotics middleware. Although ROS is not an operating system, it provides services designed for a heterogeneous computer cluster such as hardware abstraction, low-level device control, implementation of commonly used functionality, message-passing between processes, and package management. But unfortunately it lacks in intelligence and it's more hardware specific.
- Make Humanoid's eyes Articulated, so that it has same DoF(Degree of Freedom) as natural human eyes and also add Deep Vision Capabilities to it.
- Add Speech recognition as a natural voice to the humanoid.
- Articulated neck mechanism to give it natural DoF. 

![](/img/in-post/manav/humanoid-brain.jpg)

### Resources gathering:
- To tackle Artifical intelligence problem, I decided to develop my own AI which I already been working on, **Matson AI**, a python language-based human alike artificial intelligence which can see(Deep Vision), talk, hear, recognize its environment through its sensors made exclusively for internet of things connected devices (currently exists on raspberry pi). 
it is created in the first place so as to able to embed it on any existing system|hardware that requires onboard intelligence on the go. So, I decided to develop it further for my Humanoid and gave it the ability to manipulate its environment(through servos and motors) by sending control signals.
- Further, I decided to adapt an open-sourced design called **InMoov Humanoid** developed by _Gaël Langevin_, and to further develop/innovate its parts according to my Humanoid needs, which tends to make my job of designing humanoid somewhat way easier.

These are my initial roadmap, for developing my Humanoid.

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! and Stay tuned for more ;)*
