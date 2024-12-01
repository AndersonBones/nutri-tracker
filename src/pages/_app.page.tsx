import { NutriContextProvider } from "@/contexts/nutriContext";
import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";


globalStyles()




const montserrat = Montserrat({ subsets: ["latin"]})
export default function App({ Component, pageProps }: AppProps) {

  
  return (
    <NutriContextProvider>
      <Component className={montserrat.className} {...pageProps} />;
    </NutriContextProvider>

    
  )
}
