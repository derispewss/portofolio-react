import { ThemeProvider } from '@/components/shadcn/theme-provider';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from "@/components/ui/sonner"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
