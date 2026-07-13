# Serverless Cloud Portfolio

**[Live Website](https://your-s3-bucket-url.s3.amazonaws.com)** *(Update this URL with your actual S3 bucket URL)*

A clean, minimal portfolio website featuring a modern Google Pixel (Material Design 3) aesthetic, automatically deployed to AWS using a serverless CI/CD pipeline.

## Tech Stack
* **AWS S3**: Static website hosting
* **AWS IAM**: Secure access management with least privilege policies
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
