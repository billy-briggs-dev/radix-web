import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          '0%': { height: '0px', opacity: '0' },
          '100%': { height: 'var(--max-height)', opacity: '1' },
        },
        'accordion-up': {
          '0%': { height: 'var(--max-height)', opacity: '1' },
          '100%': { height: '0px', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out forwards',
        'accordion-up': 'accordion-up 0.3s ease-out forwards',
      },
      maxHeight: {
        '0': '0',
        'screen': '100vh', // Adjust based on your content's maximum height
      },
    },
  },
  plugins: [],
});
