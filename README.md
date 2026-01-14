# AI M5 Trading Signal Bot

A professional trading signal generator application that provides real-time buy/sell signals for forex pairs across Asian, London, and New York market sessions.

## Features

- Real-time trading signal generation with confidence scores
- Support for multiple forex pairs across 3 major trading sessions
- Auto mode for automatic signal generation at 5-minute intervals
- Manual mode for on-demand signal generation
- Telegram notifications for new signals
- Signal history with advanced filtering
- Responsive design with modern UI

## Prerequisites

- Node.js 18+
- A Supabase account and project

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then edit `.env` and add your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under Project Settings > API.

### 4. Database Setup

The database will be automatically configured when you first run the application. The migration creates:

- `trading_signals` table with proper schema
- Row Level Security (RLS) policies
- Necessary indexes

The migration is located at: `supabase/migrations/20260109081714_create_trading_signals_table.sql`

### 5. Telegram Bot Setup (Optional)

The app sends trading signals to Telegram. To configure:

1. Edit `supabase/functions/send-telegram-signal/index.ts`
2. Update `BOT_TOKEN` with your Telegram bot token
3. Update `CHAT_ID` with your Telegram chat ID

To get these:
- Create a bot via [@BotFather](https://t.me/botfather) on Telegram
- Get your chat ID by messaging [@userinfobot](https://t.me/userinfobot)

### 6. Run the Application

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── components/          # React components
│   ├── lib/                 # Utilities and helpers
│   │   ├── signalGenerator.ts   # Signal generation logic
│   │   ├── supabase.ts          # Supabase client
│   │   └── types.ts             # TypeScript types
│   ├── pages/               # Page components
│   │   ├── DashboardPage.tsx
│   │   ├── HistoryPage.tsx
│   │   └── SettingsPage.tsx
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── supabase/
│   ├── functions/           # Edge functions
│   └── migrations/          # Database migrations
└── public/                  # Static assets
```

## How It Works

### Signal Generation

The app uses advanced technical analysis to generate trading signals:

- **RSI (Relative Strength Index)**: Identifies overbought/oversold conditions
- **MACD (Moving Average Convergence Divergence)**: Detects momentum and trend changes
- **Moving Averages (SMA & EMA)**: Confirms trend direction
- **Stochastic Oscillator**: Identifies momentum shifts
- **Bollinger Bands**: Measures volatility and price extremes
- **ATR (Average True Range)**: Assesses market volatility
- **Support/Resistance Levels**: Identifies key price levels

### Market Sessions

The app automatically detects the current market session:

- **Asian Session** (00:00 - 08:00 UTC): USD/JPY, AUD/JPY, NZD/JPY, AUD/USD, NZD/USD
- **London Session** (08:00 - 16:00 UTC): EUR/USD, GBP/USD, EUR/GBP, EUR/JPY, GBP/JPY
- **New York Session** (16:00 - 00:00 UTC): USD/CAD, EUR/USD, GBP/USD, USD/CHF, AUD/USD

### Auto Mode

When enabled, the app automatically generates signals at 5-minute intervals aligned with the market (00, 05, 10, 15, etc.). Each signal is valid for a 5-minute trading window.

## Troubleshooting

### App doesn't load

1. Verify your `.env` file exists and contains valid Supabase credentials
2. Check that your Supabase project is active
3. Ensure the database migration has been applied
4. Open browser console to check for errors

### No signals appearing

1. Check if the database connection is working
2. Verify RLS policies are correctly set up
3. Try generating a manual signal first
4. Check browser console for errors

### Telegram notifications not working

1. Verify the edge function is deployed
2. Check that BOT_TOKEN and CHAT_ID are correct
3. Ensure the bot is unblocked and the chat is active
4. Check Supabase function logs for errors

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Database and backend
- **Lucide React** - Icons

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
