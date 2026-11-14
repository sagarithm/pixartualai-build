'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SurveysPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/dashboard/account?tab=surveys');
  }, [router]);

  return <div className="h-screen w-screen bg-[#fafafa] dark:bg-[#0d0d0d]" />;
}
