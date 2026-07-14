# Serverless Cloud Portfolio

**[Live Website](http://portfolio-sabareenadh-m.s3-website.ap-south-1.amazonaws.com/)**

A clean, minimal portfolio website featuring a modern Google Pixel (Material Design 3) aesthetic, automatically deployed to AWS using a serverless CI/CD pipeline.

## Tech Stack
* **AWS S3**: Static website hosting
* **AWS IAM**: Secure access management with least privilege policies
* **AWS API Gateway, Lambda & DynamoDB**: Serverless backend for the live visitor counter
* **GitHub Actions**: Fully automated CI/CD pipeline
* **Git**: Version control
* **HTML/CSS/JS**: Frontend UI with Material You design principles

## The Architecture
When code is pushed to the `main` branch, a GitHub Action is triggered that authenticates with AWS via secure secrets and automatically syncs the latest build directly to an S3 bucket. This eliminates the need for manual deployments and ensures the live site is always up to date.

## Features
* Modern Material Design 3 (Material You) styling.
* Fully responsive layout with fluid scroll animations.
* Automatic Light/Dark mode depending on system preference.
* Serverless infrastructure with an automated deployment pipeline.
* **Live Visitor Counter**: Tracks and displays page views using a serverless backend API.
