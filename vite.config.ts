import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // optimizeDeps:{
  //   entries:resolve(__dirname,'index.html'),
  //   // include:[
  //   //   resolve(process.cwd(),'src/main.ts')
  //   // ]
  // },
  base:'./',
  build:{
    chunkSizeWarningLimit: 4096,
    rollupOptions:{
      input:{
        index:resolve(__dirname,'index.html'),
        bbl:resolve(__dirname,'bbl.html')
      }
    }
  }
})
