// vite.config.ts
import preact from '@preact/preset-vite'
var config = {
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  plugins: [
    preact(),
  ],
}
var vite_config_default = config
export { vite_config_default as default }
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwcmVhY3QgZnJvbSAnQHByZWFjdC9wcmVzZXQtdml0ZSdcbmltcG9ydCB7IFVzZXJDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5jb25zdCBjb25maWc6IFVzZXJDb25maWcgPSB7XG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIG5lZWQgaW5kZXguY3NzIHRvIGtlZXAgc2FtZSBmaWxlbmFtZSAod2l0aG91dCBoYXNoKSBmb3IgXCJleHBvcnRzXCJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltleHRdJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHByZWFjdCgpLFxuICBdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxPQUFPLFlBQVk7QUFHbkIsSUFBTSxTQUFxQjtBQUFBLEVBQ3pCLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUVOLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
