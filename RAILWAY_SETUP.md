# Railway Deployment Guide

Deploy MuscleCoach to Railway in 5 minutes. Railway automatically builds and deploys from your GitHub repository.

## Prerequisites

- GitHub repository with your code pushed
- Notion API Key and Database ID
- Railway account (free tier available at railway.app)

## Step 1: Connect GitHub to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up or log in
3. Click "Create New Project"
4. Select "Deploy from GitHub repo"
5. Authorize Railway to access your GitHub account
6. Select your MuscleCoach repository

Railway will automatically detect it's a Node.js project and start building!

## Step 2: Set Environment Variables

Once your project is created:

1. Go to your project dashboard
2. Click the "Variables" tab
3. Add the following environment variables:

```
NODE_ENV=production
PORT=5000
NOTION_API_KEY=ntn_QTc13681682944dWVwsirbNm6AHvXeg5uaPYGnK9XpjfMg
NOTION_DATABASE_ID=290000d0-c412-8062-ad5e-fe386334f025
ADMIN_EMAIL=admin@musclecoach.com
ADMIN_PASSWORD=your_secure_password_here
```

Important: Replace `ADMIN_PASSWORD` with your own secure password.

## Step 3: Configure Build & Start Commands

Railway should auto-detect these, but if needed:

In the "Settings" tab:

- **Build Command:** `npm run build`
- **Start Command:** `npm start`

## Step 4: Verify Deployment

1. Railway will show a deployment URL in the format: `https://your-project.up.railway.app`
2. Test it: `https://your-project.up.railway.app/health`
3. You should see: `{"status":"ok",...}`

## Step 5: Test the Booking Flow

1. Visit your Railway URL in browser
2. Fill in the booking form
3. Submit
4. Check your Notion database - the booking should appear!

## Common Issues

### "Cannot find database"
- Double-check `NOTION_DATABASE_ID` has hyphens: `290000d0-c412-8062-ad5e-fe386334f025`
- Verify in Railway variables it's set correctly

### "API Key invalid"
- Ensure `NOTION_API_KEY` is complete and matches exactly
- Check no extra spaces

### Build fails
- Check the "Build Logs" tab in Railway for errors
- Ensure `package.json` has all dependencies

## Redeploying

After making code changes:

1. Push to GitHub: `git push`
2. Railway automatically redeploys!
3. Check deployment status in Railway dashboard

## Next Steps

- Monitor your deployed app in Railway dashboard
- Check logs by clicking "View Logs"
- Scale your deployment as needed (Railway handles this automatically)

## Need Help?

- Railway docs: https://railway.app/docs
- Notion API docs: https://developers.notion.com
- Check Railway project logs for detailed error messages
