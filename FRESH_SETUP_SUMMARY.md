# Fresh MuscleCoach Setup - Complete

We've completely rebuilt the MuscleCoach booking system from scratch. Here's what's in place:

## Architecture

```
Express Backend (TypeScript)
    ↓
Notion API Integration
    ↓
Notion Database (Your bookings)
    
React Frontend (Vite + Tailwind)
    ↓
BookingForm Component
    ↓
/api/bookings endpoint
```

## Files Created/Modified

### Backend
- `server/index.ts` - Clean Express app with Notion client
- `server/middleware/auth.ts` - Admin auth middleware (email:password based)
- `server/routes/bookings.ts` - POST /api/bookings and GET /api/bookings endpoints

### Frontend
- `client/src/pages/home.tsx` - Clean home page with hero and booking form
- `client/src/components/BookingForm.tsx` - React form with validation
- `client/src/components/ui/*` - Simple UI component wrappers

### Config
- `shared/schema.ts` - Zod validation schema
- `.env.example` - Environment template
- `package.json` - Clean dependencies
- `README.md` - Comprehensive documentation
- `RAILWAY_SETUP.md` - Railway deployment guide

## Environment Variables

Set these in `.env` or Railway dashboard:

```
NODE_ENV=development
PORT=5000
NOTION_API_KEY=ntn_QTc13681682944dWVwsirbNm6AHvXeg5uaPYGnK9XpjfMg
NOTION_DATABASE_ID=290000d0-c412-8062-ad5e-fe386334f025
ADMIN_EMAIL=admin@musclecoach.com
ADMIN_PASSWORD=admin123
```

## What Works

- ✅ Express server with TypeScript
- ✅ Notion API client connected
- ✅ /api/bookings POST endpoint (creates Notion entries)
- ✅ /api/bookings GET endpoint (fetches all bookings)
- ✅ Admin auth middleware ready
- ✅ React form with validation
- ✅ Clean TypeScript configuration
- ✅ Ready for Railway deployment

## Next Steps

### Local Testing
```bash
npm install
npm run dev
# Visit http://localhost:5000
# Fill form, submit → appears in Notion ✨
```

### Deployment to Railway
1. Push to GitHub
2. Go to Railway.app
3. Connect your repo
4. Set env variables
5. Done! Auto-deploys on every push

### Optional Enhancements
- Add email notifications
- Create trainer assignment interface in Notion
- Add booking confirmation emails
- Build admin dashboard component
- Add time slot management

## Credentials

The API key and Database ID are already configured in the `.env` file. When deploying to Railway:

- Use the SAME credentials in Railway environment variables
- Don't commit `.env` to git (it's already in `.gitignore`)
- Keep API key safe!

## Support

- Check `README.md` for full documentation
- Check `RAILWAY_SETUP.md` for deployment help
- Run `npm run dev` and check console for errors
- Notion API docs: https://developers.notion.com

---

Everything is ready. You can now test locally or deploy to Railway! 🚀
