---
layout: post
title: "Building a Human-Sized Artificially Intelligent Humanoid"
subtitle: 'Initial Thoughts and Roadmap'
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

Today, I'm starting my dream project "A Human-Sized Artificially Intelligent Humanoid". After developing several Deep Vision/Learning and Robotics projects for over the years, now its the time to Step-up and apply them in this project. So, let's do it!

# My Thoughts:
> So, the question is "What's the Difference Between Robotics and Artificial Intelligence?" and "What types of robots are suitable for our Humanoid Project?"


Let's answer:

**Robotics:** Robotics is a branch of technology which deals with robots. Robots are programmable machines which are usually able to carry out a series of actions autonomously, or semi-autonomously.
In my opinion, there are three important factors which constitute a robot:
- Robots interact with the physical world via sensors and actuators.
- Robots are programmable.
- Robots usually can be autonomous or semi-autonomous.
Robots are "usually" autonomous because some robots aren't, Telerobots(a branch of robotics), for example, is entirely controlled by a human operator. Some people say that a robot must be able to "think" and make decisions. However, there is no standard definition of "robot thinking." You choose to define a robot, robotics involves designing, building and programming physical robots.

**Artificial Intelligence:** Artificial intelligence(AI) involves developing computer programs to complete tasks which would otherwise require human intelligence. 
- AI algorithms can tackle learning, perception, problem-solving, language-understanding and/or logical reasoning.
- AI is used in many ways in the modern world. For example, AI algorithms are used in Google searches, Amazon's recommendation engine, and SatNav route finders. 
- AI can be used to control robots, but the AI algorithms are only part of the larger robotic system, which also includes sensors, actuators, and non-AI programming. 
The key aspect that differentiates AI from more conventional programming is the word "intelligence." Non-AI programs simply carry out a defined sequence of instructions. AI programs mimic some level of human intelligence.

![](/img/in-post/manav/humanoid-ven.jpg)

Then comes Artificially Intelligent Robots:
**Artificially intelligent robots** are the hybrid between robotics and AI. These are robots which are controlled by AI programs. Up until quite recently, all industrial robots could only be programmed to carry out a repetitive series of movements. As we have discussed, repetitive movements do not require artificial intelligence. Non-intelligent robots are quite limited in their functionality, whereas AI algorithms allow them to perform more complex tasks. Thereby, making them suitable for our Humanoid project.

  
# My Roadmap:

> “*A year spent in artificial intelligence is enough to make one believe in God.*” — Alan Perlis


After going through various useful research papers and resources available on the internet, I came to the conclusion that, there has already been significant research done in past on other body parts as compared to more complex body parts such as brain, mouth, and eyes. So, I decided to mainly focus on developing complex Humanoid parts first and then extend my research to other parts of the body by utilizing existing available research information. 

### Information Available:
After done researching, I reached the following conclusion:
- Usually, humanoids or any other intelligent robot uses easy to work with ROS platform. ROS stands for Robot Operating System is robotics middleware. Although ROS is not an operating system, it provides services designed for a heterogeneous computer cluster such as hardware abstraction, low-level device control, implementation of commonly used functionality, message-passing between processes, and package management. But unfortunately it lacks in intelligence and it's more hardware specific.
- Make Humanoid's eyes Articulated, so that it has same DoF(Degree of Freedom) as natural human eyes and also add Deep Vision Capabilities to it.
- Add Speech recognition capabilities as well as a natural voice and mimicking lips movement too.
- Employing the articulated mechanism wherever possible, to provide it a natural motion. 

![](/img/in-post/manav/humanoid-brain.jpg)

### Resources gathering:
- To tackle Artificial intelligence problem, I decided to develop my own AI which I already been working on, known as [**Matson AI**](https://sites.google.com/view/matson-ai/home), a python language-based human alike artificial intelligence derived from [**Naomi Project**](https://github.com/NaomiProject/Naomi). It can see(Deep Vision), talk, hear, recognize its environment through its sensors. It is made exclusively for raspberry pi and is created in the first place so as to able to embed it on any existing system/hardware that requires onboard intelligence on the go. So, I decided to develop it further for my Humanoid and gave it the ability to manipulate its environment(through servos and motors) by sending required control signals.
- Further, I decided to adopt an open-sourced Humanoid design called [**InMoov Humanoid**](http://inmoov.fr) developed by _Gaël Langevin_ and planned to further develop/innovate its parts according to my Humanoid needs. It gave me idea and direction, which tends to make my job of designing humanoid way easier.

These are my initial thoughts, for developing my Humanoid. Through this research, I'll be able to study various aspects of inventing/developing newer technologies by combining existing open-source technologies in the field of Humanoids, Robots, and Artificial-Intelligence in order to help to shape our future.

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! and Stay tuned for more ;)*