# Notion Integration - Quick Start Card

## ⚡ 5-Minute Setup

### 1. Create Notion Database
- Go to [notion.so](https://notion.so)
- Create new database called "Training Bookings"
- Add columns: Name (Title), Email, Preferred Date (Date), Message, Status

### 2. Create Integration Token
- Visit [notion.com/my-integrations](https://www.notion.com/my-integrations)
- Click "Create new integration"
- Name: "MuscleCoach Bookings"
- Copy the "Internal Integration Token"
- Share database with this integration

### 3. Get Database ID
- Open your database in Notion
- Copy the URL: `https://www.notion.so/workspace/YOUR_DATABASE_ID?v=...`
- Extract: `YOUR_DATABASE_ID` (before the `?`)

### 4. Set Environment Variables

**In Replit (Easiest):**
1. Click "Secrets" (lock icon)
2. Add secret: `NOTION_API_KEY` = your token
3. Add secret: `NOTION_DATABASE_ID` = your ID

**Or in `.env` file:**
```bash
NOTION_API_KEY=secret_xxxxxxxxxxxx
NOTION_DATABASE_ID=12a34b5c6d7e8f9g0h1i2j3k4l5m6n7o
```

### 5. Test It!
```bash
npm run dev
```
- Open browser
- Scroll to "Boek een gratis consultatie"
- Fill form and submit
- Check Notion - should have new row!

---

## 🏗️ Architecture

```
Form → API → Notion Database
```

**3-Layer Stack:**
1. **Frontend:** React form in landing page
2. **Backend:** Express endpoint validates & submits
3. **Storage:** Notion database table

---

## 📝 Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| Name | Text | ✅ | Min 1 char |
| Email | Email | ✅ | Valid format |
| Preferred Date | Date | ✅ | ISO format |
| Message | Text | ❌ | Optional |

---

## 🛠️ Troubleshooting

| Issue | Fix |
|-------|-----|
| "Notion is niet geconfigureerd" | Check env variables are set & restart server |
| Form sends but nothing in Notion | Verify column names match exactly, API key valid |
| Column type error | Ensure types: Name=Title, Email=Email, Preferred Date=Date |
| 401 error | Check API key is correct, hasn't expired |

---

## 📊 Notion Column Setup Reference

```
Create these exact columns in your database:

Name              → Title type
Email             → Email type
Preferred Date    → Date type
Message           → Text or Rich Text type
Status            → Status type
Trainer Assigned  → Person type (optional, for team)
Notes             → Text type (optional, for internal notes)
```

**Notion automatically adds:**
- Created (date created)
- Last edited (date modified)

---

## 🚀 Next: Backend Dashboard

Once bookings flow into Notion:
1. Build dashboard component
2. Query Notion API for stats
3. Show trainer workload
4. Display booking trends

See: `NOTION_POC_IMPLEMENTATION_SUMMARY.md` for next phases

---

## ✅ Checklist

- [ ] Notion workspace created
- [ ] Database "Training Bookings" created
- [ ] All columns created with correct types
- [ ] Integration created & token copied
- [ ] Database shared with integration
- [ ] `NOTION_API_KEY` set in environment
- [ ] `NOTION_DATABASE_ID` set in environment
- [ ] Server restarted after env changes
- [ ] Form visible on landing page
- [ ] Test form submission works
- [ ] New row appears in Notion database

---

## 📞 Still Need Help?

1. **Setup Questions:** See `NOTION_INTEGRATION_SETUP.md` (detailed guide)
2. **Technical Details:** See `NOTION_POC_IMPLEMENTATION_SUMMARY.md`
3. **Check Logs:** Run `npm run dev` and watch console output
4. **Browser Console:** Check for JavaScript errors (F12)
5. **Notion Status:** Check [status.notion.so](https://status.notion.so)

---

## 🎉 Success Indicators

✅ Form appears on landing page  
✅ Form validation works (try invalid email)  
✅ Form submits without errors  
✅ Success message appears  
✅ New row in Notion database  
✅ Data matches what you submitted  

**All green? You're ready to receive bookings!**

---

**Pro Tip:** Use Notion Views to:
- Filter bookings by status
- Group by trainer
- Sort by date
- Create dashboards
- Add kanban boards for workflow

Notion is powerful - explore the database views! 📊

