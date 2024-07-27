import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";
import './App.scss'
import Totop from "./components/totop/Totop.js";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleSubNav } from "./redux/slices/utilsSlice.js";
import toast, { Toaster } from 'react-hot-toast';



function App() {
  const dispatch = useDispatch()
  const darkTheme = useSelector(s => s.utilsReducer.darkTheme);
  const [topActive, setTopActive] = useState(false);

  const toastData = useSelector(s => s.utilsReducer.toastData)



  if (darkTheme) {
    document.body.classList.add('dark-theme');
  } else {

    document.body.classList.remove('dark-theme');
  }


  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    })
  }, [])


  useEffect(() => {
    switch (toastData.type) {
      case 'success':
        toast.success(toastData.message)

        break;
      case "failure":
        toast.error(toastData.message)

        break;

      default:

    }
  }, [toastData])





  window.onscroll = () => {
    dispatch(toggleSubNav(false))
    if (document.documentElement.scrollTop < 900) {
      setTopActive(false);
    } else {
      setTopActive(true)
    }

  }





  return (
    <>


      <Navbar />
      <Toaster />
      
      <main className="all-sections">


        <Home />
        <Project />
        <About />

        <Skills />

        <Contact />


      </main >
      {
        topActive &&
        <Totop />

      }
      <Footer />


    </>
  );
}

export default App;
