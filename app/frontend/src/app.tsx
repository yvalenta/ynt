import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen flex items-center justify-center bg-zinc-950">
              <div className="text-center space-y-4">
                <h1 className="text-6xl font-black tracking-tighter text-white">
                  YNT <span className="text-zinc-500">POC</span>
                </h1>
                <p className="text-zinc-400 font-mono">Rails 8 + React 19 + Vite + Tailwind v4</p>
                <div className="inline-block px-4 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-medium">
                  Megaplex Stack Ready
                </div>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
