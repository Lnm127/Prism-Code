---
title: "Methodology"
date: 2023-04-01
draft: false
---

# Methodology

## Data Preprocessing

1. **Binarization**: All attributes are already numeric, so no binarization is needed.
2. **Normalization**: We used MinMax scaling to normalize the features since they have varying ranges. This ensures each feature contributes equally to the model.

## Feature Selection

We employed Principal Component Analysis (PCA) to identify the most important features. The analysis revealed that the 'platelets' feature explains most of the variance. Consequently, we dropped less significant features such as 'anaemia', 'smoking', and 'high_blood_pressure'.

## Classification Models

We chose two classification models for this binary classification problem:

1. **K-Nearest Neighbors (KNN)**: Suitable for small, numerical datasets.
2. **Logistic Regression**: Effective for binary classification tasks.

We trained both models on the preprocessed data and evaluated their performance using accuracy scores, classification reports, and ROC curves.