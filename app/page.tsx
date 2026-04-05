{
  "name": "logistics-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "start": "next start",
    "dev": "next dev"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@supabase/supabase-js": "^2.45.0",
    "lucide-react": "^0.400.0"
  }
}const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  }
}
