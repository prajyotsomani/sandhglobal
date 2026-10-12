import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { sendContactInquiry } from './api/contact.js'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // This is used only by Vite's Node development server; it is never sent to
  // the browser. Production uses the Vercel function in api/contact.js.
  const environment = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (request, response) => {
            if (request.method !== 'POST') {
              response.writeHead(405, { Allow: 'POST', 'Content-Type': 'application/json' });
              response.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let rawBody = '';
            for await (const chunk of request) {
              rawBody += chunk;
              if (rawBody.length > 20_000) {
                response.writeHead(413, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Request is too large.' }));
                return;
              }
            }

            try {
              const result = await sendContactInquiry(JSON.parse(rawBody), environment);
              response.writeHead(result.status, { 'Content-Type': 'application/json' });
              response.end(JSON.stringify(result.body));
            } catch (error) {
              console.error('Local contact API failed:', error);
              response.writeHead(400, { 'Content-Type': 'application/json' });
              response.end(JSON.stringify({ error: 'Invalid request body.' }));
            }
          });
        },
      },
    ],
    server: {
      port: 5173,
      open: true,
    },
  };
})
