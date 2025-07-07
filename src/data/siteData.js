export const siteData = {
  title: "Tri Lumina",
  subtitle: "Data Science, AI & ML Projects Hub",
  description: "Explore data science, AI, and ML projects with code and insights—perfect for all skill levels.",
  
  hero: {
    title: "Data Science, AI & ML Projects Hub",
    subtitle: "Harnessing Data Science, AI, and Machine Learning to Unlock Smarter Solutions",
    description: "Welcome to our digital space where data science tackles real-world healthcare challenges. Follow our journey as we share insights from complex analytics projects, offering valuable perspectives for data scientists, healthcare professionals, and anyone interested in how data is transforming healthcare.",
    featuredImage: "/images/data-science-banner.jpeg"
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Methodology", path: "/methodology" },
    { name: "Results", path: "/results" },
    { name: "Visualizations", path: "/visualizations" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    { name: "References", path: "/references" }
  ],

  features: [
    {
      title: "Heart Failure Survival Prediction",
      description: "Our flagship project focuses on leveraging machine learning to predict survival outcomes for heart failure patients. This critical work aims to support healthcare providers in making more informed decisions and improving patient care.",
      image: "/images/heart-banner.jpeg",
      highlights: [
        "Combines clinical expertise with advanced analytics",
        "Uses real-world healthcare data",
        "Demonstrates practical applications of machine learning in medicine",
        "Contributes to evidence-based healthcare decisions"
      ]
    }
  ],

  team: [
    {
      name: "Suyash Vijay",
      id: "23UCS721",
      role: "Website Creator",
      degree: "B.Tech Student (CSE)",
      specialty: "Data Science, AI & ML Enthusiast",
      description: "Passionate about creating digital experiences and machine learning applications."
    },
    {
      name: "Priyam Garg",
      id: "23UCS682",
      role: "Programming Expert",
      degree: "B.Tech Student (CSE)",
      specialty: "Report Creation & Model Auditing",
      description: "Expert in programming and model validation with strong analytical skills."
    },
    {
      name: "Lakshya Dhaka",
      id: "23UCS632",
      role: "Performance Analytics Specialist",
      degree: "B.Tech Student (CSE)",
      specialty: "Model Deployment",
      description: "Specializes in performance analytics and deploying machine learning models."
    }
  ],

  project: {
    title: "Heart Failure Prediction Project",
    overview: "This project leverages machine learning techniques to predict mortality risk in heart failure patients using clinical data. By analyzing various medical indicators, we aim to develop a robust predictive model that could assist healthcare professionals in risk assessment and patient care optimization.",
    objectives: [
      "Develop an accurate prediction model for heart failure mortality",
      "Identify key clinical indicators that influence patient survival",
      "Create a reliable tool for healthcare professionals",
      "Contribute to evidence-based medical decision making"
    ],
    dataset: {
      source: "UCI Machine Learning Repository",
      size: "299 patient records",
      features: "12 clinical features + 1 target variable",
      quality: "Complete dataset with no missing values"
    },
    clinicalFeatures: [
      { feature: "Age", description: "Patient's age", unit: "Years", type: "Numeric" },
      { feature: "Anaemia", description: "Decrease in red blood cells/hemoglobin", unit: "Yes/No", type: "Boolean" },
      { feature: "Creatinine Phosphokinase", description: "CPK enzyme level", unit: "mcg/L", type: "Numeric" },
      { feature: "Diabetes", description: "Presence of diabetes", unit: "Yes/No", type: "Boolean" },
      { feature: "Ejection Fraction", description: "Blood leaving heart at contraction", unit: "Percentage", type: "Numeric" },
      { feature: "High Blood Pressure", description: "Presence of hypertension", unit: "Yes/No", type: "Boolean" },
      { feature: "Platelets", description: "Platelet count", unit: "kiloplatelets/mL", type: "Numeric" },
      { feature: "Serum Creatinine", description: "Serum creatinine level", unit: "mg/dL", type: "Numeric" },
      { feature: "Serum Sodium", description: "Serum sodium level", unit: "mEq/L", type: "Numeric" },
      { feature: "Sex", description: "Patient's gender", unit: "Binary", type: "Categorical" },
      { feature: "Smoking", description: "Smoking status", unit: "Yes/No", type: "Boolean" },
      { feature: "Time", description: "Follow-up period", unit: "Days", type: "Numeric" },
      { feature: "DEATH_EVENT", description: "Patient deceased during follow-up", unit: "Yes/No", type: "Boolean (Target)" }
    ],
    scope: [
      "Comprehensive data analysis and visualization",
      "Feature importance evaluation",
      "Implementation of multiple machine learning algorithms",
      "Model performance comparison and optimization",
      "Clinical interpretation of results"
    ],
    outcomes: [
      "A reliable prediction model for heart failure mortality",
      "Insights into key mortality risk factors",
      "Interactive visualization of findings",
      "Potential clinical application framework"
    ]
  },

  results: {
    title: "Results & Performance Analysis",
    overview: "Welcome to our comprehensive results section! Here, we showcase the outcomes and insights from our various data science projects. Each project's results are presented with detailed performance metrics, visualizations, and key findings.",
    models: [
      {
        name: "KNN (k=5)",
        accuracy: "80%",
        precision: "0.81",
        recall: "0.73",
        f1Score: "0.77",
        auc: "0.93"
      },
      {
        name: "Logistic Regression",
        accuracy: "76.67%",
        precision: "0.78",
        recall: "0.68",
        f1Score: "0.69",
        auc: "0.85"
      }
    ],
    keyFindings: [
      "Model Selection: The K-Nearest Neighbors (KNN) model emerged as our best performer, demonstrating superior predictive capabilities.",
      "Performance Metrics: KNN achieved an impressive 80% overall accuracy",
      "High AUC score of 0.93 indicates excellent model discrimination",
      "Balanced performance across both classes"
    ],
    clinicalImplications: [
      "Model shows strong potential for clinical decision support",
      "Particularly effective in identifying high-risk patients",
      "Could assist healthcare providers in early intervention"
    ],
    featureImportance: [
      "Serum Creatinine",
      "Ejection Fraction",
      "Age",
      "Time",
      "Serum Sodium"
    ]
  },

  visualizations: {
    title: "Data Visualizations",
    description: "In this section, we'll explore various visualizations that help us understand our patient survival dataset better. Each visualization provides unique insights into different aspects of our data.",
    charts: [
      {
        title: "Patient Survival Distribution",
        description: "A clear visualization of the patient survival outcomes in our dataset. This bar graph provides an immediate understanding of the dataset's balance between survival cases.",
        image: "/images/bar_graph.png",
        type: "bar"
      },
      {
        title: "Survival Rate Distribution",
        description: "This pie chart offers a proportional view of survival rates, making it easy to grasp the overall distribution at a glance.",
        image: "/images/pie_chart.png",
        type: "pie"
      },
      {
        title: "Feature Distribution Analysis - Key Parameters",
        description: "These box plots reveal the distribution of various medical parameters between survival groups, helping us identify key differences that might influence patient outcomes.",
        image: "/images/box_plot_1.png",
        type: "box"
      },
      {
        title: "Feature Distribution Analysis - Additional Parameters",
        description: "Additional box plots showing the distribution of other important medical parameters.",
        image: "/images/box_plot_2.png",
        type: "box"
      },
      {
        title: "Feature Correlation Analysis",
        description: "This heatmap visualizes the relationships between different features in our dataset. Stronger correlations are shown in darker colors, helping us identify important feature interactions.",
        image: "/images/correlation_matrix.png",
        type: "heatmap"
      },
      {
        title: "ROC Curve Comparison",
        description: "ROC curves comparing KNN and Logistic Regression models showing the superior performance of the KNN model.",
        image: "/images/roc-curve-comparison.png",
        type: "roc"
      }
    ]
  },

  methodology: {
    title: "Advanced Data Science & Machine Learning Methodology",
    sections: [
      {
        title: "Data Engineering Pipeline",
        items: [
          {
            title: "Data Quality Assessment",
            description: "Comprehensive data type analysis and validation, missing value detection and handling strategies, outlier identification and treatment, data integrity verification"
          },
          {
            title: "Feature Engineering Framework",
            description: "Automated feature extraction and selection, domain-specific feature crafting, advanced encoding techniques for categorical variables, temporal feature generation for time-series data, dimensionality optimization"
          }
        ]
      },
      {
        title: "Data Preprocessing Architecture",
        items: [
          {
            title: "Scaling & Normalization",
            description: "MinMax scaling for bounded features, Standard scaling for normal distributions, Robust scaling for outlier-sensitive data, Custom scaling for domain-specific requirements"
          },
          {
            title: "Feature Transformation",
            description: "Polynomial feature generation, Log transformations for skewed distributions, Power transformations for variance stabilization, Custom transformers for specific data patterns"
          }
        ]
      },
      {
        title: "Advanced Analytics & Machine Learning",
        items: [
          {
            title: "Supervised Learning",
            description: "Classification: Random Forests, XGBoost, Neural Networks. Regression: Linear Models, Decision Trees, Ensemble Methods. Time Series: ARIMA, Prophet, LSTM Networks"
          },
          {
            title: "Unsupervised Learning",
            description: "Clustering: K-Means, DBSCAN, Hierarchical. Dimensionality Reduction: PCA, t-SNE, UMAP. Anomaly Detection: Isolation Forests, Autoencoders"
          },
          {
            title: "Deep Learning Applications",
            description: "Computer Vision: CNN architectures. Natural Language: Transformer models. Sequential Data: RNN variants"
          }
        ]
      },
      {
        title: "Model Optimization Framework",
        items: [
          {
            title: "Performance Metrics",
            description: "Task-specific accuracy measures, Precision-Recall analysis, ROC curves and AUC scores, Custom business metrics"
          },
          {
            title: "Validation Techniques",
            description: "Cross-validation strategies, Holdout validation, Time-series specific validation, Bootstrap resampling"
          },
          {
            title: "Hyperparameter Optimization",
            description: "Grid and Random search, Bayesian optimization, Genetic algorithms, Custom parameter spaces"
          }
        ]
      }
    ]
  },

  references: {
    title: "References & Resources",
    datasets: [
      {
        title: "Heart Failure Clinical Records Dataset",
        url: "https://archive.ics.uci.edu/ml/datasets/Heart+failure+clinical+records",
        type: "Primary Dataset"
      },
      {
        title: "Alternative Dataset on Kaggle",
        url: "https://www.kaggle.com/datasets/andrewmvd/heart-failure-clinical-data?select=heart_failure_clinical_records_dataset.csv",
        type: "Secondary Source"
      }
    ],
    papers: [
      {
        title: "BMC Medical Informatics and Decision Making Article",
        url: "https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/s12911-020-1023-5",
        type: "Research Paper"
      }
    ],
    documentation: [
      { title: "NumPy", url: "https://numpy.org/doc/" },
      { title: "Pandas", url: "https://pandas.pydata.org/docs/" },
      { title: "Seaborn", url: "https://seaborn.pydata.org/" },
      { title: "Matplotlib", url: "https://matplotlib.org/stable/index.html" }
    ],
    liveDemo: {
      title: "Heart Patient Survival Prediction App",
      url: "https://heart-patient-survival.streamlit.app/",
      status: "✅ Deployed and Running"
    },
    repositories: [
      {
        title: "GitHub Repository for Deploying and Running the Model",
        url: "https://github.com/zyphronix/survival_streamlit_app"
      },
      {
        title: "GitHub Repository for this Website",
        url: "https://github.com/Lnm127/Prism-Code"
      }
    ]
  },

  contact: {
    title: "Get in Touch",
    description: "We're excited to hear from you! Whether you have questions, suggestions, or just want to say hello, we're here to help.",
    email: "23ucs721@lnmiit.ac.in",
    github: "https://github.com/Lnm127",
    responseTime: "Usually within 24-48 hours"
  }
};