# Quick Setup Guide

Follow these steps to get the app running after cloning from GitHub:

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then edit `.env` and add your Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Where to find your Supabase credentials:

1. Go to [supabase.com](https://supabase.com) and sign in
2. Select your project (or create a new one)
3. Click on the Settings icon (gear) in the sidebar
4. Go to Project Settings → API
5. Copy the URL and anon/public key

## 3. Start the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Common Issues

### App shows "Configuration Required" error

This means your `.env` file is missing or has incorrect values. Double-check:
- The `.env` file exists in the project root
- Both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- The values are correct (no extra spaces or quotes)
- You restarted the dev server after creating the `.env` file

### Database connection errors

- Verify your Supabase project is active
- Check that the credentials in `.env` match your Supabase project
- The database table will be created automatically on first use

### Telegram notifications not working

The Telegram integration is optional. The app will work without it. To enable:
1. Create a bot via [@BotFather](https://t.me/botfather)
2. Get your chat ID from [@userinfobot](https://t.me/userinfobot)
3. The edge function is already deployed with default values

For more details, see the main [README.md](./README.md)
