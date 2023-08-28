import 'styles/globals.css';
import Home from './page';

export const metadata = {
    title:'Renato Davis',
    description: 'Analista Desenvolvedor de Sistemas'
}

export const RootLayout = ({Children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/> 
            </div>
            <main className="App">
            <Home/>   
            </main>
        </body>
        
    </html>
  )
}

export default RootLayout;