---
layout: page
title: Deep Weather Forecast
description: time-series forecasting using deep learning models
img: assets/img/dwforecast.png 
importance: 2
category: work
giscus_comments: false
---
<a href="https://github.com/ishwargov/Deep-Weatherforecast">GitHub Repo</a>

Mentors: [Dr. Chandrashekar Lakshminarayanan](https://cerai.iitm.ac.in/people/chandrasekhar-lakshminarayanan/), [Dr. Sarmistha Singh](https://sites.google.com/iitpkd.ac.in/sarmistha-arl)

Developed a Conv-LSTM based deep learning model to improve Indian Summer Monsoon Rainfall forecasting by analyzing spatio-temporal patterns in the Indian Summer Monsoon Rainfall(ISMR) dataset. Both LSTM and Conv-LSTM models were refined for accurate prediction of rainfall patterns, demonstrating superior performance in central India and eastern hilly regions compared to classical methods like autoregressors and neural nets. Incorporated climatic oscillation indices as additional features in the deep learning models to enhance the accuracy of rainfall predictions, understanding the relationships between these indices and Indian monsoon rainfall patterns. To improve the spatio-temporal prediction quality of the ConvLSTM model, the dataset was split into smaller grids. The a larger grid encompassing `(28*28)` the grid_to_predict `(10*10)` is used for training the new grid-LSCI-ConvLSTM based model.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dwfpreds.png" title="DeepWeatherForecast Model Predictions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Predictions of the climatic oscillation indices integrated grid-ConvLSTM model vs real values
</div>

<div class="container">
    <div class="row">
        <div class="col-sm-8 mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/dwf.png" title="DeepWeatherForecast Model heatmap" class="img-fluid rounded z-depth-1" %}
        </div>

        <div class="col-sm-4 mt-3 mt-md-0">
            <div class="row">
                {% include figure.liquid loading="eager" path="assets/img/dwf1.png" title="convlstm" class="img-fluid rounded z-depth-1" %}
            </div>
            <div class="row">
                {% include figure.liquid loading="eager" path="assets/img/dwf2.png" title="lstm" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
    </div>
</div>

<div class="caption">
    Heatmap Error distribution for Indian Summer Monsoon Rainfall
</div>


