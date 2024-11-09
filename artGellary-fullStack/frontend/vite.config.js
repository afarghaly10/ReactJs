import million from 'million/compiler';
import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [million.vite({ auto: true }), MillionLint.vite(), react()],
});
