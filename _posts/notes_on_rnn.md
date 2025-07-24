---
layout: post
title: Notes on RNN and LSTM for reference
date: 2025-07-23 21:01:00
description: Notes on paper - Fundamentals of Recurrent Neural Network (RNN) and Long Short-Term Memory (LSTM) Network
tags: rnn lstm
categories: formatting code
featured: true
---

## Differential Equation derivation of RNN
Let $s(t)$ be the d dimensional state signal vector and $h(s(t),x(t))$ be one of the canonical forms of a d-dimensional $f(t)$ where:
$$
\frac{ d s(t) }{ dt } = f(t) = h(s(t),x(t)) +\phi
$$
where one of its special case is based on the "additive model" in brain dynamics research literature given by $f(t) = a(t)+b(t)+c(t)$

where:
$$
\frac{ds}{dt} = \sum^{K_s-1}_{k=0} a_k(s(t-\tau_s(k))) + \sum^{K_r-1}_{k=0} b_k(r(t-\tau_r(k))) + \sum^{K_x-1}_{k=0} c_k(x(t-\tau_x(k))) + \phi
$$
$$
r(t-\tau_r(k)) = G(s(t-\tau_r(k)))
$$
Here $G(z)$ is considered a element-wise non-linear saturating "warping" ( activation ) function.

The above equation is considered a nonlinear ordinary delay differential equation DDE with discrete delays. Delay is used to match the appropriate nature of the process.

`The rationale behind choosing a form of the hyperbolic tangent as the warping function is due to it being monotonic and negative-symmetric with quasi-linear region, whose slope can be regulated. Bipolarly Saturating ,   ` ( properties for an activation function ? )

- a - "analog" state singal ( controls the stability of the system )
- b - long term behaviour from signals
- c - initial input signal
- warping function for extracting signal
- time delay for the "memory" aspects of the system

Now assuming that the 3 functions associated with (a,b,c) are linear. (Continous Hopfield Network)
Earlier studies linked the nonlinear dynamical systems formalized previously with $K_s=K_r=K_x=1$ and all $\tau's$ to zero to a type of neural network.
Finally the equation, becomes:
$$
\frac{ds}{dt} = A(s(t)) + B(r(t-\tau)) + C(x(t)) + \phi
$$ 

Applying [Euler discretization rule](https://math.libretexts.org/Bookshelves/Differential_Equations/Numerically_Solving_Ordinary_Differential_Equations_(Brorson)/01%3A_Chapters/1.02%3A_Forward_Euler_method) to the previous equation: ( for n time steps and $\tau$ as a single time step - $\Delta T$)

$$
\frac{s(n \Delta T+ \Delta T ) - s(n\Delta T)}{\Delta T} =
A(s(n \Delta T+ \Delta T )) + B(r(n \Delta T )) + C(x(n \Delta T+ \Delta T )) + \phi
$$

The reason for setting $\tau$ to a single time step is to store the value of the readout signal into the memory for the next step. We can keep overwriting it for the next steps so on.


