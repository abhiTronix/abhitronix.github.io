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

Today, I'm starting my awaited project "A Human-Sized Artificially Intelligent Humanoid". Since childhood, I have been fascinated with the use of unmanned war robots in video games and their colossal power inspired me to create something similiar. The purpose of this project is to develop a Human-robot which combines the best of both i.e. human’s intelligence and machine’s immortality into one domain. So, let's do it!
  
# My Roadmap:

The pages of science fiction are filled with intelligent machines. Some are robots with human-like appearances and others are disembodied computer programs. Some are friendly; some are hostile. Many of these machines have worked their way into popular culture. wWhile their appearances may differ, they invariably exhibit what we would call "intelligent" behavior.

> What is Intelligent Behaviour

For example, robot F, whom most will recognize as Lt. Commander Data from the Star Trek Next Generation series, can do it all. He can move around in a human-like manner, formulate plans of action, and, like most other self-respecting robots, speak English.1 We find nothing truly remarkable in this. Though such robots don't exist today, it's not hard to imagine building them one day soon. After all, what could be easier than walking, planning and speaking, particularly given the capabilities of modern technology? Most any child can do these things, surely computers could as well. It's no surprise, therefore,that science fiction writers dreamed them up in such numbers. Neither is it any surprise that producers included them in movie and television scripts. They don't even require special effects, all that is required is to wrap some guy up in aluminum foil and have him go around beating people at chess.

It is interesting to note that early computer researchers held the same optimistic view of the potential for intelligent machines. By the late 1940's, existing computers were being used to break secret codes and to perform arithmetic calculations, all in a fraction of the time required by humans. By the late 1950's, researchers had begun to turn serious attention to the problem of implementing "intelligent" behaviors. This new field of research came to be known as Artificial Intelligence,or AI.

**Artificial Intelligence:** 
Artificial intelligence(AI) involves developing computer programs to complete tasks which would otherwise require human intelligence.

**Key Features:**

- AI algorithms can tackle learning, perception, problem-solving, language-understanding and/or logical reasoning.
- AI is used in many ways in the modern world. For example, AI algorithms are used in Google searches, Amazon's recommendation engine, and SatNav route finders. 
- AI can be used to control robots, but the AI algorithms are only part of the larger robotic system, which also includes sensors, actuators, and non-AI programming. 
The key aspect that differentiates AI from more conventional programming is the word "intelligence." Non-AI programs simply carry out a defined sequence of instructions. AI programs mimic some level of human intelligence.

AI can be seen as the attempt to plumb the depths of this beauty. As is commonly the case in science, we cannot begin to appreciate the complexity of God's creation without studying it carefully and attempting to build realistic models of it. As an example of this, consider the following problem in a simple world of blocks. You are initially given a table with 3 blocks on it, as shown below on the left. Your goal is to rearrange those blocks so that they appear as shown in the goal state on the right. You may only use one hand, and may only pick up one block at a time:

Initial State: initial blocks	Goal State: goal blocks
The best solution is to perform three actions in sequence: (1) Put block C on the table, (2) Put block B on block C, and (3) Put block A on block B. Pretty easy, right? Perhaps it is for a human, but for a computer it's harder than you might think. There are subtle complexities in this problem that prevented the AI programs developed in the 1960's and early 1970's from solving it at all. These programs characterized the solution as a conjunction of two separate sub-goals: (1) block B must be on block C,and (2) block A must be on block B. The program would then try to solve each sub-goal separately. Try to do this yourself. First try to get block B onto block C. This turns out to be very simple,just move B on top of C. That achieves the first sub-goal. Now try to achieve the second sub-goal of having A on B. This isn't too hard either, but first you need to "uncover" block A so that you can move it. You can do this first and then put A on B. Unfortunately, in uncovering A, you messed up the solution to the first sub-goal, B is no longer on C. This problem occurs regardless of the order in which you try to solve the sub-goals. A good solution to this problem was not found until the mid-1970's. As you can see, seemingly"simple" tasks are not so simple as you might have thought. You may be able to do them "without thinking", but that doesn't mean that they are easy. Myriad problems such as these render the robots we've discussed rather more fiction than science. The goal of AI is to understand and implement these sorts of intelligent behavior. Doing so would help us to appreciate the nature of intelligence more fully, and might produce some useful tools as well. This is a rather difficult goal, however, given that no one really knows what intelligence is. We all have a general notion of what it is. We presume to know who has it and who doesn't.

