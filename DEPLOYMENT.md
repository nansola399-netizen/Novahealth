# Nova Health Solutions - Deployment Guide

This guide will help you connect your local code to **GitHub** and deploy it live on **Vercel**.

I have already initialized the Git repository on your computer and secured your code with an initial commit.

---

## Step 1: Create a Repository on GitHub

1.  Log in to your [GitHub account](https://github.com).
2.  Click the **+** icon in the top-right corner and select **New repository**.
3.  **Repository name**: `nova-health-hub` (or any name you prefer).
4.  **Visibility**: Choose **Public** or **Private**.
5.  **Initialize this repository with**: Leave all options **unchecked** (no README, no .gitignore) because we already have them locally.
6.  Click **Create repository**.

## Step 2: Connect Local Code to GitHub

Once your repository is created, GitHub will show you a "Quick setup" page. Copy the commands under **"…or push an existing repository from the command line"**.

It will look something like this (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git remote add origin https://github.com/nansola399-netizen/Novahealth.git
git branch -M main
git push -u origin main
```

**Action:**
1.  Open a terminal in your project folder (`c:\Users\ahmed\Downloads\nova-health-hub-main\nova-health-hub-main`).
2.  Paste and run the commands above.
3.  Your code will be uploaded to GitHub.

---

## Step 3: Deploy to Vercel

1.  Go to [Vercel.com](https://vercel.com) and log in (you can log in with GitHub).
2.  On your Vercel dashboard, click **"Add New..."** > **"Project"**.
3.  You will see a list of your GitHub repositories. Find `nova-health-hub` and click **Import**.
4.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect "Vite" or "Create React App".
    *   **Root Directory**: Ensure it points to the root where `package.json` is.
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default for Vite).
5.  Click **Deploy**.

Vercel will build your project and give you a live URL (e.g., `https://nova-health-hub.vercel.app`) in about a minute.

---

## Future Updates

Whenever you want to update your live site:

1.  I (or you) make changes to the code.
2.  Commit the changes:
    ```bash
    git add .
    git commit -m "Description of changes"
    ```
3.  Push to GitHub:
    ```bash
    git push
    ```

Vercel will automatically detect the new push and update your live website instantly.
