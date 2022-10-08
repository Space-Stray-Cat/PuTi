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
  //   // lib:{
  //   //   entry:resolve(__dirname,'src/main.ts')
  //   // },
  //   // outDir:resolve(__dirname,'dist'),
    rollupOptions:{
      input:{
        index:resolve(__dirname,'index.html'),
        bbl:resolve(__dirname,'bbl.html')
      }
    }
  }
})