**Robotics:** Robotics is a branch of technology which deals with robots. Robots are programmable machines which are usually able to carry out a series of actions autonomously, or semi-autonomously.
In my opinion, there are three important factors which constitute a robot:
- Robots interact with the physical world via sensors and actuators.
- Robots are programmable.
- Robots usually can be autonomous or semi-autonomous.
Robots are "usually" autonomous because some robots aren't, Telerobots(a branch of robotics), for example, is entirely controlled by a human operator. Some people say that a robot must be able to "think" and make decisions. However, there is no standard definition of "robot thinking." You choose to define a robot, robotics involves designing, building and programming physical robots.

---

The Artificial Intelligence is arguably the most exciting field in robotics. It's certainly the most controversial: Everybody agrees that a robot can work in an assembly line, but there's no consensus on whether a robot can ever be intelligent. Like the term "robot" itself, artificial intelligence is hard to define. Ultimate AI would be a recreation of the human thought process -- a man-made machine with our intellectual abilities. This would include the ability to learn just about anything, the ability to reason, the ability to use language and the ability to formulate original ideas.

![](/img/in-post/manav/humanoid-ven.jpg)

**Artificially intelligent robots** are the hybrid between robotics and AI. These robots also have the ability to learn in a limited capacity that helps them to recognize if a certain action (moving its legs in a certain way, for instance) achieved a desired result (navigating an obstacle). The robot stores this information and attempts the successful action the next time it encounters the same situation. Thereby, making them suitable for our Humanoid project.

> “*A year spent in artificial intelligence is enough to make one believe in God.*” — Alan Perlis

If there is one single lesson to learn from 60 years of research in AI,it is that humans are profoundly complex creations, beautiful in their ability to be flexible, insightful, and innovative. Therefore after going through various useful research papers and resources available on the internet, I came to the conclusion that, there has already been significant research done in past on other body parts as compared to more complex body parts such as brain, mouth, and eyes. So, I decided to mainly focus on developing complex Humanoid parts first and then extend my research to other parts of the body by utilizing existing available research information. 

### Information Available:
After done researching, I reached the following conclusion:
- Usually, humanoids or any other intelligent robot uses easy to work with ROS platform. ROS stands for Robot Operating System is robotics middleware. Although ROS is not an operating system, it provides services designed for a heterogeneous computer cluster such as hardware abstraction, low-level device control, implementation of commonly used functionality, message-passing between processes, and package management. But unfortunately it lacks in intelligence and it's more hardware specific.
- Make Humanoid's eyes Articulated, so that it has same DoF(Degree of Freedom) as natural human eyes and also add Deep Vision Capabilities to it.
- Add Speech recognition capabilities as well as a natural voice and mimicking lips movement too.
- Employing the articulated mechanism wherever possible, to provide it a natural motion. 

![](/img/in-post/manav/humanoid-brain.jpg)

### Resources gathering:
- To tackle Artificial intelligence problem, I decided to develop my own AI which I already been working on, known as [**Matson AI**](https://sites.google.com/view/matson-ai/home), a python language-based human alike artificial intelligence derived from [**Naomi Project**](https://github.com/NaomiProject/Naomi). It can see(Deep Vision), talk, hear, recognize its environment through its sensors. It is made exclusively for raspberry pi and is created in the first place so as to able to embed it on any existing system/hardware that requires onboard intelligence on the go. So, I decided to develop it further for my Humanoid and gave it the ability to manipulate its environment(through servos and motors) by sending required control signals.
- Further, I decided to adopt many open-sourced Humanoid designs available online and planned to further develop/innovate their parts according to my Humanoid needs. It gave me idea and direction, which tends to make my job of designing humanoid way easier.

These are my initial thoughts, for developing my Humanoid. Through this research, I'll be able to study various aspects of inventing/developing newer technologies by combining existing open-source technologies in the field of Humanoids, Robots, and Artificial-Intelligence in order to help to shape our future.

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! and Stay tuned for more ;)*