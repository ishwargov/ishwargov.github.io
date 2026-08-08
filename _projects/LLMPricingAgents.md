---
layout: page
title: LLM Pricing Agents in Bertrand Competition
description: do autonomous LLM pricing agents learn to compete?
img: assets/img/bertrand_thumb.png
importance: 2
category: work
---

Team project with Arda Renas Ayik, Lars Christiansen and Berkay Kara at [TUM](https://www.tum.de/).

We put LLM pricing agents into repeated Bertrand competition against classical no-regret learners (Exp3, regret matching, UCB) and PPO, across homogeneous and differentiated demand environments including an attributes-logit cereal market estimated from the Nevo panel.

In self-play the LLM agents do not converge to competitive pricing: they sustain prices well above the one-shot Nash benchmark, and prompt wording alone decides the form of the elevation, with a long-run-profit prompt pinning to monopoly price and a neutral prompt cycling above Nash. Against the classical learners they earn high profit, but largely by committing to high prices in games where high prices are privately profitable rather than by learning faster, and regret matching stays the strongest agent by equilibrium-style criteria.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bertrand_elevation.png" title="Rolling price elevation in LLM self-play" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rolling mean price in self-play. If the agents were learning competitive pricing the curves would drift toward the Nash line; instead they stay pinned near monopoly.
</div>

Two artifacts shaped the results more than the agent did. A product-assignment confound had the LLM always holding the weaker cereal, making it lose 0 of 40 seeds until we re-ran on an equal-strength pair and it won 36 of 40. And one run failed silently on an empty API key, so the agent played its fallback action throughout while still producing plausible-looking economics.
