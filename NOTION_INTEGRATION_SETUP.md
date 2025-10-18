# Notion Integration Setup Guide

## Overview
This guide walks you through setting up the Notion integration for the MuscleCoach booking form. The integration allows customers to submit booking requests through the web app, which automatically create entries in your Notion workspace.

## Prerequisites
- A Notion workspace (free tier works fine)
- Access to create integrations in Notion
- The MuscleCoach project running locally or in Replit

## Step 1: Create a Notion Database

### 1.1 Set up your workspace
1. Go to [notion.so](https://notion.so) and log in
2. Create a new page or open an existing workspace
3. Click "Add a database" and choose "Table"
4. Name your database (e.g., "Training Bookings")

### 1.2 Set up database columns
Create the following columns in your Notion table:

| Column Name | Type | Description |
|------------|------|-------------|
| Name | Title | Customer's full name (default column) |
| Email | Email | Customer's email address |
| Preferred Date | Date | Requested training date |
| Message | Text | Additional notes or questions |
| Status | Status | Booking status (create custom values) |
| Trainer Assigned | Person | (Optional) Assigned trainer |
| Notes | Text | (Optional) Internal notes |

**To add columns:**
1. Click the "+" button at the end of your columns
2. Enter the column name
3. Select the appropriate type from the dropdown
4. Configure any additional settings

## Step 2: Create a Notion Integration

### 2.1 Create Internal Integration
1. Go to [notion.com/my-integrations](https://www.notion.com/my-integrations)
2. Click "Create new integration"
3. Name it: "MuscleCoach Bookings"
4. Select your workspace
5. Accept the terms and click "Create integration"

### 2.2 Get your API Key
1. On the integration page, copy the "Internal Integration Token"
2. Save this securely - you'll need it for the `.env` file

### 2.3 Share database with integration
1. Go back to your Notion workspace
2. Open your "Training Bookings" database
3. Click the "Share" button (top right)
4. Search for your integration name ("MuscleCoach Bookings")
5. Click it and verify it's added to the database

## Step 3: Configure Environment Variables

### 3.1 Get your Database ID
1. Open your Notion database in your browser
2. Copy the URL. It looks like: `https://www.notion.so/workspace/12a34b5c6d7e8f9g0h1i2j3k4l5m6n7o?v=...`
3. The database ID is the part before the "?": `12a34b5c6d7e8f9g0h1i2j3k4l5m6n7o`
4. Remove any hyphens if present

### 3.2 Set environment variables
Create or update your `.env` file with:

```bash
# Existing variables
OPENAI_API_KEY=your_existing_key

# New Notion variables
NOTION_API_KEY=your_internal_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
```

**In Replit:**
1. Click "Secrets" (lock icon) in the left sidebar
2. Add two new secrets:
   - Key: `NOTION_API_KEY` → Value: Your internal integration token
   - Key: `NOTION_DATABASE_ID` → Value: Your database ID

## Step 4: Test the Integration

### 4.1 Start the development server
```bash
npm run dev
```

### 4.2 Test the booking form
1. Open the app in your browser
2. Scroll to the "Boek een gratis consultatie" section
3. Fill out the form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Preferred Date: Any future date
   - Message: "Test booking"
4. Click "Training Boeken"

### 4.3 Verify in Notion
1. Go to your Notion workspace
2. Open the "Training Bookings" database
3. You should see a new row with your test data

**Success!** Your integration is working. 🎉

## Step 5: Troubleshooting

### Issue: "Notion is niet geconfigureerd"
**Solution:** 
- Check that `NOTION_API_KEY` and `NOTION_DATABASE_ID` are set in your `.env` file
- Restart the development server after adding env variables
- In Replit, make sure secrets are saved

### Issue: "Er ging iets mis bij het verwerken van uw boeking"
**Solution:**
- Check the server console logs for the actual error message
- Verify the database ID is correct (remove any hyphens)
- Confirm the integration has been shared with the database
- Check that all required columns exist in Notion

### Issue: Form validates but nothing appears in Notion
**Solution:**
- Check that the column names in Notion exactly match those in the code (case-sensitive):
  - "Name" (Title type)
  - "Email" (Email type)
  - "Preferred Date" (Date type)
  - "Message" (Rich text type)
  - "Status" (Status type)
- Verify API key and database ID again
- Check server logs for more details

### Issue: Column type mismatch error
**Solution:**
- Ensure each Notion column has the correct type:
  - **Name** must be "Title"
  - **Email** must be "Email"
  - **Preferred Date** must be "Date"
  - **Message** must be "Rich text" or "Text"
  - **Status** must be "Status"

## Step 6: Customize (Next Steps)

Once the POC is working, you can:

1. **Add more fields** - Update `bookingSchema` in `shared/schema.ts`
2. **Add trainer assignment** - Modify the Notion page creation logic
3. **Send notifications** - Add email alerts when new bookings arrive
4. **Add dashboard** - Create analytics of bookings by trainer
5. **Integrate with your calendar** - Link bookings to calendar events

## API Endpoint Reference

### POST /api/bookings

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "preferredDate": "2025-10-25",
  "message": "Optional notes here"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Boeking succesvol ingediend!"
}
```

**Error Response (400):**
```json
{
  "error": "Validatie mislukt",
  "details": [
    {
      "code": "invalid_string",
      "message": "Invalid email",
      "path": ["email"]
    }
  ]
}
```

## Files Modified

- `package.json` - Added `@notionhq/client` dependency
- `server/routes.ts` - Added `/api/bookings` endpoint
- `shared/schema.ts` - Added `bookingSchema` and `Booking` type
- `client/src/components/BookingForm.tsx` - NEW: React booking form component
- `client/src/pages/home.tsx` - Integrated booking form section

## Next: Backend Dashboard

Once bookings are flowing into Notion, you can:
1. Query the Notion API from your dashboard
2. Calculate trainer workload
3. Visualize booking distribution
4. Manage assignments directly from the app

See next section for dashboard implementation.

---

**Questions?** Check the troubleshooting section or review the server logs with `npm run dev`

