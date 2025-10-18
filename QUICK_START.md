# MuscleCoach Booking - Quick Start Guide

**Everything is ready to go!** Here's how to use it:

## 1. Run Locally (1 minute)

```bash
npm install      # Already done - skip if installed
npm run dev      # Start server on port 5000
```

Open your browser: `http://localhost:5000`

Fill in the form:
- Name: Your name
- Email: your@email.com
- Date: Pick a date
- Message: (optional) Any notes

Click "Book Training" and watch it appear in your Notion database instantly!

## 2. Deploy to Railway (5 minutes)

Railway auto-deploys your app to production with a live URL.

### Step-by-step:

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Fresh MuscleCoach setup"
   git push
   ```

2. **Go to Railway.app**
   - Sign up free
   - Click "Create New Project"
   - Select "Deploy from GitHub repo"
   - Authorize & select your MuscleCoach repo
   - Railway starts building automatically

3. **Set Environment Variables in Railway**
   - Dashboard → Variables tab
   - Add these 6 variables:
   ```
   NODE_ENV=production
   PORT=5000
   NOTION_API_KEY=ntn_QTc13681682944dWVwsirbNm6AHvXeg5uaPYGnK9XpjfMg
   NOTION_DATABASE_ID=290000d0-c412-8062-ad5e-fe386334f025
   ADMIN_EMAIL=admin@musclecoach.com
   ADMIN_PASSWORD=admin123
   ```

4. **Done!** 
   - Railway gives you a live URL (https://your-project.up.railway.app)
   - Share it with clients
   - Bookings go to Notion automatically

## 3. Your Booking URL

Share this with clients once deployed:
```
https://your-project.up.railway.app
```

They fill form → Booking goes to Notion → You see it instantly!

## How It Works

```
Customer fills form
        ↓
Submits to your app
        ↓
App validates data
        ↓
Notion API creates entry
        ↓
Entry appears in Notion database
        ↓
You manage it in Notion!
```

## Troubleshooting

### "Booking didn't appear"
1. Check Notion database is shared with your integration
2. Verify DATABASE_ID has hyphens: `290000d0-c412-8062-ad5e-fe386334f025`
3. Check your Notion workspace has the integration

### "App won't start"
1. Run `npm install`
2. Check `.env` file exists
3. Run `npm run dev` and read error message

### "What's this admin stuff?"
Admin dashboard is for future use. For now, just use Notion directly!

## What's Included

- ✅ Booking form (customers use)
- ✅ Notion integration (auto-saves)
- ✅ Admin auth (for later)
- ✅ Clean, modern UI
- ✅ Mobile responsive
- ✅ Production-ready

## Next: Scale It Up

Once it's working:

1. **Customize the form** - Edit `client/src/components/BookingForm.tsx`
2. **Add more fields** - Add to Notion database columns
3. **Email notifications** - Add email on new booking
4. **Trainer assignment** - Manage in Notion database
5. **Admin dashboard** - Build in React later

## Need Help?

1. Check `README.md` for full docs
2. Check `RAILWAY_SETUP.md` for deployment questions
3. Run `npm run dev` and check console output
4. Check Notion API docs: https://developers.notion.com

---

**That's it!** Your booking system is live. 🚀
