#!/usr/bin/env bash
set -euo pipefail

# Configuration
ACCOUNT="arif.coskun@profithelm.com"
PROJECT_ID="${1:-arif-coskun-platform}"
REGION="${2:-us-central1}"
SERVICE_NAME="personal-site"
BILLING_ACCOUNT_ID="${3:-01F581-DECA4A-376640}"
IMAGE_TAG="gcr.io/${PROJECT_ID}/${SERVICE_NAME}:latest"

echo "========================================================"
echo "  Deploying Arif Coskun Platform to Google Cloud Run"
echo "========================================================"
echo "Account:         $ACCOUNT"
echo "Project ID:      $PROJECT_ID"
echo "Region:          $REGION"
echo "Service Name:    $SERVICE_NAME"
echo "Billing Account: $BILLING_ACCOUNT_ID"
echo "Image Tag:       $IMAGE_TAG"
echo "Mode:            Pay-As-You-Go (Scale-to-Zero, 0 Cost at Idle)"
echo "========================================================"

# 1. Verify Active Account
CURRENT_ACCOUNT=$(gcloud config get-value account 2>/dev/null || true)
if [ "$CURRENT_ACCOUNT" != "$ACCOUNT" ]; then
    echo "Switching active gcloud account to $ACCOUNT..."
    gcloud config set account "$ACCOUNT"
fi

# 2. Check or Create Project
echo "Checking if project '$PROJECT_ID' exists..."
if ! gcloud projects describe "$PROJECT_ID" >/dev/null 2>&1; then
    echo "Creating new GCP Project '$PROJECT_ID'..."
    gcloud projects create "$PROJECT_ID" --name="Arif Coskun Personal Platform"
    
    echo "Linking billing account '$BILLING_ACCOUNT_ID'..."
    gcloud billing projects link "$PROJECT_ID" --billing-account="$BILLING_ACCOUNT_ID"
else
    echo "Project '$PROJECT_ID' already exists."
fi

# Set active project
gcloud config set project "$PROJECT_ID"

# 3. Enable Required Google Cloud APIs
echo "Enabling Cloud Run and Container Registry APIs..."
gcloud services enable \
    run.googleapis.com \
    containerregistry.googleapis.com \
    cloudbuild.googleapis.com \
    --project "$PROJECT_ID"

# 4. Build Docker container locally
echo "Building Docker container image..."
docker build -t "$IMAGE_TAG" .

# 5. Configure Docker authentication and Push
echo "Configuring docker auth and pushing image..."
gcloud auth configure-docker --quiet
docker push "$IMAGE_TAG"

# 6. Deploy to Cloud Run
echo "Deploying to Cloud Run ($REGION)..."
gcloud run deploy "$SERVICE_NAME" \
    --image "$IMAGE_TAG" \
    --platform managed \
    --region "$REGION" \
    --project "$PROJECT_ID" \
    --allow-unauthenticated \
    --min-instances 0 \
    --max-instances 100 \
    --concurrency 250 \
    --cpu 1 \
    --memory 256Mi \
    --port 8080

# 7. Retrieve Public URL
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --project "$PROJECT_ID" --format='value(status.url)')

echo ""
echo "========================================================"
echo "  🚀 DEPLOYMENT SUCCESSFUL!"
echo "========================================================"
echo "Live URL: $SERVICE_URL"
echo ""
echo "Cost & Scaling Guarantee:"
echo " - Scale-to-Zero: When idle (0 traffic), min-instances = 0 (COST: \$0.00)"
echo " - Free Tier: First 2M requests/month + 360,000 vCPU-secs are free"
echo " - Scale-up: Autoscales dynamically up to 100 instances (25,000 concurrent req/sec)"
echo "========================================================"
