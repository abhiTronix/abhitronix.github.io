---
layout: post
title: "Designing a Humanoid Brain-2"
subtitle: 'Part-2: Artificial Intelligence (AI) vs. Machine Learning (ML) vs. Deep Learning (DL)'
author: "abhiTronix"
header-img: "img/brain-bg-2.jpeg"
header-mask: 0.2
tags:
  - Deep Learning
  - Artificial Intelligence
  - Machine Learning
  
---

Update: 14 December 2018

---

Today, I'm going to briefly discuss and solve one common confusion in Artifical Intelligence that *"Can "Artificial Intelligence", "Machine Learning" and "Deep Learning" terms be used interchangeably? Are these term similiar, related or totally different?"*. Let's find out!

# Artificial Intelligence (AI) vs. Machine Learning (ML) vs. Deep Learning (DL): 


### Artificial Intelligence (AI):
![](/img/in-post/manav/brain-2-1.jpg)

> John McCarthy, widely recognized as one of the godfathers of AI, defined it as “the science and engineering of making intelligent machines.”

Here are some other definitions of artificial intelligence:
- *A branch of computer science dealing with the simulation of intelligent behavior in computers.*
- *The capability of a machine to imitate intelligent human behavior.
A computer system able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.*

AI can be a pile of if-then statements, or a complex statistical model mapping raw sensory data to symbolic categories. The if-then statements are simply rules explicitly programmed by a human hand. Taken together, these if-then statements are sometimes called rules engines, expert systems, knowledge graphs or symbolic AI. Collectively, these are known as Good, Old-Fashioned AI (AI). The intelligence they mimic could be that of an accountant with knowledge of the tax code, who takes information you feed it, runs the information through a set of static rules, and gives your the amount of taxes you owe as a result. Usually, when a computer program designed by AI researchers actually succeeds at something – like winning at chess – many people say it’s “not really intelligent”, because the algorithm’s internals are well understood. A wag would say that true AI is whatever computers can’t do yet.

![](/img/in-post/manav/brain-2-2.jpg)

We have for long heard the phrase Artificial Intelligence, more so because of exhilarating movies like the Matrix and The Terminator. These movies brought us close to the reality of Artificial Intelligence. Now, since the recent past, we are hearing another phrase- Machine Learning. Arthur Samuel coined the phrase Machine Learning in 1959, he defined it as, *“the field of study that gives computers the ability to learn without being explicitly programmed

![](/img/in-post/manav/brain-2-3.png)

Now, you may ask how does the Machine do that? How does it learn without being programmed? This is where data comes in, the machines are fed huge amounts of data, that helps the defined set of algorithms in training themselves to perform a task automatically. Based on the way algorithms learn, they are classified into supervised and unsupervised. The most widely used of the two is, supervised learning. In supervised learning the algorithm learns from a training data set; the data scientist functions as the “teacher”, who guides the algorithm towards achieving the desired conclusions. As the name suggests, the whole process is supervised.

![](/img/in-post/manav/brain-2-4.jpg)

Then, there are the unsupervised algorithms, which do not need human interference along the way. There is strong debate among leading data scientists about its possible applications and implications. Unlike supervised learning, all data is unlabelled and the algorithms learn by themselves, the output is not defined by the data scientist. There is no guidance or human intervention. So, now we see that Machine Learning is literally a machine learning to perform tasks by itself, either with guidance or without.

> Artificial Intelligence can be defined as any code, technique or algorithm which enables a machine to mimic human cognitive processes; thus, the phrase “artificial intelligence”. 

*"You may ask, how does a machine mimic human cognitive processes? How does it imitate such a complex biological evolutionary leap?"* - This is where data comes in again, the data that is fed to machines for learning allows this. Can you draw a line cutting through data, machine learning and artificial intelligence, from the above explanation? Data that is fed by a data scientist is facilitating machine learning, while machine learning is a method that is facilitating AI.

---

### Machine Learning (ML):
![](/img/in-post/manav/brain-2-5.png)

Machine learning is a subset of AI. That is, all machine learning counts as AI, but not all AI counts as machine learning. For example, symbolic logic – rules engines, expert systems and knowledge graphs – could all be described as AI, and none of them are machine learning. One aspect that separates machine learning from the knowledge graphs and expert systems is its ability to modify itself when exposed to more data; i.e. machine learning is dynamic and does not require human intervention to make certain changes. That makes it less brittle, and less reliant on human experts.

> A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E. –Tom Mitchell

In 1959, Arthur Samuel, one of the pioneers of machine learning, defined machine learning as a *“field of study that gives computers the ability to learn without being explicitly programmed.”* That is, machine-learning programs have not been explicitly entered into a computer, like the if-then statements above. Machine-learning programs, in a sense, adjust themselves in response to the data they’re exposed to. The “learning” part of machine learning means that ML algorithms attempt to optimize along a certain dimension; i.e. they usually try to minimize error or maximize the likelihood of their predictions being true. Usually, the initial guesses are quite wrong, and if you are lucky enough to have ground-truth labels pertaining to the input, you can measure how wrong your guesses are by contrasting them with the truth, and then use that error to modify your algorithm. That’s what neural networks do. They keep on measuring the error and modifying their parameters until they can’t achieve any less error. If you tune them right, they minimize their error basically by guessing and guessing and guessing again.

---

### Deep Learning (DL):
![](/img/in-post/manav/brain-2-6.png)

Deep learning is a subset of machine learning. Usually, when people use the term deep learning, they are referring to deep artificial neural networks, and somewhat less frequently to deep reinforcement learning.


*Deep artificial neural networks are a set of algorithms that have set new records in accuracy for many important problems, such as image recognition, sound recognition, recommender systems, etc.* For example, deep learning is part of DeepMind’s well-known AlphaGo algorithm, which beat the former world champion Lee Sedol at Go in early 2016.
![](/img/in-post/manav/brain-2-7.jpg)

*Deep* is a technical term. It refers to the number of layers in a *neural network*. A shallow network has one so-called *hidden layer*, and a deep network has more than one. Multiple hidden layers allow deep neural networks to learn features of the data in a so-called *feature hierarchy*, because simple features (e.g. two pixels) recombine from one layer to the next, to form more complex features (e.g. a line). 
![](/img/in-post/manav/brain-2-8.png)

Neural Nets with many layers pass input data (features) through more mathematical operations than nets with few layers, and are therefore more computationally intensive to train. *Computational intensivity is one of the hallmarks of deep learning, and it is one reason why GPUs are in demand to train deep-learning models.*

# Conclusion:
![](/img/in-post/manav/brain-2-9.jpg)

Well from the above disscussion, it turns out, Deep learning is a subset of machine learning, and machine learning is a subset of AI, which is an umbrella term for any computer program that does something smart. In other words, all machine learning is AI, but not all AI is machine learning, and so forth.

---

*Hey there, Hope you enjoy reading this article. If so, Share it with your family & friends! So Stay Tuned and Stay Creative ;)*