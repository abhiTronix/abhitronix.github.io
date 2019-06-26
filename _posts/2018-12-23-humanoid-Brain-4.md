---
layout: post
title: "Designing a Humanoid Brain-4"
subtitle: 'Part-4: Manav: A Humanoid AI'
author: "abhiTronix"
header-img: "img/brain-bg-4.png"
header-mask: 0.2
tags:
  - Humanoid
  - Deep Learning
  - Matson
  - Manav
  - Deep Vision
  - Speech recognition
  - Artificial Intelligence
  
---

Update: 23 December 2018

---

This is an introductory post and you will learn how I re-implemented my *[Matson](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI* and transformed it into *Manav - A Humanoid AI?*

# Initial Thoughts:

![](/img/in-post/manav/brain-4-1.jpg)

> "With its billions of interconnected neurons, whose interactions change from millisecond to millisecond, the human brain is an archetypal complex system." - Miguel Nicolelis

The Human brain is an amazing three-pound organ that controls all functions of the body, interprets information from the outside world, and embodies the essence of the mind and soul. Intelligence, creativity, emotion, and memory are a few of the many things governed by the brain. The brain receives information through our five senses: sight, smell, touch, taste, and hearing - often many at one time. It assembles the messages in a way that has meaning for us and can store that information in our memory. The brain controls our thoughts, memory and speech, movement of the arms and legs, and the function of many organs within our body. 

> How to mimic such Human brain like functionality in our Humanoid?

![](/img/in-post/manav/brain-4-0.jpg)

In my previous post, I briefly explained [*Matson*](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI and its awesome applications. No doubt, [*Matson*](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI is perfect for our Humanoid brain through its Artificial Intelligence capabilities. But, It lacks the ability to extract the information it receives from various sensors, and the power to control various Humanoid parts. So I decided to modify my Initial [*Matson*](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI algorithm and create an extra wrapper around it, providing it with the ability to interface with Humanoid parts directly.

Also, The original implementation of [*Matson*](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI was in python2 and Python 2.7 will not be maintained past 2020. Therefore I decided to parse my algorithms into python3 to maintain future compatibility. More information [here](https://pythonclock.org/).

# Manav: A Humanoid AI
Manav translates *"Human"* in the Hindi language. *Manav is a hybrid Control System interface wrapper around [Matson](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI that acts between Robotic Hardware and Artificial Intelligence algorithms. It controls Humanoids parts, processing, integrating, and coordinating the information it receives from the sensors, and making decisions as per instructions commands sent to the rest of the body parts and receiving feedback, thereby mimicking the functioning of the real human brain.* 

### Control System Flow:  
Manav acts at the different level of the Humanoid and could easily directly or indirectly influences various internal(modules/programs) as well as external functions(Arduinos/Sensors etc.) of the Humanoid. It is written in Python3 and exists on Raspberry Pi Hardware. It also has inbuilt Speech recognition, Deep-learning, and Deep-Vision capabilities along with speech synthesis help it to communicate with the external world. It is always connected to the Internet through secured protocols, aiding it to keep up with the latest data and resources. 

![](/img/in-post/manav/brain-4.jpg)

Manav is a kind of **Artificially Intelligent Robot**, where both the Robotics Hardware and Artificial Intelligence aspects work in harmony to produce desirable results(*similar process as AEAM but on broader-scale*), This can be summarized as follows:
1. **Processing and Command Generation:** The Manav's AI generates a special set of command in response to the data/values received from its algorithmic modules(programs) and feedback received from the various body parts/sensors. These commands are user-defined and hardware specific strings generated in Manav's special algorithms that a parts/sensors hardware's program is able to understand. Manav is also able to communicate with Remote GPU/CPU server to do execute GPU/CPU Extensive tasks over the cloud. 
2. **Transmission:** In this stage, Manav communicates with parts/sensors hardware over the cloud channel(*Bluetooth, Wi-Fi etc.*).
3. **Signal generation and Motion:** In response to the command received by parts/sensors hardware, it processes it and generates the required signal which makes it execute a specific task.
4. **Feedback Capturing:** The parts/sensors hardware generates a feedback signal in response processed signal, and this feedback is transmitted back to Manav's AI over cloud channel, confirming that task was successfully executed and whether it is ready to receive another command.

### Real-Time Voice Interactions(*over mic*):
Here are few initial Manav - user interactions, showcasing its *Speech Recognition and Synthesis* capabilities in Real-Time:
- <iframe width="480" height="270" src="https://www.youtube.com/embed/tyEizsXhGhQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
- <iframe width="480" height="270" src="https://www.youtube.com/embed/Sce9jfGkDmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Migration to Python3:
[Matson](https://abhitronix.github.io/2018/12/20/humanoid-Brain-3/#matson-the-talking-ai) AI was initially written in python 2.7 but Python 2.7 will not be maintained past 2020. Therefore I decided to parse my algorithms into Python-3 to maintain future compatibility in our Manav AI, But it takes large scale modifications in the source code & must be done without breaking the binaries, which is the most tiring task itself. Luckily, I came across [**Naomi Project**](https://github.com/NaomiProject/Naomi), the latest fork of [*Jasper Project*](https://jasperproject.github.io/#about), is already ported in Python-3 and currently being developed. Thus made conversion way simpler, So huge thanks to DEVS of this project.

# Conclusion:
Hence through this post, we brief explained *what Manav is? and how it can mimic the functioning of real human brain?*, thereby making it ideal as our Humanoid brain. The upcoming post will showcase the physical Interaction of Manav with Humanoid parts/sensors in real-time, So Stay tuned for more. 

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! So Stay Tuned and Stay Creative ;)*