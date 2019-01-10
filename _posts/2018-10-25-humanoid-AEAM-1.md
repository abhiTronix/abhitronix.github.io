---
layout: post
title: "Advanced Eyes Articulate Mechanism(AEAM)"
subtitle: 'Part-1: Designing, Testing, Modifications and Kinematics Synchronization'
author: "abhiTronix"
header-img: "img/AEAM-bg.jpg"
header-mask: 0.2
tags:
  - Humanoid
  - Robotics
  - Kinematics
---

Update: 25 October 2018

---
> "*We're fascinated with robots because they are reflections of ourselves.*" - Ken Goldberg

Today, I'm going to share my journey on developing a unique Robotic Advanced Eyes Articulate Mechanism, a hybrid design that can somewhat mimics the natural movement of Human eyes. I divided this post into multiple parts to
explain briefly the various stages of its development. So let's get to it!

# My Thoughts:

![](/img/in-post/manav/AEAM-1.jpg)

We already are very familiar with the structure of a Human eye, I used to specially learn and drew its structure ditto and neatly for scoring better marks in my school examinations :D. But Human eye is much
more than we can imagine. Not only a human eye is an organ which reacts to light and pressure. But as a sense organ, it allows vision and helps to provide a three dimensional, moving image, normally colored in daylight. The human eye can differentiate between about 10 million colors and is possibly capable of detecting a single photon. 
Can you imagine resolution of a human eye? Maybe no, but here it is, according to this article, I quote:

> human eye really sees a larger field of view, close to 180 degrees. Let's be conservative and use 120 degrees for the field of view. Then we would see 120 * 120 * 60 * 60 / (0.3 * 0.3) = 576 megapixels. The full angle of human vision would require even more megapixels.

Isn't that amazing! 

# Designing:

No doubt, Eye is one of the most complex parts of the human body, Therefore I went on a quest to experiment various designs and research papers and finally came up something totally distinct but unique solution i.e. AEAM a.k.an Advanced Eyes Articulate Mechanism.
But the initial design wasn't practical and lacks on many things, and this post and upcoming posts will show various changes/fixes and design innovations I made on the way to come up with a final design. 

### Initial Design:

![](/img/in-post/manav/AEAM-2.jpg)

The initial design was hugely inspired by an open-sourced Humanoid design called [**InMoov Humanoid**](http://inmoov.fr). The design covers almost all the aspects required for my design.
![](/img/in-post/manav/humanoid-brain.jpg)
The design consists:
- various 3D designed & printed parts
- 4x micro servos
- 2x tiny cameras
- 1x Nylon thread
- 1x 1~2mm copper/aluminum rods 

and I preferred my own control mechanism and the controlling is done by:
- 1x [**Adafruit PCA9685 16-Channel Servo Driver**](https://learn.adafruit.com/16-channel-pwm-servo-driver?view=all) 
- 1x [**Arduino Uno**](https://store.arduino.cc/usa/arduino-uno-rev3)
- 1x decent variable Power Supply 

### Working and Testing:
The initial design was controlled by 4 servos([**Tower Pro Sg90**](http://www.towerpro.com.tw/product/sg90-7/), in my case), the 2-2 servos on either side of the eyes provides flexible up-down and left-right motion capabilities to each eye respectively. The controlling of these servos is done
explicitly through [**Adafruit PCA9685 16-Channel Servo Driver**](https://learn.adafruit.com/16-channel-pwm-servo-driver?view=all) which can drive up to 16 servos over **I2C** with only 2 pins.  The onboard PWM controller will drive all 16 channels simultaneously with no additional Arduino processing overhead. 
 This driver talks to the [**Arduino Uno**](https://store.arduino.cc/usa/arduino-uno-rev3)(a microcontroller board based on the ATmega328P) which act as the brain, over **I2C** protocol with only 2 pins. What's more, you can chain up to 62 of them to control up to 992 servos - all with the same 2 pins!
 Anyways, the 4x servos initial was controlled directly with the servos rotational force, But I modified this design with a pull-push mechanism which is accomplished by nylon thread and carefully bent rods, which converts rotational motion of the servos into translational motion. 
 The eyes have built-into tiny cameras(i used [**FPV Cameras**](https://www.getfpv.com/fpv/cameras.html) due to its smaller size), That provide it human retina like seeing capabilities.

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6455831468114575360" height="812" width="504" frameborder="0" allowfullscreen=""></iframe>

The initial design lacks in many factors, such as:
1. Synchronization: Human eyes are synchronized to provide near 180 degrees of Field of View. 
2. Variable Degree of Freedom: The initial design cannot control the Degree of Freedom of eyes which leads to unnatural movement of eyes, which kind of looks too spooky! 
3. Stress on servos due to Variable Degree of Freedom
4. Unnatural movement of eyes
5. No implementation of vision yet

### Modifications:

![](/img/in-post/manav/AEAM-3.jpg)

* EyeLids: The human Eyelid is a thin fold of skin that covers and protects the human eye. The blink reflex protects the eye from foreign bodies. This feature made me think that why don't I incorporate this in my AEAM design in order to protect the cameras from dust and simultaneously provide shade in a bright light environment.
So I redesigned the AEAM parts in [**Solidworks**](https://www.solidworks.com/) and implemented this feature into the design. The only changes in hardware are that the 4x micro servos number increased to 6x and the rest of the hardware remained similar.
Due to the limited space, I repositioned the servos a number of times to get the optimal configuration.

* Secondly, I added a Bluetooth Module([**HC-05**](https://wiki.eprolabs.com/index.php?title=Bluetooth_Module_HC-05) in my case) to remotely communicate with the Arduino microcontroller.

### Synchronization:
To tackle Synchronization problem, I decided to develop my own algorithms and Control System which incorporates the controlling of servos at a different level, The mechanism can be summarized as follows:
- The initial design mechanism keeps as it is but the controlling of servos it done through command received over Bluetooth module.
- The main brain and the control center is now [**Raspberry Pi**](https://www.raspberrypi.org/)(Raspberry Pi 3 Model B, in my case) which acts as a master(through its inbuilt Bluetooth) and talks to Arduino which now act as a slave, and thereby Arduino sends I2C signals in response to the command received by Pi. This I2C signals then triggers PCA9685 16-Channel Servo Driver, 
thus creating necessary PWM signals to control servos.
- The [**Raspberry Pi**](https://www.raspberrypi.org/) included flexible python environment, which gives extra control over servo rotation.


Therefore with the help of precisely implemented mathematical algorithms, I'm able to implement the Synchronized kinematics in AEAM design. The Final results can be seen as below:  

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6455831713640747008" height="1078" width="504" frameborder="0" allowfullscreen=""></iframe>

After solving the synchronization problem my next goal was to implement Deep Vision, Proper Field of View and achieve Stability in AEAM Vision. But that's all for the future posts.
 
---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! and Stay tuned for more ;)*