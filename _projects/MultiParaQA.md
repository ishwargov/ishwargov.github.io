---
layout: page
title: Multi-Paragraph Question Answering
description: using Pre-Trained Language Models
img: assets/img/qa3.png
importance: 3
category: work
---
<a href="https://github.com/ishwargov/multi-paragraph-qa">GitHub Repo with Report</a>

A two-stage architecture for a robust Machine Reading Comprehension (MRC) system that handles span-based question answering across multiple paragraphs. The system first retrieves relevant paragraphs for a question and then extracts the answer span while assessing the question's answerability. We use a hybrid retrieval method that combines bi-encoders and cross-encoders for efficient paragraph selection. For answering, we evaluated pre-trained models like BERT, ALBERT, and ELECTRA, with ELECTRA and an internal verifier achieving the best F1.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/qa.png" title="Model Arch" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System Architecture
</div>

## Decoder

Used a fully connected layer with two output units and SoftMax activation as the decoder. The decoder will take the contextual representation of the input paragraph and question $H$ as the input and predict the start and end probabilities $s$ and $e$ (start index and end index of the answer from the selected paragraph). The overall output will be of a size of $n \times 2$.

$$
[s, e] = SoftMax(FFN(H)) 
$$

For training the span prediction we used cross entropy as the loss function as shown in equation 5. Where $y^s_i$ and $y^e_i$ are respectively ground-truth start and end positions of example $i$. $P^s_a$ and $P^e_b$ are the predicted start and end logits respectively ($a \in y^s_i$ and $b \in y^e_i$). $N$ is the number of examples.

$$
L^{span} = -\frac{1}{N} \sum_{i=1}^{N} \left( \log(P^s_{y^s_i}) + \log(P^e_{y^e_i}) \right) 
$$

 score. The model architecture integrates span prediction and answerability verification using internal logits and thresholds. We applied data augmentation and fine-tuning to enhance performance on limited datasets. Experiments show significant gains in retrieval accuracy and answer prediction quality, with reduced inference time by optimizing sequence length. This work emphasizes the value of joint paragraph retrieval and answerability-aware question answering for real-world information retrieval and natural language understanding.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/qa2.png" title="Model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Question Answering Module.
</div>

## Answerability Verification

This module employs a threshold-based answerability verification for checking whether the question is answerable or not. The module calculates answerability scores ($S_{null}$) from the output logits of the decoder and internal verifier. The answerability score is the linear combination of the scores calculated from the span logits from the decoder ($S_{diff}$) and the answerability logits from the internal verifier ($S_{int}$).

$$
S_{null} = \beta_1 \times S_{diff} + \beta_2 \times S_{int} 
$$

The $S_{diff}$ is the difference between the no-answer score ($S_n$) and has-answer score ($S_y$) calculated from the start index logits ($s$) and end index logits ($e$) as shown below.

$$
S_y = \max(s_i + e_j), \quad 1 < i \leq j \leq n 
$$

$$
S_n = s_1 + e_1 
$$

$$
S_{diff} = S_n - S_y 
$$

The $S_{int}$ will be the difference between the no-answer logit ($logit_{na}$) and has-answer logit ($logit_{has}$) from the internal verifier.

$$
S_{int} = logit_{na} - logit_{has} 
$$