import React from 'react';
import type { Metadata } from 'next';
import AudienceDashboard from '@/components/AudienceDashboard';

export const metadata: Metadata = {
  title: 'Audience Dashboard',
  description: 'View your audience analytics and engagement metrics on SoundMoney',
};

export default function AudiencePage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <AudienceDashboard />
    </div>
  );
}