"use client"
import React from "react";
import QueryButton from "@/components/QueryButton";

export default function QuerySectionPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Contact / Query</h1>
        <p className="text-gray-600">Click the button below to send us a query.</p>
        <QueryButton />
      </div>
    </main>
  );
}
