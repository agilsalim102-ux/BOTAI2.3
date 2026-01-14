import { AlertTriangle, Settings } from 'lucide-react';

export default function ConfigError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-red-200 p-8 max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-red-100 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Configuration Required</h1>
            <p className="text-slate-600">Environment variables are missing</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h2 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-red-600" />
            Missing Configuration
          </h2>
          <p className="text-slate-700 mb-4">
            The application requires Supabase credentials to function. Please follow these steps:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Create a <code className="bg-red-100 px-2 py-1 rounded text-sm">.env</code> file in the project root</li>
            <li>Copy the contents from <code className="bg-red-100 px-2 py-1 rounded text-sm">.env.example</code></li>
            <li>Add your Supabase project URL and anon key</li>
            <li>Restart the development server</li>
          </ol>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-3">Example .env file:</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here`}
          </pre>
          <p className="text-slate-600 text-sm mt-4">
            Get these values from your Supabase project dashboard under Settings → API
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
          <AlertTriangle className="w-4 h-4" />
          <span>Need help? Check the README.md file for detailed setup instructions</span>
        </div>
      </div>
    </div>
  );
}
