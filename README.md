# MuscleCoach Booking System

A modern, clean training booking application integrated with Notion database management. Customers can book training sessions through a simple form, and all bookings are automatically saved to your Notion database.

## Features

- **Simple Booking Form** - Clean, modern UI for customers to book training sessions
- **Notion Integration** - All bookings automatically saved to your Notion database
- **Admin Dashboard** - Protected endpoint for viewing all bookings
- **Real-time Sync** - Bookings appear in Notion instantly
- **One-Click Deployment** - Deploy to Railway with automatic GitHub sync

## Tech Stack

- **Backend:** Express.js + TypeScript
- **Frontend:** React + Vite + Tailwind CSS
- **Validation:** Zod
- **Database:** Notion API
- **Deployment:** Railway

## Quick Start (Development)

### Prerequisites

- Node.js 18+
- npm
- Notion API Key and Database ID

### 1. Clone & Install

```bash
git clone <your-repo>
cd musclecoach
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```env
NOTION_API_KEY=your_api_key
NOTION_DATABASE_ID=your_database_id
ADMIN_EMAIL=admin@musclecoach.com
ADMIN_PASSWORD=your_password
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5000`

### 4. Test Booking Flow

1. Fill in the booking form
2. Submit
3. Check your Notion database - booking should appear!

## Project Structure

```
musclecoach/
├── server/
│   ├── index.ts           # Express app setup
│   ├── middleware/
│   │   └── auth.ts        # Admin auth middleware
│   └── routes/
│       └── bookings.ts    # Booking endpoints
├── client/
│   └── src/
│       ├── pages/
│       │   └── home.tsx   # Home page with booking form
│       └── components/
│           └── BookingForm.tsx  # Booking form component
├── shared/
│   └── schema.ts          # Zod validation schemas
└── package.json
```

## API Endpoints

### Public

- `POST /api/bookings` - Submit a new booking
- `GET /health` - Health check

### Protected (Admin)

- `GET /api/admin/dashboard` - Admin dashboard (requires Bearer token)

### Admin Authentication

To access protected endpoints, include a Bearer token:

```bash
# Generate token from email:password
# Example: admin@musclecoach.com:password123
# Encode to base64: YWRtaW5AbXVzY2xlY29hY2guY29tOnBhc3N3b3JkMTIz

curl -H "Authorization: Bearer YWRtaW5AbXVzY2xlY29hY2guY29tOnBhc3N3b3JkMTIz" \
  http://localhost:5000/api/admin/dashboard
```

## Notion Database Setup

Your Notion database needs these columns:

- **Name** (Title) - Customer name
- **Email** (Email) - Customer email
- **Preferred Date** (Date) - Desired training date
- **Message** (Rich Text) - Additional notes
- **Status** (Status) - Booking status

## Deployment

Deploy to Railway in 5 minutes. See [RAILWAY_SETUP.md](./RAILWAY_SETUP.md) for detailed instructions.

Quick version:

1. Push to GitHub
2. Connect repo to Railway
3. Set environment variables in Railway dashboard
4. Done! Railway auto-deploys on every push

## Development Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check
```

## Troubleshooting

### Booking not appearing in Notion

1. Check `NOTION_DATABASE_ID` has hyphens: `290000d0-c412-8062-ad5e-fe386334f025`
2. Verify the integration is shared with your database in Notion
3. Check server logs: `npm run dev` and look for error messages

### Admin auth not working

1. Generate correct Bearer token: `Buffer.from('email:password').toString('base64')`
2. Make sure email and password match env vars

### Port already in use

```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=3000 npm run dev
```

## Next Steps

- Customize booking form fields in `client/src/components/BookingForm.tsx`
- Add more admin features to the dashboard
- Set up automated emails on new bookings
- Create trainer assignment system in Notion

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review Railway deployment guide
3. Check server logs: `npm run dev`

## License

MIT
