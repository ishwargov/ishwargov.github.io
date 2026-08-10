---
layout: page
title: LLM Pricing Agents in Bertrand Competition
description: nobody told them to collude, and they went straight to the monopoly price
img: assets/img/bertrand_thumb.png
importance: 2
category: work
---

Team project with Arda Renas Ayik, Lars Christiansen and Berkay Kara at [TUM](https://www.tum.de/). We put LLM pricing agents into repeated Bertrand competition against Exp3, regret matching, UCB and PPO, across homogeneous, differentiated-logit and cereal markets. I built the LLM agent and prompt pipeline, the PPO and regret-matching baselines, and owned the information-advantage experiments.

**Do they price competitively?** No. In self-play they hold prices well above Nash for the full horizon, and prompt wording decides the pattern: a long-run-profit prompt pins to monopoly and stops switching, a neutral one cycles above Nash. Exp3 and PPO sit near Nash.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bertrand_elevation.png" title="Rolling price elevation in LLM self-play" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rolling mean price in self-play. Agents learning competitive pricing would drift toward the Nash line.
</div>

**Do they beat classical learners?** On profit yes, but mostly by committing to high prices where high prices pay; regret matching stays strongest on equilibrium criteria.

**Does truthful product information help?** Barely. The control market, where descriptions carry no payoff-relevant information, still shows higher prices, so part of the apparent effect is just framing.

Two artifacts nearly became findings: a product assignment that handed the LLM the weaker cereal (0 of 40 seeds lost, 36 of 40 won once equalized), and a run that failed silently on a bad API key and produced plausible-looking economics from its fallback action.
