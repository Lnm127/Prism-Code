---
title: "📊 Results & Performance Analysis"
date: 2023-04-01
draft: false
---
<head><link rel="preload"><head/>
## 📈 Project Results Overview

Welcome to our comprehensive results section! Here, we showcase the outcomes and insights from our various data science projects. Each project's results are presented with detailed performance metrics, visualizations, and key findings.

## 🫀 Project 1: Heart Failure Survival Prediction

### Model Performance Summary

We evaluated multiple machine learning models to predict heart failure patient survival. Here's a comparative analysis of our top-performing models:

| Model | Accuracy | Precision | Recall | F1-Score | AUC |
|-------|----------|-----------|---------|-----------|-----|
| KNN (k=5) | 80% | 0.81 | 0.73 | 0.77 | 0.93 |
| Logistic Regression | 76.67% | 0.78 | 0.68 | 0.69 | 0.85 |

### Key Findings

1. **Model Selection**: The K-Nearest Neighbors (KNN) model emerged as our best performer, demonstrating superior predictive capabilities.

2. **Performance Metrics**:
   - KNN achieved an impressive 80% overall accuracy
   - High AUC score of 0.93 indicates excellent model discrimination
   - Balanced performance across both classes

3. **Clinical Implications**:
   - Model shows strong potential for clinical decision support
   - Particularly effective in identifying high-risk patients
   - Could assist healthcare providers in early intervention

### Model Comparison

{{< figure src="/images/roc-curve-comparison.png" alt="ROC Curve Comparison" caption="ROC curves comparing KNN and Logistic Regression models" >}}

### Feature Importance

The following features were identified as most significant in predicting survival:

1. Serum Creatinine
2. Ejection Fraction
3. Age
4. Time
5. Serum Sodium

> 💡 **Key Insight**: The KNN model demonstrates superior performance with a higher Area Under the Curve (AUC), making it our recommended choice for this classification task.

> 💡 **Note**: These results are based on our current dataset and may be updated as we gather more data and refine our models.
