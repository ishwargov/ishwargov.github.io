---
layout: page
title: LLM Pricing Agents in Bertrand Competition
description: nobody told them to collude, and they went straight to the monopoly price
img: assets/img/bertrand_thumb.png
importance: 2
category: work
---

Team project with Arda Renas Ayik, Lars Christiansen and Berkay Kara at [TUM](https://www.tum.de/).

We put LLM pricing agents into repeated Bertrand competition against classical no-regret learners (Exp3, regret matching, UCB) and PPO. Every agent picks from the same finite price grid through a common simulation interface, so profit, external and internal regret, NashConv and welfare are computed identically for all of them. Three markets: a homogeneous winner-takes-all duopoly, a synthetic differentiated logit duopoly, and an attributes-logit cereal market estimated from the Nevo ready-to-eat cereal panel.

I built the LLM agent (Vertex/Gemini client, Jinja2 prompt pipeline, epoch-length batching), the PPO baseline with GAE and entropy regularization, and the Hart regret-matching agent. I also owned the third research question end to end and ran the corrected cereal experiments for the second, including the OLS logit-inversion calibration of that demand system.

**Do they converge to competitive pricing?** No. In self-play they hold prices well above the one-shot Nash benchmark for the full horizon, and prompt wording alone decides the shape of it. A long-run-profit prompt pins to the monopoly price of 2.00 and essentially stops switching actions; a neutral independent-pricing prompt stays elevated but cycles; mixing the two lands in between, because the neutral agent keeps undercutting. Exp3 and PPO sit near Nash for comparison. UCB also prices high, but through continuous exploration rather than commitment, which is exactly the distinction that keeps "high prices" from being sufficient evidence of collusion.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bertrand_elevation.png" title="Rolling price elevation in LLM self-play" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rolling mean price in self-play. Agents learning competitive pricing would drift toward the Nash line; instead they stay pinned near monopoly.
</div>

**Do they beat classical learners?** On profit, usually. But the headline number was nearly an artifact. The cereal configuration always seated the LLM at the weaker product, which captures about a third of demand at the shared price, so the agent lost 0 of 40 seeds and the result was measuring the product assignment rather than the pricing policy. Re-running on an equal-strength real product pair with everything else held fixed flipped it to 36 of 40 wins. Even then the win is not evidence of better learning: much of it comes from committing to high prices in games where high prices happen to be privately profitable, and regret matching stays the strongest agent by equilibrium-style criteria.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bertrand_fairness.png" title="Product-fairness correction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Equalizing the two cereal products flips the LLM from losing every seed to winning most of them.
</div>

**Does truthful product information help?** Weakly, and conditionally. Giving the agent structured attributes and honest descriptions, paired within game, seed, slot and opponent so the difference isolates the treatment, barely moves anything against payoff-based learners. The clean positive is self-play under the long-run-profit prompt, where information lowers regret and lifts profit, consumer surplus and welfare together. The control market is what stops that being over-read: there the descriptions carry no payoff-relevant information at all, yet adding them still pushes price elevation up and consumer surplus down. Part of any apparent information effect is a framing markup from having descriptive text in the prompt.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bertrand_info.png" title="Normalized information effects" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Information effect per cell, normalized so the control and cereal markets are comparable. Bars crossing zero are not significant.
</div>

The cereal market also turned out to be degenerate, which limits how much any of this can show. With only two of the estimated products active, the outside option holds about 96% of demand, cross-product substitution collapses, and the Nash price meets the monopoly price. Price elevation is undefined there and there is little room left for information to improve anything.

Two failure modes did more damage than any modelling choice. One was the product asymmetry above. The other was a run that failed silently on a misspelled environment variable: every call returned 401, the agent played its fallback action for the entire run, and the output still looked like plausible economics. Both would have been read as findings about the agent. LLM pricing experiments need invalid-output and fallback rates reported next to the profit numbers, or the artifacts win.
