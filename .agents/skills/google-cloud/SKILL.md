---
name: google-cloud
aliases: [gcloud, gcp, google-cloud-sdk, cloud-console]
description: Manage Google Cloud Platform (GCP) resources, services, authentication,
  IAM permissions, and deployment targets using the Google Cloud SDK (gcloud CLI).
---


# Google Cloud CLI (gcloud) Skill

You have access to `gcloud`, the command-line interface for the Google Cloud SDK. Use it to manage resources, configure authentication, set active projects, and interact with Google Cloud Platform services.

## Quick Start

```bash
# Check if the CLI is installed
gcloud --version

# Authenticate with Google Cloud
gcloud auth login

# Set active project
gcloud config set project <PROJECT_ID>

# Get current project
gcloud config get-value project
```

## Authentication & Authorization

Google Cloud SDK supports multiple authentication mechanisms:

1. **User Authentication (Interactive)**
   ```bash
   gcloud auth login
   ```
   Opens a browser to authenticate. For remote environments without a browser, use:
   ```bash
   gcloud auth login --no-launch-browser
   ```

2. **Service Account Authentication (Non-interactive/CI)**
   ```bash
   gcloud auth activate-service-account <SERVICE_ACCOUNT_EMAIL> --key-file=<PATH_TO_KEY_FILE>
   ```

3. **Application Default Credentials (ADC)**
   Used by client libraries (like Firebase Admin SDK, Google Cloud client libraries) to automatically resolve credentials:
   ```bash
   gcloud auth application-default login
   ```
   *Note: Application Default Credentials reside in `~/.config/gcloud/application_default_credentials.json`.*

## Core Command Groups

### Project Configuration

```bash
# List all accessible projects
gcloud projects list

# Describe a specific project
gcloud projects describe <PROJECT_ID>

# Get active configuration details
gcloud config list
```

### IAM & Service Accounts

Service Accounts are critical for programmatic access and machine-to-machine authentication.

```bash
# List service accounts in active project
gcloud iam service-accounts list

# Create a service account
gcloud iam service-accounts create <ACCOUNT_NAME> \
    --description="Description of the service account" \
    --display-name="Display Name"

# Create and download a private key for a service account
gcloud iam service-accounts keys create <KEY_FILE_PATH>.json \
    --iam-account=<ACCOUNT_NAME>@<PROJECT_ID>.iam.gserviceaccount.com

# Grant an IAM role to a service account or user
gcloud projects add-iam-policy-binding <PROJECT_ID> \
    --member="serviceAccount:<ACCOUNT_NAME>@<PROJECT_ID>.iam.gserviceaccount.com" \
    --role="roles/<ROLE_NAME>"
```

Common Role Names:
- `roles/viewer` (Read-only access)
- `roles/editor` (Modify most resources)
- `roles/owner` (Full access, including IAM modifications)
- `roles/secretmanager.secretAccessor` (Read secrets from Secret Manager)
- `roles/cloudsupport.techSupportEditor` (Create and manage support cases)

### Cloud Run (Serverless Container Hosting)

Cloud Run runs containerized applications on Google's infrastructure.

```bash
# Deploy a container to Cloud Run
gcloud run deploy <SERVICE_NAME> \
    --image=<CONTAINER_IMAGE_URL> \
    --platform=managed \
    --region=<REGION> \
    --allow-unauthenticated

# List deployed services
gcloud run services list

# Describe service configuration
gcloud run services describe <SERVICE_NAME> --region=<REGION>
```

### Cloud Storage (GCS)

Google Cloud Storage stores unstructured data (objects).

```bash
# List buckets
gcloud storage buckets list

# Create a storage bucket
gcloud storage buckets create gs://<BUCKET_NAME> --location=<LOCATION>

# Copy local file to bucket
gcloud storage cp <LOCAL_FILE_PATH> gs://<BUCKET_NAME>/<DESTINATION_PATH>

# Copy bucket file to local
gcloud storage cp gs://<BUCKET_NAME>/<SOURCE_PATH> <LOCAL_FILE_PATH>
```

### Secret Manager

Stores API keys, passwords, certificates, and other sensitive data.

```bash
# Create a secret container
gcloud secrets create <SECRET_NAME> --replication-policy="automatic"

# Add a version (payload) to a secret
echo -n "my-super-secret-payload" | gcloud secrets versions add <SECRET_NAME> --data-file=-

# Retrieve the latest payload version
gcloud secrets versions access latest --secret="<SECRET_NAME>"
```

## Best Practices

1. **Explicit Project Flag:** When scripting or running tasks programmatically, always append `--project <PROJECT_ID>` instead of relying on default workspace state to avoid running actions in the wrong project.
2. **Explicit Region Flag:** Specify `--region <REGION>` to keep service locations consistent and optimize network latency.
3. **IAM Principle of Least Privilege:** Grant the narrowest roles possible to service accounts to minimize the blast radius of credential leaks.
4. **Credential Isolation:** Do not store service account JSON keys inside your Git repository. Use environment variables or local paths listed in `.gitignore`.

## References

- [gcloud Command Reference](https://cloud.google.com/sdk/gcloud/reference)
- [Google Cloud IAM Roles](https://cloud.google.com/iam/docs/understanding-roles)
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Secret Manager Documentation](https://cloud.google.com/secret-manager/docs)
