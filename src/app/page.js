'use client'
import LoginForm from "@/Components/LoginForm";
import { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <CircularProgress />
        </Box>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}
