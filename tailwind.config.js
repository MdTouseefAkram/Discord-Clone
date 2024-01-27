/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}
/* If we want to use external font , we must follow three steps
1> font files ko leke aao in current folder.
2> main.css me font family ko leke aao and file ko 
link karo jo bhi font ho like whitney 400, jb font whitney 400 ko use hoga tb vo issi file ko refer kar raha hoga .
3> In tailwind.config.js me explicitly font family ko add karni 
padhegi uski config add karni hogi like whitnet:"whitney" hai , ye iski config */